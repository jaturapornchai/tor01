"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewDeathBenefitPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    deathDate: '',
    beneficiaryName: '',
    beneficiaryRelation: '',
    beneficiaryIdCard: '',
    beneficiaryPhone: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกข้อมูลการเสียชีวิตเรียบร้อยแล้ว');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/welfare/death"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">แจ้งสมาชิกเสียชีวิต</h1>
          <p className="text-slate-500 mt-1">บันทึกข้อมูลการเสียชีวิตและผู้รับผลประโยชน์</p>
        </div>
      </div>

      <div className="bg-slate-100 border border-slate-300 rounded-xl p-4">
        <h3 className="font-medium text-slate-800">สิทธิประโยชน์ที่จะได้รับ</h3>
        <ul className="text-sm text-slate-600 mt-2 space-y-1">
          <li>• คืนเงินค่าหุ้นทั้งหมดที่มีอยู่</li>
          <li>• เงินสวัสดิการเสียชีวิต (ตามอายุสมาชิก 20,000 - 100,000 บาท)</li>
          <li>• ดอกเบี้ยเงินฝากค้างจ่าย (ถ้ามี)</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div className="border-b border-slate-200 pb-4 mb-4">
          <h3 className="font-semibold text-slate-800">ข้อมูลสมาชิกที่เสียชีวิต</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">รหัสสมาชิก</label>
            <input
              type="text"
              value={formData.memberId}
              onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              placeholder="M001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">วันที่เสียชีวิต</label>
            <input
              type="date"
              value={formData.deathDate}
              onChange={(e) => setFormData({ ...formData, deathDate: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            />
          </div>
        </div>

        <div className="border-b border-slate-200 pb-4 mb-4 pt-4">
          <h3 className="font-semibold text-slate-800">ข้อมูลผู้รับผลประโยชน์</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ชื่อ-นามสกุล ผู้รับผลประโยชน์</label>
            <input
              type="text"
              value={formData.beneficiaryName}
              onChange={(e) => setFormData({ ...formData, beneficiaryName: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              placeholder="ชื่อ-นามสกุล"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ความสัมพันธ์</label>
            <select
              value={formData.beneficiaryRelation}
              onChange={(e) => setFormData({ ...formData, beneficiaryRelation: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            >
              <option value="">-- เลือก --</option>
              <option value="spouse">คู่สมรส</option>
              <option value="child">บุตร</option>
              <option value="parent">บิดา/มารดา</option>
              <option value="sibling">พี่น้อง</option>
              <option value="other">อื่นๆ</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">เลขบัตรประชาชน</label>
            <input
              type="text"
              value={formData.beneficiaryIdCard}
              onChange={(e) => setFormData({ ...formData, beneficiaryIdCard: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              placeholder="X-XXXX-XXXXX-XX-X"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">เบอร์โทรศัพท์</label>
            <input
              type="tel"
              value={formData.beneficiaryPhone}
              onChange={(e) => setFormData({ ...formData, beneficiaryPhone: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              placeholder="08X-XXX-XXXX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">หมายเหตุ</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
            placeholder="หมายเหตุเพิ่มเติม..."
          />
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/welfare/death"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            บันทึกข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
}
