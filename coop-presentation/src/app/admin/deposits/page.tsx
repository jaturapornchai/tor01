"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data
const depositAccounts = [
  { id: "D001", member: "นายวิชัย รุ่งเรือง", memberId: "M67001", type: "ออมทรัพย์", balance: 125000, rate: 2.5, lastTransaction: "15 ม.ค. 67" },
  { id: "D002", member: "นางสาวพิมพ์ใจ สดใส", memberId: "M67002", type: "ออมทรัพย์", balance: 85000, rate: 2.5, lastTransaction: "14 ม.ค. 67" },
  { id: "D003", member: "นายประเสริฐ มั่นคง", memberId: "M67003", type: "ประจำ 12 เดือน", balance: 500000, rate: 3.25, lastTransaction: "14 ม.ค. 67" },
  { id: "D004", member: "นางมาลี ชื่นใจ", memberId: "M67004", type: "ออมทรัพย์", balance: 42000, rate: 2.5, lastTransaction: "13 ม.ค. 67" },
  { id: "D005", member: "นายสมศักดิ์ ใจซื่อ", memberId: "M67005", type: "ประจำ 24 เดือน", balance: 300000, rate: 3.5, lastTransaction: "12 ม.ค. 67" },
  { id: "D006", member: "นางสมหญิง รักดี", memberId: "M66050", type: "ออมทรัพย์", balance: 180000, rate: 2.5, lastTransaction: "20 ธ.ค. 66" },
];

const recentTransactions = [
  { id: "TXN001", type: "deposit", account: "D001", member: "นายวิชัย รุ่งเรือง", amount: 25000, date: "15 ม.ค. 67 09:30", channel: "เคาน์เตอร์" },
  { id: "TXN002", type: "withdraw", account: "D002", member: "นางสาวพิมพ์ใจ สดใส", amount: 10000, date: "14 ม.ค. 67 14:20", channel: "ATM" },
  { id: "TXN003", type: "deposit", account: "D003", member: "นายประเสริฐ มั่นคง", amount: 100000, date: "14 ม.ค. 67 10:15", channel: "โอนเงิน" },
  { id: "TXN004", type: "interest", account: "D005", member: "นายสมศักดิ์ ใจซื่อ", amount: 875, date: "12 ม.ค. 67 00:01", channel: "ระบบ" },
  { id: "TXN005", type: "deposit", account: "D006", member: "นางสมหญิง รักดี", amount: 50000, date: "20 ธ.ค. 66 11:45", channel: "เคาน์เตอร์" },
];

export default function DepositsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">บัญชีเงินฝาก</h1>
          <p className="text-slate-500 mt-1">จัดการบัญชีเงินรับฝากของสมาชิก</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <Link
            href="/admin/deposits/savings"
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            รับฝากเงิน
          </Link>
          <Link
            href="/admin/deposits/withdraw"
            className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ถอนเงิน
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">+1.8%</span>
          </div>
          <div className="text-2xl font-bold text-slate-800">324.56 <span className="text-sm font-normal text-slate-500">ล้าน</span></div>
          <div className="text-sm text-slate-500 mt-1">เงินฝากรวม</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800">245.68 <span className="text-sm font-normal text-slate-500">ล้าน</span></div>
          <div className="text-sm text-slate-500 mt-1">ออมทรัพย์ (76%)</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800">78.88 <span className="text-sm font-normal text-slate-500">ล้าน</span></div>
          <div className="text-sm text-slate-500 mt-1">ฝากประจำ (24%)</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800">8,456</div>
          <div className="text-sm text-slate-500 mt-1">บัญชีทั้งหมด</div>
        </div>
      </div>

      {/* Deposit Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/admin/deposits/savings"
          className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-5 text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <svg className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">เงินฝากออมทรัพย์</h3>
          <p className="text-white/80 text-sm mt-1">ดอกเบี้ย 2.50% ต่อปี</p>
          <div className="mt-4 pt-4 border-t border-white/20 text-sm">
            ฝาก-ถอนได้ตลอด • ไม่จำกัดจำนวนครั้ง
          </div>
        </Link>

        <Link
          href="/admin/deposits/fixed"
          className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <svg className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">เงินฝากประจำ</h3>
          <p className="text-white/80 text-sm mt-1">ดอกเบี้ยสูงสุด 3.50% ต่อปี</p>
          <div className="mt-4 pt-4 border-t border-white/20 text-sm">
            ฝากประจำ 3/6/12/24 เดือน
          </div>
        </Link>

        <Link
          href="/admin/deposits/withdraw"
          className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-5 text-white hover:shadow-lg hover:shadow-slate-500/30 transition-all group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <svg className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">ถอนเงิน</h3>
          <p className="text-white/80 text-sm mt-1">บันทึกรายการถอนเงิน</p>
          <div className="mt-4 pt-4 border-t border-white/20 text-sm">
            ถอนเงินสด • โอนเงิน
          </div>
        </Link>
      </div>

      {/* Account Search */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="ค้นหาด้วยชื่อ, รหัสสมาชิก, เลขบัญชี..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white"
          >
            <option value="all">ทุกประเภท</option>
            <option value="savings">ออมทรัพย์</option>
            <option value="fixed">ฝากประจำ</option>
          </select>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account List */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">รายการบัญชีล่าสุด</h3>
            <Link href="/admin/deposits/savings" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {depositAccounts.map((account) => (
              <div key={account.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    account.type === "ออมทรัพย์" ? "bg-emerald-100" : "bg-purple-100"
                  }`}>
                    <svg className={`w-5 h-5 ${account.type === "ออมทรัพย์" ? "text-emerald-600" : "text-purple-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {account.type === "ออมทรัพย์" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      )}
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-slate-800">{account.member}</p>
                    <p className="text-xs text-slate-400">{account.id} • {account.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">{account.balance.toLocaleString()}</p>
                  <p className="text-xs text-slate-400">ดอกเบี้ย {account.rate}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">รายการเคลื่อนไหวล่าสุด</h3>
            <Link href="/admin/deposits/savings" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentTransactions.map((txn) => (
              <div key={txn.id} className="p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      txn.type === "deposit" ? "bg-emerald-100" :
                      txn.type === "withdraw" ? "bg-red-100" :
                      "bg-blue-100"
                    }`}>
                      <svg className={`w-5 h-5 ${
                        txn.type === "deposit" ? "text-emerald-600" :
                        txn.type === "withdraw" ? "text-red-600" :
                        "text-blue-600"
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {txn.type === "deposit" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        ) : txn.type === "withdraw" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        )}
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-slate-800">{txn.member}</p>
                      <p className="text-xs text-slate-400">{txn.date} • {txn.channel}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      txn.type === "deposit" || txn.type === "interest" ? "text-emerald-600" : "text-red-600"
                    }`}>
                      {txn.type === "deposit" || txn.type === "interest" ? "+" : "-"}{txn.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-400">
                      {txn.type === "deposit" ? "ฝากเงิน" : txn.type === "withdraw" ? "ถอนเงิน" : "ดอกเบี้ย"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
