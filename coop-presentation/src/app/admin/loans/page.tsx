"use client";

import { useState } from "react";
import Link from "next/link";

// Mock loan data
const loanTypes = [
  {
    type: "สามัญ",
    code: "ordinary",
    total: 520000000,
    count: 3240,
    rate: 6.75,
    maxAmount: 2000000,
    maxTerm: 120,
    color: "indigo",
    icon: "file-text"
  },
  {
    type: "ฉุกเฉิน",
    code: "emergency",
    total: 89000000,
    count: 1520,
    rate: 6.50,
    maxAmount: 100000,
    maxTerm: 12,
    color: "amber",
    icon: "zap"
  },
  {
    type: "พิเศษ",
    code: "special",
    total: 283450000,
    count: 845,
    rate: 6.25,
    maxAmount: 5000000,
    maxTerm: 180,
    color: "purple",
    icon: "star"
  },
];

const recentLoans = [
  { id: "L67001", type: "สามัญ", member: "นายวิชัย รุ่งเรือง", memberId: "M67001", amount: 800000, term: 60, status: "pending", date: "15 ม.ค. 67" },
  { id: "L67002", type: "ฉุกเฉิน", member: "นางสาวพิมพ์ใจ สดใส", memberId: "M67002", amount: 50000, term: 10, status: "approved", date: "15 ม.ค. 67" },
  { id: "L67003", type: "สามัญ", member: "นายประเสริฐ มั่นคง", memberId: "M67003", amount: 300000, term: 36, status: "pending", date: "14 ม.ค. 67" },
  { id: "L67004", type: "พิเศษ", member: "นางมาลี ชื่นใจ", memberId: "M67004", amount: 2000000, term: 120, status: "processing", date: "13 ม.ค. 67" },
  { id: "L67005", type: "ฉุกเฉิน", member: "นายสมศักดิ์ ใจซื่อ", memberId: "M67005", amount: 80000, term: 12, status: "approved", date: "12 ม.ค. 67" },
  { id: "L66999", type: "สามัญ", member: "นางสมหญิง รักดี", memberId: "M66050", amount: 600000, term: 48, status: "disbursed", date: "20 ธ.ค. 66" },
  { id: "L66998", type: "สามัญ", member: "นายสมปอง มีสุข", memberId: "M66049", amount: 150000, term: 24, status: "disbursed", date: "18 ธ.ค. 66" },
];

export default function LoansPage() {
  const [activeTab, setActiveTab] = useState("all");

  const handleLoanReport = () => {
    alert('กำลังสร้างรายงานสินเชื่อ...');
  };

  const handleNewLoanRequest = () => {
    alert('เปิดหน้าต่างบันทึกคำขอกู้ใหม่');
  };

  const handleViewLoan = (loanId: string, memberName: string) => {
    alert(`ดูรายละเอียดสัญญากู้: ${loanId}\nผู้กู้: ${memberName}`);
  };

  const handleApproveLoan = (loanId: string, memberName: string, amount: number) => {
    if (confirm(`ยืนยันการอนุมัติสินเชื่อ ${loanId}\nผู้กู้: ${memberName}\nจำนวน: ${amount.toLocaleString()} บาท?`)) {
      alert(`อนุมัติสินเชื่อ ${loanId} เรียบร้อยแล้ว`);
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: { [key: string]: { bg: string; text: string; label: string } } = {
      pending: { bg: "bg-amber-100", text: "text-amber-700", label: "รอพิจารณา" },
      processing: { bg: "bg-blue-100", text: "text-blue-700", label: "กำลังดำเนินการ" },
      approved: { bg: "bg-emerald-100", text: "text-emerald-700", label: "อนุมัติแล้ว" },
      disbursed: { bg: "bg-indigo-100", text: "text-indigo-700", label: "เบิกจ่ายแล้ว" },
      rejected: { bg: "bg-red-100", text: "text-red-700", label: "ไม่อนุมัติ" },
    };
    const style = styles[status] || styles.pending;
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
        {style.label}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ภาพรวมสินเชื่อ</h1>
          <p className="text-slate-500 mt-1">จัดการเงินกู้และสินเชื่อของสมาชิก</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button onClick={handleLoanReport} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
            รายงานสินเชื่อ
          </button>
          <div className="relative">
            <button onClick={handleNewLoanRequest} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              บันทึกคำขอกู้
            </button>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800">892.45 <span className="text-sm font-normal text-slate-500">ล้าน</span></div>
          <div className="text-sm text-slate-500 mt-1">ยอดปล่อยกู้รวม</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800">5,605</div>
          <div className="text-sm text-slate-500 mt-1">สัญญาที่ใช้งาน</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="text-2xl font-bold text-amber-600">7</div>
          <div className="text-sm text-slate-500 mt-1">รอการอนุมัติ</div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          <div className="text-2xl font-bold text-red-600">1.9%</div>
          <div className="text-sm text-slate-500 mt-1">NPL Ratio</div>
        </div>
      </div>

      {/* Loan Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loanTypes.map((loan) => (
          <Link
            key={loan.code}
            href={`/admin/loans/${loan.code}`}
            className="bg-white rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-lg transition-all group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className={`w-12 h-12 rounded-xl bg-${loan.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {loan.icon === "file-text" && (
                    <svg className={`w-6 h-6 text-${loan.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {loan.icon === "zap" && (
                    <svg className={`w-6 h-6 text-${loan.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {loan.icon === "star" && (
                    <svg className={`w-6 h-6 text-${loan.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  เงินกู้{loan.type}
                </h3>
                <p className="text-slate-500 text-sm mt-1">ดอกเบี้ย {loan.rate}% ต่อปี</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xl font-bold text-slate-800">{(loan.total / 1000000).toFixed(0)} ล้าน</p>
                  <p className="text-xs text-slate-500">ยอดคงค้าง</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-800">{loan.count.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">สัญญา</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>วงเงินสูงสุด {(loan.maxAmount / 1000000).toFixed(1)} ล้าน</span>
              <span>ผ่อนสูงสุด {loan.maxTerm} งวด</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Loans Table */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-semibold text-slate-800">รายการกู้ล่าสุด</h3>
          <div className="mt-3 sm:mt-0 flex items-center space-x-2">
            {["all", "pending", "approved", "disbursed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {tab === "all" ? "ทั้งหมด" : tab === "pending" ? "รอพิจารณา" : tab === "approved" ? "อนุมัติแล้ว" : "เบิกจ่ายแล้ว"}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขที่สัญญา</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ผู้กู้</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">จำนวนเงิน</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จำนวนงวด</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentLoans
                .filter((loan) => activeTab === "all" || loan.status === activeTab)
                .map((loan) => (
                  <tr key={loan.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="font-mono text-sm text-indigo-600">{loan.id}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        loan.type === "สามัญ" ? "bg-indigo-100 text-indigo-700" :
                        loan.type === "ฉุกเฉิน" ? "bg-amber-100 text-amber-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {loan.type}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-slate-800">{loan.member}</p>
                        <p className="text-xs text-slate-400">{loan.memberId} • {loan.date}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-slate-800">
                      {loan.amount.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-center text-slate-600">
                      {loan.term} เดือน
                    </td>
                    <td className="px-4 py-3 text-center">
                      {getStatusBadge(loan.status)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-1">
                        <button onClick={() => handleViewLoan(loan.id, loan.member)} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        {loan.status === "pending" && (
                          <button onClick={() => handleApproveLoan(loan.id, loan.member, loan.amount)} className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 text-center">
          <Link href="/admin/loans/ordinary" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ดูรายการทั้งหมด →
          </Link>
        </div>
      </div>
    </div>
  );
}
