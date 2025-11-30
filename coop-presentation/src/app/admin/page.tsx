"use client";

import Link from "next/link";

// Mock data
const stats = {
  members: { total: 12847, new: 156, active: 12650 },
  shares: { total: 485620000, growth: 2.5 },
  loans: { outstanding: 654320000, npl: 12450000, nplRatio: 1.9 },
  deposits: { total: 324560000, growth: 1.8 },
};

const quickActions = [
  { name: "สมาชิกใหม่", href: "/admin/members/register", icon: "user-plus", color: "indigo" },
  { name: "ยื่นกู้", href: "/admin/loans/ordinary", icon: "file-plus", color: "emerald" },
  { name: "รับฝาก", href: "/admin/deposits/savings", icon: "wallet", color: "blue" },
  { name: "อนุมัติ", href: "/admin/loans/approval", icon: "check", color: "amber" },
];

const recentMembers = [
  { id: "M67001", name: "นายวิชัย รุ่งเรือง", date: "15 ม.ค. 67", shares: 50000 },
  { id: "M67002", name: "นางสาวพิมพ์ใจ สดใส", date: "14 ม.ค. 67", shares: 30000 },
  { id: "M67003", name: "นายประเสริฐ มั่นคง", date: "14 ม.ค. 67", shares: 100000 },
  { id: "M67004", name: "นางมาลี ชื่นใจ", date: "13 ม.ค. 67", shares: 20000 },
  { id: "M67005", name: "นายสมศักดิ์ ใจซื่อ", date: "12 ม.ค. 67", shares: 45000 },
];

const pendingApprovals = [
  { id: "L67001", type: "สามัญ", name: "นายวิชัย รุ่งเรือง", amount: 800000, date: "15 ม.ค. 67" },
  { id: "L67002", type: "ฉุกเฉิน", name: "นางสาวพิมพ์ใจ สดใส", amount: 50000, date: "15 ม.ค. 67" },
  { id: "L67003", type: "สามัญ", name: "นายประเสริฐ มั่นคง", amount: 300000, date: "14 ม.ค. 67" },
];

