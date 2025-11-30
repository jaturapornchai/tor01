"use client";

import { useState } from "react";
import Link from "next/link";

const memberWelfareTypes = [
  { id: 1, name: 'ค่ารักษาพยาบาล', maxAmount: 30000, perYear: true, description: 'เบิกค่ารักษาพยาบาลส่วนเกินจากสิทธิ์' },
  { id: 2, name: 'สวัสดิการคลอดบุตร', maxAmount: 10000, perYear: false, description: 'เบิกได้ไม่เกิน 2 ครั้ง' },
  { id: 3, name: 'สวัสดิการสมรส', maxAmount: 5000, perYear: false, description: 'เบิกได้ครั้งเดียว' },
  { id: 4, name: 'สวัสดิการภัยพิบัติ', maxAmount: 20000, perYear: false, description: 'ตามความเสียหายจริง' },
  { id: 5, name: 'สวัสดิการเยี่ยมไข้', maxAmount: 3000, perYear: true, description: 'กรณีนอนโรงพยาบาล 3+ วัน' },
];

const claims = [
  { id: 'MW001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', type: 'ค่ารักษาพยาบาล', requestAmount: 15000, approvedAmount: 15000, date: '2024-01-15', status: 'approved' },
  { id: 'MW002', memberId: 'M045', memberName: 'นางวรรณา ดีมาก', type: 'สวัสดิการคลอดบุตร', requestAmount: 10000, approvedAmount: null, date: '2024-01-14', status: 'pending' },
  { id: 'MW003', memberId: 'M022', memberName: 'นายประเสริฐ มั่งมี', type: 'สวัสดิการเยี่ยมไข้', requestAmount: 3000, approvedAmount: 3000, date: '2024-01-10', status: 'approved' },
];

export default function MemberWelfarePage() {
  const [selectedTab, setSelectedTab] = useState('all');

  const stats = {
    totalClaims: 425,
    approvedAmount: 1850000,
    pendingClaims: 28,
    avgClaimAmount: 4350,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">สวัสดิการสมาชิก</h1>
          <p className="text-slate-500 mt-1">จัดการสวัสดิการค่ารักษาพยาบาล คลอดบุตร สมรส และอื่นๆ</p>
        </div>
        <Link
          href="/admin/welfare/member/new"
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + ยื่นขอสวัสดิการ
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">จำนวนเบิกทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.totalClaims}</p>
          <p className="text-xs text-slate-400">รายการ (ปีนี้)</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ยอดอนุมัติรวม</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{(stats.approvedAmount / 1000000).toFixed(2)}M</p>
          <p className="text-xs text-slate-400">บาท</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">รออนุมัติ</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">{stats.pendingClaims}</p>
          <p className="text-xs text-slate-400">รายการ</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">เฉลี่ยต่อรายการ</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.avgClaimAmount.toLocaleString()}</p>
          <p className="text-xs text-slate-400">บาท</p>
        </div>
      </div>

      {/* Welfare Types */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-blue-500 to-indigo-600">
          <h3 className="font-semibold text-white">ประเภทสวัสดิการสมาชิก</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {memberWelfareTypes.map((type) => (
            <div key={type.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
              <div>
                <p className="font-medium text-slate-800">{type.name}</p>
                <p className="text-sm text-slate-500">{type.description}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-blue-600">{type.maxAmount.toLocaleString()} บาท</p>
                <p className="text-xs text-slate-400">{type.perYear ? 'ต่อปี' : 'ต่อครั้ง'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs and Claims Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 58 },
            { id: 'pending', name: 'รออนุมัติ', count: 28 },
            { id: 'approved', name: 'อนุมัติแล้ว', count: 30 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedTab === tab.id
                  ? 'border-blue-500 text-blue-600'
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขที่</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">สมาชิก</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ยอดขอเบิก</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ยอดอนุมัติ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่ยื่น</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {claims.map((claim) => (
                <tr key={claim.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-blue-600">{claim.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{claim.memberName}</p>
                    <p className="text-sm text-slate-500">{claim.memberId}</p>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600">{claim.type}</td>
                  <td className="px-4 py-4 text-right font-medium">{claim.requestAmount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-semibold text-emerald-600">
                    {claim.approvedAmount ? claim.approvedAmount.toLocaleString() : '-'}
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-slate-500">{claim.date}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      claim.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {claim.status === 'approved' ? 'อนุมัติ' : 'รออนุมัติ'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {claim.status === 'pending' && (
                        <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="อนุมัติ">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                      )}
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="ดูรายละเอียด">
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
    </div>
  );
}
