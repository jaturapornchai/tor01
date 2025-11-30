"use client";

import { useState } from "react";

const verifyItems = [
  { memberId: 'M001', name: 'นายสมชาย ใจดี', salary: 35000, shares: 1000, loan: 5500, deposit: 2000, total: 8500, status: 'match' },
  { memberId: 'M008', name: 'นางสาวมะลิ หอมหวาน', salary: 28000, shares: 500, loan: 3200, deposit: 1000, total: 4700, status: 'match' },
  { memberId: 'M015', name: 'นางสาวปราณี สุขใจ', salary: 32000, shares: 800, loan: 4500, deposit: 1500, total: 6800, status: 'mismatch' },
  { memberId: 'M022', name: 'นายประเสริฐ มั่งมี', salary: 45000, shares: 1500, loan: 8500, deposit: 3000, total: 13000, status: 'match' },
  { memberId: 'M045', name: 'นางสาวสมศรี ดีงาม', salary: 0, shares: 500, loan: 2800, deposit: 500, total: 3800, status: 'no_salary' },
];

export default function PayrollVerifyPage() {
  const [selectedFile, setSelectedFile] = useState('PF202401');
  const [filterMode, setFilterMode] = useState<'all' | 'problems'>('all');

  const handleConfirmProcess = () => {
    if (confirm('ยืนยันการประมวลผลหักเงินเดือน?\nกรุณาตรวจสอบให้แน่ใจว่าข้อมูลถูกต้องก่อนดำเนินการ')) {
      alert('เริ่มประมวลผลหักเงินเดือนเรียบร้อยแล้ว');
    }
  };

  const stats = {
    totalRecords: 8542,
    matched: 8498,
    mismatched: 32,
    noSalary: 12,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ตรวจสอบการหักเงิน</h1>
          <p className="text-slate-500 mt-1">ตรวจสอบความถูกต้องก่อนประมวลผลหักเงินเดือน</p>
        </div>
        <div className="flex gap-2">
          <select
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="PF202401">มกราคม 2567</option>
            <option value="PF202312">ธันวาคม 2566</option>
          </select>
          <button onClick={handleConfirmProcess} className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg">
            ยืนยันประมวลผล
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">รายการทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.totalRecords.toLocaleString()}</p>
          <p className="text-xs text-slate-400">รายการ</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">ข้อมูลถูกต้อง</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{stats.matched.toLocaleString()}</p>
          <p className="text-xs text-emerald-500">รายการ</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <p className="text-sm text-red-600">ข้อมูลไม่ตรง</p>
          <p className="text-3xl font-bold text-red-700 mt-1">{stats.mismatched}</p>
          <p className="text-xs text-red-500">รายการ</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">ไม่มีเงินเดือน</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{stats.noSalary}</p>
          <p className="text-xs text-amber-500">รายการ</p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">สรุปยอดหักเงินเดือน - มกราคม 2567</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'ค่าหุ้น', amount: 8542000 },
            { label: 'เงินกู้สามัญ', amount: 25850000 },
            { label: 'เงินกู้ฉุกเฉิน', amount: 4250000 },
            { label: 'เงินกู้พิเศษ', amount: 3850000 },
            { label: 'เงินฝากพิเศษ', amount: 2758000 },
          ].map((item) => (
            <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-indigo-100 text-sm">{item.label}</p>
              <p className="text-xl font-bold mt-1">{(item.amount / 1000000).toFixed(2)}M</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center">
          <span className="text-indigo-100">ยอดหักรวมทั้งหมด</span>
          <span className="text-3xl font-bold">45.25M บาท</span>
        </div>
      </div>

      {/* Verification Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">รายการตรวจสอบ</h3>
          <div className="flex gap-2">
            <button onClick={() => setFilterMode('all')} className={`px-3 py-1.5 text-sm rounded-lg ${filterMode === 'all' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>แสดงทั้งหมด</button>
            <button onClick={() => setFilterMode('problems')} className={`px-3 py-1.5 text-sm rounded-lg ${filterMode === 'problems' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>แสดงเฉพาะปัญหา</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">รหัสสมาชิก</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ชื่อ-นามสกุล</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เงินเดือน</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ค่าหุ้น</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เงินกู้</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เงินฝาก</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">รวมหัก</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {verifyItems.map((item) => (
                <tr key={item.memberId} className={`hover:bg-slate-50 ${
                  item.status !== 'match' ? 'bg-red-50' : ''
                }`}>
                  <td className="px-4 py-4 text-sm font-medium text-indigo-600">{item.memberId}</td>
                  <td className="px-4 py-4 font-medium text-slate-800">{item.name}</td>
                  <td className="px-4 py-4 text-right text-slate-600">
                    {item.salary > 0 ? item.salary.toLocaleString() : '-'}
                  </td>
                  <td className="px-4 py-4 text-right text-slate-600">{item.shares.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right text-slate-600">{item.loan.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right text-slate-600">{item.deposit.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right font-semibold">{item.total.toLocaleString()}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === 'match' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'mismatch' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status === 'match' ? 'ถูกต้อง' :
                       item.status === 'mismatch' ? 'ข้อมูลไม่ตรง' :
                       'ไม่มีเงินเดือน'}
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
