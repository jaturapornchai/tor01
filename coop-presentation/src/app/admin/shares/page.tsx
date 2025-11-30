"use client";

import { useState } from "react";
import Link from "next/link";

// Mock data for shares
const mockShareData = [
  { id: 1, memberId: 'M001', memberName: 'นายสมชาย ใจดี', shares: 500, value: 50000, monthlyContribution: 1000, status: 'active', joinDate: '2020-01-15' },
  { id: 2, memberId: 'M002', memberName: 'นางสมหญิง รักดี', shares: 350, value: 35000, monthlyContribution: 800, status: 'active', joinDate: '2019-05-20' },
  { id: 3, memberId: 'M003', memberName: 'นายสมศักดิ์ ดีใจ', shares: 800, value: 80000, monthlyContribution: 1500, status: 'active', joinDate: '2018-03-10' },
  { id: 4, memberId: 'M004', memberName: 'นางสาวสมใจ จริงใจ', shares: 200, value: 20000, monthlyContribution: 500, status: 'resigned', joinDate: '2021-07-01' },
  { id: 5, memberId: 'M005', memberName: 'นายประสิทธิ์ ทำดี', shares: 1200, value: 120000, monthlyContribution: 2000, status: 'active', joinDate: '2015-11-25' },
  { id: 6, memberId: 'M006', memberName: 'นางสาวพิมพ์ใจ สุขสม', shares: 450, value: 45000, monthlyContribution: 1000, status: 'active', joinDate: '2020-08-14' },
];

// Stats data
const shareStats = {
  totalShares: 125000,
  totalValue: 12500000,
  totalMembers: 1250,
  averagePerMember: 10000,
  sharePrice: 100,
  minShares: 10,
  maxShares: 5000,
};

