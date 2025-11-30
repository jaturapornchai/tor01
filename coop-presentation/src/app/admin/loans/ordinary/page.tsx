"use client";

import { useState } from "react";
import Link from "next/link";

const mockLoans = [
  { id: 'L001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', amount: 500000, balance: 420000, rate: 6.75, term: 60, monthlyPayment: 9850, status: 'active', startDate: '2023-06-15' },
  { id: 'L002', memberId: 'M003', memberName: 'นายสมศักดิ์ ดีใจ', amount: 300000, balance: 275000, rate: 6.75, term: 48, monthlyPayment: 7150, status: 'active', startDate: '2023-09-01' },
  { id: 'L003', memberId: 'M005', memberName: 'นายประสิทธิ์ ทำดี', amount: 800000, balance: 650000, rate: 6.75, term: 84, monthlyPayment: 12500, status: 'active', startDate: '2022-12-01' },
  { id: 'L004', memberId: 'M006', memberName: 'นางสาวพิมพ์ใจ สุขสม', amount: 200000, balance: 0, rate: 6.75, term: 36, monthlyPayment: 6200, status: 'completed', startDate: '2021-03-15' },
];

export default function OrdinaryLoanPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const stats = {
    totalLoans: 1250,
    totalAmount: 485000000,
    activeLoans: 1180,
    avgAmount: 388000,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เงินกู้สามัญ</h1>
          <p className="text-slate-500 mt-1">จัดการสินเชื่อเงินกู้สามัญ อัตราดอกเบี้ย 6.75% ต่อปี</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              const data = mockLoans.map(item => `${item.id},${item.memberName},${item.amount},${item.balance},${item.status}`).join('\n');
              const blob = new Blob([`เลขสัญญา,ชื่อผู้กู้,วงเงิน,คงเหลือ,สถานะ\n${data}`], { type: 'text/csv' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'ordinary-loans.csv';
              a.click();
            }}
            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium text-sm"
          >
            นำออก Excel
          </button>
          <Link
            href="/admin/loans/ordinary/new"
            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 font-medium text-sm shadow-lg shadow-indigo-500/30"
          >
            + ยื่นกู้ใหม่
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">สัญญากู้ทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.totalLoans.toLocaleString()}</p>
          <p className="text-xs text-slate-400">สัญญา</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ยอดเงินกู้รวม</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{(stats.totalAmount / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-slate-400">บาท</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">สัญญาที่กำลังผ่อน</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{stats.activeLoans.toLocaleString()}</p>
          <p className="text-xs text-slate-400">สัญญา</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">วงเงินกู้เฉลี่ย</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.avgAmount.toLocaleString()}</p>
          <p className="text-xs text-slate-400">บาท/สัญญา</p>
        </div>
      </div>

      {/* Loan Info Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-indigo-100 text-sm">อัตราดอกเบี้ย</p>
            <p className="text-3xl font-bold">6.75%</p>
            <p className="text-indigo-200 text-sm">ต่อปี</p>
          </div>
          <div>
            <p className="text-indigo-100 text-sm">วงเงินสูงสุด</p>
            <p className="text-3xl font-bold">50x</p>
            <p className="text-indigo-200 text-sm">เท่าของเงินได้รายเดือน</p>
          </div>
          <div>
            <p className="text-indigo-100 text-sm">ระยะเวลาผ่อน</p>
            <p className="text-3xl font-bold">120</p>
            <p className="text-indigo-200 text-sm">งวดสูงสุด</p>
          </div>
          <div>
            <p className="text-indigo-100 text-sm">ผู้ค้ำประกัน</p>
            <p className="text-3xl font-bold">2-3</p>
            <p className="text-indigo-200 text-sm">คน</p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="ค้นหาเลขสัญญา, ชื่อสมาชิก..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
            <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 border border-slate-300 rounded-lg text-sm bg-white"
          >
            <option value="all">ทุกสถานะ</option>
            <option value="active">กำลังผ่อน</option>
            <option value="completed">ปิดบัญชีแล้ว</option>
            <option value="overdue">ค้างชำระ</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขสัญญา</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้กู้</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">วงเงินกู้</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">คงเหลือ</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ผ่อน/เดือน</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockLoans.map((loan) => (
                <tr key={loan.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-indigo-600">{loan.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{loan.memberName}</p>
                    <p className="text-sm text-slate-500">{loan.memberId}</p>
                  </td>
                  <td className="px-4 py-4 text-right font-semibold text-slate-800">{loan.amount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-600">{loan.balance.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right text-slate-600">{loan.monthlyPayment.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      loan.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                      loan.status === 'completed' ? 'bg-slate-100 text-slate-600' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {loan.status === 'active' ? 'กำลังผ่อน' : loan.status === 'completed' ? 'ปิดบัญชี' : 'ค้างชำระ'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
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
    </div>
  );
}
