"use client";

import { useState } from "react";
import Link from "next/link";

const deathBenefits = [
  { id: 'DB001', memberId: 'M156', memberName: 'นายสมพร (ผู้เสียชีวิต)', beneficiary: 'นางสมใจ สมพร (ภรรยา)', membershipYears: 15, shareAmount: 450000, deathBenefit: 50000, totalPayout: 500000, date: '2024-01-10', status: 'approved' },
  { id: 'DB002', memberId: 'M234', memberName: 'นางวิภา (ผู้เสียชีวิต)', beneficiary: 'นายสมศักดิ์ วิภา (บุตร)', membershipYears: 8, shareAmount: 120000, deathBenefit: 30000, totalPayout: 150000, date: '2024-01-05', status: 'processing' },
];

export default function DeathBenefitPage() {
  const [selectedTab, setSelectedTab] = useState('all');

  const stats = {
    totalClaims: 12,
    totalPayout: 1200000,
    pendingClaims: 2,
    avgPayout: 100000,
  };

  const benefitTiers = [
    { years: '1-5 ปี', benefit: 20000 },
    { years: '6-10 ปี', benefit: 30000 },
    { years: '11-15 ปี', benefit: 50000 },
    { years: '16-20 ปี', benefit: 80000 },
    { years: '20+ ปี', benefit: 100000 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">สวัสดิการเสียชีวิต</h1>
          <p className="text-slate-500 mt-1">จัดการสวัสดิการกรณีสมาชิกเสียชีวิต</p>
        </div>
        <Link
          href="/admin/welfare/death/new"
          className="px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + แจ้งสมาชิกเสียชีวิต
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600">จำนวนเคสทั้งหมด</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{stats.totalClaims}</p>
          <p className="text-xs text-slate-500">ปีนี้</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600">ยอดจ่ายรวม</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{(stats.totalPayout / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-slate-500">บาท</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">รอดำเนินการ</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{stats.pendingClaims}</p>
          <p className="text-xs text-amber-500">เคส</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600">เฉลี่ยต่อเคส</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{stats.avgPayout.toLocaleString()}</p>
          <p className="text-xs text-slate-500">บาท</p>
        </div>
      </div>

      {/* Death Benefit Info */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">เงินสวัสดิการเสียชีวิตตามอายุสมาชิก</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {benefitTiers.map((tier) => (
            <div key={tier.years} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-slate-300 text-sm">{tier.years}</p>
              <p className="text-2xl font-bold mt-1">{tier.benefit.toLocaleString()}</p>
              <p className="text-slate-400 text-xs">บาท</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Components */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">คืนทุนเรือนหุ้น</p>
              <p className="text-sm text-slate-500">100% ของหุ้นสะสม</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">เงินสวัสดิการ</p>
              <p className="text-sm text-slate-500">ตามอายุสมาชิก</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">คืนเงินฝาก</p>
              <p className="text-sm text-slate-500">100% + ดอกเบี้ย</p>
            </div>
          </div>
        </div>
      </div>

      {/* Claims Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 12 },
            { id: 'processing', name: 'กำลังดำเนินการ', count: 2 },
            { id: 'completed', name: 'เสร็จสิ้น', count: 10 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === tab.id
                  ? 'border-slate-600 text-slate-800'
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้เสียชีวิต</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้รับผลประโยชน์</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">อายุสมาชิก</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">คืนหุ้น</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">สวัสดิการ</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">รวมจ่าย</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {deathBenefits.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-slate-600">{item.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{item.memberName}</p>
                    <p className="text-sm text-slate-500">{item.memberId}</p>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-600">{item.beneficiary}</td>
                  <td className="px-4 py-4 text-center font-medium">{item.membershipYears} ปี</td>
                  <td className="px-4 py-4 text-right text-indigo-600">{item.shareAmount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right text-emerald-600">{item.deathBenefit.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-bold text-slate-800">{item.totalPayout.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status === 'approved' ? 'จ่ายแล้ว' : 'กำลังดำเนินการ'}
                    </span>
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
