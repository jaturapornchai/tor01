"use client";

import { useState } from "react";

export default function FinancialReportsPage() {
  const [selectedReport, setSelectedReport] = useState('summary');

  const handleExportReport = () => {
    const report = reports.find(r => r.id === selectedReport);
    alert(`กำลังส่งออกรายงาน: ${report?.name || 'รายงานการเงิน'}`);
  };

  const reports = [
    { id: 'summary', name: 'สรุปภาพรวมการเงิน', icon: '💰' },
    { id: 'income', name: 'รายงานรายได้', icon: '📈' },
    { id: 'expense', name: 'รายงานค่าใช้จ่าย', icon: '📉' },
    { id: 'profit', name: 'รายงานกำไรขาดทุน', icon: '💵' },
    { id: 'dividend', name: 'รายงานเงินปันผล', icon: '🎁' },
    { id: 'ratio', name: 'อัตราส่วนทางการเงิน', icon: '📊' },
  ];

  const stats = {
    totalRevenue: 125000000,
    totalExpense: 85000000,
    netProfit: 40000000,
    profitGrowth: 12.5,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">รายงานการเงิน</h1>
          <p className="text-slate-500 mt-1">รายงานและวิเคราะห์ผลการดำเนินงานทางการเงิน</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500">
            <option>ปี 2567</option>
            <option>ปี 2566</option>
          </select>
          <button onClick={handleExportReport} className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium text-sm shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            ส่งออกรายงาน
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">รายได้รวม</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{(stats.totalRevenue / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-emerald-500">บาท</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <p className="text-sm text-red-600">ค่าใช้จ่ายรวม</p>
          <p className="text-3xl font-bold text-red-700 mt-1">{(stats.totalExpense / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-red-500">บาท</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">กำไรสุทธิ</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{(stats.netProfit / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-blue-500">บาท</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
          <p className="text-sm text-violet-600">อัตราเติบโต</p>
          <p className="text-3xl font-bold text-violet-700 mt-1">+{stats.profitGrowth}%</p>
          <p className="text-xs text-violet-500">จากปีก่อน</p>
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
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-slate-200 bg-white hover:border-emerald-300'
            }`}
          >
            <span className="text-2xl block mb-2">{report.icon}</span>
            <p className={`text-sm font-medium ${
              selectedReport === report.id ? 'text-emerald-700' : 'text-slate-700'
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
          {/* Revenue vs Expense */}
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm font-medium text-slate-600 mb-4">รายได้ vs ค่าใช้จ่าย (รายเดือน)</p>
            <div className="h-48 flex items-end justify-between gap-2">
              {[
                { r: 10, e: 7 }, { r: 9.5, e: 7.2 }, { r: 11, e: 7.5 },
                { r: 10.5, e: 7.1 }, { r: 10.8, e: 7.3 }, { r: 11.5, e: 7.8 },
                { r: 10.2, e: 6.9 }, { r: 11.2, e: 7.5 }, { r: 10.8, e: 7.2 },
                { r: 11.5, e: 7.6 }, { r: 11.8, e: 7.4 }, { r: 12, e: 7.5 },
              ].map((data, i) => (
                <div key={i} className="flex-1 flex gap-0.5">
                  <div
                    className="flex-1 bg-emerald-500 rounded-t"
                    style={{ height: `${data.r * 8}%` }}
                  ></div>
                  <div
                    className="flex-1 bg-red-400 rounded-t"
                    style={{ height: `${data.e * 8}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                <span className="text-xs text-slate-600">รายได้</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded"></div>
                <span className="text-xs text-slate-600">ค่าใช้จ่าย</span>
              </div>
            </div>
          </div>

          {/* Income Breakdown */}
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm font-medium text-slate-600 mb-4">สัดส่วนรายได้</p>
            <div className="space-y-3">
              {[
                { name: 'ดอกเบี้ยเงินกู้', amount: 85000000, percent: 68, color: 'bg-emerald-500' },
                { name: 'ค่าธรรมเนียม', amount: 15000000, percent: 12, color: 'bg-blue-500' },
                { name: 'รายได้จากการลงทุน', amount: 18000000, percent: 14, color: 'bg-violet-500' },
                { name: 'รายได้อื่น', amount: 7000000, percent: 6, color: 'bg-amber-500' },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">{item.name}</span>
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

        {/* Financial Ratios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { name: 'ROA', value: '4.7%', desc: 'ผลตอบแทนต่อสินทรัพย์' },
            { name: 'ROE', value: '14.0%', desc: 'ผลตอบแทนต่อทุน' },
            { name: 'NPL Ratio', value: '2.58%', desc: 'หนี้ไม่ก่อให้เกิดรายได้' },
            { name: 'Liquidity', value: '1.25', desc: 'สภาพคล่อง' },
          ].map((ratio) => (
            <div key={ratio.name} className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-4 text-white">
              <p className="text-emerald-100 text-sm">{ratio.name}</p>
              <p className="text-2xl font-bold mt-1">{ratio.value}</p>
              <p className="text-emerald-200 text-xs">{ratio.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
