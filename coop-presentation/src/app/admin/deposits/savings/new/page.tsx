"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewSavingsAccountPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    initialDeposit: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('เปิดบัญชีออมทรัพย์เรียบร้อยแล้ว');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/deposits/savings"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">เปิดบัญชีออมทรัพย์ใหม่</h1>
          <p className="text-slate-500 mt-1">เปิดบัญชีเงินฝากออมทรัพย์ ดอกเบี้ย 2.50% ต่อปี</p>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
        <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="font-medium text-emerald-800">สิทธิประโยชน์บัญชีออมทรัพย์</p>
          <ul className="text-sm text-emerald-600 mt-1 list-disc list-inside">
            <li>ฝาก-ถอนได้ไม่จำกัดครั้ง</li>
            <li>ดอกเบี้ย 2.50% ต่อปี จ่ายทุก 6 เดือน</li>
            <li>เงินฝากขั้นต่ำ 100 บาท</li>
          </ul>
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
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="M001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">เงินฝากเริ่มต้น (บาท)</label>
            <input
              type="number"
              value={formData.initialDeposit}
              onChange={(e) => setFormData({ ...formData, initialDeposit: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="0"
              min="100"
            />
            <p className="text-xs text-slate-500 mt-1">ขั้นต่ำ 100 บาท</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">หมายเหตุ</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="หมายเหตุเพิ่มเติม..."
          />
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/deposits/savings"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            เปิดบัญชีออมทรัพย์
          </button>
        </div>
      </form>
    </div>
  );
}
