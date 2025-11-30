"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewHousingLoanPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    amount: '',
    term: '180',
    loanType: '',
    propertyAddress: '',
    propertyValue: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกคำขอกู้ที่อยู่อาศัยเรียบร้อยแล้ว');
  };

  const interestRate = 5.75;
  const amount = parseInt(formData.amount || '0');
  const term = parseInt(formData.term || '180');
  const monthlyPayment = amount > 0 ? Math.round((amount * (1 + (interestRate/100) * (term/12))) / term) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/loans/housing"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ยื่นกู้ที่อยู่อาศัย</h1>
          <p className="text-slate-500 mt-1">ยื่นคำขอสินเชื่อเพื่อที่อยู่อาศัย วงเงินสูงสุด 5,000,000 บาท</p>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-start gap-3">
        <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <div>
          <p className="font-medium text-teal-800">เอกสารที่ต้องเตรียม</p>
          <p className="text-sm text-teal-600 mt-1">สำเนาโฉนดที่ดิน, สัญญาจะซื้อจะขาย, รายงานประเมินราคา, แผนที่ตั้งทรัพย์สิน</p>
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
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="M001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ประเภทสินเชื่อ</label>
            <select
              value={formData.loanType}
              onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">-- เลือกประเภท --</option>
              <option value="buy">ซื้อบ้าน/ที่ดิน</option>
              <option value="build">ก่อสร้าง/ต่อเติม</option>
              <option value="refinance">ไถ่ถอนจำนอง</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนเงินกู้ (บาท)</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="0"
              min="100000"
              max="5000000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ระยะเวลาผ่อน (งวด)</label>
            <select
              value={formData.term}
              onChange={(e) => setFormData({ ...formData, term: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="60">60 งวด (5 ปี)</option>
              <option value="120">120 งวด (10 ปี)</option>
              <option value="180">180 งวด (15 ปี)</option>
              <option value="240">240 งวด (20 ปี)</option>
              <option value="300">300 งวด (25 ปี)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">ราคาประเมินทรัพย์สิน (บาท)</label>
          <input
            type="number"
            value={formData.propertyValue}
            onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">ที่อยู่ทรัพย์สิน</label>
          <textarea
            value={formData.propertyAddress}
            onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
            rows={2}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="บ้านเลขที่ ถนน ตำบล อำเภอ จังหวัด"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">หมายเหตุเพิ่มเติม</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="รายละเอียดเพิ่มเติม..."
          />
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-teal-700">อัตราดอกเบี้ย</span>
            <span className="font-medium text-teal-800">{interestRate}% ต่อปี</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-teal-700">จำนวนงวด</span>
            <span className="font-medium text-teal-800">{term} งวด</span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-teal-200">
            <span className="text-teal-700 font-medium">ผ่อนชำระ/เดือน (โดยประมาณ)</span>
            <span className="text-xl font-bold text-teal-800">{monthlyPayment.toLocaleString()} บาท</span>
          </div>
          <p className="text-xs text-teal-600 mt-2">* ต้องจำนองอสังหาริมทรัพย์เป็นหลักประกัน</p>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/loans/housing"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            ยื่นคำขอกู้ที่อยู่อาศัย
          </button>
        </div>
      </form>
    </div>
  );
}
