"use client";

import { useState } from "react";

export default function FinancialStatementsPage() {
  const [selectedStatement, setSelectedStatement] = useState('balance');

  const handleExportReport = () => {
    const statementNames: { [key: string]: string } = {
      balance: 'งบแสดงฐานะการเงิน',
      income: 'งบกำไรขาดทุน',
      cashflow: 'งบกระแสเงินสด',
      equity: 'งบแสดงการเปลี่ยนแปลงทุน',
    };
    alert(`กำลังส่งออก: ${statementNames[selectedStatement] || 'งบการเงิน'}`);
  };

  const balanceSheet = {
    assets: {
      current: [
        { name: 'เงินสดและเงินฝากธนาคาร', amount: 110000000 },
        { name: 'ลูกหนี้เงินกู้', amount: 740000000 },
      ],
      nonCurrent: [
        { name: 'ที่ดิน อาคาร และอุปกรณ์', amount: 25000000 },
        { name: 'สินทรัพย์อื่น', amount: 5000000 },
      ],
    },
    liabilities: {
      current: [
        { name: 'เงินรับฝากจากสมาชิก', amount: 395000000 },
        { name: 'เจ้าหนี้และค่าใช้จ่ายค้างจ่าย', amount: 15000000 },
      ],
      nonCurrent: [
        { name: 'เงินกู้ยืมระยะยาว', amount: 100000000 },
      ],
    },
    equity: [
      { name: 'ทุนเรือนหุ้น', amount: 285000000 },
      { name: 'ทุนสำรอง', amount: 45000000 },
      { name: 'กำไรสะสม', amount: 40000000 },
    ],
  };

  const totalAssets = balanceSheet.assets.current.reduce((sum, i) => sum + i.amount, 0) +
                      balanceSheet.assets.nonCurrent.reduce((sum, i) => sum + i.amount, 0);
  const totalLiabilities = balanceSheet.liabilities.current.reduce((sum, i) => sum + i.amount, 0) +
                           balanceSheet.liabilities.nonCurrent.reduce((sum, i) => sum + i.amount, 0);
  const totalEquity = balanceSheet.equity.reduce((sum, i) => sum + i.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">งบการเงิน</h1>
          <p className="text-slate-500 mt-1">งบการเงินประจำปี 2566</p>
        </div>
        <button onClick={handleExportReport} className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg">
          ส่งออกรายงาน
        </button>
      </div>

      {/* Statement Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'balance', name: 'งบแสดงฐานะการเงิน' },
            { id: 'income', name: 'งบกำไรขาดทุน' },
            { id: 'cashflow', name: 'งบกระแสเงินสด' },
            { id: 'equity', name: 'งบแสดงการเปลี่ยนแปลงทุน' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedStatement(tab.id)}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedStatement === tab.id
                  ? 'border-violet-500 text-violet-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Balance Sheet */}
      {selectedStatement === 'balance' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Assets */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-blue-50">
              <h3 className="font-semibold text-blue-800">สินทรัพย์</h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-600 mb-2">สินทรัพย์หมุนเวียน</p>
                {balanceSheet.assets.current.map((item) => (
                  <div key={item.name} className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-700">{item.name}</span>
                    <span className="font-medium">{item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600 mb-2">สินทรัพย์ไม่หมุนเวียน</p>
                {balanceSheet.assets.nonCurrent.map((item) => (
                  <div key={item.name} className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-700">{item.name}</span>
                    <span className="font-medium">{item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t-2 border-blue-200">
                <div className="flex justify-between">
                  <span className="font-bold text-blue-800">รวมสินทรัพย์</span>
                  <span className="font-bold text-blue-800">{totalAssets.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Liabilities & Equity */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-200 bg-red-50">
                <h3 className="font-semibold text-red-800">หนี้สิน</h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-2">หนี้สินหมุนเวียน</p>
                  {balanceSheet.liabilities.current.map((item) => (
                    <div key={item.name} className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-700">{item.name}</span>
                      <span className="font-medium">{item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-2">หนี้สินไม่หมุนเวียน</p>
                  {balanceSheet.liabilities.nonCurrent.map((item) => (
                    <div key={item.name} className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-700">{item.name}</span>
                      <span className="font-medium">{item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t-2 border-red-200">
                  <div className="flex justify-between">
                    <span className="font-bold text-red-800">รวมหนี้สิน</span>
                    <span className="font-bold text-red-800">{totalLiabilities.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-200 bg-emerald-50">
                <h3 className="font-semibold text-emerald-800">ทุน</h3>
              </div>
              <div className="p-4">
                {balanceSheet.equity.map((item) => (
                  <div key={item.name} className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-700">{item.name}</span>
                    <span className="font-medium">{item.amount.toLocaleString()}</span>
                  </div>
                ))}
                <div className="pt-4 border-t-2 border-emerald-200 mt-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-emerald-800">รวมทุน</span>
                    <span className="font-bold text-emerald-800">{totalEquity.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedStatement !== 'balance' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
          <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-slate-500">เลือกดูงบการเงินประเภทอื่น</p>
        </div>
      )}
    </div>
  );
}
