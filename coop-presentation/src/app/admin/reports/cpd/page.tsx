"use client";

import { useState } from "react";

export default function CPDReportsPage() {
  const [selectedReport, setSelectedReport] = useState('summary');

  const handleExportReport = () => {
    const report = reports.find(r => r.id === selectedReport);
    alert(`กำลังส่งออกรายงาน: ${report?.name || 'รายงาน กตส.'}`);
  };

  const reports = [
    { id: 'summary', name: 'สรุปข้อมูล กตส.', icon: '📋' },
    { id: 'form1', name: 'แบบ สส.1', icon: '📄' },
    { id: 'form2', name: 'แบบ สส.2', icon: '📄' },
    { id: 'form3', name: 'แบบ สส.3', icon: '📄' },
    { id: 'audit', name: 'รายงานผู้สอบบัญชี', icon: '✅' },
    { id: 'annual', name: 'รายงานประจำปี', icon: '📊' },
  ];

  const cpdInfo = {
    coopName: 'สหกรณ์ออมทรัพย์ตัวอย่าง จำกัด',
    registrationNo: 'ออท.1/2530',
    registrationDate: '15 มกราคม 2530',
    fiscalYearEnd: '31 ธันวาคม',
    supervisingOffice: 'สำนักงานส่งเสริมสหกรณ์กรุงเทพมหานคร พื้นที่ 1',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">รายงาน กตส.</h1>
          <p className="text-slate-500 mt-1">รายงานตามแบบฟอร์มกรมตรวจบัญชีสหกรณ์</p>
        </div>
        <button onClick={handleExportReport} className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg font-medium text-sm shadow-lg flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          ส่งออกรายงาน
        </button>
      </div>

      {/* Cooperative Info */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">ข้อมูลสหกรณ์</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <p className="text-teal-100 text-sm">ชื่อสหกรณ์</p>
            <p className="font-semibold">{cpdInfo.coopName}</p>
          </div>
          <div>
            <p className="text-teal-100 text-sm">เลขทะเบียน</p>
            <p className="font-semibold">{cpdInfo.registrationNo}</p>
          </div>
          <div>
            <p className="text-teal-100 text-sm">วันที่จดทะเบียน</p>
            <p className="font-semibold">{cpdInfo.registrationDate}</p>
          </div>
          <div>
            <p className="text-teal-100 text-sm">วันสิ้นปีทางบัญชี</p>
            <p className="font-semibold">{cpdInfo.fiscalYearEnd}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-teal-100 text-sm">สำนักงานสหกรณ์ที่กำกับดูแล</p>
            <p className="font-semibold">{cpdInfo.supervisingOffice}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
          <p className="text-sm text-teal-600">สินทรัพย์รวม</p>
          <p className="text-3xl font-bold text-teal-700 mt-1">880M</p>
          <p className="text-xs text-teal-500">บาท</p>
        </div>
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
          <p className="text-sm text-cyan-600">หนี้สินรวม</p>
          <p className="text-3xl font-bold text-cyan-700 mt-1">510M</p>
          <p className="text-xs text-cyan-500">บาท</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">ทุนของสหกรณ์</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">370M</p>
          <p className="text-xs text-emerald-500">บาท</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">กำไรสุทธิ</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">40M</p>
          <p className="text-xs text-blue-500">บาท</p>
        </div>
      </div>

      {/* Report Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedReport === report.id
                ? 'border-teal-500 bg-teal-50'
                : 'border-slate-200 bg-white hover:border-teal-300'
            }`}
          >
            <span className="text-2xl block mb-2">{report.icon}</span>
            <p className={`text-sm font-medium ${
              selectedReport === report.id ? 'text-teal-700' : 'text-slate-700'
            }`}>
              {report.name}
            </p>
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-800 mb-6">
          {reports.find(r => r.id === selectedReport)?.name}
        </h3>

        {/* CPD Form Preview */}
        <div className="border border-slate-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <p className="text-lg font-bold">แบบรายงานข้อมูลสหกรณ์ออมทรัพย์</p>
            <p className="text-slate-500">ส่งกรมตรวจบัญชีสหกรณ์ประจำปี 2566</p>
          </div>

          <div className="space-y-4">
            {/* Section 1 */}
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="font-semibold text-slate-800 mb-3">ส่วนที่ 1: ข้อมูลทั่วไป</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">จำนวนสมาชิก</span>
                  <span className="font-medium">8,542 คน</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">จำนวนหุ้น</span>
                  <span className="font-medium">2,850,000 หุ้น</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">ทุนเรือนหุ้น</span>
                  <span className="font-medium">285,000,000 บาท</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">ทุนสำรอง</span>
                  <span className="font-medium">45,000,000 บาท</span>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="font-semibold text-slate-800 mb-3">ส่วนที่ 2: ข้อมูลการดำเนินงาน</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">เงินกู้คงเหลือ</span>
                  <span className="font-medium">740,000,000 บาท</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">เงินรับฝาก</span>
                  <span className="font-medium">395,000,000 บาท</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">รายได้</span>
                  <span className="font-medium">125,000,000 บาท</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">ค่าใช้จ่าย</span>
                  <span className="font-medium">85,000,000 บาท</span>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="font-semibold text-slate-800 mb-3">ส่วนที่ 3: อัตราส่วนทางการเงิน</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">NPL Ratio</span>
                  <span className="font-medium">2.58%</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">ROA</span>
                  <span className="font-medium">4.7%</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">ROE</span>
                  <span className="font-medium">14.0%</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">อัตราส่วนทุนต่อสินทรัพย์</span>
                  <span className="font-medium">42.0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
