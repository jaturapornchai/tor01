"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewWelfareClaimPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    welfareType: '',
    amount: '',
    description: '',
    attachments: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกคำขอสวัสดิการเรียบร้อยแล้ว');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/welfare/overview"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ยื่นขอสวัสดิการ</h1>
          <p className="text-slate-500 mt-1">ยื่นคำขอรับสวัสดิการสำหรับสมาชิก</p>
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
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="M001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ประเภทสวัสดิการ</label>
            <select
              value={formData.welfareType}
              onChange={(e) => setFormData({ ...formData, welfareType: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">-- เลือกประเภท --</option>
              <option value="medical">ค่ารักษาพยาบาล</option>
              <option value="birth">สวัสดิการคลอดบุตร</option>
              <option value="marriage">สวัสดิการสมรส</option>
              <option value="disaster">สวัสดิการภัยพิบัติ</option>
              <option value="visit">สวัสดิการเยี่ยมไข้</option>
              <option value="other">อื่นๆ</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนเงินที่ขอเบิก (บาท)</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="0"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">รายละเอียด/เหตุผล</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="อธิบายรายละเอียดการขอเบิกสวัสดิการ..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">เอกสารแนบ</label>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
            <svg className="w-10 h-10 text-slate-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-slate-500 mt-2">ลากไฟล์มาวางที่นี่ หรือ คลิกเพื่อเลือกไฟล์</p>
            <p className="text-xs text-slate-400 mt-1">รองรับ PDF, JPG, PNG ขนาดไม่เกิน 5MB</p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/welfare/overview"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            ยื่นคำขอสวัสดิการ
          </button>
        </div>
      </form>
    </div>
  );
}
