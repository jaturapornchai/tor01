"use client";

const trialBalanceData = [
  { code: '1100', name: 'เงินสด', debit: 25000000, credit: 0 },
  { code: '1200', name: 'เงินฝากธนาคาร', debit: 85000000, credit: 0 },
  { code: '1300', name: 'ลูกหนี้เงินกู้สามัญ', debit: 385000000, credit: 0 },
  { code: '1310', name: 'ลูกหนี้เงินกู้ฉุกเฉิน', debit: 45000000, credit: 0 },
  { code: '1320', name: 'ลูกหนี้เงินกู้พิเศษ', debit: 125000000, credit: 0 },
  { code: '1330', name: 'ลูกหนี้เงินกู้ที่อยู่อาศัย', debit: 185000000, credit: 0 },
  { code: '2100', name: 'เงินรับฝากออมทรัพย์', debit: 0, credit: 185000000 },
  { code: '2200', name: 'เงินรับฝากประจำ', debit: 0, credit: 125000000 },
  { code: '2300', name: 'เงินรับฝากพิเศษ', debit: 0, credit: 85000000 },
  { code: '3100', name: 'ทุนเรือนหุ้น', debit: 0, credit: 285000000 },
  { code: '3200', name: 'ทุนสำรอง', debit: 0, credit: 85000000 },
  { code: '3300', name: 'กำไรสะสม', debit: 0, credit: 85000000 },
];

export default function TrialBalancePage() {
  const totalDebit = trialBalanceData.reduce((sum, item) => sum + item.debit, 0);
  const totalCredit = trialBalanceData.reduce((sum, item) => sum + item.credit, 0);
  const isBalanced = totalDebit === totalCredit;

  const handlePrintReport = () => {
    alert('กำลังเตรียมพิมพ์งบทดลอง');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">งบทดลอง</h1>
          <p className="text-slate-500 mt-1">ตรวจสอบความสมดุลของบัญชี ณ วันที่ 31 มกราคม 2567</p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500">
            <option>มกราคม 2567</option>
            <option>ธันวาคม 2566</option>
          </select>
          <button onClick={handlePrintReport} className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg">
            พิมพ์รายงาน
          </button>
        </div>
      </div>

      {/* Balance Status */}
      <div className={`rounded-xl p-6 ${isBalanced ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isBalanced ? 'bg-emerald-500' : 'bg-red-500'}`}>
            {isBalanced ? (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <div>
            <p className={`font-semibold text-lg ${isBalanced ? 'text-emerald-800' : 'text-red-800'}`}>
              {isBalanced ? 'งบทดลองสมดุล' : 'งบทดลองไม่สมดุล'}
            </p>
            <p className={`${isBalanced ? 'text-emerald-600' : 'text-red-600'}`}>
              {isBalanced ? 'ยอดเดบิตและเครดิตเท่ากัน' : 'โปรดตรวจสอบรายการบันทึกบัญชี'}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">รวมเดบิต</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{(totalDebit / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-blue-500">บาท</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <p className="text-sm text-red-600">รวมเครดิต</p>
          <p className="text-3xl font-bold text-red-700 mt-1">{(totalCredit / 1000000).toFixed(0)}M</p>
          <p className="text-xs text-red-500">บาท</p>
        </div>
        <div className={`rounded-xl p-5 ${isBalanced ? 'bg-emerald-50 border border-emerald-200' : 'bg-amber-50 border border-amber-200'}`}>
          <p className={`text-sm ${isBalanced ? 'text-emerald-600' : 'text-amber-600'}`}>ผลต่าง</p>
          <p className={`text-3xl font-bold mt-1 ${isBalanced ? 'text-emerald-700' : 'text-amber-700'}`}>
            {Math.abs(totalDebit - totalCredit).toLocaleString()}
          </p>
          <p className={`text-xs ${isBalanced ? 'text-emerald-500' : 'text-amber-500'}`}>บาท</p>
        </div>
      </div>

      {/* Trial Balance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-violet-50">
          <h3 className="font-semibold text-slate-800">งบทดลอง ณ วันที่ 31 มกราคม 2567</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">รหัสบัญชี</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ชื่อบัญชี</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เดบิต</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">เครดิต</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {trialBalanceData.map((item) => (
              <tr key={item.code} className="hover:bg-slate-50">
                <td className="px-4 py-4 text-sm font-medium text-violet-600">{item.code}</td>
                <td className="px-4 py-4 text-slate-800">{item.name}</td>
                <td className="px-4 py-4 text-right font-medium text-blue-600">
                  {item.debit > 0 ? item.debit.toLocaleString() : '-'}
                </td>
                <td className="px-4 py-4 text-right font-medium text-red-600">
                  {item.credit > 0 ? item.credit.toLocaleString() : '-'}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-100 border-t-2 border-slate-300">
              <td colSpan={2} className="px-4 py-4 font-bold text-slate-800">รวมทั้งสิ้น</td>
              <td className="px-4 py-4 text-right font-bold text-blue-700">{totalDebit.toLocaleString()}</td>
              <td className="px-4 py-4 text-right font-bold text-red-700">{totalCredit.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
