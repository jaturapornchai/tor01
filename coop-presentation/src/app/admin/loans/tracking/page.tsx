"use client";

import { useState } from "react";

const overdueLoans = [
  { id: 'L025', memberId: 'M012', memberName: 'นายวิชัย มั่นคง', type: 'สามัญ', balance: 285000, overdueDays: 45, overdueAmount: 29550, lastPayment: '2023-11-30' },
  { id: 'L089', memberId: 'M045', memberName: 'นางสาวสมศรี ดีงาม', type: 'ฉุกเฉิน', balance: 18000, overdueDays: 30, overdueAmount: 4500, lastPayment: '2023-12-15' },
  { id: 'L156', memberId: 'M078', memberName: 'นายสมพร ใจซื่อ', type: 'สามัญ', balance: 450000, overdueDays: 15, overdueAmount: 14850, lastPayment: '2024-01-01' },
];

export default function LoanTrackingPage() {
  const [selectedTab, setSelectedTab] = useState('overdue');

  const stats = {
    totalOverdue: 35,
    totalAmount: 12500000,
    nplRatio: 2.58,
    recovered: 8500000,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">ติดตามหนี้</h1>
        <p className="text-slate-500 mt-1">ติดตามและจัดการหนี้ค้างชำระของสมาชิก</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <p className="text-sm text-red-600">สัญญาค้างชำระ</p>
          <p className="text-3xl font-bold text-red-700 mt-1">{stats.totalOverdue}</p>
          <p className="text-xs text-red-500">สัญญา</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">ยอดค้างชำระรวม</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{(stats.totalAmount / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-amber-500">บาท</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600">NPL Ratio</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{stats.nplRatio}%</p>
          <p className="text-xs text-slate-500">หนี้ไม่ก่อให้เกิดรายได้</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">ติดตามหนี้ได้ (เดือนนี้)</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{(stats.recovered / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-emerald-500">บาท</p>
        </div>
      </div>

      {/* Overdue Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { range: '1-30 วัน', count: 18, amount: 3500000, color: 'from-amber-400 to-amber-500' },
          { range: '31-60 วัน', count: 10, amount: 4200000, color: 'from-orange-400 to-orange-500' },
          { range: '61-90 วัน', count: 5, amount: 2800000, color: 'from-red-400 to-red-500' },
          { range: 'มากกว่า 90 วัน', count: 2, amount: 2000000, color: 'from-red-600 to-red-700' },
        ].map((item) => (
          <div key={item.range} className={`bg-gradient-to-r ${item.color} rounded-xl p-5 text-white`}>
            <p className="text-white/80 text-sm">ค้างชำระ {item.range}</p>
            <p className="text-2xl font-bold mt-1">{item.count} สัญญา</p>
            <p className="text-white/80 text-sm">{(item.amount / 1000000).toFixed(1)} ล้านบาท</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200">
          {[
            { id: 'overdue', name: 'ค้างชำระ', count: 35 },
            { id: 'warning', name: 'ใกล้ครบกำหนด', count: 28 },
            { id: 'legal', name: 'ดำเนินการทางกฎหมาย', count: 3 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === tab.id
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.name} <span className="ml-1 px-2 py-0.5 rounded-full bg-slate-100 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขสัญญา</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้กู้</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เงินต้นคงเหลือ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ค้างชำระ (วัน)</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ยอดค้างชำระ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ชำระล่าสุด</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {overdueLoans.map((loan) => (
                <tr key={loan.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-red-600">{loan.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{loan.memberName}</p>
                    <p className="text-sm text-slate-500">{loan.memberId}</p>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-slate-600">{loan.type}</td>
                  <td className="px-4 py-4 text-right font-semibold">{loan.balance.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      loan.overdueDays > 60 ? 'bg-red-100 text-red-700' :
                      loan.overdueDays > 30 ? 'bg-orange-100 text-orange-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {loan.overdueDays} วัน
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-semibold text-red-600">{loan.overdueAmount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center text-sm text-slate-500">{loan.lastPayment}</td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg" title="โทรติดตาม">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg" title="ส่งหนังสือเตือน">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
