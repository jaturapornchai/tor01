"use client";

import { useState } from "react";

export default function ClosingPage() {
  const [closingStep, setClosingStep] = useState(1);

  const handleSaveDraft = () => {
    alert('บันทึกแบบร่างการปิดบัญชีเรียบร้อยแล้ว');
  };

  const handleNextStep = () => {
    if (confirm('ยืนยันการดำเนินการขั้นตอนถัดไป?')) {
      setClosingStep(closingStep + 1);
      alert(`ดำเนินการขั้นตอนที่ ${closingStep + 1} เรียบร้อยแล้ว`);
    }
  };

  const closingSteps = [
    { step: 1, name: 'ตรวจสอบรายการ', status: 'completed', desc: 'ตรวจสอบรายการบันทึกบัญชีทั้งหมด' },
    { step: 2, name: 'ปรับปรุงรายการ', status: 'completed', desc: 'บันทึกรายการปรับปรุง ณ สิ้นงวด' },
    { step: 3, name: 'งบทดลอง', status: 'current', desc: 'จัดทำและตรวจสอบงบทดลอง' },
    { step: 4, name: 'ปิดบัญชี', status: 'pending', desc: 'ปิดบัญชีรายได้และค่าใช้จ่าย' },
    { step: 5, name: 'งบการเงิน', status: 'pending', desc: 'จัดทำงบการเงินประจำงวด' },
  ];

  const periodInfo = {
    year: 2567,
    month: 'มกราคม',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    status: 'in_progress',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ปิดบัญชีประจำงวด</h1>
          <p className="text-slate-500 mt-1">ดำเนินการปิดบัญชีประจำเดือน {periodInfo.month} {periodInfo.year}</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500">
            <option>มกราคม 2567</option>
            <option>ธันวาคม 2566</option>
          </select>
        </div>
      </div>

      {/* Period Info */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-violet-100 text-sm">งวดบัญชี</p>
            <p className="text-2xl font-bold">{periodInfo.month} {periodInfo.year}</p>
          </div>
          <div>
            <p className="text-violet-100 text-sm">วันที่เริ่มต้น</p>
            <p className="text-2xl font-bold">{periodInfo.startDate}</p>
          </div>
          <div>
            <p className="text-violet-100 text-sm">วันที่สิ้นสุด</p>
            <p className="text-2xl font-bold">{periodInfo.endDate}</p>
          </div>
          <div>
            <p className="text-violet-100 text-sm">สถานะ</p>
            <p className="text-2xl font-bold flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></span>
              กำลังดำเนินการ
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-800 mb-6">ขั้นตอนการปิดบัญชี</h3>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200">
            <div className="h-full bg-violet-500" style={{ width: '40%' }}></div>
          </div>

          <div className="relative flex justify-between">
            {closingSteps.map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 ${
                  item.status === 'completed' ? 'bg-emerald-500 text-white' :
                  item.status === 'current' ? 'bg-violet-500 text-white' :
                  'bg-slate-200 text-slate-500'
                }`}>
                  {item.status === 'completed' ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : item.step}
                </div>
                <p className={`mt-2 text-sm font-medium ${
                  item.status === 'current' ? 'text-violet-600' : 'text-slate-600'
                }`}>
                  {item.name}
                </p>
                <p className="text-xs text-slate-400 text-center max-w-[100px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Step Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h4 className="font-semibold text-slate-800 mb-4">งานที่ต้องทำ</h4>
          <div className="space-y-3">
            {[
              { name: 'ตรวจสอบงบทดลอง', status: 'pending' },
              { name: 'ตรวจสอบยอดคงเหลือบัญชี', status: 'pending' },
              { name: 'ยืนยันการปรับปรุงรายการ', status: 'completed' },
              { name: 'อนุมัติโดยผู้จัดการ', status: 'pending' },
            ].map((task, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.status === 'completed'}
                    readOnly
                    className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
                  />
                  <span className={task.status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-700'}>
                    {task.name}
                  </span>
                </div>
                {task.status === 'completed' && (
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h4 className="font-semibold text-slate-800 mb-4">สรุปงวดบัญชี</h4>
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-600">รายการบันทึกบัญชี</span>
              <span className="font-semibold">4,528 รายการ</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-600">รายได้รวม</span>
              <span className="font-semibold text-emerald-600">45,250,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-600">ค่าใช้จ่ายรวม</span>
              <span className="font-semibold text-red-600">38,750,000</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-800 font-medium">กำไรสุทธิ</span>
              <span className="font-bold text-emerald-600">6,500,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button onClick={handleSaveDraft} className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50">
          บันทึกแบบร่าง
        </button>
        <button onClick={handleNextStep} className="px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium shadow-lg">
          ดำเนินการขั้นถัดไป
        </button>
      </div>
    </div>
  );
}
