"use client";

import { useState } from "react";
import Link from "next/link";

const fixedDeposits = [
  { id: 'F001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', principal: 500000, term: 12, rate: 3.25, maturityDate: '2024-12-15', interest: 16250, status: 'active' },
  { id: 'F002', memberId: 'M015', memberName: 'นางสาวปราณี สุขใจ', principal: 200000, term: 24, rate: 3.50, maturityDate: '2025-06-20', interest: 14000, status: 'active' },
  { id: 'F003', memberId: 'M022', memberName: 'นายประเสริฐ มั่งมี', principal: 1000000, term: 36, rate: 3.75, maturityDate: '2026-01-10', interest: 112500, status: 'active' },
  { id: 'F004', memberId: 'M008', memberName: 'นางสาวมะลิ หอมหวาน', principal: 100000, term: 6, rate: 3.00, maturityDate: '2024-03-01', interest: 1500, status: 'maturing' },
];

export default function FixedDepositPage() {
  const [selectedTerm, setSelectedTerm] = useState('all');

  const stats = {
    totalAccounts: 856,
    totalDeposit: 425000000,
    avgDeposit: 496495,
    maturingThisMonth: 45,
  };

  const termRates = [
    { term: 3, rate: 2.75, minAmount: 10000 },
    { term: 6, rate: 3.00, minAmount: 10000 },
    { term: 12, rate: 3.25, minAmount: 10000 },
    { term: 24, rate: 3.50, minAmount: 10000 },
    { term: 36, rate: 3.75, minAmount: 10000 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เงินฝากประจำ</h1>
          <p className="text-slate-500 mt-1">เงินฝากประจำดอกเบี้ยสูง 2.75% - 3.75% ต่อปี ตามระยะเวลาฝาก</p>
        </div>
        <Link
          href="/admin/deposits/fixed/new"
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + เปิดบัญชีเงินฝากประจำ
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">บัญชีทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.totalAccounts.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ยอดเงินฝากรวม</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{(stats.totalDeposit / 1000000).toFixed(0)}M</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">เฉลี่ยต่อบัญชี</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{stats.avgDeposit.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ครบกำหนดเดือนนี้</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">{stats.maturingThisMonth}</p>
        </div>
      </div>

      {/* Interest Rate Table */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">อัตราดอกเบี้ยเงินฝากประจำ</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {termRates.map((item) => (
            <div key={item.term} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-blue-100 text-sm">{item.term} เดือน</p>
              <p className="text-3xl font-bold mt-1">{item.rate}%</p>
              <p className="text-blue-200 text-xs mt-1">ขั้นต่ำ {item.minAmount.toLocaleString()} บาท</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 856 },
            { id: 'active', name: 'ใช้งานอยู่', count: 811 },
            { id: 'maturing', name: 'ใกล้ครบกำหนด', count: 45 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTerm(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedTerm === tab.id
                  ? 'border-blue-500 text-blue-600'
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขบัญชี</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">สมาชิก</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เงินต้น</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ระยะเวลา</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">อัตราดอกเบี้ย</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ดอกเบี้ยที่จะได้รับ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันครบกำหนด</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {fixedDeposits.map((deposit) => (
                <tr key={deposit.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-blue-600">{deposit.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{deposit.memberName}</p>
                    <p className="text-sm text-slate-500">{deposit.memberId}</p>
                  </td>
                  <td className="px-4 py-4 text-right font-semibold text-slate-800">{deposit.principal.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center text-slate-600">{deposit.term} เดือน</td>
                  <td className="px-4 py-4 text-center font-medium text-blue-600">{deposit.rate}%</td>
                  <td className="px-4 py-4 text-right text-emerald-600 font-medium">+{deposit.interest.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center text-sm text-slate-500">{deposit.maturityDate}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      deposit.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {deposit.status === 'active' ? 'ใช้งาน' : 'ใกล้ครบกำหนด'}
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
