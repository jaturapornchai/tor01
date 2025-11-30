"use client";

import { useState } from "react";
import Link from "next/link";

const withdrawRequests = [
  { id: 'WD001', memberId: 'M045', memberName: 'นางสาวสมศรี ดีงาม', currentShares: 1200, withdrawShares: 200, amount: 20000, reason: 'ใช้จ่ายฉุกเฉิน', date: '2024-01-15', status: 'pending' },
  { id: 'WD002', memberId: 'M078', memberName: 'นายประยุทธ์ ก้าวหน้า', currentShares: 850, withdrawShares: 100, amount: 10000, reason: 'ค่าเทอมบุตร', date: '2024-01-14', status: 'approved' },
  { id: 'WD003', memberId: 'M023', memberName: 'นางวิภา รักษ์ดี', currentShares: 2500, withdrawShares: 500, amount: 50000, reason: 'ซ่อมแซมบ้าน', date: '2024-01-12', status: 'completed' },
];

export default function ShareWithdrawPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  const stats = {
    pendingRequests: 12,
    approvedThisMonth: 85,
    totalWithdrawn: 8500000,
    avgWithdrawAmount: 25000,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ถอนหุ้น</h1>
          <p className="text-slate-500 mt-1">จัดการคำขอถอนหุ้นของสมาชิก</p>
        </div>
        <Link
          href="/admin/shares/withdraw/new"
          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all"
        >
          + ยื่นขอถอนหุ้น
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">รออนุมัติ</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{stats.pendingRequests}</p>
          <p className="text-xs text-amber-500">คำขอ</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">อนุมัติเดือนนี้</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{stats.approvedThisMonth}</p>
          <p className="text-xs text-emerald-500">รายการ</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
          <p className="text-sm text-violet-600">ยอดถอนรวม</p>
          <p className="text-3xl font-bold text-violet-700 mt-1">{(stats.totalWithdrawn / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-violet-500">บาท (เดือนนี้)</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600">ถอนเฉลี่ย</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{stats.avgWithdrawAmount.toLocaleString()}</p>
          <p className="text-xs text-slate-500">บาท/รายการ</p>
        </div>
      </div>

      {/* Withdrawal Rules */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">เงื่อนไขการถอนหุ้น</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-amber-100 text-sm">ถอนได้สูงสุด</p>
            <p className="text-2xl font-bold">90%</p>
            <p className="text-amber-200 text-sm">ของหุ้นทั้งหมด</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-amber-100 text-sm">หุ้นคงเหลือขั้นต่ำ</p>
            <p className="text-2xl font-bold">10</p>
            <p className="text-amber-200 text-sm">หุ้น (1,000 บาท)</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-amber-100 text-sm">ถอนได้</p>
            <p className="text-2xl font-bold">2</p>
            <p className="text-amber-200 text-sm">ครั้ง/ปี</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-amber-100 text-sm">ระยะเวลาพิจารณา</p>
            <p className="text-2xl font-bold">15</p>
            <p className="text-amber-200 text-sm">วันทำการ</p>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
        <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <p className="font-medium text-red-800">ข้อควรทราบ</p>
          <p className="text-sm text-red-600 mt-1">
            สมาชิกที่มีหนี้สินค้างชำระหรือเป็นผู้ค้ำประกัน อาจไม่สามารถถอนหุ้นได้ตามจำนวนที่ต้องการ
            โดยต้องคงหุ้นไว้ไม่น้อยกว่า 20% ของยอดหนี้/ภาระค้ำประกัน
          </p>
        </div>
      </div>

      {/* Tabs and Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 45 },
            { id: 'pending', name: 'รออนุมัติ', count: 12 },
            { id: 'approved', name: 'อนุมัติแล้ว', count: 18 },
            { id: 'completed', name: 'จ่ายเงินแล้ว', count: 15 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedTab === tab.id
                  ? 'border-amber-500 text-amber-600'
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขคำขอ</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">สมาชิก</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">หุ้นปัจจุบัน</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ขอถอน</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">จำนวนเงิน</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เหตุผล</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่ยื่น</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {withdrawRequests.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-amber-600">{item.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{item.memberName}</p>
                    <p className="text-sm text-slate-500">{item.memberId}</p>
                  </td>
                  <td className="px-4 py-4 text-right text-slate-600">{item.currentShares}</td>
                  <td className="px-4 py-4 text-right font-medium text-red-600">-{item.withdrawShares}</td>
                  <td className="px-4 py-4 text-right font-semibold">{item.amount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.reason}</td>
                  <td className="px-4 py-4 text-center text-sm text-slate-500">{item.date}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                      item.status === 'approved' ? 'bg-blue-100 text-blue-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {item.status === 'pending' ? 'รออนุมัติ' : item.status === 'approved' ? 'อนุมัติแล้ว' : 'จ่ายเงินแล้ว'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {item.status === 'pending' && (
                        <>
                          <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="อนุมัติ">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="ไม่อนุมัติ">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </>
                      )}
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg" title="ดูรายละเอียด">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
