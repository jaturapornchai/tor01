"use client";

import { useState, useRef } from "react";
import { formatThaiDate } from "@/utils/thai-date";

interface IdCardData {
  idCard: string;
  title: string;
  firstName: string;
  lastName: string;
  firstNameEn: string;
  lastNameEn: string;
  birthDate: string;
  addressNo: string;
  moo: string;
  soi: string;
  road: string;
  subDistrict: string;
  district: string;
  province: string;
  fullAddress: string;
  issueDate: string;
  expiryDate: string;
  religion: string;
}

interface IdCardScannerProps {
  onDataExtracted: (data: IdCardData) => void;
}

export default function IdCardScanner({ onDataExtracted }: IdCardScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scanResult, setScanResult] = useState<IdCardData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("กรุณาเลือกไฟล์รูปภาพ");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("ไฟล์ใหญ่เกินไป (สูงสุด 10MB)");
      return;
    }

    setError(null);
    setPreview(URL.createObjectURL(file));
    await scanIdCard(file);
  };

  const scanIdCard = async (file: File) => {
    setIsScanning(true);
    setError(null);
    setScanResult(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/scan-idcard", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success && result.data) {
        setScanResult(result.data);
      } else {
        setError(result.error || "ไม่สามารถอ่านข้อมูลจากบัตรได้");
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการเชื่อมต่อ");
    } finally {
      setIsScanning(false);
    }
  };

  const handleConfirm = () => {
    if (scanResult) {
      onDataExtracted(scanResult);
      // Reset state
      setPreview(null);
      setScanResult(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleReset = () => {
    setPreview(null);
    setScanResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
        <span className="font-medium text-slate-700">สแกนบัตรประชาชน (AI)</span>
        <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">Gemini AI</span>
      </div>

      {!preview ? (
        <div className="relative">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="border-2 border-dashed border-amber-300 rounded-lg p-6 text-center hover:border-amber-400 hover:bg-amber-50/50 transition-colors">
            <svg className="w-12 h-12 text-amber-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-slate-600 mb-1">
              <span className="font-medium text-amber-600">คลิกเพื่ออัพโหลด</span> หรือถ่ายรูปบัตรประชาชน
            </p>
            <p className="text-xs text-slate-500">รองรับ JPG, PNG (สูงสุด 10MB)</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Preview Image */}
          <div className="relative rounded-lg overflow-hidden bg-slate-900">
            <img
              src={preview}
              alt="ID Card Preview"
              className="w-full h-48 object-contain"
            />
            {isScanning && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-10 h-10 mx-auto mb-2 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="text-sm">กำลังอ่านข้อมูล...</p>
                </div>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-600 flex items-center gap-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          {/* Scan Result */}
          {scanResult && (
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h4 className="font-medium text-slate-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ข้อมูลที่อ่านได้
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-slate-500">เลขบัตร:</span>
                  <span className="ml-2 font-mono text-slate-800">{scanResult.idCard || "-"}</span>
                </div>
                <div>
                  <span className="text-slate-500">คำนำหน้า:</span>
                  <span className="ml-2 text-slate-800">{scanResult.title || "-"}</span>
                </div>
                <div>
                  <span className="text-slate-500">ชื่อ:</span>
                  <span className="ml-2 text-slate-800">{scanResult.firstName || "-"}</span>
                </div>
                <div>
                  <span className="text-slate-500">นามสกุล:</span>
                  <span className="ml-2 text-slate-800">{scanResult.lastName || "-"}</span>
                </div>
                <div>
                  <span className="text-slate-500">วันเกิด:</span>
                  <span className="ml-2 text-slate-800">{scanResult.birthDate ? formatThaiDate(scanResult.birthDate) : "-"}</span>
                </div>
                <div>
                  <span className="text-slate-500">ศาสนา:</span>
                  <span className="ml-2 text-slate-800">{scanResult.religion || "-"}</span>
                </div>
              </div>
              {scanResult.fullAddress && (
                <div className="mt-2 text-sm">
                  <span className="text-slate-500">ที่อยู่:</span>
                  <span className="ml-2 text-slate-800">{scanResult.fullAddress}</span>
                </div>
              )}
              {(scanResult.province || scanResult.district || scanResult.subDistrict) && (
                <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-slate-500">จังหวัด:</span>
                    <span className="ml-1 text-slate-800">{scanResult.province || "-"}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">อำเภอ:</span>
                    <span className="ml-1 text-slate-800">{scanResult.district || "-"}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">ตำบล:</span>
                    <span className="ml-1 text-slate-800">{scanResult.subDistrict || "-"}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 text-sm"
            >
              เลือกรูปใหม่
            </button>
            {scanResult && (
              <button
                type="button"
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ใช้ข้อมูลนี้
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
