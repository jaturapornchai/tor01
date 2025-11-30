"use client";

import { useState } from "react";

const guarantors = [
  { id: 'G001', memberId: 'M001', memberName: 'นายสมชาย ใจดี', guaranteeCount: 3, totalGuaranteed: 850000, availableLimit: 150000, status: 'active' },
  { id: 'G002', memberId: 'M015', memberName: 'นางสาวปราณี สุขใจ', guaranteeCount: 2, totalGuaranteed: 450000, availableLimit: 350000, status: 'active' },
  { id: 'G003', memberId: 'M022', memberName: 'นายประเสริฐ มั่งมี', guaranteeCount: 5, totalGuaranteed: 1200000, availableLimit: 0, status: 'maxed' },
  { id: 'G004', memberId: 'M045', memberName: 'นางสาวสมศรี ดีงาม', guaranteeCount: 1, totalGuaranteed: 200000, availableLimit: 600000, status: 'active' },
];

export default function GuarantorRegistryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckGuaranteeLimit = () => {
    alert('เปิดหน้าต่างตรวจสอบวงเงินค้ำประกัน');
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert('กรุณาระบุคำค้นหา');
      return;
    }
    alert(`ค้นหาผู้ค้ำประกัน: "${searchTerm}"`);
  };

  const handleViewGuarantor = (guarantorId: string, memberName: string) => {
    alert(`ดูรายละเอียดผู้ค้ำประกัน: ${memberName} (${guarantorId})`);
  };

  const stats = {
    totalGuarantors: 2458,
    totalGuaranteed: 485000000,
    avgGuaranteeCount: 2.8,
    atMaxLimit: 156,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ทะเบียนผู้ค้ำประกัน</h1>
          <p className="text-slate-500 mt-1">จัดการข้อมูลผู้ค้ำประกันและวงเงินค้ำประกัน</p>
        </div>
        <button onClick={handleCheckGuaranteeLimit} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium text-sm shadow-lg">
          ตรวจสอบวงเงินค้ำ
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-slate-500">ผู้ค้ำประกันทั้งหมด</p>
          <p className="text-lg sm:text-2xl font-bold text-slate-800 mt-1">{stats.totalGuarantors.toLocaleString()}</p>
          <p className="text-xs text-slate-400">คน</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-slate-500">ยอดค้ำประกันรวม</p>
          <p className="text-lg sm:text-2xl font-bold text-cyan-600 mt-1">{(stats.totalGuaranteed / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-slate-400">บาท</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-slate-500">เฉลี่ยค้ำประกัน</p>
          <p className="text-lg sm:text-2xl font-bold text-blue-600 mt-1">{stats.avgGuaranteeCount}</p>
          <p className="text-xs text-slate-400">สัญญา/คน</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 sm:p-5">
          <p className="text-xs sm:text-sm text-slate-500">ค้ำเต็มวงเงิน</p>
          <p className="text-lg sm:text-2xl font-bold text-red-600 mt-1">{stats.atMaxLimit}</p>
          <p className="text-xs text-slate-400">คน</p>
        </div>
      </div>

      {/* Guarantee Rules */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 sm:p-6 text-white">
        <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">หลักเกณฑ์การค้ำประกัน</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <p className="text-cyan-100 text-xs sm:text-sm">วงเงินค้ำสูงสุด</p>
            <p className="text-xl sm:text-2xl font-bold">10 เท่า</p>
            <p className="text-cyan-200 text-xs sm:text-sm">ของทุนเรือนหุ้น</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <p className="text-cyan-100 text-xs sm:text-sm">ค้ำได้สูงสุด</p>
            <p className="text-xl sm:text-2xl font-bold">5</p>
            <p className="text-cyan-200 text-xs sm:text-sm">สัญญา/คน</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <p className="text-cyan-100 text-xs sm:text-sm">สมาชิกภาพขั้นต่ำ</p>
            <p className="text-xl sm:text-2xl font-bold">1</p>
            <p className="text-cyan-200 text-xs sm:text-sm">ปี</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
            <p className="text-cyan-100 text-xs sm:text-sm">ไม่มีหนี้ค้างชำระ</p>
            <p className="text-xl sm:text-2xl font-bold">0</p>
            <p className="text-cyan-200 text-xs sm:text-sm">วัน</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="ค้นหารหัสสมาชิก, ชื่อผู้ค้ำประกัน..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500">
            <option>สถานะทั้งหมด</option>
            <option>ค้ำได้</option>
            <option>เต็มวงเงิน</option>
          </select>
          <button onClick={handleSearch} className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
            ค้นหา
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">รหัสผู้ค้ำ</th>
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้ค้ำประกัน</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จำนวน</th>
                <th className="px-2 sm:px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ยอดค้ำรวม</th>
                <th className="px-2 sm:px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">วงเงินคงเหลือ</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {guarantors.map((g) => (
                <tr key={g.id} className="hover:bg-slate-50">
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-cyan-600">{g.id}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <p className="font-medium text-slate-800 text-xs sm:text-sm">{g.memberName}</p>
                    <p className="text-xs text-slate-500">{g.memberId}</p>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                    <span className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                      g.guaranteeCount >= 5 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {g.guaranteeCount}/5
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-right font-semibold text-slate-800 text-xs sm:text-sm">{g.totalGuaranteed.toLocaleString()}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-right font-medium text-emerald-600 text-xs sm:text-sm hidden sm:table-cell">
                    {g.availableLimit > 0 ? g.availableLimit.toLocaleString() : '-'}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                    <span className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium ${
                      g.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {g.status === 'active' ? 'ค้ำได้' : 'เต็มวงเงิน'}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                    <button onClick={() => handleViewGuarantor(g.id, g.memberName)} className="p-1.5 sm:p-2 text-slate-400 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg" title="ดูรายละเอียด">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
