"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewResignPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    reason: '',
    effectiveDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกคำขอลาออกเรียบร้อยแล้ว');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/members/resign"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ยื่นคำขอลาออก</h1>
          <p className="text-slate-500 mt-1">กรอกข้อมูลเพื่อยื่นคำขอลาออกจากสมาชิกสหกรณ์</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">รหัสสมาชิก / เลขบัตรประชาชน</label>
            <input
              type="text"
              value={formData.memberId}
              onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              placeholder="M001 หรือ 1-1234-56789-01-0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">วันที่มีผล</label>
            <input
              type="date"
              value={formData.effectiveDate}
              onChange={(e) => setFormData({ ...formData, effectiveDate: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">เหตุผลการลาออก</label>
          <select
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
          >
            <option value="">-- เลือกเหตุผล --</option>
            <option value="resign_job">ลาออกจากงาน</option>
            <option value="transfer">โอนย้ายหน่วยงาน</option>
            <option value="retire">เกษียณอายุราชการ</option>
            <option value="death">เสียชีวิต</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">หมายเหตุเพิ่มเติม</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            placeholder="รายละเอียดเพิ่มเติม..."
          />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-medium text-amber-800 mb-2">ข้อมูลสำคัญ</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• ระบบจะตรวจสอบภาระหนี้และการค้ำประกันโดยอัตโนมัติ</li>
            <li>• กรณีมีหนี้คงค้าง จะหักจากเงินคืนทุนเรือนหุ้นและเงินฝาก</li>
            <li>• การอนุมัติลาออกต้องผ่านความเห็นชอบจากคณะกรรมการ</li>
          </ul>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/members/resign"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            บันทึกคำขอลาออก
          </button>
        </div>
      </form>
    </div>
  );
}
