"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewMemberWelfarePage() {
  const [formData, setFormData] = useState({
    memberId: '',
    welfareType: '',
    amount: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('บันทึกคำขอสวัสดิการสมาชิกเรียบร้อยแล้ว');
  };

  const welfareTypes = [
    { id: 'medical', name: 'ค่ารักษาพยาบาล', max: 30000 },
    { id: 'birth', name: 'สวัสดิการคลอดบุตร', max: 10000 },
    { id: 'marriage', name: 'สวัสดิการสมรส', max: 5000 },
    { id: 'disaster', name: 'สวัสดิการภัยพิบัติ', max: 20000 },
    { id: 'visit', name: 'สวัสดิการเยี่ยมไข้', max: 3000 },
  ];

  const selectedWelfare = welfareTypes.find(w => w.id === formData.welfareType);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/welfare/member"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ยื่นขอสวัสดิการสมาชิก</h1>
          <p className="text-slate-500 mt-1">ยื่นคำขอสวัสดิการค่ารักษาพยาบาล คลอดบุตร สมรส และอื่นๆ</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
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
          <label className="block text-sm font-medium text-slate-700 mb-2">ประเภทสวัสดิการ</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {welfareTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setFormData({ ...formData, welfareType: type.id })}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  formData.welfareType === type.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className="font-medium text-slate-800">{type.name}</p>
                <p className="text-sm text-blue-600">สูงสุด {type.max.toLocaleString()} บาท</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนเงินที่ขอเบิก (บาท)</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="0"
            min="0"
            max={selectedWelfare?.max || 30000}
          />
          {selectedWelfare && (
            <p className="text-xs text-slate-500 mt-1">สูงสุด {selectedWelfare.max.toLocaleString()} บาท</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">รายละเอียด</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="อธิบายรายละเอียดเพิ่มเติม..."
          />
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/welfare/member"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            ยื่นคำขอสวัสดิการ
          </button>
        </div>
      </form>
    </div>
  );
}
