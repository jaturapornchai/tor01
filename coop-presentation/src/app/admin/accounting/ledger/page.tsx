"use client";

import { useState } from "react";

const ledgerEntries = [
  { id: 'JV202401001', date: '2024-01-15', description: 'รับชำระหนี้เงินกู้ - นายสมชาย ใจดี', debit: 5500, credit: 0, balance: 485500000, account: 'เงินสด' },
  { id: 'JV202401002', date: '2024-01-15', description: 'รับเงินฝากออมทรัพย์ - นางสาวมะลิ หอมหวาน', debit: 10000, credit: 0, balance: 485510000, account: 'เงินสด' },
  { id: 'JV202401003', date: '2024-01-15', description: 'จ่ายเงินกู้สามัญ - นายสมศักดิ์ ดีใจ', debit: 0, credit: 300000, balance: 485210000, account: 'เงินสด' },
  { id: 'JV202401004', date: '2024-01-14', description: 'รับค่าหุ้นประจำเดือน', debit: 8542000, credit: 0, balance: 493752000, account: 'เงินสด' },
];

export default function LedgerPage() {
  const [selectedAccount, setSelectedAccount] = useState('all');

  const handleAddEntry = () => {
    alert('เปิดหน้าต่างบันทึกรายการบัญชีใหม่');
  };

  const handleSearch = () => {
    alert('ค้นหารายการบัญชี');
  };

  const stats = {
    totalAssets: 850000000,
    totalLiabilities: 565000000,
    equity: 285000000,
    monthlyTransactions: 4528,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">สมุดบัญชีแยกประเภท</h1>
          <p className="text-slate-500 mt-1">รายการบันทึกบัญชีทั้งหมดของสหกรณ์</p>
        </div>
        <button onClick={handleAddEntry} className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg">
          + บันทึกรายการ
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">สินทรัพย์รวม</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{(stats.totalAssets / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-blue-500">บาท</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <p className="text-sm text-red-600">หนี้สินรวม</p>
          <p className="text-3xl font-bold text-red-700 mt-1">{(stats.totalLiabilities / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-red-500">บาท</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">ทุน</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{(stats.equity / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-emerald-500">บาท</p>
        </div>
        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5">
          <p className="text-sm text-violet-600">รายการเดือนนี้</p>
          <p className="text-3xl font-bold text-violet-700 mt-1">{stats.monthlyTransactions.toLocaleString()}</p>
          <p className="text-xs text-violet-500">รายการ</p>
        </div>
      </div>

      {/* Account Categories */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="font-semibold text-lg mb-4">หมวดบัญชี</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'สินทรัพย์', code: '1xxx', count: 45 },
            { name: 'หนี้สิน', code: '2xxx', count: 28 },
            { name: 'ทุน', code: '3xxx', count: 15 },
            { name: 'รายได้', code: '4xxx', count: 22 },
            { name: 'ค่าใช้จ่าย', code: '5xxx', count: 35 },
          ].map((item) => (
            <div key={item.code} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center cursor-pointer hover:bg-white/20 transition-colors">
              <p className="text-violet-100 text-sm">{item.code}</p>
              <p className="font-semibold mt-1">{item.name}</p>
              <p className="text-violet-200 text-xs mt-1">{item.count} บัญชี</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500"
          >
            <option value="all">บัญชีทั้งหมด</option>
            <option value="cash">เงินสด</option>
            <option value="loan">ลูกหนี้เงินกู้</option>
            <option value="deposit">เงินรับฝาก</option>
          </select>
          <input
            type="date"
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="date"
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500"
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
            ค้นหา
          </button>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">เลขที่</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">วันที่</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">รายการ</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">บัญชี</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เดบิต</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เครดิต</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">ยอดคงเหลือ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {ledgerEntries.map((entry) => (
              <tr key={entry.id} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-violet-600">{entry.id}</td>
                <td className="px-4 py-4 text-sm text-slate-500">{entry.date}</td>
                <td className="px-4 py-4 text-slate-800">{entry.description}</td>
                <td className="px-4 py-4 text-center">
                  <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded text-xs font-medium">
                    {entry.account}
                  </span>
                </td>
                <td className="px-4 py-4 text-right text-blue-600 font-medium">
                  {entry.debit > 0 ? entry.debit.toLocaleString() : '-'}
                </td>
                <td className="px-4 py-4 text-right text-red-600 font-medium">
                  {entry.credit > 0 ? entry.credit.toLocaleString() : '-'}
                </td>
                <td className="px-4 py-4 text-right font-semibold">{entry.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
