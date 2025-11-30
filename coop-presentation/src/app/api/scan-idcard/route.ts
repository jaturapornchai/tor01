import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: NextRequest) {
  try {
    // Check API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const formData = await request.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString("base64");

    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Create the prompt for Thai ID card extraction
    const prompt = `Analyze this Thai National ID Card (บัตรประจำตัวประชาชน) image and extract the following information.
Return the data in JSON format with these exact field names:

{
  "idCard": "เลขบัตรประชาชน 13 หลัก (ถ้ามีขีด - ให้เอาออก)",
  "title": "คำนำหน้า (นาย/นาง/นางสาว)",
  "firstName": "ชื่อภาษาไทย",
  "lastName": "นามสกุลภาษาไทย",
  "firstNameEn": "First name in English",
  "lastNameEn": "Last name in English",
  "birthDate": "วันเกิดในรูปแบบ YYYY-MM-DD",
  "addressNo": "บ้านเลขที่",
  "moo": "หมู่ที่ (ตัวเลข เช่น 1, 2, 3)",
  "soi": "ซอย/ตรอก",
  "road": "ถนน",
  "subDistrict": "ตำบล/แขวง (ไม่ต้องมีคำว่า ต. หรือ แขวง นำหน้า)",
  "district": "อำเภอ/เขต (ไม่ต้องมีคำว่า อ. หรือ เขต นำหน้า)",
  "province": "จังหวัด (ไม่ต้องมีคำว่า จ. นำหน้า)",
  "fullAddress": "ที่อยู่เต็ม",
  "issueDate": "วันออกบัตรในรูปแบบ YYYY-MM-DD",
  "expiryDate": "วันหมดอายุในรูปแบบ YYYY-MM-DD",
  "religion": "ศาสนา (ถ้ามี)"
}

Important:
- Convert Buddhist Era (พ.ศ.) to Christian Era (ค.ศ.) by subtracting 543
- Return only the JSON object, no markdown or other text
- If a field cannot be read clearly, use empty string ""
- For the ID card number, remove all spaces and dashes
- For province names: ใช้ชื่อเต็ม เช่น "กรุงเทพมหานคร" ไม่ใช่ "กทม"
- For subDistrict and district: ไม่ต้องมีคำนำหน้า เช่น "บางรัก" ไม่ใช่ "แขวงบางรัก"`;

    // Call Gemini API with the image
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: file.type,
          data: base64Image,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    // Try to parse the JSON response
    try {
      // Remove markdown code blocks if present
      let jsonStr = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      const extractedData = JSON.parse(jsonStr);

      return NextResponse.json({
        success: true,
        data: extractedData,
      });
    } catch (parseError) {
      // If JSON parsing fails, return the raw text
      return NextResponse.json({
        success: false,
        error: "Failed to parse ID card data",
        rawText: text,
      });
    }
  } catch (error: any) {
    console.error("Error scanning ID card:", error?.message || error);
    return NextResponse.json(
      {
        error: "Failed to process ID card",
        details: error?.message || String(error)
      },
      { status: 500 }
    );
  }
}
