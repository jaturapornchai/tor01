"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewShareWithdrawPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    shares: '',
    reason: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกคำขอถอนหุ้นเรียบร้อยแล้ว');
  };

  const sharePrice = 100;
  const totalAmount = parseInt(formData.shares || '0') * sharePrice;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/shares/withdraw"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ยื่นขอถอนหุ้น</h1>
          <p className="text-slate-500 mt-1">ยื่นคำขอถอนหุ้นคืนสำหรับสมาชิก</p>
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
            <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนหุ้นที่ถอน</label>
            <input
              type="number"
              value={formData.shares}
              onChange={(e) => setFormData({ ...formData, shares: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="0"
              min="1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">เหตุผลการถอนหุ้น</label>
          <select
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="">-- เลือกเหตุผล --</option>
            <option value="emergency">ใช้จ่ายฉุกเฉิน</option>
            <option value="education">ค่าเทอมบุตร</option>
            <option value="medical">ค่ารักษาพยาบาล</option>
            <option value="house">ซ่อมแซมบ้าน</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">หมายเหตุเพิ่มเติม</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="รายละเอียดเพิ่มเติม..."
          />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-amber-700">ราคาต่อหุ้น</span>
            <span className="font-medium text-amber-800">{sharePrice.toLocaleString()} บาท</span>
          </div>
          <div className="flex justify-between items-center mt-2 pt-2 border-t border-amber-200">
            <span className="text-amber-700 font-medium">ยอดที่จะได้รับ</span>
            <span className="text-xl font-bold text-amber-800">{totalAmount.toLocaleString()} บาท</span>
          </div>
          <p className="text-xs text-amber-600 mt-2">* ต้องคงเหลือหุ้นขั้นต่ำ 10 หุ้น และต้องได้รับการอนุมัติจากคณะกรรมการ</p>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/shares/withdraw"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            บันทึกคำขอถอนหุ้น
          </button>
        </div>
      </form>
    </div>
  );
}
