"use client";

import { useState } from "react";
import Link from "next/link";

const mockLoans = [
  { id: 'S001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', amount: 1500000, balance: 1200000, purpose: 'ซื้อรถยนต์', rate: 6.25, term: 84, status: 'active' },
  { id: 'S002', memberId: 'M005', memberName: 'นายประสิทธิ์ ทำดี', amount: 2000000, balance: 1850000, purpose: 'ปรับปรุงบ้าน', rate: 6.25, term: 120, status: 'active' },
  { id: 'S003', memberId: 'M003', memberName: 'นายสมศักดิ์ ดีใจ', amount: 800000, balance: 0, purpose: 'การศึกษาบุตร', rate: 6.25, term: 60, status: 'completed' },
];

export default function SpecialLoanPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เงินกู้พิเศษ</h1>
          <p className="text-slate-500 mt-1">สินเชื่อเพื่อวัตถุประสงค์พิเศษ อัตราดอกเบี้ย 6.25% ต่อปี</p>
        </div>
        <Link
          href="/admin/loans/special/new"
          className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + ยื่นกู้พิเศษ
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">สัญญากู้ทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">325</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ยอดเงินกู้รวม</p>
          <p className="text-2xl font-bold text-violet-600 mt-1">285M</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">รออนุมัติ</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">8</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">วงเงินสูงสุด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">3M</p>
        </div>
      </div>

      {/* Loan Info */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-violet-100 text-sm">อัตราดอกเบี้ย</p>
            <p className="text-3xl font-bold">6.25%</p>
            <p className="text-violet-200 text-sm">ต่อปี</p>
          </div>
          <div>
            <p className="text-violet-100 text-sm">วงเงินสูงสุด</p>
            <p className="text-3xl font-bold">3,000,000</p>
            <p className="text-violet-200 text-sm">บาท</p>
          </div>
          <div>
            <p className="text-violet-100 text-sm">ระยะเวลาผ่อน</p>
            <p className="text-3xl font-bold">180</p>
            <p className="text-violet-200 text-sm">งวดสูงสุด</p>
          </div>
          <div>
            <p className="text-violet-100 text-sm">ผู้ค้ำประกัน</p>
            <p className="text-3xl font-bold">3-5</p>
            <p className="text-violet-200 text-sm">คน หรือหลักทรัพย์</p>
          </div>
        </div>
      </div>

      {/* Purpose Types */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'ซื้อรถยนต์', count: 85, icon: '🚗' },
          { name: 'ปรับปรุงบ้าน', count: 120, icon: '🏠' },
          { name: 'การศึกษา', count: 65, icon: '📚' },
          { name: 'อื่นๆ', count: 55, icon: '📋' },
        ].map((item) => (
          <div key={item.name} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="font-medium text-slate-800">{item.name}</p>
            <p className="text-sm text-slate-500">{item.count} สัญญา</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <input
            type="text"
            placeholder="ค้นหา..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-72 px-4 py-2 border border-slate-300 rounded-lg text-sm"
          />
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขสัญญา</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้กู้</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">วัตถุประสงค์</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">วงเงินกู้</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">คงเหลือ</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockLoans.map((loan) => (
              <tr key={loan.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-violet-600">{loan.id}</td>
                <td className="px-4 py-4">
                  <p className="font-medium text-slate-800">{loan.memberName}</p>
                  <p className="text-sm text-slate-500">{loan.memberId}</p>
                </td>
                <td className="px-4 py-4 text-sm text-slate-600">{loan.purpose}</td>
                <td className="px-4 py-4 text-right font-semibold">{loan.amount.toLocaleString()}</td>
                <td className="px-4 py-4 text-right text-emerald-600 font-semibold">{loan.balance.toLocaleString()}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    loan.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {loan.status === 'active' ? 'กำลังผ่อน' : 'ปิดบัญชี'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
