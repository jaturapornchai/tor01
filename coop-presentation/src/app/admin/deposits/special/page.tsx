"use client";

import { useState } from "react";
import Link from "next/link";

const specialDeposits = [
  { id: 'SP001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', type: 'ออมทรัพย์ทวีสิน', monthlyDeposit: 5000, totalDeposit: 60000, term: 24, rate: 4.00, status: 'active' },
  { id: 'SP002', memberId: 'M022', memberName: 'นายประเสริฐ มั่งมี', type: 'เกษียณสุข', monthlyDeposit: 10000, totalDeposit: 180000, term: 60, rate: 4.50, status: 'active' },
  { id: 'SP003', memberId: 'M015', memberName: 'นางสาวปราณี สุขใจ', type: 'ออมเพื่อลูก', monthlyDeposit: 2000, totalDeposit: 48000, term: 36, rate: 4.25, status: 'active' },
  { id: 'SP004', memberId: 'M045', memberName: 'นางวรรณา ดีมาก', type: 'สะสมทรัพย์', monthlyDeposit: 3000, totalDeposit: 36000, term: 12, rate: 3.75, status: 'active' },
];

export default function SpecialDepositPage() {
  const [selectedType, setSelectedType] = useState('all');

  const stats = {
    totalAccounts: 1245,
    totalDeposit: 285000000,
    avgMonthly: 4500,
    newThisMonth: 58,
  };

  const depositTypes = [
    { name: 'ออมทรัพย์ทวีสิน', desc: 'ฝากประจำทุกเดือน รับดอกเบี้ยสูง', rate: '4.00%', term: '12-60 เดือน', minMonthly: 1000, count: 456, color: 'from-violet-500 to-purple-600' },
    { name: 'เกษียณสุข', desc: 'เตรียมความพร้อมวัยเกษียณ', rate: '4.50%', term: '36-120 เดือน', minMonthly: 2000, count: 312, color: 'from-blue-500 to-cyan-600' },
    { name: 'ออมเพื่อลูก', desc: 'ออมเงินเพื่อการศึกษาบุตร', rate: '4.25%', term: '24-60 เดือน', minMonthly: 500, count: 289, color: 'from-pink-500 to-rose-600' },
    { name: 'สะสมทรัพย์', desc: 'สะสมเงินแบบยืดหยุ่น', rate: '3.75%', term: '6-36 เดือน', minMonthly: 500, count: 188, color: 'from-amber-500 to-orange-600' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เงินฝากพิเศษ</h1>
          <p className="text-slate-500 mt-1">โปรแกรมการออมพิเศษ ดอกเบี้ยสูงถึง 4.50% ต่อปี</p>
        </div>
        <Link
          href="/admin/deposits/special/new"
          className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + สมัครออมพิเศษ
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
          <p className="text-2xl font-bold text-violet-600 mt-1">{(stats.totalDeposit / 1000000).toFixed(0)}M</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ออมเฉลี่ย/เดือน</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">{stats.avgMonthly.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">สมัครใหม่เดือนนี้</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{stats.newThisMonth}</p>
        </div>
      </div>

      {/* Deposit Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {depositTypes.map((type) => (
          <div key={type.name} className={`bg-gradient-to-r ${type.color} rounded-xl p-6 text-white`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{type.name}</h3>
                <p className="text-white/80 text-sm mt-1">{type.desc}</p>
              </div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">{type.count} บัญชี</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-white/70 text-xs">อัตราดอกเบี้ย</p>
                <p className="text-xl font-bold">{type.rate}</p>
              </div>
              <div>
                <p className="text-white/70 text-xs">ระยะเวลา</p>
                <p className="text-xl font-bold">{type.term}</p>
              </div>
              <div>
                <p className="text-white/70 text-xs">ขั้นต่ำ/เดือน</p>
                <p className="text-xl font-bold">{type.minMonthly.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', name: 'ทั้งหมด' },
            { id: 'taweesin', name: 'ออมทรัพย์ทวีสิน' },
            { id: 'retire', name: 'เกษียณสุข' },
            { id: 'child', name: 'ออมเพื่อลูก' },
            { id: 'accumulate', name: 'สะสมทรัพย์' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedType(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedType === tab.id
                  ? 'border-violet-500 text-violet-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.name}
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
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ออม/เดือน</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ยอดสะสม</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ระยะเวลา</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">อัตราดอกเบี้ย</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {specialDeposits.map((deposit) => (
                <tr key={deposit.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-violet-600">{deposit.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{deposit.memberName}</p>
                    <p className="text-sm text-slate-500">{deposit.memberId}</p>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded text-xs font-medium">
                      {deposit.type}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-slate-600">{deposit.monthlyDeposit.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-semibold text-slate-800">{deposit.totalDeposit.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center text-slate-600">{deposit.term} เดือน</td>
                  <td className="px-4 py-4 text-center font-medium text-violet-600">{deposit.rate}%</td>
                  <td className="px-4 py-4 text-center">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                      ใช้งาน
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="p-2 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg" title="ดูรายละเอียด">
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
