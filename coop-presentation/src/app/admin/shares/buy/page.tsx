"use client";

import { useState } from "react";
import Link from "next/link";

const recentPurchases = [
  { id: 'SH001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', currentShares: 850, addShares: 50, amount: 5000, method: 'หักเงินเดือน', date: '2024-01-15', status: 'completed' },
  { id: 'SH002', memberId: 'M008', memberName: 'นางสาวมะลิ หอมหวาน', currentShares: 250, addShares: 100, amount: 10000, method: 'ชำระเงินสด', date: '2024-01-14', status: 'completed' },
  { id: 'SH003', memberId: 'M015', memberName: 'นางสาวปราณี สุขใจ', currentShares: 1200, addShares: 200, amount: 20000, method: 'โอนเงิน', date: '2024-01-14', status: 'pending' },
];

export default function ShareBuyPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = {
    totalShares: 2850000,
    totalValue: 285000000,
    monthlyContribution: 4500000,
    avgSharesPerMember: 334,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ซื้อหุ้นเพิ่ม</h1>
          <p className="text-slate-500 mt-1">รับซื้อหุ้นเพิ่มจากสมาชิก หุ้นละ 100 บาท</p>
        </div>
        <Link
          href="/admin/shares/buy/new"
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all"
        >
          + ซื้อหุ้นเพิ่ม
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">หุ้นรวมทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.totalShares.toLocaleString()}</p>
          <p className="text-xs text-slate-400">หุ้น</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">มูลค่ารวม</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{(stats.totalValue / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-slate-400">บาท</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ซื้อหุ้นเดือนนี้</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{(stats.monthlyContribution / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-slate-400">บาท</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">เฉลี่ยต่อสมาชิก</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.avgSharesPerMember}</p>
          <p className="text-xs text-slate-400">หุ้น</p>
        </div>
      </div>

      {/* Share Info */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-indigo-100 text-sm">ราคาหุ้น</p>
            <p className="text-3xl font-bold">100</p>
            <p className="text-indigo-200 text-sm">บาท/หุ้น</p>
          </div>
          <div>
            <p className="text-indigo-100 text-sm">ซื้อขั้นต่ำ</p>
            <p className="text-3xl font-bold">10</p>
            <p className="text-indigo-200 text-sm">หุ้น (1,000 บาท)</p>
          </div>
          <div>
            <p className="text-indigo-100 text-sm">ซื้อสูงสุด/เดือน</p>
            <p className="text-3xl font-bold">500</p>
            <p className="text-indigo-200 text-sm">หุ้น (50,000 บาท)</p>
          </div>
          <div>
            <p className="text-indigo-100 text-sm">เงินปันผลปีก่อน</p>
            <p className="text-3xl font-bold">6.25%</p>
            <p className="text-indigo-200 text-sm">ต่อปี</p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border-2 border-indigo-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">หักเงินเดือน</p>
              <p className="text-sm text-slate-500">หักอัตโนมัติทุกเดือน</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-indigo-600">75%</p>
          <p className="text-xs text-slate-400">ของการซื้อหุ้นทั้งหมด</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm-2-4h.01" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">ชำระเงินสด</p>
              <p className="text-sm text-slate-500">ชำระที่สหกรณ์</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-emerald-600">15%</p>
          <p className="text-xs text-slate-400">ของการซื้อหุ้นทั้งหมด</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">โอนเงิน</p>
              <p className="text-sm text-slate-500">โอนผ่านธนาคาร</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-600">10%</p>
          <p className="text-xs text-slate-400">ของการซื้อหุ้นทั้งหมด</p>
        </div>
      </div>

      {/* Recent Purchases Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800">รายการซื้อหุ้นล่าสุด</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขรายการ</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">สมาชิก</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">หุ้นเดิม</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ซื้อเพิ่ม</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">จำนวนเงิน</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ช่องทาง</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentPurchases.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-indigo-600">{item.id}</td>
                <td className="px-4 py-4">
                  <p className="font-medium text-slate-800">{item.memberName}</p>
                  <p className="text-sm text-slate-500">{item.memberId}</p>
                </td>
                <td className="px-4 py-4 text-right text-slate-600">{item.currentShares}</td>
                <td className="px-4 py-4 text-right font-medium text-emerald-600">+{item.addShares}</td>
                <td className="px-4 py-4 text-right font-semibold">{item.amount.toLocaleString()}</td>
                <td className="px-4 py-4 text-center text-sm text-slate-600">{item.method}</td>
                <td className="px-4 py-4 text-center text-sm text-slate-500">{item.date}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    item.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {item.status === 'completed' ? 'สำเร็จ' : 'รอดำเนินการ'}
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
