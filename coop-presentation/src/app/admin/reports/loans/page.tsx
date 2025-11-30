"use client";

import { useState } from "react";

export default function LoanReportsPage() {
  const [selectedReport, setSelectedReport] = useState('summary');

  const handleExportReport = () => {
    const report = reports.find(r => r.id === selectedReport);
    alert(`กำลังส่งออกรายงาน: ${report?.name || 'รายงานสินเชื่อ'}`);
  };

  const reports = [
    { id: 'summary', name: 'สรุปภาพรวมสินเชื่อ', icon: '📊' },
    { id: 'disbursement', name: 'รายงานการเบิกจ่าย', icon: '💳' },
    { id: 'collection', name: 'รายงานการรับชำระ', icon: '💵' },
    { id: 'overdue', name: 'รายงานหนี้ค้างชำระ', icon: '⚠️' },
    { id: 'npl', name: 'รายงาน NPL', icon: '📉' },
    { id: 'interest', name: 'รายงานดอกเบี้ยรับ', icon: '💰' },
  ];

  const stats = {
    totalLoans: 4528,
    totalOutstanding: 740000000,
    monthlyDisbursement: 45000000,
    monthlyCollection: 52000000,
  };

  const loanByType = [
    { type: 'สามัญ', outstanding: 385000000, count: 2450, npl: 2.1, color: 'from-indigo-500 to-blue-600' },
    { type: 'ฉุกเฉิน', outstanding: 45000000, count: 1250, npl: 1.8, color: 'from-amber-500 to-orange-600' },
    { type: 'พิเศษ', outstanding: 125000000, count: 456, npl: 3.2, color: 'from-violet-500 to-purple-600' },
    { type: 'ที่อยู่อาศัย', outstanding: 185000000, count: 372, npl: 2.8, color: 'from-teal-500 to-cyan-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">รายงานสินเชื่อ</h1>
          <p className="text-slate-500 mt-1">รายงานและวิเคราะห์สถานะสินเชื่อของสหกรณ์</p>
        </div>
        <button onClick={handleExportReport} className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          ส่งออกรายงาน
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
          <p className="text-sm text-indigo-600">สัญญากู้ทั้งหมด</p>
          <p className="text-3xl font-bold text-indigo-700 mt-1">{stats.totalLoans.toLocaleString()}</p>
          <p className="text-xs text-indigo-500">สัญญา</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
          <p className="text-sm text-violet-600">ยอดหนี้คงค้าง</p>
          <p className="text-3xl font-bold text-violet-700 mt-1">{(stats.totalOutstanding / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-violet-500">บาท</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">เบิกจ่ายเดือนนี้</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{(stats.monthlyDisbursement / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-blue-500">บาท</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">รับชำระเดือนนี้</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{(stats.monthlyCollection / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-emerald-500">บาท</p>
        </div>
      </div>

      {/* Loan by Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loanByType.map((loan) => (
          <div key={loan.type} className={`bg-gradient-to-r ${loan.color} rounded-xl p-5 text-white`}>
            <p className="text-white/80 text-sm">เงินกู้{loan.type}</p>
            <p className="text-2xl font-bold mt-1">{(loan.outstanding / 1000000).toFixed(0)}M</p>
            <div className="flex justify-between mt-3 text-sm">
              <span className="text-white/80">{loan.count.toLocaleString()} สัญญา</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                loan.npl > 3 ? 'bg-red-500/30' : 'bg-white/20'
              }`}>
                NPL {loan.npl}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Report Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedReport === report.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-slate-200 bg-white hover:border-indigo-300'
            }`}
          >
            <span className="text-2xl block mb-2">{report.icon}</span>
            <p className={`text-sm font-medium ${
              selectedReport === report.id ? 'text-indigo-700' : 'text-slate-700'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Monthly Trend */}
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm font-medium text-slate-600 mb-4">แนวโน้มรายเดือน</p>
            <div className="h-48 flex items-end justify-between gap-2">
              {[75, 82, 78, 85, 80, 88, 82, 90, 85, 92, 88, 95].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-indigo-500 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* NPL by Days */}
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm font-medium text-slate-600 mb-4">หนี้ค้างชำระตามระยะเวลา</p>
            <div className="space-y-3">
              {[
                { range: '1-30 วัน', amount: 25000000, percent: 35, color: 'bg-amber-500' },
                { range: '31-60 วัน', amount: 18000000, percent: 25, color: 'bg-orange-500' },
                { range: '61-90 วัน', amount: 15000000, percent: 21, color: 'bg-red-400' },
                { range: '> 90 วัน (NPL)', amount: 14000000, percent: 19, color: 'bg-red-600' },
              ].map((item) => (
                <div key={item.range}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">{item.range}</span>
                    <span className="text-slate-500">{(item.amount / 1000000).toFixed(0)}M ({item.percent}%)</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
