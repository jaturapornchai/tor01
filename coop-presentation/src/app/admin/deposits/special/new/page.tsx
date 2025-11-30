"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewSpecialDepositPage() {
  const [formData, setFormData] = useState({
    memberId: '',
    type: '',
    monthlyAmount: '',
    term: '24',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('สมัครออมพิเศษเรียบร้อยแล้ว');
  };

  const depositTypes = [
    { id: 'taweesin', name: 'ออมทรัพย์ทวีสิน', rate: 4.00, minMonthly: 1000, terms: '12-60' },
    { id: 'retire', name: 'เกษียณสุข', rate: 4.50, minMonthly: 2000, terms: '36-120' },
    { id: 'child', name: 'ออมเพื่อลูก', rate: 4.25, minMonthly: 500, terms: '24-60' },
    { id: 'accumulate', name: 'สะสมทรัพย์', rate: 3.75, minMonthly: 500, terms: '6-36' },
  ];

  const selectedType = depositTypes.find(t => t.id === formData.type);
  const monthlyAmount = parseInt(formData.monthlyAmount || '0');
  const term = parseInt(formData.term);
  const rate = selectedType?.rate || 0;
  const totalDeposit = monthlyAmount * term;
  const interest = Math.round(totalDeposit * (rate / 100) * (term / 24));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/deposits/special"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">สมัครออมพิเศษ</h1>
          <p className="text-slate-500 mt-1">โปรแกรมการออมพิเศษ ดอกเบี้ยสูงถึง 4.50% ต่อปี</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">รหัสสมาชิก</label>
          <input
            type="text"
            value={formData.memberId}
            onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="M001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">เลือกโปรแกรมออม</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {depositTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setFormData({ ...formData, type: type.id })}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  formData.type === type.id
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className="font-bold text-slate-800">{type.name}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <span className="text-violet-600">{type.rate}% ต่อปี</span>
                  <span className="text-slate-500">ขั้นต่ำ {type.minMonthly.toLocaleString()}/เดือน</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{type.terms} เดือน</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">จำนวนออมต่อเดือน (บาท)</label>
            <input
              type="number"
              value={formData.monthlyAmount}
              onChange={(e) => setFormData({ ...formData, monthlyAmount: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              placeholder="0"
              min={selectedType?.minMonthly || 500}
            />
            {selectedType && (
              <p className="text-xs text-slate-500 mt-1">ขั้นต่ำ {selectedType.minMonthly.toLocaleString()} บาท</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">ระยะเวลาออม (เดือน)</label>
            <select
              value={formData.term}
              onChange={(e) => setFormData({ ...formData, term: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            >
              <option value="12">12 เดือน (1 ปี)</option>
              <option value="24">24 เดือน (2 ปี)</option>
              <option value="36">36 เดือน (3 ปี)</option>
              <option value="48">48 เดือน (4 ปี)</option>
              <option value="60">60 เดือน (5 ปี)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">หมายเหตุ</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            placeholder="หมายเหตุเพิ่มเติม..."
          />
        </div>

        {selectedType && monthlyAmount > 0 && (
          <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-violet-700">โปรแกรม</span>
              <span className="font-medium text-violet-800">{selectedType.name}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-violet-700">ออมต่อเดือน</span>
              <span className="font-medium text-violet-800">{monthlyAmount.toLocaleString()} บาท</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-violet-700">ระยะเวลา</span>
              <span className="font-medium text-violet-800">{term} เดือน</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-violet-700">ยอดออมรวม</span>
              <span className="font-medium text-violet-800">{totalDeposit.toLocaleString()} บาท</span>
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-violet-200">
              <span className="text-violet-700 font-medium">ดอกเบี้ยที่จะได้รับ (โดยประมาณ)</span>
              <span className="text-xl font-bold text-emerald-600">+{interest.toLocaleString()} บาท</span>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/deposits/special"
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
          >
            ยกเลิก
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            สมัครออมพิเศษ
          </button>
        </div>
      </form>
    </div>
  );
}