const loanDistribution = [
  { type: "สามัญ", amount: 520, percentage: 58, color: "bg-indigo-500" },
  { type: "ฉุกเฉิน", amount: 89, percentage: 10, color: "bg-emerald-500" },
  { type: "พิเศษ", amount: 283, percentage: 32, color: "bg-amber-500" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">แดชบอร์ด</h1>
          <p className="text-slate-500 mt-1">ภาพรวมการดำเนินงานสหกรณ์ออมทรัพย์</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option>เดือนนี้</option>
            <option>ไตรมาสนี้</option>
            <option>ปีนี้</option>
          </select>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            ส่งออก
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className="flex items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group"
          >
            <div className={`w-10 h-10 rounded-lg bg-${action.color}-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
              <svg className={`w-5 h-5 text-${action.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {action.icon === "user-plus" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />}
                {action.icon === "file-plus" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                {action.icon === "wallet" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />}
                {action.icon === "check" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
              </svg>
            </div>
            <span className="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">{action.name}</span>
          </Link>
        ))}
      </div>

      {/* Stats Cards - FlowAccount Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Members */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              +{stats.members.new} ใหม่
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-800">{stats.members.total.toLocaleString()}</div>
          <div className="text-sm text-slate-500 mt-1">สมาชิกทั้งหมด</div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-400">
            ใช้งาน {stats.members.active.toLocaleString()} ราย
          </div>
        </div>

        {/* Shares */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              +{stats.shares.growth}%
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-800">
            {(stats.shares.total / 1000000).toFixed(1)} <span className="text-base font-normal text-slate-500">ล้าน</span>
          </div>
          <div className="text-sm text-slate-500 mt-1">ทุนเรือนหุ้นรวม</div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-400">
            เฉลี่ย {(stats.shares.total / stats.members.total).toLocaleString(undefined, { maximumFractionDigits: 0 })} บาท/สมาชิก
          </div>
        </div>

        {/* Loans */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
              NPL {stats.loans.nplRatio}%
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-800">
            {(stats.loans.outstanding / 1000000).toFixed(1)} <span className="text-base font-normal text-slate-500">ล้าน</span>
          </div>
          <div className="text-sm text-slate-500 mt-1">ยอดเงินกู้คงค้าง</div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-red-500">
            หนี้ไม่ก่อให้เกิดรายได้ {(stats.loans.npl / 1000000).toFixed(2)} ล้านบาท
          </div>
        </div>

        {/* Deposits */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              +{stats.deposits.growth}%
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-800">
            {(stats.deposits.total / 1000000).toFixed(1)} <span className="text-base font-normal text-slate-500">ล้าน</span>
          </div>
          <div className="text-sm text-slate-500 mt-1">เงินรับฝากทั้งหมด</div>
          <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-400">
            ออมทรัพย์ 76% | ประจำ 24%
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Loan Distribution */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-semibold text-slate-800 mb-4">สัดส่วนเงินกู้ตามประเภท</h3>
          <div className="space-y-4">
            {loanDistribution.map((loan) => (
              <div key={loan.type}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">เงินกู้{loan.type}</span>
                  <span className="font-medium text-slate-800">{loan.amount} ล้าน ({loan.percentage}%)</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${loan.color} rounded-full`} style={{ width: `${loan.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="text-slate-500 text-sm">รวมทั้งสิ้น</span>
            <span className="text-lg font-bold text-slate-800">892 ล้านบาท</span>
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800">แนวโน้มรายเดือน</h3>
            <div className="flex space-x-4 text-xs">
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-indigo-500 mr-1"></span> เงินกู้</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></span> เงินฝาก</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-amber-500 mr-1"></span> หุ้น</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."].map((month, i) => (
              <div key={month} className="flex-1 flex flex-col items-center">
                <div className="w-full flex space-x-0.5 items-end h-48">
                  <div className="flex-1 bg-indigo-400 rounded-t transition-all hover:bg-indigo-500" style={{ height: `${45 + Math.random() * 45}%` }}></div>
                  <div className="flex-1 bg-emerald-400 rounded-t transition-all hover:bg-emerald-500" style={{ height: `${30 + Math.random() * 40}%` }}></div>
                  <div className="flex-1 bg-amber-400 rounded-t transition-all hover:bg-amber-500" style={{ height: `${25 + Math.random() * 35}%` }}></div>
                </div>
                <span className="text-xs text-slate-400 mt-2">{month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Members */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">สมาชิกใหม่ล่าสุด</h3>
            <Link href="/admin/members" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentMembers.map((member) => (
              <div key={member.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                    {member.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-slate-800">{member.name}</p>
                    <p className="text-xs text-slate-400">{member.id} • {member.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">{member.shares.toLocaleString()}</p>
                  <p className="text-xs text-slate-400">หุ้นเริ่มต้น</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center">
              <h3 className="font-semibold text-slate-800">รอการอนุมัติ</h3>
              <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                {pendingApprovals.length}
              </span>
            </div>
            <Link href="/admin/loans/approval" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.type === "ฉุกเฉิน" ? "bg-amber-100" : "bg-indigo-100"
                    }`}>
                      <svg className={`w-5 h-5 ${item.type === "ฉุกเฉิน" ? "text-amber-600" : "text-indigo-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.type === "ฉุกเฉิน" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        )}
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-400">กู้{item.type} • {item.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-800">{item.amount.toLocaleString()}</p>
                    <p className="text-xs text-slate-400">{item.date}</p>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="flex-1 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                    อนุมัติ
                  </button>
                  <button className="flex-1 px-3 py-1.5 border border-slate-200 text-slate-600 text-sm rounded-lg hover:bg-slate-50 transition-colors">
                    ตรวจสอบ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats Footer */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: "อัตราปันผล", value: "5.25%", trend: "up" },
          { label: "อัตราเฉลี่ยคืน", value: "8.50%", trend: "up" },
          { label: "ดอกเบี้ยกู้สามัญ", value: "6.75%", trend: "stable" },
          { label: "ดอกเบี้ยกู้ฉุกเฉิน", value: "6.50%", trend: "stable" },
          { label: "ดอกเบี้ยเงินฝาก", value: "2.50%", trend: "down" },
          { label: "NPL Ratio", value: "1.90%", trend: "down" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <p className="text-xl font-bold text-slate-800">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
