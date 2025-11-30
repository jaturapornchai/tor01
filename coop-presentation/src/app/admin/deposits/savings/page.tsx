"use client";

import { useState } from "react";
import Link from "next/link";

const savingsAccounts = [
  { id: 'S001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', balance: 125000, interestEarned: 2450, lastTransaction: '2024-01-15', status: 'active' },
  { id: 'S002', memberId: 'M008', memberName: 'นางสาวมะลิ หอมหวาน', balance: 85000, interestEarned: 1680, lastTransaction: '2024-01-14', status: 'active' },
  { id: 'S003', memberId: 'M003', memberName: 'นายสมศักดิ์ ดีใจ', balance: 250000, interestEarned: 4850, lastTransaction: '2024-01-10', status: 'active' },
  { id: 'S004', memberId: 'M012', memberName: 'นางวิไล รักษ์ดี', balance: 45000, interestEarned: 890, lastTransaction: '2024-01-08', status: 'dormant' },
];

export default function SavingsDepositPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = {
    totalAccounts: 2458,
    totalBalance: 185000000,
    interestRate: 2.50,
    avgBalance: 75285,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เงินฝากออมทรัพย์</h1>
          <p className="text-slate-500 mt-1">บัญชีออมทรัพย์ทั่วไป ฝาก-ถอนได้ตลอด อัตราดอกเบี้ย 2.50% ต่อปี</p>
        </div>
        <Link
          href="/admin/deposits/savings/new"
          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + เปิดบัญชีใหม่
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
          <p className="text-2xl font-bold text-emerald-600 mt-1">{(stats.totalBalance / 1000000).toFixed(0)}M</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">อัตราดอกเบี้ย</p>
          <p className="text-2xl font-bold text-teal-600 mt-1">{stats.interestRate}%</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ยอดเฉลี่ยต่อบัญชี</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.avgBalance.toLocaleString()}</p>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-emerald-100 text-sm">อัตราดอกเบี้ย</p>
            <p className="text-3xl font-bold">2.50%</p>
            <p className="text-emerald-200 text-sm">ต่อปี</p>
          </div>
          <div>
            <p className="text-emerald-100 text-sm">เงินฝากขั้นต่ำ</p>
            <p className="text-3xl font-bold">100</p>
            <p className="text-emerald-200 text-sm">บาท</p>
          </div>
          <div>
            <p className="text-emerald-100 text-sm">การถอน</p>
            <p className="text-3xl font-bold">ไม่จำกัด</p>
            <p className="text-emerald-200 text-sm">ครั้ง/เดือน</p>
          </div>
          <div>
            <p className="text-emerald-100 text-sm">จ่ายดอกเบี้ย</p>
            <p className="text-3xl font-bold">ทุก 6</p>
            <p className="text-emerald-200 text-sm">เดือน</p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="ค้นหาเลขบัญชี, รหัสสมาชิก, ชื่อ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500">
            <option>สถานะทั้งหมด</option>
            <option>ใช้งานอยู่</option>
            <option>ไม่มีความเคลื่อนไหว</option>
          </select>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            ค้นหา
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขบัญชี</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">สมาชิก</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ยอดเงินฝาก</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ดอกเบี้ยสะสม</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ทำรายการล่าสุด</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {savingsAccounts.map((account) => (
              <tr key={account.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-emerald-600">{account.id}</td>
                <td className="px-4 py-4">
                  <p className="font-medium text-slate-800">{account.memberName}</p>
                  <p className="text-sm text-slate-500">{account.memberId}</p>
                </td>
                <td className="px-4 py-4 text-right font-semibold text-slate-800">{account.balance.toLocaleString()}</td>
                <td className="px-4 py-4 text-right text-emerald-600 font-medium">+{account.interestEarned.toLocaleString()}</td>
                <td className="px-4 py-4 text-center text-sm text-slate-500">{account.lastTransaction}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    account.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {account.status === 'active' ? 'ใช้งาน' : 'ไม่มีความเคลื่อนไหว'}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="ฝากเงิน">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    <button className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg" title="ถอนเงิน">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
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
  );
}
