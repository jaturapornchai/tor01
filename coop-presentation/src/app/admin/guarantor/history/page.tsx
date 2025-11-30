"use client";

import { useState } from "react";

const guaranteeHistory = [
  { id: 'GH001', guarantorId: 'M001', guarantorName: 'นายสมชาย ใจดี', borrowerId: 'M045', borrowerName: 'นางสาวสมศรี ดีงาม', loanId: 'L156', amount: 300000, startDate: '2023-06-15', endDate: null, status: 'active' },
  { id: 'GH002', guarantorId: 'M015', guarantorName: 'นางสาวปราณี สุขใจ', borrowerId: 'M078', borrowerName: 'นายสมพร ใจซื่อ', loanId: 'L089', amount: 200000, startDate: '2023-03-20', endDate: null, status: 'active' },
  { id: 'GH003', guarantorId: 'M022', guarantorName: 'นายประเสริฐ มั่งมี', borrowerId: 'M012', borrowerName: 'นายวิชัย มั่นคง', loanId: 'L025', amount: 285000, startDate: '2022-11-01', endDate: null, status: 'overdue' },
  { id: 'GH004', guarantorId: 'M001', guarantorName: 'นายสมชาย ใจดี', borrowerId: 'M034', borrowerName: 'นางมะลิ รักดี', loanId: 'L008', amount: 150000, startDate: '2022-01-15', endDate: '2023-12-30', status: 'completed' },
];

export default function GuarantorHistoryPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  const stats = {
    activeGuarantees: 2845,
    completedGuarantees: 8542,
    overdueGuarantees: 156,
    totalAmount: 485000000,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">ประวัติการค้ำประกัน</h1>
        <p className="text-slate-500 mt-1">ดูประวัติและสถานะการค้ำประกันทั้งหมด</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-emerald-600">ค้ำประกันอยู่</p>
          <p className="text-xl sm:text-3xl font-bold text-emerald-700 mt-1">{stats.activeGuarantees.toLocaleString()}</p>
          <p className="text-xs text-emerald-500">สัญญา</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-blue-600">เสร็จสิ้นแล้ว</p>
          <p className="text-xl sm:text-3xl font-bold text-blue-700 mt-1">{stats.completedGuarantees.toLocaleString()}</p>
          <p className="text-xs text-blue-500">สัญญา</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-red-600">ค้ำหนี้ค้างชำระ</p>
          <p className="text-xl sm:text-3xl font-bold text-red-700 mt-1">{stats.overdueGuarantees}</p>
          <p className="text-xs text-red-500">สัญญา</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-violet-600">ยอดค้ำรวม</p>
          <p className="text-xl sm:text-3xl font-bold text-violet-700 mt-1">{(stats.totalAmount / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-violet-500">บาท</p>
        </div>
      </div>

      {/* Tabs and Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 11543 },
            { id: 'active', name: 'กำลังค้ำ', count: 2845 },
            { id: 'overdue', name: 'หนี้ค้างชำระ', count: 156 },
            { id: 'completed', name: 'เสร็จสิ้น', count: 8542 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedTab === tab.id
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.name} <span className="ml-1 px-2 py-0.5 rounded-full bg-slate-100 text-xs">{tab.count.toLocaleString()}</span>
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขที่</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้ค้ำประกัน</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้กู้</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">เลขสัญญา</th>
                <th className="px-2 sm:px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">วงเงินค้ำ</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่เริ่ม</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">วันที่สิ้นสุด</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {guaranteeHistory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-cyan-600">{item.id}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <p className="font-medium text-slate-800 text-xs sm:text-sm">{item.guarantorName}</p>
                    <p className="text-xs text-slate-500">{item.guarantorId}</p>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <p className="font-medium text-slate-800 text-xs sm:text-sm">{item.borrowerName}</p>
                    <p className="text-xs text-slate-500">{item.borrowerId}</p>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center font-medium text-indigo-600 text-xs sm:text-sm">{item.loanId}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-right font-semibold text-slate-800 text-xs sm:text-sm">{item.amount.toLocaleString()}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs text-slate-500">{item.startDate}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center text-xs text-slate-500 hidden sm:table-cell">{item.endDate || '-'}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                    <span className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                      item.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'overdue' ? 'bg-red-100 text-red-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {item.status === 'active' ? 'กำลังค้ำ' : item.status === 'overdue' ? 'หนี้ค้างชำระ' : 'เสร็จสิ้น'}
                    </span>
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
