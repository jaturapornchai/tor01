"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewScholarshipPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    childName: '',
    educationLevel: '',
    schoolName: '',
    grade: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกคำขอทุนการศึกษาเรียบร้อยแล้ว');
  };

  const scholarshipLevels = [
    { id: 'kindergarten', name: 'อนุบาล', amount: 2000 },
    { id: 'primary', name: 'ประถมศึกษา', amount: 3000 },
    { id: 'secondary', name: 'มัธยมศึกษา', amount: 5000 },
    { id: 'university', name: 'อุดมศึกษา', amount: 8000 },
  ];

  const selectedLevel = scholarshipLevels.find(l => l.id === formData.educationLevel);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/welfare/scholarship"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ยื่นขอทุนการศึกษา</h1>
          <p className="text-slate-500 mt-1">ยื่นขอทุนการศึกษาสำหรับบุตรสมาชิก</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">รหัสสมาชิก (ผู้ปกครอง)</label>
          <input
            type="text"
            value={formData.memberId}
            onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="M001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">ชื่อ-นามสกุล บุตร</label>
          <input
            type="text"
            value={formData.childName}
            onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="ชื่อ-นามสกุล"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">ระดับการศึกษา</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {scholarshipLevels.map((level) => (
              <button
                key={level.id}
                type="button"
                onClick={() => setFormData({ ...formData, educationLevel: level.id })}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  formData.educationLevel === level.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className="font-medium text-slate-800">{level.name}</p>
                <p className="text-sm text-emerald-600 font-semibold">{level.amount.toLocaleString()} บาท</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ชื่อสถานศึกษา</label>
            <input
              type="text"
              value={formData.schoolName}
              onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="ชื่อโรงเรียน/มหาวิทยาลัย"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ชั้นปี/ระดับชั้น</label>
            <input
              type="text"
              value={formData.grade}
              onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="เช่น ป.3, ม.5, ปี 2"
            />
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

        {selectedLevel && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-emerald-700">ระดับการศึกษา</span>
              <span className="font-medium text-emerald-800">{selectedLevel.name}</span>
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-emerald-200">
              <span className="text-emerald-700 font-medium">จำนวนทุนที่จะได้รับ</span>
              <span className="text-xl font-bold text-emerald-800">{selectedLevel.amount.toLocaleString()} บาท</span>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/welfare/scholarship"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            ยื่นขอทุนการศึกษา
          </button>
        </div>
      </form>
    </div>
  );
}
