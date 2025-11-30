"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewShareBuyPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    shares: '',
    paymentMethod: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกการซื้อหุ้นเรียบร้อยแล้ว');
  };

  const sharePrice = 100;
  const totalAmount = parseInt(formData.shares || '0') * sharePrice;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/shares/buy"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ซื้อหุ้นเพิ่ม</h1>
          <p className="text-slate-500 mt-1">บันทึกรายการซื้อหุ้นเพิ่มของสมาชิก</p>
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
            <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนหุ้นที่ซื้อ</label>
            <input
              type="number"
              value={formData.shares}
              onChange={(e) => setFormData({ ...formData, shares: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
              min="1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">วิธีชำระเงิน</label>
          <select
            value={formData.paymentMethod}
            onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">-- เลือกวิธีชำระเงิน --</option>
            <option value="payroll">หักเงินเดือน</option>
            <option value="cash">ชำระเงินสด</option>
            <option value="transfer">โอนเงิน</option>
          </select>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-emerald-700">ราคาต่อหุ้น</span>
            <span className="font-medium text-emerald-800">{sharePrice.toLocaleString()} บาท</span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-emerald-200">
            <span className="text-emerald-700 font-medium">ยอดรวม</span>
            <span className="text-xl font-bold text-emerald-800">{totalAmount.toLocaleString()} บาท</span>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/shares/buy"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            บันทึกการซื้อหุ้น
          </button>
        </div>
      </form>
    </div>
  );
}
