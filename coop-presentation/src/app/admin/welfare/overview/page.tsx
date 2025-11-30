"use client";

import Link from "next/link";

export default function WelfareOverviewPage() {
  const stats = {
    totalBenefits: 4250000,
    totalRecipients: 856,
    pendingClaims: 45,
    budgetRemaining: 12500000,
  };

  const welfareTypes = [
    { name: 'สวัสดิการสมาชิก', amount: 1850000, claims: 425, color: 'from-blue-500 to-indigo-600', icon: '👤' },
    { name: 'สวัสดิการเสียชีวิต', amount: 1200000, claims: 12, color: 'from-slate-600 to-slate-800', icon: '🕯️' },
    { name: 'ทุนการศึกษาบุตร', amount: 850000, claims: 285, color: 'from-emerald-500 to-teal-600', icon: '🎓' },
    { name: 'สวัสดิการอื่นๆ', amount: 350000, claims: 134, color: 'from-amber-500 to-orange-600', icon: '🎁' },
  ];

  const recentClaims = [
    { id: 'WC001', type: 'ค่ารักษาพยาบาล', memberName: 'นายสมชาย ใจดี', amount: 15000, date: '2024-01-15', status: 'approved' },
    { id: 'WC002', type: 'ทุนการศึกษา', memberName: 'นางสาวมะลิ หอมหวาน', amount: 5000, date: '2024-01-14', status: 'pending' },
    { id: 'WC003', type: 'สวัสดิการคลอดบุตร', memberName: 'นางวรรณา ดีมาก', amount: 10000, date: '2024-01-13', status: 'approved' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ภาพรวมสวัสดิการ</h1>
          <p className="text-slate-500 mt-1">สรุปการจ่ายสวัสดิการและงบประมาณคงเหลือ</p>
        </div>
        <Link
          href="/admin/welfare/overview/new"
          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg font-medium text-sm shadow-lg"
        >
          + ยื่นขอสวัสดิการ
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-5">
          <p className="text-sm text-pink-600">จ่ายสวัสดิการรวม</p>
          <p className="text-3xl font-bold text-pink-700 mt-1">{(stats.totalBenefits / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-pink-500">บาท (ปีนี้)</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">ผู้รับสวัสดิการ</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{stats.totalRecipients}</p>
          <p className="text-xs text-blue-500">คน</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">รออนุมัติ</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{stats.pendingClaims}</p>
          <p className="text-xs text-amber-500">รายการ</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">งบประมาณคงเหลือ</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{(stats.budgetRemaining / 1000000).toFixed(1)}M</p>
          <p className="text-xs text-emerald-500">บาท</p>
        </div>
      </div>

      {/* Welfare Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {welfareTypes.map((type) => (
          <div key={type.name} className={`bg-gradient-to-r ${type.color} rounded-xl p-5 text-white`}>
            <div className="flex items-center justify-between">
              <span className="text-3xl">{type.icon}</span>
              <span className="text-white/80 text-sm">{type.claims} รายการ</span>
            </div>
            <p className="font-semibold mt-3">{type.name}</p>
            <p className="text-2xl font-bold mt-1">{(type.amount / 1000000).toFixed(2)}M</p>
          </div>
        ))}
      </div>

      {/* Budget Chart Placeholder */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-800 mb-4">งบประมาณสวัสดิการปี 2567</h3>
        <div className="h-8 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
            style={{ width: '25%' }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-slate-600">ใช้ไปแล้ว: 4.25M บาท</span>
          <span className="text-slate-600">คงเหลือ: 12.5M บาท</span>
        </div>
      </div>

      {/* Recent Claims */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800">รายการขอสวัสดิการล่าสุด</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขที่</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">สมาชิก</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">จำนวนเงิน</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">วันที่ยื่น</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentClaims.map((claim) => (
              <tr key={claim.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-pink-600">{claim.id}</td>
                <td className="px-4 py-4 text-sm text-slate-800">{claim.type}</td>
                <td className="px-4 py-4 font-medium text-slate-800">{claim.memberName}</td>
                <td className="px-4 py-4 text-right font-semibold">{claim.amount.toLocaleString()}</td>
                <td className="px-4 py-4 text-center text-sm text-slate-500">{claim.date}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    claim.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {claim.status === 'approved' ? 'อนุมัติ' : 'รออนุมัติ'}
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
