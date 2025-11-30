"use client";

import { useState } from "react";

const deductionItems = [
  { id: 1, name: 'ค่าหุ้นรายเดือน', type: 'shares', isActive: true, priority: 1 },
  { id: 2, name: 'ชำระเงินกู้สามัญ', type: 'loan', isActive: true, priority: 2 },
  { id: 3, name: 'ชำระเงินกู้ฉุกเฉิน', type: 'loan', isActive: true, priority: 3 },
  { id: 4, name: 'ชำระเงินกู้พิเศษ', type: 'loan', isActive: true, priority: 4 },
  { id: 5, name: 'เงินฝากออมทรัพย์พิเศษ', type: 'deposit', isActive: true, priority: 5 },
  { id: 6, name: 'ประกันชีวิตกลุ่ม', type: 'insurance', isActive: false, priority: 6 },
];

export default function PayrollSetupPage() {
  const [activeItems, setActiveItems] = useState(deductionItems);

  const handleAddDeduction = () => {
    alert('เปิดหน้าต่างเพิ่มรายการหักเงินเดือนใหม่');
  };

  const handleMoveUp = (itemId: number) => {
    const index = activeItems.findIndex(i => i.id === itemId);
    if (index > 0) {
      const newItems = [...activeItems];
      [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
      newItems[index - 1].priority = index;
      newItems[index].priority = index + 1;
      setActiveItems(newItems);
    }
  };

  const handleMoveDown = (itemId: number) => {
    const index = activeItems.findIndex(i => i.id === itemId);
    if (index < activeItems.length - 1) {
      const newItems = [...activeItems];
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
      newItems[index].priority = index + 1;
      newItems[index + 1].priority = index + 2;
      setActiveItems(newItems);
    }
  };

  const handleEditItem = (itemName: string) => {
    alert(`เปิดหน้าต่างแก้ไขรายการ: ${itemName}`);
  };

  const stats = {
    totalMembers: 8542,
    activeDeductions: 5,
    monthlyTotal: 45000000,
    lastProcessed: '2024-01-25',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ตั้งค่าหักเงินเดือน</h1>
          <p className="text-slate-500 mt-1">กำหนดรายการหักเงินเดือนและลำดับความสำคัญ</p>
        </div>
        <button onClick={handleAddDeduction} className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg">
          + เพิ่มรายการหัก
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">สมาชิกที่หักเงิน</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.totalMembers.toLocaleString()}</p>
          <p className="text-xs text-slate-400">คน</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">รายการหักที่ใช้งาน</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">{stats.activeDeductions}</p>
          <p className="text-xs text-slate-400">รายการ</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ยอดหักรวม/เดือน</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{(stats.monthlyTotal / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-slate-400">บาท</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <p className="text-sm text-slate-500">ประมวลผลล่าสุด</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{stats.lastProcessed}</p>
          <p className="text-xs text-slate-400">วันที่</p>
        </div>
      </div>

      {/* Deduction Order Info */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">ลำดับการหักเงินเดือน</h3>
        <p className="text-indigo-100 mb-4">
          ระบบจะหักเงินตามลำดับความสำคัญ หากเงินเดือนไม่พอจะหักตามลำดับจนกว่าจะหมด
          รายการที่ไม่สามารถหักได้จะถูกบันทึกเป็นหนี้ค้างชำระ
        </p>
        <div className="flex flex-wrap gap-2">
          {['1. ค่าหุ้น', '2. เงินกู้สามัญ', '3. เงินกู้ฉุกเฉิน', '4. เงินกู้พิเศษ', '5. เงินฝากพิเศษ'].map((item, i) => (
            <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm">{item}</span>
          ))}
        </div>
      </div>

      {/* Deduction Items */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800">รายการหักเงินเดือน</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase w-16">ลำดับ</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">รายการ</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สถานะ</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {activeItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-center">
                  <span className="w-8 h-8 inline-flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full font-bold text-sm">
                    {item.priority}
                  </span>
                </td>
                <td className="px-4 py-4 font-medium text-slate-800">{item.name}</td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    item.type === 'shares' ? 'bg-indigo-100 text-indigo-700' :
                    item.type === 'loan' ? 'bg-amber-100 text-amber-700' :
                    item.type === 'deposit' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {item.type === 'shares' ? 'ทุนเรือนหุ้น' :
                     item.type === 'loan' ? 'เงินกู้' :
                     item.type === 'deposit' ? 'เงินฝาก' : 'ประกัน'}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={item.isActive} className="sr-only peer" readOnly />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <button onClick={() => handleMoveUp(item.id)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg" title="ขึ้น">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button onClick={() => handleMoveDown(item.id)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg" title="ลง">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button onClick={() => handleEditItem(item.name)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg" title="แก้ไข">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <h4 className="font-semibold text-slate-800 mb-4">ตั้งค่าการหัก</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">วันที่หักเงินเดือน</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option>25 ของทุกเดือน</option>
                <option>สิ้นเดือน</option>
                <option>1 ของเดือนถัดไป</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">หักขั้นต่ำ (% ของเงินเดือน)</label>
              <input type="number" defaultValue={30} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <h4 className="font-semibold text-slate-800 mb-4">การแจ้งเตือน</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" />
              <span className="text-slate-700">แจ้งเตือนสมาชิกก่อนหักเงิน 3 วัน</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" />
              <span className="text-slate-700">แจ้งผลการหักเงินทาง SMS</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" />
              <span className="text-slate-700">แจ้งผลการหักเงินทาง Email</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
