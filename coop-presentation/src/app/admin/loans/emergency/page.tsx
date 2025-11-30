"use client";

import { useState } from "react";
import Link from "next/link";

const mockLoans = [
  { id: 'E001', memberId: 'M002', memberName: 'นางสมหญิง รักดี', amount: 30000, balance: 15000, rate: 6.50, term: 12, status: 'active', date: '2024-01-10' },
  { id: 'E002', memberId: 'M004', memberName: 'นางสาวสมใจ จริงใจ', amount: 50000, balance: 35000, rate: 6.50, term: 12, status: 'active', date: '2024-01-08' },
  { id: 'E003', memberId: 'M007', memberName: 'นายวิชัย มั่นคง', amount: 20000, balance: 0, rate: 6.50, term: 6, status: 'completed', date: '2023-08-15' },
];

export default function EmergencyLoanPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เงินกู้ฉุกเฉิน</h1>
          <p className="text-slate-500 mt-1">สินเชื่อฉุกเฉินอนุมัติเร็ว อัตราดอกเบี้ย 6.50% ต่อปี</p>
        </div>
        <Link
          href="/admin/loans/emergency/new"
          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + ยื่นกู้ฉุกเฉิน
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">สัญญากู้ทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">458</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ยอดเงินกู้รวม</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">15.8M</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">รออนุมัติ</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">12</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">วงเงินสูงสุด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">50,000</p>
        </div>
      </div>

      {/* Loan Info */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-amber-100 text-sm">อัตราดอกเบี้ย</p>
            <p className="text-3xl font-bold">6.50%</p>
            <p className="text-amber-200 text-sm">ต่อปี</p>
          </div>
          <div>
            <p className="text-amber-100 text-sm">วงเงินสูงสุด</p>
            <p className="text-3xl font-bold">50,000</p>
            <p className="text-amber-200 text-sm">บาท</p>
          </div>
          <div>
            <p className="text-amber-100 text-sm">ระยะเวลาผ่อน</p>
            <p className="text-3xl font-bold">12</p>
            <p className="text-amber-200 text-sm">งวดสูงสุด</p>
          </div>
          <div>
            <p className="text-amber-100 text-sm">อนุมัติภายใน</p>
            <p className="text-3xl font-bold">1</p>
            <p className="text-amber-200 text-sm">วันทำการ</p>
          </div>
        </div>
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
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">วงเงินกู้</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">คงเหลือ</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockLoans.map((loan) => (
              <tr key={loan.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-amber-600">{loan.id}</td>
                <td className="px-4 py-4">
                  <p className="font-medium text-slate-800">{loan.memberName}</p>
                  <p className="text-sm text-slate-500">{loan.memberId}</p>
                </td>
                <td className="px-4 py-4 text-right font-semibold">{loan.amount.toLocaleString()}</td>
                <td className="px-4 py-4 text-right text-emerald-600 font-semibold">{loan.balance.toLocaleString()}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    loan.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {loan.status === 'active' ? 'กำลังผ่อน' : 'ปิดบัญชี'}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <button className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  );
}
