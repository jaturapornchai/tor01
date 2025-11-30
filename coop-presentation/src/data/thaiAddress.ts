// ข้อมูลที่อยู่ประเทศไทย - จังหวัด อำเภอ ตำบล รหัสไปรษณีย์
// Thai Address Data - Province, District, Sub-district, Postal Code

export interface SubDistrict {
  name: string;
  postalCode: string;
}

export interface District {
  name: string;
  subDistricts: SubDistrict[];
}

export interface Province {
  name: string;
  districts: District[];
}

export const provinces: Province[] = [
  {
    name: "กรุงเทพมหานคร",
    districts: [
      {
        name: "พระนคร",
        subDistricts: [
          { name: "พระบรมมหาราชวัง", postalCode: "10200" },
          { name: "วังบูรพาภิรมย์", postalCode: "10200" },
          { name: "วัดราชบพิธ", postalCode: "10200" },
          { name: "สำราญราษฎร์", postalCode: "10200" },
          { name: "ศาลเจ้าพ่อเสือ", postalCode: "10200" },
          { name: "เสาชิงช้า", postalCode: "10200" },
          { name: "บวรนิเวศ", postalCode: "10200" },
          { name: "ตลาดยอด", postalCode: "10200" },
          { name: "ชนะสงคราม", postalCode: "10200" },
          { name: "บ้านพานถม", postalCode: "10200" },
          { name: "บางขุนพรหม", postalCode: "10200" },
          { name: "วัดสามพระยา", postalCode: "10200" },
        ],
      },
      {
        name: "ดุสิต",
        subDistricts: [
          { name: "ดุสิต", postalCode: "10300" },
          { name: "วชิรพยาบาล", postalCode: "10300" },
          { name: "สวนจิตรลดา", postalCode: "10300" },
          { name: "สี่แยกมหานาค", postalCode: "10300" },
          { name: "ถนนนครไชยศรี", postalCode: "10300" },
        ],
      },
      {
        name: "หนองจอก",
        subDistricts: [
          { name: "กระทุ่มราย", postalCode: "10530" },
          { name: "หนองจอก", postalCode: "10530" },
          { name: "คลองสิบ", postalCode: "10530" },
          { name: "คลองสิบสอง", postalCode: "10530" },
          { name: "โคกแฝด", postalCode: "10530" },
          { name: "คู้ฝั่งเหนือ", postalCode: "10530" },
          { name: "ลำผักชี", postalCode: "10530" },
          { name: "ลำต้อยติ่ง", postalCode: "10530" },
        ],
      },
      {
        name: "บางรัก",
        subDistricts: [
          { name: "มหาพฤฒาราม", postalCode: "10500" },
          { name: "สีลม", postalCode: "10500" },
          { name: "สุริยวงศ์", postalCode: "10500" },
          { name: "บางรัก", postalCode: "10500" },
          { name: "สี่พระยา", postalCode: "10500" },
        ],
      },
      {
        name: "บางเขน",
        subDistricts: [
          { name: "อนุสาวรีย์", postalCode: "10220" },
          { name: "ท่าแร้ง", postalCode: "10220" },
        ],
      },
      {
        name: "บางกะปิ",
        subDistricts: [
          { name: "คลองจั่น", postalCode: "10240" },
          { name: "หัวหมาก", postalCode: "10240" },
        ],
      },
      {
        name: "ปทุมวัน",
        subDistricts: [
          { name: "รองเมือง", postalCode: "10330" },
          { name: "วังใหม่", postalCode: "10330" },
          { name: "ปทุมวัน", postalCode: "10330" },
          { name: "ลุมพินี", postalCode: "10330" },
        ],
      },
      {
        name: "ป้อมปราบศัตรูพ่าย",
        subDistricts: [
          { name: "ป้อมปราบ", postalCode: "10100" },
          { name: "วัดเทพศิรินทร์", postalCode: "10100" },
          { name: "คลองมหานาค", postalCode: "10100" },
          { name: "บ้านบาตร", postalCode: "10100" },
          { name: "วัดโสมนัส", postalCode: "10100" },
        ],
      },
      {
        name: "พระโขนง",
        subDistricts: [
          { name: "บางจาก", postalCode: "10260" },
        ],
      },
      {
        name: "มีนบุรี",
        subDistricts: [
          { name: "มีนบุรี", postalCode: "10510" },
          { name: "แสนแสบ", postalCode: "10510" },
        ],
      },
      {
        name: "ลาดกระบัง",
        subDistricts: [
          { name: "ลาดกระบัง", postalCode: "10520" },
          { name: "คลองสองต้นนุ่น", postalCode: "10520" },
          { name: "คลองสามประเวศ", postalCode: "10520" },
          { name: "ลำปลาทิว", postalCode: "10520" },
          { name: "ทับยาว", postalCode: "10520" },
          { name: "ขุมทอง", postalCode: "10520" },
        ],
      },
      {
        name: "ยานนาวา",
        subDistricts: [
          { name: "ช่องนนทรี", postalCode: "10120" },
          { name: "บางโพงพาง", postalCode: "10120" },
        ],
      },
      {
        name: "สัมพันธวงศ์",
        subDistricts: [
          { name: "จักรวรรดิ", postalCode: "10100" },
          { name: "สัมพันธวงศ์", postalCode: "10100" },
          { name: "ตลาดน้อย", postalCode: "10100" },
        ],
      },
      {
        name: "พญาไท",
        subDistricts: [
          { name: "สามเสนใน", postalCode: "10400" },
          { name: "พญาไท", postalCode: "10400" },
        ],
      },
      {
        name: "ธนบุรี",
        subDistricts: [
          { name: "วัดกัลยาณ์", postalCode: "10600" },
          { name: "หิรัญรูจี", postalCode: "10600" },
          { name: "บางยี่เรือ", postalCode: "10600" },
          { name: "บุคคโล", postalCode: "10600" },
          { name: "ตลาดพลู", postalCode: "10600" },
          { name: "ดาวคะนอง", postalCode: "10600" },
          { name: "สำเหร่", postalCode: "10600" },
        ],
      },
      {
        name: "บางกอกใหญ่",
        subDistricts: [
          { name: "วัดอรุณ", postalCode: "10600" },
          { name: "วัดท่าพระ", postalCode: "10600" },
        ],
      },
      {
        name: "ห้วยขวาง",
        subDistricts: [
          { name: "ห้วยขวาง", postalCode: "10310" },
          { name: "บางกะปิ", postalCode: "10310" },
          { name: "สามเสนนอก", postalCode: "10310" },
        ],
      },
      {
        name: "คลองสาน",
        subDistricts: [
          { name: "สมเด็จเจ้าพระยา", postalCode: "10600" },
          { name: "คลองสาน", postalCode: "10600" },
          { name: "บางลำภูล่าง", postalCode: "10600" },
          { name: "คลองต้นไทร", postalCode: "10600" },
        ],
      },
      {
        name: "ตลิ่งชัน",
        subDistricts: [
          { name: "คลองชักพระ", postalCode: "10170" },
          { name: "ตลิ่งชัน", postalCode: "10170" },
          { name: "ฉิมพลี", postalCode: "10170" },
          { name: "บางพรม", postalCode: "10170" },
          { name: "บางระมาด", postalCode: "10170" },
          { name: "บางเชือกหนัง", postalCode: "10170" },
        ],
      },
      {
        name: "บางกอกน้อย",
        subDistricts: [
          { name: "ศิริราช", postalCode: "10700" },
          { name: "บ้านช่างหล่อ", postalCode: "10700" },
          { name: "บางขุนนนท์", postalCode: "10700" },
          { name: "บางขุนศรี", postalCode: "10700" },
          { name: "อรุณอมรินทร์", postalCode: "10700" },
        ],
      },
      {
        name: "บางขุนเทียน",
        subDistricts: [
          { name: "ท่าข้าม", postalCode: "10150" },
          { name: "แสมดำ", postalCode: "10150" },
        ],
      },
      {
        name: "ภาษีเจริญ",
        subDistricts: [
          { name: "บางหว้า", postalCode: "10160" },
          { name: "บางด้วน", postalCode: "10160" },
          { name: "บางจาก", postalCode: "10160" },
          { name: "บางแวก", postalCode: "10160" },
          { name: "คลองขวาง", postalCode: "10160" },
          { name: "ปากคลองภาษีเจริญ", postalCode: "10160" },
          { name: "คูหาสวรรค์", postalCode: "10160" },
        ],
      },
      {
        name: "หนองแขม",
        subDistricts: [
          { name: "หนองแขม", postalCode: "10160" },
          { name: "หนองค้างพลู", postalCode: "10160" },
        ],
      },
      {
        name: "ราษฎร์บูรณะ",
        subDistricts: [
          { name: "ราษฎร์บูรณะ", postalCode: "10140" },
          { name: "บางปะกอก", postalCode: "10140" },
        ],
      },
      {
        name: "บางพลัด",
        subDistricts: [
          { name: "บางพลัด", postalCode: "10700" },
          { name: "บางอ้อ", postalCode: "10700" },
          { name: "บางบำหรุ", postalCode: "10700" },
          { name: "บางยี่ขัน", postalCode: "10700" },
        ],
      },
      {
        name: "ดินแดง",
        subDistricts: [
          { name: "ดินแดง", postalCode: "10400" },
        ],
      },
      {
        name: "บึงกุ่ม",
        subDistricts: [
          { name: "คลองกุ่ม", postalCode: "10230" },
          { name: "นวมินทร์", postalCode: "10230" },
          { name: "นวลจันทร์", postalCode: "10230" },
        ],
      },
      {
        name: "สาทร",
        subDistricts: [
          { name: "ทุ่งวัดดอน", postalCode: "10120" },
          { name: "ยานนาวา", postalCode: "10120" },
          { name: "ทุ่งมหาเมฆ", postalCode: "10120" },
        ],
      },
      {
        name: "บางซื่อ",
        subDistricts: [
          { name: "บางซื่อ", postalCode: "10800" },
        ],
      },
      {
        name: "จตุจักร",
        subDistricts: [
          { name: "ลาดยาว", postalCode: "10900" },
          { name: "เสนานิคม", postalCode: "10900" },
          { name: "จันทรเกษม", postalCode: "10900" },
          { name: "จอมพล", postalCode: "10900" },
          { name: "จตุจักร", postalCode: "10900" },
        ],
      },
      {
        name: "บางคอแหลม",
        subDistricts: [
          { name: "บางคอแหลม", postalCode: "10120" },
          { name: "วัดพระยาไกร", postalCode: "10120" },
          { name: "บางโคล่", postalCode: "10120" },
        ],
      },
      {
        name: "ประเวศ",
        subDistricts: [
          { name: "ประเวศ", postalCode: "10250" },
          { name: "หนองบอน", postalCode: "10250" },
          { name: "ดอกไม้", postalCode: "10250" },
          { name: "สวนหลวง", postalCode: "10250" },
        ],
      },
      {
        name: "คลองเตย",
        subDistricts: [
          { name: "คลองเตย", postalCode: "10110" },
          { name: "คลองตัน", postalCode: "10110" },
          { name: "พระโขนง", postalCode: "10110" },
          { name: "คลองเตยเหนือ", postalCode: "10110" },
        ],
      },
      {
        name: "สวนหลวง",
        subDistricts: [
          { name: "สวนหลวง", postalCode: "10250" },
          { name: "อ่อนนุช", postalCode: "10250" },
          { name: "พัฒนาการ", postalCode: "10250" },
        ],
      },
      {
        name: "จอมทอง",
        subDistricts: [
          { name: "บางขุนเทียน", postalCode: "10150" },
          { name: "บางค้อ", postalCode: "10150" },
          { name: "บางมด", postalCode: "10150" },
          { name: "จอมทอง", postalCode: "10150" },
        ],
      },
      {
        name: "ดอนเมือง",
        subDistricts: [
          { name: "สีกัน", postalCode: "10210" },
          { name: "ดอนเมือง", postalCode: "10210" },
          { name: "สนามบิน", postalCode: "10210" },
        ],
      },
      {
        name: "ราชเทวี",
        subDistricts: [
          { name: "ทุ่งพญาไท", postalCode: "10400" },
          { name: "ถนนพญาไท", postalCode: "10400" },
          { name: "ถนนเพชรบุรี", postalCode: "10400" },
          { name: "มักกะสัน", postalCode: "10400" },
        ],
      },
      {
        name: "ลาดพร้าว",
        subDistricts: [
          { name: "ลาดพร้าว", postalCode: "10230" },
          { name: "จรเข้บัว", postalCode: "10230" },
        ],
      },
      {
        name: "วัฒนา",
        subDistricts: [
          { name: "คลองเตยเหนือ", postalCode: "10110" },
          { name: "คลองตันเหนือ", postalCode: "10110" },
          { name: "พระโขนงเหนือ", postalCode: "10110" },
        ],
      },
      {
        name: "บางแค",
        subDistricts: [
          { name: "บางแค", postalCode: "10160" },
          { name: "บางแคเหนือ", postalCode: "10160" },
          { name: "บางไผ่", postalCode: "10160" },
          { name: "หลักสอง", postalCode: "10160" },
        ],
      },
      {
        name: "หลักสี่",
        subDistricts: [
          { name: "ทุ่งสองห้อง", postalCode: "10210" },
          { name: "ตลาดบางเขน", postalCode: "10210" },
        ],
      },
      {
        name: "สายไหม",
        subDistricts: [
          { name: "สายไหม", postalCode: "10220" },
          { name: "ออเงิน", postalCode: "10220" },
          { name: "คลองถนน", postalCode: "10220" },
        ],
      },
      {
        name: "คันนายาว",
        subDistricts: [
          { name: "คันนายาว", postalCode: "10230" },
          { name: "รามอินทรา", postalCode: "10230" },
        ],
      },
      {
        name: "สะพานสูง",
        subDistricts: [
          { name: "สะพานสูง", postalCode: "10240" },
          { name: "ราษฎร์พัฒนา", postalCode: "10240" },
          { name: "ทับช้าง", postalCode: "10250" },
        ],
      },
      {
        name: "วังทองหลาง",
        subDistricts: [
          { name: "วังทองหลาง", postalCode: "10310" },
          { name: "สะพานสอง", postalCode: "10310" },
          { name: "คลองเจ้าคุณสิงห์", postalCode: "10310" },
          { name: "พลับพลา", postalCode: "10310" },
        ],
      },
      {
        name: "คลองสามวา",
        subDistricts: [
          { name: "สามวาตะวันตก", postalCode: "10510" },
          { name: "สามวาตะวันออก", postalCode: "10510" },
          { name: "บางชัน", postalCode: "10510" },
          { name: "ทรายกองดิน", postalCode: "10510" },
          { name: "ทรายกองดินใต้", postalCode: "10510" },
        ],
      },
      {
        name: "บางนา",
        subDistricts: [
          { name: "บางนา", postalCode: "10260" },
        ],
      },
      {
        name: "ทวีวัฒนา",
        subDistricts: [
          { name: "ทวีวัฒนา", postalCode: "10170" },
          { name: "ศาลาธรรมสพน์", postalCode: "10170" },
        ],
      },
      {
        name: "ทุ่งครุ",
        subDistricts: [
          { name: "บางมด", postalCode: "10140" },
          { name: "ทุ่งครุ", postalCode: "10140" },
        ],
      },
      {
        name: "บางบอน",
        subDistricts: [
          { name: "บางบอน", postalCode: "10150" },
          { name: "บางบอนเหนือ", postalCode: "10150" },
          { name: "บางบอนใต้", postalCode: "10150" },
          { name: "คลองบางพราน", postalCode: "10150" },
          { name: "คลองบางบอน", postalCode: "10150" },
        ],
      },
    ],
  },
  {
    name: "สมุทรปราการ",
    districts: [
      {
        name: "เมืองสมุทรปราการ",
        subDistricts: [
          { name: "ปากน้ำ", postalCode: "10270" },
          { name: "สำโรงเหนือ", postalCode: "10270" },
          { name: "บางเมือง", postalCode: "10270" },
          { name: "ท้ายบ้าน", postalCode: "10280" },
          { name: "บางปูใหม่", postalCode: "10280" },
          { name: "แพรกษา", postalCode: "10280" },
          { name: "บางโปรง", postalCode: "10270" },
          { name: "บางปู", postalCode: "10280" },
          { name: "บางด้วน", postalCode: "10270" },
          { name: "บางเมืองใหม่", postalCode: "10270" },
          { name: "เทพารักษ์", postalCode: "10270" },
          { name: "ท้ายบ้านใหม่", postalCode: "10280" },
          { name: "แพรกษาใหม่", postalCode: "10280" },
        ],
      },
      {
        name: "บางบ่อ",
        subDistricts: [
          { name: "บางบ่อ", postalCode: "10560" },
          { name: "บ้านระกาศ", postalCode: "10560" },
          { name: "บางพลีน้อย", postalCode: "10560" },
          { name: "บางเพรียง", postalCode: "10560" },
          { name: "คลองด่าน", postalCode: "10550" },
          { name: "คลองสวน", postalCode: "10560" },
          { name: "เปร็ง", postalCode: "10560" },
          { name: "คลองนิยมยาตรา", postalCode: "10560" },
        ],
      },
      {
        name: "บางพลี",
        subDistricts: [
          { name: "บางพลีใหญ่", postalCode: "10540" },
          { name: "บางแก้ว", postalCode: "10540" },
          { name: "บางปลา", postalCode: "10540" },
          { name: "บางโฉลง", postalCode: "10540" },
          { name: "ราชาเทวะ", postalCode: "10540" },
          { name: "หนองปรือ", postalCode: "10540" },
        ],
      },
      {
        name: "พระประแดง",
        subDistricts: [
          { name: "ตลาด", postalCode: "10130" },
          { name: "บางพึ่ง", postalCode: "10130" },
          { name: "บางจาก", postalCode: "10130" },
          { name: "บางครุ", postalCode: "10130" },
          { name: "บางหญ้าแพรก", postalCode: "10130" },
          { name: "บางหัวเสือ", postalCode: "10130" },
          { name: "สำโรง", postalCode: "10130" },
          { name: "สำโรงกลาง", postalCode: "10130" },
          { name: "บางยอ", postalCode: "10130" },
          { name: "บางกะเจ้า", postalCode: "10130" },
          { name: "บางน้ำผึ้ง", postalCode: "10130" },
          { name: "บางกระสอบ", postalCode: "10130" },
          { name: "บางกอบัว", postalCode: "10130" },
          { name: "ทรงคนอง", postalCode: "10130" },
          { name: "สำโรงใต้", postalCode: "10130" },
        ],
      },
      {
        name: "พระสมุทรเจดีย์",
        subDistricts: [
          { name: "นาเกลือ", postalCode: "10290" },
          { name: "บ้านคลองสวน", postalCode: "10290" },
          { name: "แหลมฟ้าผ่า", postalCode: "10290" },
          { name: "ปากคลองบางปลากด", postalCode: "10290" },
          { name: "ในคลองบางปลากด", postalCode: "10290" },
        ],
      },
      {
        name: "บางเสาธง",
        subDistricts: [
          { name: "บางเสาธง", postalCode: "10570" },
          { name: "ศีรษะจรเข้น้อย", postalCode: "10570" },
          { name: "ศีรษะจรเข้ใหญ่", postalCode: "10570" },
        ],
      },
    ],
  },
  {
    name: "นนทบุรี",
    districts: [
      {
        name: "เมืองนนทบุรี",
        subDistricts: [
          { name: "สวนใหญ่", postalCode: "11000" },
          { name: "ตลาดขวัญ", postalCode: "11000" },
          { name: "บางเขน", postalCode: "11000" },
          { name: "บางกระสอ", postalCode: "11000" },
          { name: "ท่าทราย", postalCode: "11000" },
          { name: "บางไผ่", postalCode: "11000" },
          { name: "บางศรีเมือง", postalCode: "11000" },
          { name: "บางกร่าง", postalCode: "11000" },
          { name: "ไทรม้า", postalCode: "11000" },
          { name: "บางรักน้อย", postalCode: "11000" },
        ],
      },
      {
        name: "บางกรวย",
        subDistricts: [
          { name: "วัดชลอ", postalCode: "11130" },
          { name: "บางกรวย", postalCode: "11130" },
          { name: "บางสีทอง", postalCode: "11130" },
          { name: "บางขนุน", postalCode: "11130" },
          { name: "บางขุนกอง", postalCode: "11130" },
          { name: "บางคูเวียง", postalCode: "11130" },
          { name: "มหาสวัสดิ์", postalCode: "11130" },
          { name: "ปลายบาง", postalCode: "11130" },
          { name: "ศาลากลาง", postalCode: "11130" },
        ],
      },
      {
        name: "บางใหญ่",
        subDistricts: [
          { name: "บางใหญ่", postalCode: "11140" },
          { name: "เสาธงหิน", postalCode: "11140" },
          { name: "บางแม่นาง", postalCode: "11140" },
          { name: "บางเลน", postalCode: "11140" },
          { name: "บ้านใหม่", postalCode: "11140" },
          { name: "บางม่วง", postalCode: "11140" },
        ],
      },
      {
        name: "บางบัวทอง",
        subDistricts: [
          { name: "โสนลอย", postalCode: "11110" },
          { name: "บางบัวทอง", postalCode: "11110" },
          { name: "บางรักใหญ่", postalCode: "11110" },
          { name: "บางคูรัด", postalCode: "11110" },
          { name: "ละหาร", postalCode: "11110" },
          { name: "ลำโพ", postalCode: "11110" },
          { name: "พิมลราช", postalCode: "11110" },
          { name: "บางรักพัฒนา", postalCode: "11110" },
        ],
      },
      {
        name: "ไทรน้อย",
        subDistricts: [
          { name: "ไทรน้อย", postalCode: "11150" },
          { name: "ราษฎร์นิยม", postalCode: "11150" },
          { name: "หนองเพรางาย", postalCode: "11150" },
          { name: "ไทรใหญ่", postalCode: "11150" },
          { name: "ขุนศรี", postalCode: "11150" },
          { name: "คลองขวาง", postalCode: "11150" },
          { name: "ทวีวัฒนา", postalCode: "11150" },
        ],
      },
      {
        name: "ปากเกร็ด",
        subDistricts: [
          { name: "ปากเกร็ด", postalCode: "11120" },
          { name: "บางตลาด", postalCode: "11120" },
          { name: "บ้านใหม่", postalCode: "11120" },
          { name: "บางพูด", postalCode: "11120" },
          { name: "บางตะไนย์", postalCode: "11120" },
          { name: "คลองพระอุดม", postalCode: "11120" },
          { name: "ท่าอิฐ", postalCode: "11120" },
          { name: "เกาะเกร็ด", postalCode: "11120" },
          { name: "อ้อมเกร็ด", postalCode: "11120" },
          { name: "คลองข่อย", postalCode: "11120" },
          { name: "บางพลับ", postalCode: "11120" },
          { name: "คลองเกลือ", postalCode: "11120" },
        ],
      },
    ],
  },
  {
    name: "ปทุมธานี",
    districts: [
      {
        name: "เมืองปทุมธานี",
        subDistricts: [
          { name: "บางปรอก", postalCode: "12000" },
          { name: "บ้านใหม่", postalCode: "12000" },
          { name: "บ้านกลาง", postalCode: "12000" },
          { name: "บ้านฉาง", postalCode: "12000" },
          { name: "บ้านกระแชง", postalCode: "12000" },
          { name: "บางขะแยง", postalCode: "12000" },
          { name: "บางคูวัด", postalCode: "12000" },
          { name: "บางหลวง", postalCode: "12000" },
          { name: "บางเดื่อ", postalCode: "12000" },
          { name: "บางพูน", postalCode: "12000" },
          { name: "บางพูด", postalCode: "12000" },
          { name: "บางกะดี", postalCode: "12000" },
          { name: "สวนพริกไทย", postalCode: "12000" },
          { name: "หลักหก", postalCode: "12000" },
        ],
      },
      {
        name: "คลองหลวง",
        subDistricts: [
          { name: "คลองหนึ่ง", postalCode: "12120" },
          { name: "คลองสอง", postalCode: "12120" },
          { name: "คลองสาม", postalCode: "12120" },
          { name: "คลองสี่", postalCode: "12120" },
          { name: "คลองห้า", postalCode: "12120" },
          { name: "คลองหก", postalCode: "12120" },
          { name: "คลองเจ็ด", postalCode: "12120" },
        ],
      },
      {
        name: "ธัญบุรี",
        subDistricts: [
          { name: "ประชาธิปัตย์", postalCode: "12130" },
          { name: "บึงยี่โถ", postalCode: "12130" },
          { name: "รังสิต", postalCode: "12110" },
          { name: "ลำผักกูด", postalCode: "12110" },
          { name: "บึงสนั่น", postalCode: "12110" },
          { name: "บึงน้ำรักษ์", postalCode: "12110" },
        ],
      },
      {
        name: "หนองเสือ",
        subDistricts: [
          { name: "บึงบา", postalCode: "12170" },
          { name: "บึงบอน", postalCode: "12170" },
          { name: "บึงกาสาม", postalCode: "12170" },
          { name: "บึงชำอ้อ", postalCode: "12170" },
          { name: "หนองสามวัง", postalCode: "12170" },
          { name: "ศาลาครุ", postalCode: "12170" },
          { name: "นพรัตน์", postalCode: "12170" },
        ],
      },
      {
        name: "ลาดหลุมแก้ว",
        subDistricts: [
          { name: "ระแหง", postalCode: "12140" },
          { name: "ลาดหลุมแก้ว", postalCode: "12140" },
          { name: "คูบางหลวง", postalCode: "12140" },
          { name: "คูขวาง", postalCode: "12140" },
          { name: "คลองพระอุดม", postalCode: "12140" },
          { name: "บ่อเงิน", postalCode: "12140" },
          { name: "หน้าไม้", postalCode: "12140" },
        ],
      },
      {
        name: "ลำลูกกา",
        subDistricts: [
          { name: "คูคต", postalCode: "12130" },
          { name: "ลาดสวาย", postalCode: "12150" },
          { name: "บึงคำพร้อย", postalCode: "12150" },
          { name: "ลำลูกกา", postalCode: "12150" },
          { name: "บึงทองหลาง", postalCode: "12150" },
          { name: "ลำไทร", postalCode: "12150" },
          { name: "บึงคอไห", postalCode: "12150" },
          { name: "พืชอุดม", postalCode: "12150" },
        ],
      },
      {
        name: "สามโคก",
        subDistricts: [
          { name: "บางเตย", postalCode: "12160" },
          { name: "คลองควาย", postalCode: "12160" },
          { name: "สามโคก", postalCode: "12160" },
          { name: "กระแชง", postalCode: "12160" },
          { name: "บางกระบือ", postalCode: "12160" },
          { name: "ท้ายเกาะ", postalCode: "12160" },
          { name: "เชียงรากน้อย", postalCode: "12160" },
          { name: "บ้านงิ้ว", postalCode: "12160" },
          { name: "เชียงรากใหญ่", postalCode: "12160" },
          { name: "บ้านปทุม", postalCode: "12160" },
          { name: "บ้านครัว", postalCode: "12160" },
        ],
      },
    ],
  },
  {
    name: "นครปฐม",
    districts: [
      {
        name: "เมืองนครปฐม",
        subDistricts: [
          { name: "พระปฐมเจดีย์", postalCode: "73000" },
          { name: "บางแขม", postalCode: "73000" },
          { name: "พระประโทน", postalCode: "73000" },
          { name: "ธรรมศาลา", postalCode: "73000" },
          { name: "ตาก้อง", postalCode: "73000" },
          { name: "มาบแค", postalCode: "73000" },
          { name: "สนามจันทร์", postalCode: "73000" },
          { name: "ดอนยายหอม", postalCode: "73000" },
          { name: "ถนนขาด", postalCode: "73000" },
          { name: "บ่อพลับ", postalCode: "73000" },
          { name: "นครปฐม", postalCode: "73000" },
          { name: "วังตะกู", postalCode: "73000" },
          { name: "หนองปากโลง", postalCode: "73000" },
          { name: "สามควายเผือก", postalCode: "73000" },
          { name: "ทุ่งน้อย", postalCode: "73000" },
          { name: "หนองดินแดง", postalCode: "73000" },
          { name: "วังเย็น", postalCode: "73000" },
          { name: "โพรงมะเดื่อ", postalCode: "73000" },
          { name: "ลำพยา", postalCode: "73000" },
          { name: "สระกะเทียม", postalCode: "73000" },
          { name: "สวนป่าน", postalCode: "73000" },
          { name: "ห้วยจรเข้", postalCode: "73000" },
          { name: "ทัพหลวง", postalCode: "73000" },
          { name: "หนองงูเหลือม", postalCode: "73000" },
          { name: "บ้านยาง", postalCode: "73000" },
        ],
      },
      {
        name: "กำแพงแสน",
        subDistricts: [
          { name: "กำแพงแสน", postalCode: "73140" },
          { name: "ทุ่งกระพังโหม", postalCode: "73140" },
          { name: "รางพิกุล", postalCode: "73140" },
          { name: "หนองกระทุ่ม", postalCode: "73140" },
          { name: "วังน้ำเขียว", postalCode: "73140" },
          { name: "ห้วยขวาง", postalCode: "73140" },
          { name: "ทุ่งลูกนก", postalCode: "73140" },
          { name: "ดอนข่อย", postalCode: "73140" },
          { name: "สระสี่มุม", postalCode: "73140" },
          { name: "ทุ่งขวาง", postalCode: "73140" },
          { name: "สระพัฒนา", postalCode: "73180" },
          { name: "ห้วยหมอนทอง", postalCode: "73140" },
          { name: "ห้วยม่วง", postalCode: "73180" },
          { name: "กระตีบ", postalCode: "73180" },
          { name: "ทุ่งบัว", postalCode: "73140" },
        ],
      },
      {
        name: "นครชัยศรี",
        subDistricts: [
          { name: "นครชัยศรี", postalCode: "73120" },
          { name: "บางกระเบา", postalCode: "73120" },
          { name: "วัดแค", postalCode: "73120" },
          { name: "ท่าตำหนัก", postalCode: "73120" },
          { name: "บางแก้ว", postalCode: "73120" },
          { name: "ท่ากระชับ", postalCode: "73120" },
          { name: "ขุนแก้ว", postalCode: "73120" },
          { name: "ท่าพระยา", postalCode: "73120" },
          { name: "พะเนียด", postalCode: "73120" },
          { name: "บางระกำ", postalCode: "73120" },
          { name: "โคกพระเจดีย์", postalCode: "73120" },
          { name: "ศรีษะทอง", postalCode: "73120" },
          { name: "แหลมบัว", postalCode: "73120" },
          { name: "ศรีมหาโพธิ์", postalCode: "73120" },
          { name: "สัมปทวน", postalCode: "73120" },
          { name: "วัดสำโรง", postalCode: "73120" },
          { name: "ดอนแฝก", postalCode: "73120" },
          { name: "ห้วยพลู", postalCode: "73120" },
          { name: "วัดละมุด", postalCode: "73120" },
          { name: "บางพระ", postalCode: "73120" },
          { name: "บางแก้วฟ้า", postalCode: "73120" },
          { name: "ลานตากฟ้า", postalCode: "73120" },
          { name: "งิ้วราย", postalCode: "73120" },
          { name: "ไทยาวาส", postalCode: "73120" },
        ],
      },
      {
        name: "ดอนตูม",
        subDistricts: [
          { name: "สามง่าม", postalCode: "73150" },
          { name: "ห้วยพระ", postalCode: "73150" },
          { name: "ลำเหย", postalCode: "73150" },
          { name: "ดอนพุทรา", postalCode: "73150" },
          { name: "บ้านหลวง", postalCode: "73150" },
          { name: "ดอนรวก", postalCode: "73150" },
          { name: "ห้วยด้วน", postalCode: "73150" },
          { name: "ลำลูกบัว", postalCode: "73150" },
        ],
      },
      {
        name: "บางเลน",
        subDistricts: [
          { name: "บางเลน", postalCode: "73130" },
          { name: "บางปลา", postalCode: "73130" },
          { name: "บางหลวง", postalCode: "73190" },
          { name: "บางภาษี", postalCode: "73130" },
          { name: "บางระกำ", postalCode: "73130" },
          { name: "บางไทรป่า", postalCode: "73130" },
          { name: "หินมูล", postalCode: "73190" },
          { name: "ไทรงาม", postalCode: "73130" },
          { name: "ดอนตูม", postalCode: "73130" },
          { name: "นิลเพชร", postalCode: "73130" },
          { name: "บัวปากท่า", postalCode: "73130" },
          { name: "คลองนกกระทุง", postalCode: "73130" },
          { name: "นราภิรมย์", postalCode: "73130" },
          { name: "ลำพญา", postalCode: "73130" },
          { name: "ไผ่หูช้าง", postalCode: "73130" },
        ],
      },
      {
        name: "สามพราน",
        subDistricts: [
          { name: "ทรงคนอง", postalCode: "73210" },
          { name: "หอมเกร็ด", postalCode: "73110" },
          { name: "บางกระทึก", postalCode: "73210" },
          { name: "บางเตย", postalCode: "73210" },
          { name: "สามพราน", postalCode: "73110" },
          { name: "บางช้าง", postalCode: "73110" },
          { name: "ไร่ขิง", postalCode: "73210" },
          { name: "ท่าข้าม", postalCode: "73110" },
          { name: "กระทุ่มล้ม", postalCode: "73220" },
          { name: "บ้านใหม่", postalCode: "73110" },
          { name: "อ้อมใหญ่", postalCode: "73160" },
          { name: "ตลาดจินดา", postalCode: "73110" },
          { name: "คลองใหม่", postalCode: "73110" },
          { name: "ตลาดกระทุ่มแบน", postalCode: "73110" },
          { name: "ห้วยพลู", postalCode: "73110" },
          { name: "ยายชา", postalCode: "73110" },
        ],
      },
      {
        name: "พุทธมณฑล",
        subDistricts: [
          { name: "ศาลายา", postalCode: "73170" },
          { name: "คลองโยง", postalCode: "73170" },
          { name: "มหาสวัสดิ์", postalCode: "73170" },
        ],
      },
    ],
  },
  {
    name: "เชียงใหม่",
    districts: [
      {
        name: "เมืองเชียงใหม่",
        subDistricts: [
          { name: "ศรีภูมิ", postalCode: "50200" },
          { name: "พระสิงห์", postalCode: "50200" },
          { name: "หายยา", postalCode: "50100" },
          { name: "ช้างม่อย", postalCode: "50300" },
          { name: "ช้างคลาน", postalCode: "50100" },
          { name: "วัดเกต", postalCode: "50000" },
          { name: "ช้างเผือก", postalCode: "50300" },
          { name: "สุเทพ", postalCode: "50200" },
          { name: "แม่เหียะ", postalCode: "50100" },
          { name: "ป่าแดด", postalCode: "50100" },
          { name: "หนองหอย", postalCode: "50000" },
          { name: "ท่าศาลา", postalCode: "50000" },
          { name: "หนองป่าครั่ง", postalCode: "50000" },
          { name: "ฟ้าฮ่าม", postalCode: "50000" },
          { name: "ป่าตัน", postalCode: "50300" },
          { name: "สันผีเสื้อ", postalCode: "50300" },
        ],
      },
      {
        name: "จอมทอง",
        subDistricts: [
          { name: "บ้านหลวง", postalCode: "50160" },
          { name: "ข่วงเปา", postalCode: "50160" },
          { name: "สบเตี๊ยะ", postalCode: "50160" },
          { name: "บ้านแปะ", postalCode: "50240" },
          { name: "ดอยแก้ว", postalCode: "50160" },
          { name: "แม่สอย", postalCode: "50240" },
        ],
      },
      {
        name: "แม่แจ่ม",
        subDistricts: [
          { name: "ช่างเคิ่ง", postalCode: "50270" },
          { name: "ท่าผา", postalCode: "50270" },
          { name: "บ้านทับ", postalCode: "50270" },
          { name: "แม่ศึก", postalCode: "50270" },
          { name: "แม่นาจร", postalCode: "50270" },
          { name: "ปางหินฝน", postalCode: "50270" },
          { name: "กองแขก", postalCode: "50270" },
        ],
      },
      {
        name: "เชียงดาว",
        subDistricts: [
          { name: "เชียงดาว", postalCode: "50170" },
          { name: "เมืองนะ", postalCode: "50170" },
          { name: "เมืองงาย", postalCode: "50170" },
          { name: "แม่นะ", postalCode: "50170" },
          { name: "เมืองคอง", postalCode: "50170" },
          { name: "ปิงโค้ง", postalCode: "50170" },
          { name: "ทุ่งข้าวพวง", postalCode: "50170" },
        ],
      },
      {
        name: "ดอยสะเก็ด",
        subDistricts: [
          { name: "เชิงดอย", postalCode: "50220" },
          { name: "สันปูเลย", postalCode: "50220" },
          { name: "ลวงเหนือ", postalCode: "50220" },
          { name: "ป่าเมี่ยง", postalCode: "50220" },
          { name: "สง่าบ้าน", postalCode: "50220" },
          { name: "ป่าลาน", postalCode: "50220" },
          { name: "ตลาดขวัญ", postalCode: "50220" },
          { name: "สำราญราษฎร์", postalCode: "50220" },
          { name: "แม่คือ", postalCode: "50220" },
          { name: "ตลาดใหญ่", postalCode: "50220" },
          { name: "แม่โป่ง", postalCode: "50220" },
          { name: "ป่าป้อง", postalCode: "50220" },
          { name: "เทพเสด็จ", postalCode: "50220" },
          { name: "แม่ฮ้อยเงิน", postalCode: "50220" },
        ],
      },
      {
        name: "แม่แตง",
        subDistricts: [
          { name: "สันมหาพน", postalCode: "50150" },
          { name: "แม่แตง", postalCode: "50150" },
          { name: "ขี้เหล็ก", postalCode: "50150" },
          { name: "ช่อแล", postalCode: "50150" },
          { name: "แม่หอพระ", postalCode: "50150" },
          { name: "สบเปิง", postalCode: "50150" },
          { name: "บ้านเป้า", postalCode: "50150" },
          { name: "สันป่ายาง", postalCode: "50330" },
          { name: "ป่าแป๋", postalCode: "50150" },
          { name: "เมืองก๋าย", postalCode: "50150" },
          { name: "บ้านช้าง", postalCode: "50150" },
          { name: "กื้ดช้าง", postalCode: "50150" },
          { name: "อินทขิล", postalCode: "50150" },
        ],
      },
      {
        name: "แม่ริม",
        subDistricts: [
          { name: "ริมใต้", postalCode: "50180" },
          { name: "ริมเหนือ", postalCode: "50180" },
          { name: "สันโป่ง", postalCode: "50180" },
          { name: "ขี้เหล็ก", postalCode: "50180" },
          { name: "สะลวง", postalCode: "50330" },
          { name: "ห้วยทราย", postalCode: "50180" },
          { name: "แม่แรม", postalCode: "50180" },
          { name: "โป่งแยง", postalCode: "50180" },
          { name: "แม่สา", postalCode: "50180" },
          { name: "ดอนแก้ว", postalCode: "50180" },
          { name: "เหมืองแก้ว", postalCode: "50180" },
        ],
      },
      {
        name: "สะเมิง",
        subDistricts: [
          { name: "สะเมิงใต้", postalCode: "50250" },
          { name: "สะเมิงเหนือ", postalCode: "50250" },
          { name: "แม่สาบ", postalCode: "50250" },
          { name: "บ่อแก้ว", postalCode: "50250" },
          { name: "ยั้งเมิน", postalCode: "50250" },
        ],
      },
      {
        name: "ฝาง",
        subDistricts: [
          { name: "เวียง", postalCode: "50110" },
          { name: "ม่อนปิ่น", postalCode: "50110" },
          { name: "แม่งอน", postalCode: "50320" },
          { name: "แม่สูน", postalCode: "50110" },
          { name: "สันทราย", postalCode: "50110" },
          { name: "แม่คะ", postalCode: "50110" },
          { name: "แม่ข่า", postalCode: "50320" },
          { name: "โป่งน้ำร้อน", postalCode: "50110" },
        ],
      },
      {
        name: "แม่อาย",
        subDistricts: [
          { name: "แม่อาย", postalCode: "50280" },
          { name: "แม่สาว", postalCode: "50280" },
          { name: "สันต้นหมื้อ", postalCode: "50280" },
          { name: "แม่นาวาง", postalCode: "50280" },
          { name: "ท่าตอน", postalCode: "50280" },
          { name: "บ้านหลวง", postalCode: "50280" },
          { name: "มะลิกา", postalCode: "50280" },
        ],
      },
      {
        name: "พร้าว",
        subDistricts: [
          { name: "เวียง", postalCode: "50190" },
          { name: "ทุ่งหลวง", postalCode: "50190" },
          { name: "ป่าตุ้ม", postalCode: "50190" },
          { name: "ป่าไหน่", postalCode: "50190" },
          { name: "สันทราย", postalCode: "50190" },
          { name: "บ้านโป่ง", postalCode: "50190" },
          { name: "น้ำแพร่", postalCode: "50190" },
          { name: "เขื่อนผาก", postalCode: "50190" },
          { name: "แม่แวน", postalCode: "50190" },
          { name: "แม่ปั๋ง", postalCode: "50190" },
          { name: "โหล่งขอด", postalCode: "50190" },
        ],
      },
      {
        name: "สันป่าตอง",
        subDistricts: [
          { name: "ยุหว่า", postalCode: "50120" },
          { name: "สันกลาง", postalCode: "50120" },
          { name: "ท่าวังพร้าว", postalCode: "50120" },
          { name: "มะขามหลวง", postalCode: "50120" },
          { name: "แม่ก๊า", postalCode: "50120" },
          { name: "บ้านแม", postalCode: "50120" },
          { name: "บ้านกลาง", postalCode: "50120" },
          { name: "ทุ่งสะโตก", postalCode: "50120" },
          { name: "ทุ่งต้อม", postalCode: "50120" },
          { name: "น้ำบ่อหลวง", postalCode: "50120" },
          { name: "มะขุนหวาน", postalCode: "50120" },
        ],
      },
      {
        name: "สันกำแพง",
        subDistricts: [
          { name: "สันกำแพง", postalCode: "50130" },
          { name: "ทรายมูล", postalCode: "50130" },
          { name: "ร้องวัวแดง", postalCode: "50130" },
          { name: "บวกค้าง", postalCode: "50130" },
          { name: "แช่ช้าง", postalCode: "50130" },
          { name: "ออนใต้", postalCode: "50130" },
          { name: "แม่ปูคา", postalCode: "50130" },
          { name: "ห้วยทราย", postalCode: "50130" },
          { name: "ต้นเปา", postalCode: "50130" },
          { name: "สันกลาง", postalCode: "50130" },
        ],
      },
      {
        name: "สันทราย",
        subDistricts: [
          { name: "สันทรายหลวง", postalCode: "50210" },
          { name: "สันทรายน้อย", postalCode: "50210" },
          { name: "สันพระเนตร", postalCode: "50210" },
          { name: "สันนาเม็ง", postalCode: "50210" },
          { name: "สันป่าเปา", postalCode: "50210" },
          { name: "หนองแหย่ง", postalCode: "50210" },
          { name: "หนองจ๊อม", postalCode: "50210" },
          { name: "หนองหาร", postalCode: "50290" },
          { name: "แม่แฝก", postalCode: "50290" },
          { name: "แม่แฝกใหม่", postalCode: "50290" },
          { name: "เมืองเล็น", postalCode: "50210" },
          { name: "ป่าไผ่", postalCode: "50210" },
        ],
      },
      {
        name: "หางดง",
        subDistricts: [
          { name: "หางดง", postalCode: "50230" },
          { name: "หนองแก๋ว", postalCode: "50230" },
          { name: "หารแก้ว", postalCode: "50230" },
          { name: "หนองตอง", postalCode: "50340" },
          { name: "ขุนคง", postalCode: "50230" },
          { name: "สบแม่ข่า", postalCode: "50230" },
          { name: "บ้านแหวน", postalCode: "50230" },
          { name: "สันผักหวาน", postalCode: "50230" },
          { name: "หนองควาย", postalCode: "50230" },
          { name: "บ้านปง", postalCode: "50230" },
          { name: "น้ำแพร่", postalCode: "50230" },
        ],
      },
      {
        name: "ฮอด",
        subDistricts: [
          { name: "หางดง", postalCode: "50240" },
          { name: "ฮอด", postalCode: "50240" },
          { name: "บ้านตาล", postalCode: "50240" },
          { name: "บ่อหลวง", postalCode: "50240" },
          { name: "บ่อสลี", postalCode: "50240" },
          { name: "นาคอเรือ", postalCode: "50240" },
        ],
      },
      {
        name: "ดอยเต่า",
        subDistricts: [
          { name: "ดอยเต่า", postalCode: "50260" },
          { name: "ท่าเดื่อ", postalCode: "50260" },
          { name: "มืดกา", postalCode: "50260" },
          { name: "บ้านแอ่น", postalCode: "50260" },
          { name: "บงตัน", postalCode: "50260" },
          { name: "โปงทุ่ง", postalCode: "50260" },
        ],
      },
      {
        name: "อมก๋อย",
        subDistricts: [
          { name: "อมก๋อย", postalCode: "50310" },
          { name: "ยางเปียง", postalCode: "50310" },
          { name: "แม่ตื่น", postalCode: "50310" },
          { name: "ม่อนจอง", postalCode: "50310" },
          { name: "สบโขง", postalCode: "50310" },
          { name: "นาเกียน", postalCode: "50310" },
        ],
      },
      {
        name: "สารภี",
        subDistricts: [
          { name: "ยางเนิ้ง", postalCode: "50140" },
          { name: "สารภี", postalCode: "50140" },
          { name: "ชมภู", postalCode: "50140" },
          { name: "ไชยสถาน", postalCode: "50140" },
          { name: "ขัวมุง", postalCode: "50140" },
          { name: "หนองผึ้ง", postalCode: "50140" },
          { name: "หนองแฝก", postalCode: "50140" },
          { name: "ท่ากว้าง", postalCode: "50140" },
          { name: "ดอนแก้ว", postalCode: "50140" },
          { name: "ท่าวังตาล", postalCode: "50140" },
          { name: "สันทราย", postalCode: "50140" },
          { name: "ป่าบง", postalCode: "50140" },
        ],
      },
      {
        name: "เวียงแหง",
        subDistricts: [
          { name: "เมืองแหง", postalCode: "50350" },
          { name: "เปียงหลวง", postalCode: "50350" },
          { name: "แสนไห", postalCode: "50350" },
        ],
      },
      {
        name: "ไชยปราการ",
        subDistricts: [
          { name: "ปงตำ", postalCode: "50320" },
          { name: "ศรีดงเย็น", postalCode: "50320" },
          { name: "แม่ทะลบ", postalCode: "50320" },
          { name: "หนองบัว", postalCode: "50320" },
        ],
      },
      {
        name: "แม่วาง",
        subDistricts: [
          { name: "บ้านกาด", postalCode: "50360" },
          { name: "ทุ่งปี้", postalCode: "50360" },
          { name: "ทุ่งรวงทอง", postalCode: "50360" },
          { name: "แม่วิน", postalCode: "50360" },
          { name: "ดอนเปา", postalCode: "50360" },
        ],
      },
      {
        name: "แม่ออน",
        subDistricts: [
          { name: "ออนเหนือ", postalCode: "50130" },
          { name: "ออนกลาง", postalCode: "50130" },
          { name: "บ้านสหกรณ์", postalCode: "50130" },
          { name: "ห้วยแก้ว", postalCode: "50130" },
          { name: "แม่ทา", postalCode: "50130" },
          { name: "ทาเหนือ", postalCode: "50130" },
        ],
      },
      {
        name: "ดอยหล่อ",
        subDistricts: [
          { name: "ดอยหล่อ", postalCode: "50160" },
          { name: "สองแคว", postalCode: "50160" },
          { name: "ยางคราม", postalCode: "50160" },
          { name: "สันติสุข", postalCode: "50160" },
        ],
      },
      {
        name: "กัลยาณิวัฒนา",
        subDistricts: [
          { name: "บ้านจันทร์", postalCode: "58130" },
          { name: "แม่แดด", postalCode: "58130" },
          { name: "แจ่มหลวง", postalCode: "58130" },
        ],
      },
    ],
  },
  // เพิ่มจังหวัดอื่นๆ ต่อไป...
  {
    name: "ขอนแก่น",
    districts: [
      {
        name: "เมืองขอนแก่น",
        subDistricts: [
          { name: "ในเมือง", postalCode: "40000" },
          { name: "สำราญ", postalCode: "40000" },
          { name: "โคกสี", postalCode: "40000" },
          { name: "ท่าพระ", postalCode: "40260" },
          { name: "บ้านทุ่ม", postalCode: "40000" },
          { name: "เมืองเก่า", postalCode: "40000" },
          { name: "พระลับ", postalCode: "40000" },
          { name: "สาวะถี", postalCode: "40000" },
          { name: "บ้านหว้า", postalCode: "40000" },
          { name: "บ้านค้อ", postalCode: "40000" },
          { name: "แดงใหญ่", postalCode: "40000" },
          { name: "ดอนช้าง", postalCode: "40000" },
          { name: "ดอนหัน", postalCode: "40260" },
          { name: "ศิลา", postalCode: "40000" },
          { name: "บ้านเป็ด", postalCode: "40000" },
          { name: "หนองตูม", postalCode: "40000" },
          { name: "บึงเนียม", postalCode: "40000" },
          { name: "โนนท่อน", postalCode: "40000" },
        ],
      },
      {
        name: "บ้านฝาง",
        subDistricts: [
          { name: "หนองบัว", postalCode: "40270" },
          { name: "ป่าหวายนั่ง", postalCode: "40270" },
          { name: "โนนฆ้อง", postalCode: "40270" },
          { name: "บ้านเหล่า", postalCode: "40270" },
          { name: "ป่ามะนาว", postalCode: "40270" },
          { name: "บ้านฝาง", postalCode: "40270" },
          { name: "โคกงาม", postalCode: "40270" },
        ],
      },
      {
        name: "พระยืน",
        subDistricts: [
          { name: "พระยืน", postalCode: "40320" },
          { name: "พระบุ", postalCode: "40320" },
          { name: "บ้านโต้น", postalCode: "40320" },
          { name: "หนองแวง", postalCode: "40320" },
          { name: "ขามป้อม", postalCode: "40320" },
        ],
      },
    ],
  },
  {
    name: "ชลบุรี",
    districts: [
      {
        name: "เมืองชลบุรี",
        subDistricts: [
          { name: "บางปลาสร้อย", postalCode: "20000" },
          { name: "มะขามหย่ง", postalCode: "20000" },
          { name: "บ้านโขด", postalCode: "20000" },
          { name: "แสนสุข", postalCode: "20130" },
          { name: "บ้านสวน", postalCode: "20000" },
          { name: "หนองรี", postalCode: "20000" },
          { name: "นาป่า", postalCode: "20000" },
          { name: "หนองข้างคอก", postalCode: "20000" },
          { name: "บางทราย", postalCode: "20000" },
          { name: "คลองตำหรุ", postalCode: "20000" },
          { name: "เหมือง", postalCode: "20130" },
          { name: "บ้านปึก", postalCode: "20130" },
          { name: "ห้วยกะปิ", postalCode: "20000" },
          { name: "เสม็ด", postalCode: "20000" },
          { name: "อ่างศิลา", postalCode: "20000" },
          { name: "สำนักบก", postalCode: "20000" },
          { name: "หนองไม้แดง", postalCode: "20000" },
          { name: "ดอนหัวฬ่อ", postalCode: "20000" },
        ],
      },
      {
        name: "บางละมุง",
        subDistricts: [
          { name: "บางละมุง", postalCode: "20150" },
          { name: "หนองปรือ", postalCode: "20150" },
          { name: "หนองปลาไหล", postalCode: "20150" },
          { name: "โป่ง", postalCode: "20150" },
          { name: "เขาไม้แก้ว", postalCode: "20150" },
          { name: "ห้วยใหญ่", postalCode: "20150" },
          { name: "ตะเคียนเตี้ย", postalCode: "20150" },
          { name: "นาเกลือ", postalCode: "20150" },
        ],
      },
      {
        name: "ศรีราชา",
        subDistricts: [
          { name: "ศรีราชา", postalCode: "20110" },
          { name: "สุรศักดิ์", postalCode: "20110" },
          { name: "ทุ่งสุขลา", postalCode: "20230" },
          { name: "บึง", postalCode: "20230" },
          { name: "หนองขาม", postalCode: "20110" },
          { name: "เขาคันทรง", postalCode: "20110" },
          { name: "บางพระ", postalCode: "20110" },
          { name: "บ่อวิน", postalCode: "20230" },
        ],
      },
      {
        name: "พัทยา",
        subDistricts: [
          { name: "พัทยา", postalCode: "20150" },
        ],
      },
    ],
  },
  {
    name: "ภูเก็ต",
    districts: [
      {
        name: "เมืองภูเก็ต",
        subDistricts: [
          { name: "ตลาดใหญ่", postalCode: "83000" },
          { name: "ตลาดเหนือ", postalCode: "83000" },
          { name: "เกาะแก้ว", postalCode: "83000" },
          { name: "รัษฎา", postalCode: "83000" },
          { name: "วิชิต", postalCode: "83000" },
          { name: "ฉลอง", postalCode: "83130" },
          { name: "ราไวย์", postalCode: "83130" },
          { name: "กะรน", postalCode: "83100" },
        ],
      },
      {
        name: "กะทู้",
        subDistricts: [
          { name: "กะทู้", postalCode: "83120" },
          { name: "ป่าตอง", postalCode: "83150" },
          { name: "กมลา", postalCode: "83150" },
        ],
      },
      {
        name: "ถลาง",
        subDistricts: [
          { name: "เทพกระษัตรี", postalCode: "83110" },
          { name: "ศรีสุนทร", postalCode: "83110" },
          { name: "เชิงทะเล", postalCode: "83110" },
          { name: "ป่าคลอก", postalCode: "83110" },
          { name: "ไม้ขาว", postalCode: "83110" },
          { name: "สาคู", postalCode: "83110" },
        ],
      },
    ],
  },
  {
    name: "นครราชสีมา",
    districts: [
      {
        name: "เมืองนครราชสีมา",
        subDistricts: [
          { name: "ในเมือง", postalCode: "30000" },
          { name: "โพธิ์กลาง", postalCode: "30000" },
          { name: "หนองจะบก", postalCode: "30000" },
          { name: "โคกสูง", postalCode: "30310" },
          { name: "มะเริง", postalCode: "30000" },
          { name: "หนองระเวียง", postalCode: "30000" },
          { name: "ปรุใหญ่", postalCode: "30000" },
          { name: "หมื่นไวย", postalCode: "30000" },
          { name: "พลกรัง", postalCode: "30000" },
          { name: "หนองไผ่ล้อม", postalCode: "30000" },
          { name: "บ้านเกาะ", postalCode: "30000" },
          { name: "บ้านใหม่", postalCode: "30000" },
          { name: "พุดซา", postalCode: "30000" },
          { name: "บ้านโพธิ์", postalCode: "30310" },
          { name: "จอหอ", postalCode: "30310" },
          { name: "โคกกรวด", postalCode: "30280" },
          { name: "ไชยมงคล", postalCode: "30000" },
          { name: "หนองบัวศาลา", postalCode: "30000" },
          { name: "สุรนารี", postalCode: "30000" },
          { name: "สีมุม", postalCode: "30000" },
          { name: "ตลาด", postalCode: "30310" },
          { name: "พะเนา", postalCode: "30000" },
          { name: "หนองกระทุ่ม", postalCode: "30000" },
          { name: "หัวทะเล", postalCode: "30000" },
          { name: "บ้านค่าย", postalCode: "30000" },
        ],
      },
      {
        name: "ปากช่อง",
        subDistricts: [
          { name: "ปากช่อง", postalCode: "30130" },
          { name: "กลางดง", postalCode: "30320" },
          { name: "จันทึก", postalCode: "30130" },
          { name: "วังกะทะ", postalCode: "30130" },
          { name: "หมูสี", postalCode: "30130" },
          { name: "หนองสาหร่าย", postalCode: "30130" },
          { name: "ขนงพระ", postalCode: "30130" },
          { name: "โป่งตาลอง", postalCode: "30130" },
          { name: "คลองม่วง", postalCode: "30130" },
          { name: "หนองน้ำแดง", postalCode: "30130" },
          { name: "วังไทร", postalCode: "30130" },
          { name: "พญาเย็น", postalCode: "30320" },
        ],
      },
    ],
  },
  {
    name: "เชียงราย",
    districts: [
      {
        name: "เมืองเชียงราย",
        subDistricts: [
          { name: "เวียง", postalCode: "57000" },
          { name: "รอบเวียง", postalCode: "57000" },
          { name: "บ้านดู่", postalCode: "57100" },
          { name: "นางแล", postalCode: "57100" },
          { name: "แม่ข้าวต้ม", postalCode: "57100" },
          { name: "แม่ยาว", postalCode: "57100" },
          { name: "สันทราย", postalCode: "57000" },
          { name: "แม่กรณ์", postalCode: "57000" },
          { name: "ห้วยชมภู", postalCode: "57000" },
          { name: "ห้วยสัก", postalCode: "57000" },
          { name: "ริมกก", postalCode: "57100" },
          { name: "ดอยลาน", postalCode: "57000" },
          { name: "ป่าอ้อดอนชัย", postalCode: "57000" },
          { name: "ท่าสาย", postalCode: "57000" },
          { name: "ดอยฮาง", postalCode: "57000" },
          { name: "ท่าสุด", postalCode: "57100" },
        ],
      },
      {
        name: "แม่สาย",
        subDistricts: [
          { name: "แม่สาย", postalCode: "57130" },
          { name: "ห้วยไคร้", postalCode: "57220" },
          { name: "เกาะช้าง", postalCode: "57130" },
          { name: "โป่งผา", postalCode: "57130" },
          { name: "ศรีเมืองชุม", postalCode: "57130" },
          { name: "เวียงพางคำ", postalCode: "57130" },
          { name: "บ้านด้าย", postalCode: "57220" },
          { name: "โป่งงาม", postalCode: "57130" },
        ],
      },
    ],
  },
];

// Helper functions
export const getProvinces = (): string[] => {
  return provinces.map((p) => p.name);
};

export const getDistricts = (provinceName: string): string[] => {
  const province = provinces.find((p) => p.name === provinceName);
  return province ? province.districts.map((d) => d.name) : [];
};

export const getSubDistricts = (provinceName: string, districtName: string): SubDistrict[] => {
  const province = provinces.find((p) => p.name === provinceName);
  if (!province) return [];

  const district = province.districts.find((d) => d.name === districtName);
  return district ? district.subDistricts : [];
};

export const getPostalCode = (
  provinceName: string,
  districtName: string,
  subDistrictName: string
): string => {
  const subDistricts = getSubDistricts(provinceName, districtName);
  const subDistrict = subDistricts.find((sd) => sd.name === subDistrictName);
  return subDistrict ? subDistrict.postalCode : "";
};
