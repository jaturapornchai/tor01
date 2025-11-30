"use client";

import { useState } from "react";

const payrollFiles = [
  { id: 'PF202401', month: 'มกราคม 2567', uploadDate: '2024-01-20', records: 8542, totalAmount: 45250000, status: 'verified' },
  { id: 'PF202312', month: 'ธันวาคม 2566', uploadDate: '2023-12-20', records: 8538, totalAmount: 44980000, status: 'processed' },
  { id: 'PF202311', month: 'พฤศจิกายน 2566', uploadDate: '2023-11-20', records: 8530, totalAmount: 44750000, status: 'processed' },
  { id: 'PF202310', month: 'ตุลาคม 2566', uploadDate: '2023-10-20', records: 8525, totalAmount: 44500000, status: 'processed' },
];

export default function PayrollFilesPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  const handleUploadClick = () => {
    alert('เปิดหน้าต่างอัปโหลดไฟล์เงินเดือน');
  };

  const handleSelectFile = () => {
    alert('เลือกไฟล์จากเครื่อง');
  };

  const handleDownloadTemplate = () => {
    alert('กำลังดาวน์โหลดเทมเพลตไฟล์เงินเดือน');
  };

  const handleViewFile = (fileId: string, month: string) => {
    alert(`ดูรายละเอียดไฟล์: ${fileId}\nงวด: ${month}`);
  };

  const handleDownloadFile = (fileId: string, month: string) => {
    alert(`กำลังดาวน์โหลดไฟล์: ${fileId}\nงวด: ${month}`);
  };

  const stats = {
    totalFiles: 48,
    pendingVerify: 1,
    processed: 47,
    lastUpload: '2024-01-20',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ไฟล์เงินเดือน</h1>
          <p className="text-slate-500 mt-1">อัปโหลดและจัดการไฟล์ข้อมูลเงินเดือนจากต้นสังกัด</p>
        </div>
        <button onClick={handleUploadClick} className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium text-sm shadow-lg flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          อัปโหลดไฟล์
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ไฟล์ทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.totalFiles}</p>
          <p className="text-xs text-slate-400">ไฟล์</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">รอตรวจสอบ</p>
          <p className="text-2xl font-bold text-amber-700 mt-1">{stats.pendingVerify}</p>
          <p className="text-xs text-amber-500">ไฟล์</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">ประมวลผลแล้ว</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">{stats.processed}</p>
          <p className="text-xs text-emerald-500">ไฟล์</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">อัปโหลดล่าสุด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.lastUpload}</p>
          <p className="text-xs text-slate-400">วันที่</p>
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-slate-300 p-8">
        <div className="text-center">
          <svg className="w-12 h-12 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-slate-600 mb-2">ลากไฟล์มาวางที่นี่ หรือ</p>
          <button onClick={handleSelectFile} className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium text-sm hover:bg-indigo-700">
            เลือกไฟล์
          </button>
          <p className="text-sm text-slate-400 mt-2">รองรับ .xlsx, .xls, .csv (สูงสุด 10MB)</p>
        </div>
      </div>

      {/* File Format Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-medium text-blue-800">รูปแบบไฟล์ที่รองรับ</p>
            <p className="text-sm text-blue-600 mt-1">
              ไฟล์ต้องมีคอลัมน์: รหัสพนักงาน, ชื่อ-นามสกุล, เงินเดือน, เลขบัตรประชาชน
              <button type="button" onClick={handleDownloadTemplate} className="underline ml-2">ดาวน์โหลดเทมเพลต</button>
            </p>
          </div>
        </div>
      </div>

      {/* Files Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 48 },
            { id: 'pending', name: 'รอตรวจสอบ', count: 1 },
            { id: 'processed', name: 'ประมวลผลแล้ว', count: 47 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === tab.id
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.name} <span className="ml-1 px-2 py-0.5 rounded-full bg-slate-100 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">รหัสไฟล์</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">งวด</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่อัปโหลด</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">จำนวนรายการ</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ยอดรวม</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payrollFiles.map((file) => (
                <tr key={file.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-emerald-600">{file.id}</td>
                  <td className="px-4 py-4 font-medium text-slate-800">{file.month}</td>
                  <td className="px-4 py-4 text-center text-sm text-slate-500">{file.uploadDate}</td>
                  <td className="px-4 py-4 text-right text-slate-600">{file.records.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-semibold">{file.totalAmount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      file.status === 'verified' ? 'bg-amber-100 text-amber-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {file.status === 'verified' ? 'รอประมวลผล' : 'ประมวลผลแล้ว'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button onClick={() => handleViewFile(file.id, file.month)} className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg" title="ดูรายละเอียด">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button onClick={() => handleDownloadFile(file.id, file.month)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="ดาวน์โหลด">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
