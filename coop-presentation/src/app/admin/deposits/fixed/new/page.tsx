"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewFixedDepositPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    amount: '',
    term: '12',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('เปิดบัญชีเงินฝากประจำเรียบร้อยแล้ว');
  };

  const termRates: { [key: string]: number } = {
    '3': 2.75,
    '6': 3.00,
    '12': 3.25,
    '24': 3.50,
    '36': 3.75,
  };

  const amount = parseInt(formData.amount || '0');
  const term = parseInt(formData.term);
  const rate = termRates[formData.term] || 3.25;
  const interest = Math.round(amount * (rate / 100) * (term / 12));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/deposits/fixed"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เปิดบัญชีเงินฝากประจำ</h1>
          <p className="text-slate-500 mt-1">เงินฝากประจำดอกเบี้ยสูง 2.75% - 3.75% ต่อปี</p>
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
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="M001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนเงินฝาก (บาท)</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0"
              min="10000"
            />
            <p className="text-xs text-slate-500 mt-1">ขั้นต่ำ 10,000 บาท</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">ระยะเวลาฝาก</label>
          <div className="grid grid-cols-5 gap-3">
            {Object.entries(termRates).map(([t, r]) => (
              <button
                key={t}
                type="button"
                onClick={() => setFormData({ ...formData, term: t })}
                className={`p-3 rounded-lg border-2 transition-all ${
                  formData.term === t
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className="font-bold text-slate-800">{t} เดือน</p>
                <p className="text-sm text-blue-600">{r}%</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">หมายเหตุ</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="หมายเหตุเพิ่มเติม..."
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-blue-700">เงินต้น</span>
            <span className="font-medium text-blue-800">{amount.toLocaleString()} บาท</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-blue-700">อัตราดอกเบี้ย</span>
            <span className="font-medium text-blue-800">{rate}% ต่อปี</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-blue-700">ระยะเวลา</span>
            <span className="font-medium text-blue-800">{term} เดือน</span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-blue-200">
            <span className="text-blue-700 font-medium">ดอกเบี้ยที่จะได้รับ</span>
            <span className="text-xl font-bold text-emerald-600">+{interest.toLocaleString()} บาท</span>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/deposits/fixed"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            เปิดบัญชีเงินฝากประจำ
          </button>
        </div>
      </form>
    </div>
  );
}
