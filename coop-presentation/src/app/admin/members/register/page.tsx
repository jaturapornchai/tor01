"use client";

import { useState } from "react";
import Link from "next/link";

export default function MemberRegisterPage() {
  const [step, setStep] = useState(1);

  const stats = {
    pendingApplications: 28,
    approvedThisMonth: 156,
    totalMembers: 8542,
    avgProcessTime: 3,
  };

  const pendingApplications = [
    { id: 'APP001', name: 'นายวิทยา เรียนดี', idCard: '1-1234-56789-01-0', department: 'การเงิน', salary: 35000, applyDate: '2024-01-15', status: 'pending' },
    { id: 'APP002', name: 'นางสาวจันทร์เพ็ญ สว่างใส', idCard: '1-2345-67890-12-1', department: 'บัญชี', salary: 28000, applyDate: '2024-01-14', status: 'pending' },
    { id: 'APP003', name: 'นายสุรศักดิ์ มั่นใจ', idCard: '1-3456-78901-23-2', department: 'IT', salary: 45000, applyDate: '2024-01-13', status: 'document' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">รับสมัครสมาชิกใหม่</h1>
          <p className="text-slate-500 mt-1">รับสมัครและอนุมัติสมาชิกสหกรณ์รายใหม่</p>
        </div>
        <Link
          href="/admin/members/register/new"
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all"
        >
          + สมัครสมาชิกใหม่
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">รออนุมัติ</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{stats.pendingApplications}</p>
          <p className="text-xs text-amber-500">คำขอ</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">อนุมัติเดือนนี้</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{stats.approvedThisMonth}</p>
          <p className="text-xs text-emerald-500">คน</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">สมาชิกทั้งหมด</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{stats.totalMembers.toLocaleString()}</p>
          <p className="text-xs text-blue-500">คน</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-600">ระยะเวลาพิจารณา</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">{stats.avgProcessTime}</p>
          <p className="text-xs text-slate-500">วันโดยเฉลี่ย</p>
        </div>
      </div>

      {/* Registration Steps */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-800 mb-4">ขั้นตอนการสมัครสมาชิก</h3>
        <div className="flex items-center justify-between">
          {[
            { step: 1, name: 'กรอกข้อมูล', desc: 'ข้อมูลส่วนตัว' },
            { step: 2, name: 'แนบเอกสาร', desc: 'บัตรประชาชน/ทะเบียนบ้าน' },
            { step: 3, name: 'ตรวจสอบ', desc: 'คุณสมบัติ/เอกสาร' },
            { step: 4, name: 'อนุมัติ', desc: 'คณะกรรมการ' },
            { step: 5, name: 'เสร็จสิ้น', desc: 'ออกเลขสมาชิก' },
          ].map((item, index) => (
            <div key={item.step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  item.step <= step ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {item.step}
                </div>
                <p className="text-sm font-medium text-slate-800 mt-2">{item.name}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
              {index < 4 && (
                <div className={`w-16 h-1 mx-2 ${item.step < step ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Membership Requirements */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">คุณสมบัติผู้สมัคร</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="font-medium">อายุ 20 ปีขึ้นไป</p>
            <p className="text-indigo-200 text-sm">มีสัญชาติไทย</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-medium">เป็นพนักงานประจำ</p>
            <p className="text-indigo-200 text-sm">ผ่านทดลองงานแล้ว</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="font-medium">ค่าหุ้นแรกเข้า</p>
            <p className="text-indigo-200 text-sm">1,000 บาท (10 หุ้น)</p>
          </div>
        </div>
      </div>

      {/* Pending Applications Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">คำขอสมัครสมาชิกรอพิจารณา</h3>
          <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">{stats.pendingApplications} รายการ</span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขคำขอ</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ชื่อผู้สมัคร</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขบัตรประชาชน</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">หน่วยงาน</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เงินเดือน</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่สมัคร</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {pendingApplications.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-indigo-600">{app.id}</td>
                <td className="px-4 py-4 font-medium text-slate-800">{app.name}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{app.idCard}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{app.department}</td>
                <td className="px-4 py-4 text-right font-medium">{app.salary.toLocaleString()}</td>
                <td className="px-4 py-4 text-center text-sm text-slate-500">{app.applyDate}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    app.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {app.status === 'pending' ? 'รอพิจารณา' : 'รอเอกสาร'}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="อนุมัติ">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="ไม่อนุมัติ">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
