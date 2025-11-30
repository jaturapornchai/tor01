"use client";

import { useState } from "react";
import Link from "next/link";

const scholarships = [
  { id: 'SC001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', childName: 'ด.ญ. สมหญิง ใจดี', level: 'ประถมศึกษา', amount: 3000, date: '2024-01-15', status: 'approved' },
  { id: 'SC002', memberId: 'M045', memberName: 'นางสาวสมศรี ดีงาม', childName: 'ด.ช. สมชาย ดีงาม', level: 'มัธยมศึกษา', amount: 5000, date: '2024-01-14', status: 'pending' },
  { id: 'SC003', memberId: 'M022', memberName: 'นายประเสริฐ มั่งมี', childName: 'นายสมศักดิ์ มั่งมี', level: 'อุดมศึกษา', amount: 8000, date: '2024-01-10', status: 'approved' },
];

export default function ScholarshipPage() {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const stats = {
    totalScholarships: 285,
    totalAmount: 850000,
    pending: 42,
    recipients: 285,
  };

  const scholarshipLevels = [
    { level: 'อนุบาล', amount: 2000, icon: '🎒', color: 'from-pink-400 to-rose-500' },
    { level: 'ประถมศึกษา', amount: 3000, icon: '📚', color: 'from-blue-400 to-indigo-500' },
    { level: 'มัธยมศึกษา', amount: 5000, icon: '🎓', color: 'from-emerald-400 to-teal-500' },
    { level: 'อุดมศึกษา', amount: 8000, icon: '🏛️', color: 'from-violet-400 to-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ทุนการศึกษาบุตร</h1>
          <p className="text-slate-500 mt-1">สวัสดิการทุนการศึกษาสำหรับบุตรสมาชิก</p>
        </div>
        <Link
          href="/admin/welfare/scholarship/new"
          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + ยื่นขอทุนการศึกษา
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">ทุนที่จัดสรร</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{stats.totalScholarships}</p>
          <p className="text-xs text-emerald-500">ทุน (ปีนี้)</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">ยอดเงินรวม</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{(stats.totalAmount / 1000).toFixed(0)}K</p>
          <p className="text-xs text-blue-500">บาท</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">รออนุมัติ</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{stats.pending}</p>
          <p className="text-xs text-amber-500">รายการ</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
          <p className="text-sm text-violet-600">ผู้รับทุน</p>
          <p className="text-3xl font-bold text-violet-700 mt-1">{stats.recipients}</p>
          <p className="text-xs text-violet-500">คน</p>
        </div>
      </div>

      {/* Scholarship Levels */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {scholarshipLevels.map((item) => (
          <div key={item.level} className={`bg-gradient-to-r ${item.color} rounded-xl p-5 text-white`}>
            <div className="flex items-center justify-between">
              <span className="text-3xl">{item.icon}</span>
            </div>
            <p className="font-semibold mt-3">{item.level}</p>
            <p className="text-2xl font-bold mt-1">{item.amount.toLocaleString()}</p>
            <p className="text-white/80 text-sm">บาท/ปี</p>
          </div>
        ))}
      </div>

      {/* Eligibility */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-800 mb-4">คุณสมบัติผู้ขอรับทุน</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700">เป็นสมาชิกมาแล้วไม่น้อยกว่า 1 ปี</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700">บุตรอายุไม่เกิน 25 ปี</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700">ศึกษาในสถานศึกษาที่รับรอง</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700">ขอได้ไม่เกิน 3 คน/สมาชิก</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700">ยื่นขอปีละ 1 ครั้ง</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700">ไม่มีหนี้ค้างชำระ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', name: 'ทั้งหมด', count: 327 },
            { id: 'pending', name: 'รออนุมัติ', count: 42 },
            { id: 'approved', name: 'อนุมัติแล้ว', count: 285 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedLevel(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedLevel === tab.id
                  ? 'border-emerald-500 text-emerald-600'
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ชื่อบุตร</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ระดับการศึกษา</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">จำนวนเงิน</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่ยื่น</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scholarships.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-medium text-emerald-600">{item.id}</td>
                  <td className="px-4 py-4">
                    <p className="font-medium text-slate-800">{item.memberName}</p>
                    <p className="text-sm text-slate-500">{item.memberId}</p>
                  </td>
                  <td className="px-4 py-4 font-medium text-slate-800">{item.childName}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.level === 'อนุบาล' ? 'bg-pink-100 text-pink-700' :
                      item.level === 'ประถมศึกษา' ? 'bg-blue-100 text-blue-700' :
                      item.level === 'มัธยมศึกษา' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-violet-100 text-violet-700'
                    }`}>
                      {item.level}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right font-semibold">{item.amount.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center text-sm text-slate-500">{item.date}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status === 'approved' ? 'อนุมัติ' : 'รออนุมัติ'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {item.status === 'pending' && (
                        <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="อนุมัติ">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                      )}
                      <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg" title="ดูรายละเอียด">
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