export default function SharesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const handleViewDetails = (memberId: string, memberName: string) => {
    alert(`ดูรายละเอียดหุ้นของ: ${memberName} (${memberId})`);
  };

  const handleBuyShares = (memberId: string, memberName: string) => {
    alert(`เปิดหน้าต่างซื้อหุ้นเพิ่มสำหรับ: ${memberName}`);
  };

  const handleWithdrawShares = (memberId: string, memberName: string) => {
    alert(`เปิดหน้าต่างถอนหุ้นสำหรับ: ${memberName}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredData = mockShareData.filter(item => {
    const matchesSearch = item.memberName.includes(searchTerm) || item.memberId.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ทะเบียนทุนเรือนหุ้น</h1>
          <p className="text-slate-500 mt-1">จัดการหุ้นสมาชิกและทุนเรือนหุ้นของสหกรณ์</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              const data = mockShareData.map(item => `${item.memberId},${item.memberName},${item.shares},${item.value}`).join('\n');
              const blob = new Blob([`รหัส,ชื่อ,หุ้น,มูลค่า\n${data}`], { type: 'text/csv' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'shares-data.csv';
              a.click();
            }}
            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            นำออก Excel
          </button>
          <Link
            href="/admin/shares/buy/new"
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 font-medium text-sm flex items-center gap-2 shadow-lg shadow-indigo-500/30"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            บันทึกซื้อหุ้น
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500">หุ้นทั้งหมด</p>
              <p className="text-2xl font-bold text-slate-800">{shareStats.totalShares.toLocaleString()}</p>
              <p className="text-xs text-slate-400">หุ้น</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500">มูลค่าทุนเรือนหุ้น</p>
              <p className="text-2xl font-bold text-slate-800">{(shareStats.totalValue / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-slate-400">บาท ({shareStats.totalValue.toLocaleString()})</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500">สมาชิกถือหุ้น</p>
              <p className="text-2xl font-bold text-slate-800">{shareStats.totalMembers.toLocaleString()}</p>
              <p className="text-xs text-slate-400">คน</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-slate-500">เฉลี่ยต่อคน</p>
              <p className="text-2xl font-bold text-slate-800">{shareStats.averagePerMember.toLocaleString()}</p>
              <p className="text-xs text-slate-400">บาท</p>
            </div>
          </div>
        </div>
      </div>

      {/* Share Settings Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm">ราคาหุ้น</p>
              <p className="text-3xl font-bold mt-1">{shareStats.sharePrice}</p>
              <p className="text-indigo-200 text-sm">บาท / หุ้น</p>
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">หุ้นขั้นต่ำ</p>
              <p className="text-3xl font-bold mt-1">{shareStats.minShares}</p>
              <p className="text-emerald-200 text-sm">หุ้น (เริ่มต้น)</p>
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-rose-100 text-sm">หุ้นสูงสุด</p>
              <p className="text-3xl font-bold mt-1">{shareStats.maxShares.toLocaleString()}</p>
              <p className="text-rose-200 text-sm">หุ้น / คน</p>
            </div>
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="ค้นหาเลขสมาชิก, ชื่อ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white"
          >
            <option value="all">ทุกสถานะ</option>
            <option value="active">สมาชิกปกติ</option>
            <option value="resigned">ลาออก</option>
          </select>
        </div>
      </div>

      {/* Share Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  สมาชิก
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  วันที่สมัคร
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  จำนวนหุ้น
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  มูลค่า (บาท)
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  ส่งรายเดือน
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  สถานะ
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {item.memberName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{item.memberName}</p>
                        <p className="text-sm text-slate-500">{item.memberId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600">
                    {new Date(item.joinDate).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span className="font-semibold text-slate-800">{item.shares.toLocaleString()}</span>
                    <span className="text-slate-400 text-sm"> หุ้น</span>
                  </td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-600">
                    {item.value.toLocaleString()}
                  </td>
                  <td className="px-4 py-4 text-right text-sm text-slate-600">
                    {item.monthlyContribution.toLocaleString()}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.status === 'active' ? 'ปกติ' : 'ลาออก'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button onClick={() => handleViewDetails(item.memberId, item.memberName)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="ดูรายละเอียด">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button onClick={() => handleBuyShares(item.memberId, item.memberName)} className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="ซื้อหุ้นเพิ่ม">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                      <button onClick={() => handleWithdrawShares(item.memberId, item.memberName)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="ถอนหุ้น">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            แสดง <span className="font-medium">{filteredData.length}</span> จาก <span className="font-medium">{mockShareData.length}</span> รายการ
          </p>
          <div className="flex items-center gap-2">
            <button onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-white disabled:opacity-50" disabled={currentPage === 1}>
              ก่อนหน้า
            </button>
            <button onClick={() => handlePageChange(1)} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${currentPage === 1 ? 'bg-indigo-600 text-white' : 'border border-slate-300 text-slate-600 hover:bg-white'}`}>
              1
            </button>
            <button onClick={() => handlePageChange(2)} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${currentPage === 2 ? 'bg-indigo-600 text-white' : 'border border-slate-300 text-slate-600 hover:bg-white'}`}>
              2
            </button>
            <button onClick={() => handlePageChange(3)} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${currentPage === 3 ? 'bg-indigo-600 text-white' : 'border border-slate-300 text-slate-600 hover:bg-white'}`}>
              3
            </button>
            <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-white">
              ถัดไป
            </button>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">รายการซื้อ/ถอนหุ้นล่าสุด</h2>
        <div className="space-y-3">
          {[
            { type: 'buy', member: 'นายสมชาย ใจดี', shares: 50, amount: 5000, date: '2024-01-15 10:30' },
            { type: 'buy', member: 'นางสมหญิง รักดี', shares: 20, amount: 2000, date: '2024-01-15 09:15' },
            { type: 'withdraw', member: 'นายสมศักดิ์ ดีใจ', shares: 100, amount: 10000, date: '2024-01-14 15:45' },
            { type: 'buy', member: 'นางสาวพิมพ์ใจ สุขสม', shares: 30, amount: 3000, date: '2024-01-14 14:20' },
          ].map((tx, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  tx.type === 'buy' ? 'bg-emerald-100' : 'bg-rose-100'
                }`}>
                  <svg className={`w-5 h-5 ${tx.type === 'buy' ? 'text-emerald-600' : 'text-rose-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {tx.type === 'buy' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    )}
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">{tx.member}</p>
                  <p className="text-sm text-slate-500">
                    {tx.type === 'buy' ? 'ซื้อหุ้น' : 'ถอนหุ้น'} {tx.shares} หุ้น
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${tx.type === 'buy' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {tx.type === 'buy' ? '+' : '-'}{tx.amount.toLocaleString()} บาท
                </p>
                <p className="text-xs text-slate-400">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
