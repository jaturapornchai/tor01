"use client";

import Link from "next/link";

export default function HousingLoanPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เงินกู้เพื่อที่อยู่อาศัย</h1>
          <p className="text-slate-500 mt-1">สินเชื่อเพื่อซื้อบ้าน/ที่ดิน/ก่อสร้าง อัตราดอกเบี้ย 5.75% ต่อปี</p>
        </div>
        <Link
          href="/admin/loans/housing/new"
          className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + ยื่นกู้ที่อยู่อาศัย
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">สัญญากู้ทั้งหมด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">156</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ยอดเงินกู้รวม</p>
          <p className="text-2xl font-bold text-teal-600 mt-1">425M</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">รออนุมัติ</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">5</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">วงเงินสูงสุด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">5M</p>
        </div>
      </div>

      {/* Loan Info */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-teal-100 text-sm">อัตราดอกเบี้ย</p>
            <p className="text-3xl font-bold">5.75%</p>
            <p className="text-teal-200 text-sm">ต่อปี</p>
          </div>
          <div>
            <p className="text-teal-100 text-sm">วงเงินสูงสุด</p>
            <p className="text-3xl font-bold">5,000,000</p>
            <p className="text-teal-200 text-sm">บาท</p>
          </div>
          <div>
            <p className="text-teal-100 text-sm">ระยะเวลาผ่อน</p>
            <p className="text-3xl font-bold">300</p>
            <p className="text-teal-200 text-sm">งวดสูงสุด (25 ปี)</p>
          </div>
          <div>
            <p className="text-teal-100 text-sm">หลักประกัน</p>
            <p className="text-3xl font-bold">100%</p>
            <p className="text-teal-200 text-sm">จำนองอสังหาริมทรัพย์</p>
          </div>
        </div>
      </div>

      {/* Loan Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: 'ซื้อบ้าน/ที่ดิน', count: 85, desc: 'ซื้อบ้านพร้อมที่ดิน หรือที่ดินเปล่า', color: 'bg-teal-50 border-teal-200' },
          { name: 'ก่อสร้าง/ต่อเติม', count: 45, desc: 'สร้างบ้านใหม่หรือต่อเติมบ้านเดิม', color: 'bg-cyan-50 border-cyan-200' },
          { name: 'ไถ่ถอนจำนอง', count: 26, desc: 'ไถ่ถอนจำนองจากสถาบันการเงินอื่น', color: 'bg-sky-50 border-sky-200' },
        ].map((item) => (
          <div key={item.name} className={`rounded-xl border-2 p-5 ${item.color}`}>
            <p className="font-semibold text-slate-800 text-lg">{item.name}</p>
            <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
            <p className="text-2xl font-bold text-teal-600 mt-3">{item.count} <span className="text-sm font-normal text-slate-500">สัญญา</span></p>
          </div>
        ))}
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800">คำขอกู้ล่าสุด</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขคำขอ</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้ขอกู้</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">วงเงิน</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { id: 'H001', name: 'นายสมชาย ใจดี', type: 'ซื้อบ้าน', amount: 3500000, status: 'pending' },
              { id: 'H002', name: 'นางสมหญิง รักดี', type: 'ก่อสร้าง', amount: 2000000, status: 'approved' },
              { id: 'H003', name: 'นายประสิทธิ์ ทำดี', type: 'ไถ่ถอน', amount: 1500000, status: 'disbursed' },
            ].map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-teal-600">{item.id}</td>
                <td className="px-4 py-4 font-medium text-slate-800">{item.name}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{item.type}</td>
                <td className="px-4 py-4 text-right font-semibold">{item.amount.toLocaleString()}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    item.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                    item.status === 'approved' ? 'bg-blue-100 text-blue-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {item.status === 'pending' ? 'รออนุมัติ' : item.status === 'approved' ? 'อนุมัติแล้ว' : 'เบิกจ่ายแล้ว'}
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
