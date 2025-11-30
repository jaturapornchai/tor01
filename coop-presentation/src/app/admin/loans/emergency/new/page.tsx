"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewEmergencyLoanPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    amount: '',
    reason: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกคำขอกู้ฉุกเฉินเรียบร้อยแล้ว');
  };

  const interestRate = 6.50;
  const amount = parseInt(formData.amount || '0');
  const monthlyPayment = amount > 0 ? Math.round(amount / 12 * (1 + interestRate/100)) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/loans/emergency"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ยื่นกู้ฉุกเฉิน</h1>
          <p className="text-slate-500 mt-1">ยื่นคำขอสินเชื่อฉุกเฉิน วงเงินสูงสุด 50,000 บาท</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="font-medium text-amber-800">เงินกู้ฉุกเฉินอนุมัติเร็ว</p>
          <p className="text-sm text-amber-600 mt-1">อนุมัติภายใน 1 วันทำการ ผ่อนชำระไม่เกิน 12 งวด ไม่ต้องมีผู้ค้ำประกัน</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">รหัสสมาชิก</label>
            <input
              type="text"
              value={formData.memberId}
              onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="M001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนเงินกู้ (บาท)</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="0"
              min="1000"
              max="50000"
            />
            <p className="text-xs text-slate-500 mt-1">สูงสุด 50,000 บาท</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">เหตุผลความจำเป็น</label>
          <select
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="">-- เลือกเหตุผล --</option>
            <option value="medical">ค่ารักษาพยาบาลฉุกเฉิน</option>
            <option value="accident">อุบัติเหตุ</option>
            <option value="family">เหตุฉุกเฉินในครอบครัว</option>
            <option value="utility">ค่าสาธารณูปโภคค้างชำระ</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">รายละเอียดเพิ่มเติม</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="อธิบายความจำเป็นเพิ่มเติม..."
          />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-amber-700">อัตราดอกเบี้ย</span>
            <span className="font-medium text-amber-800">{interestRate}% ต่อปี</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-amber-700">ระยะเวลาผ่อน</span>
            <span className="font-medium text-amber-800">12 งวด</span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-amber-200">
            <span className="text-amber-700 font-medium">ผ่อนชำระ/เดือน (โดยประมาณ)</span>
            <span className="text-xl font-bold text-amber-800">{monthlyPayment.toLocaleString()} บาท</span>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/loans/emergency"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            ยื่นคำขอกู้ฉุกเฉิน
          </button>
        </div>
      </form>
    </div>
  );
}
