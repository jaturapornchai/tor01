"use client";

import { useState } from "react";

const pendingLoans = [
  { id: 'REQ001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', type: 'สามัญ', amount: 500000, shares: 80000, salary: 35000, guarantors: 2, requestDate: '2024-01-15', status: 'pending' },
  { id: 'REQ002', memberId: 'M008', memberName: 'นางสาวมะลิ หอมหวาน', type: 'ฉุกเฉิน', amount: 30000, shares: 25000, salary: 22000, guarantors: 1, requestDate: '2024-01-15', status: 'pending' },
  { id: 'REQ003', memberId: 'M003', memberName: 'นายสมศักดิ์ ดีใจ', type: 'พิเศษ', amount: 1200000, shares: 150000, salary: 55000, guarantors: 3, requestDate: '2024-01-14', status: 'review' },
  { id: 'REQ004', memberId: 'M005', memberName: 'นายประสิทธิ์ ทำดี', type: 'ที่อยู่อาศัย', amount: 2500000, shares: 200000, salary: 65000, guarantors: 0, requestDate: '2024-01-14', status: 'review' },
];

export default function LoanApprovalPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  const stats = {
    pending: 15,
    review: 8,
    approved: 245,
    rejected: 12,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">อนุมัติสินเชื่อ</h1>
        <p className="text-slate-500 mt-1">ตรวจสอบและอนุมัติคำขอกู้เงินจากสมาชิก</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-amber-600">รอพิจารณา</p>
          <p className="text-xl sm:text-3xl font-bold text-amber-700 mt-1">{stats.pending}</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-blue-600">กำลังตรวจสอบ</p>
          <p className="text-xl sm:text-3xl font-bold text-blue-700 mt-1">{stats.review}</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-emerald-600 line-clamp-1">อนุมัติแล้ว</p>
          <p className="text-xl sm:text-3xl font-bold text-emerald-700 mt-1">{stats.approved}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-red-600 line-clamp-1">ไม่อนุมัติ</p>
          <p className="text-xl sm:text-3xl font-bold text-red-700 mt-1">{stats.rejected}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 23 },
            { id: 'pending', name: 'รอพิจารณา', count: 15 },
            { id: 'review', name: 'ตรวจสอบ', count: 8 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedTab === tab.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.name} <span className="ml-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-100 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขคำขอ</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้ขอกู้</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
                <th className="px-2 sm:px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">วงเงิน</th>
                <th className="px-2 sm:px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase hidden md:table-cell">หุ้นสะสม</th>
                <th className="px-2 sm:px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase hidden md:table-cell">เงินเดือน</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ผู้ค้ำ</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pendingLoans.map((loan) => (
                <tr key={loan.id} className="hover:bg-slate-50">
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-indigo-600">{loan.id}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <p className="font-medium text-slate-800 text-xs sm:text-sm">{loan.memberName}</p>
                    <p className="text-xs text-slate-500">{loan.memberId}</p>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                    <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium ${
                      loan.type === 'สามัญ' ? 'bg-indigo-100 text-indigo-700' :
                      loan.type === 'ฉุกเฉิน' ? 'bg-amber-100 text-amber-700' :
                      loan.type === 'พิเศษ' ? 'bg-violet-100 text-violet-700' :
                      'bg-teal-100 text-teal-700'
                    }`}>
                      {loan.type}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-right font-semibold text-slate-800 text-xs sm:text-sm">{loan.amount.toLocaleString()}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-right text-slate-600 text-xs sm:text-sm hidden md:table-cell">{loan.shares.toLocaleString()}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-right text-slate-600 text-xs sm:text-sm hidden md:table-cell">{loan.salary.toLocaleString()}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center text-slate-600 text-xs sm:text-sm">{loan.guarantors || '-'}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                    <span className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                      loan.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {loan.status === 'pending' ? 'รอ' : 'ตรวจ'}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                    <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                      <button className="p-1.5 sm:p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="อนุมัติ">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button className="p-1.5 sm:p-2 text-red-600 hover:bg-red-50 rounded-lg" title="ไม่อนุมัติ">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <button className="p-1.5 sm:p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg hidden sm:block" title="ดูรายละเอียด">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
