"use client";

import { useState } from "react";
import Link from "next/link";

const resignations = [
  { id: 'RES001', memberId: 'M156', memberName: 'นายสมพร ลาออก', reason: 'ลาออกจากงาน', shares: 85000, deposits: 125000, loans: 0, applyDate: '2024-01-10', status: 'pending' },
  { id: 'RES002', memberId: 'M089', memberName: 'นางวิภา ย้ายงาน', reason: 'โอนย้ายหน่วยงาน', shares: 120000, deposits: 85000, loans: 50000, applyDate: '2024-01-08', status: 'processing' },
  { id: 'RES003', memberId: 'M234', memberName: 'นายประยุทธ์ เกษียณ', reason: 'เกษียณอายุราชการ', shares: 450000, deposits: 380000, loans: 0, applyDate: '2024-01-05', status: 'approved' },
];

export default function MemberResignPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  const stats = {
    pendingResign: 15,
    processing: 8,
    completed: 245,
    refundAmount: 12500000,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ลาออกจากสมาชิก</h1>
          <p className="text-slate-500 mt-1">จัดการคำขอลาออกและคืนเงินสมาชิก</p>
        </div>
        <Link
          href="/admin/members/resign/new"
          className="px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all"
        >
          + ยื่นคำขอลาออก
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">รอพิจารณา</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{stats.pendingResign}</p>
          <p className="text-xs text-amber-500">คำขอ</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">กำลังดำเนินการ</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{stats.processing}</p>
          <p className="text-xs text-blue-500">คำขอ</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">ดำเนินการแล้ว (ปีนี้)</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{stats.completed}</p>
          <p className="text-xs text-emerald-500">คน</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
          <p className="text-sm text-violet-600">ยอดคืนเงินรวม</p>
          <p className="text-3xl font-bold text-violet-700 mt-1">{(stats.refundAmount / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-violet-500">บาท</p>
        </div>
      </div>

      {/* Resignation Process */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">ขั้นตอนการลาออก</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">1</div>
            <p className="font-medium">ยื่นคำขอ</p>
            <p className="text-slate-300 text-sm">กรอกใบลาออก</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">2</div>
            <p className="font-medium">ตรวจสอบภาระ</p>
            <p className="text-slate-300 text-sm">หนี้/ค้ำประกัน</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">3</div>
            <p className="font-medium">อนุมัติ</p>
            <p className="text-slate-300 text-sm">คณะกรรมการ</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">4</div>
            <p className="font-medium">คืนเงิน</p>
            <p className="text-slate-300 text-sm">หุ้น+เงินฝาก</p>
          </div>
        </div>
      </div>

      {/* Refund Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">คืนทุนเรือนหุ้น</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">8.5M</p>
          <p className="text-xs text-slate-400">เดือนนี้</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">คืนเงินฝาก</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">3.2M</p>
          <p className="text-xs text-slate-400">เดือนนี้</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">หักชำระหนี้</p>
          <p className="text-2xl font-bold text-red-600 mt-1">0.8M</p>
          <p className="text-xs text-slate-400">เดือนนี้</p>
        </div>
      </div>

      {/* Tabs and Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 23 },
            { id: 'pending', name: 'รอพิจารณา', count: 15 },
            { id: 'processing', name: 'กำลังดำเนินการ', count: 8 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedTab === tab.id
                  ? 'border-slate-600 text-slate-800'
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เหตุผล</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ทุนเรือนหุ้น</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เงินฝาก</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">หนี้คงเหลือ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่ยื่น</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {resignations.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-slate-600">{item.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{item.memberName}</p>
                    <p className="text-sm text-slate-500">{item.memberId}</p>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.reason}</td>
                  <td className="px-4 py-4 text-right font-medium text-indigo-600">{item.shares.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-medium text-emerald-600">{item.deposits.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-medium text-red-600">{item.loans > 0 ? item.loans.toLocaleString() : '-'}</td>
                  <td className="px-4 py-4 text-center text-sm text-slate-500">{item.applyDate}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                      item.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {item.status === 'pending' ? 'รอพิจารณา' : item.status === 'processing' ? 'กำลังดำเนินการ' : 'อนุมัติแล้ว'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg" title="ดูรายละเอียด">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
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
