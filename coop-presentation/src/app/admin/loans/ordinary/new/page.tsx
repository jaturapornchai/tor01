"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewOrdinaryLoanPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    amount: '',
    term: '60',
    purpose: '',
    guarantor1: '',
    guarantor2: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกคำขอกู้สามัญเรียบร้อยแล้ว');
  };

  const interestRate = 6.75;
  const amount = parseInt(formData.amount || '0');
  const term = parseInt(formData.term || '60');
  const monthlyPayment = amount > 0 ? Math.round((amount * (1 + (interestRate/100) * (term/12))) / term) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/loans/ordinary"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ยื่นกู้สามัญใหม่</h1>
          <p className="text-slate-500 mt-1">ยื่นคำขอสินเชื่อเงินกู้สามัญ อัตราดอกเบี้ย 6.75% ต่อปี</p>
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
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="M001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนเงินกู้ (บาท)</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
              min="10000"
              max="5000000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ระยะเวลาผ่อน (งวด)</label>
            <select
              value={formData.term}
              onChange={(e) => setFormData({ ...formData, term: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="12">12 งวด (1 ปี)</option>
              <option value="24">24 งวด (2 ปี)</option>
              <option value="36">36 งวด (3 ปี)</option>
              <option value="48">48 งวด (4 ปี)</option>
              <option value="60">60 งวด (5 ปี)</option>
              <option value="84">84 งวด (7 ปี)</option>
              <option value="120">120 งวด (10 ปี)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">วัตถุประสงค์</label>
            <select
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">-- เลือกวัตถุประสงค์ --</option>
              <option value="general">ใช้จ่ายทั่วไป</option>
              <option value="education">การศึกษา</option>
              <option value="medical">ค่ารักษาพยาบาล</option>
              <option value="debt">ชำระหนี้</option>
              <option value="other">อื่นๆ</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ผู้ค้ำประกันคนที่ 1</label>
            <input
              type="text"
              value={formData.guarantor1}
              onChange={(e) => setFormData({ ...formData, guarantor1: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="รหัสสมาชิกผู้ค้ำ"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ผู้ค้ำประกันคนที่ 2</label>
            <input
              type="text"
              value={formData.guarantor2}
              onChange={(e) => setFormData({ ...formData, guarantor2: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="รหัสสมาชิกผู้ค้ำ"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">หมายเหตุเพิ่มเติม</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="รายละเอียดเพิ่มเติม..."
          />
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-indigo-700">อัตราดอกเบี้ย</span>
            <span className="font-medium text-indigo-800">{interestRate}% ต่อปี</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-indigo-700">จำนวนงวด</span>
            <span className="font-medium text-indigo-800">{term} งวด</span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-indigo-200">
            <span className="text-indigo-700 font-medium">ผ่อนชำระ/เดือน (โดยประมาณ)</span>
            <span className="text-xl font-bold text-indigo-800">{monthlyPayment.toLocaleString()} บาท</span>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/loans/ordinary"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            ยื่นคำขอกู้
          </button>
        </div>
      </form>
    </div>
  );
}
