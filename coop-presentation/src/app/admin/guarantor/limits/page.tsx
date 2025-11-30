"use client";

export default function GuarantorLimitsPage() {
  const loanTypes = [
    { type: 'สามัญ', guarantorRequired: 2, maxGuaranteePerPerson: 3, maxAmount: 500000, shareMultiplier: 10 },
    { type: 'ฉุกเฉิน', guarantorRequired: 1, maxGuaranteePerPerson: 5, maxAmount: 50000, shareMultiplier: 5 },
    { type: 'พิเศษ', guarantorRequired: 3, maxGuaranteePerPerson: 2, maxAmount: 3000000, shareMultiplier: 15 },
    { type: 'ที่อยู่อาศัย', guarantorRequired: 0, maxGuaranteePerPerson: 0, maxAmount: 5000000, shareMultiplier: 0 },
  ];

  const limitTiers = [
    { shares: '10,000 - 50,000', guaranteeLimit: '100,000', maxContracts: 3 },
    { shares: '50,001 - 100,000', guaranteeLimit: '500,000', maxContracts: 4 },
    { shares: '100,001 - 200,000', guaranteeLimit: '1,000,000', maxContracts: 5 },
    { shares: '200,001 ขึ้นไป', guaranteeLimit: '2,000,000', maxContracts: 5 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">วงเงินค้ำประกัน</h1>
        <p className="text-slate-500 mt-1">กำหนดวงเงินและเงื่อนไขการค้ำประกันตามประเภทสินเชื่อ</p>
      </div>

      {/* Guarantee Requirements by Loan Type */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-3 sm:p-4 border-b border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-600">
          <h3 className="font-semibold text-white text-sm sm:text-base">เงื่อนไขผู้ค้ำประกันตามประเภทสินเชื่อ</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ประเภท</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ผู้ค้ำ</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">ค้ำได้สูงสุด</th>
                <th className="px-2 sm:px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">วงเงินสูงสุด</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">ตัวคูณ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loanTypes.map((loan) => (
                <tr key={loan.type} className="hover:bg-slate-50">
                  <td className="px-2 sm:px-4 py-3 sm:py-4">
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs sm:text-sm font-medium ${
                      loan.type === 'สามัญ' ? 'bg-indigo-100 text-indigo-700' :
                      loan.type === 'ฉุกเฉิน' ? 'bg-amber-100 text-amber-700' :
                      loan.type === 'พิเศษ' ? 'bg-violet-100 text-violet-700' :
                      'bg-teal-100 text-teal-700'
                    }`}>
                      {loan.type}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center font-semibold text-slate-800 text-xs sm:text-sm">
                    {loan.guarantorRequired > 0 ? `${loan.guarantorRequired} คน` : 'ไม่ต้องมี'}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center text-slate-600 text-xs sm:text-sm hidden sm:table-cell">
                    {loan.maxGuaranteePerPerson > 0 ? `${loan.maxGuaranteePerPerson} สัญญา` : '-'}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-right font-semibold text-cyan-600 text-xs sm:text-sm">
                    {loan.maxAmount.toLocaleString()}
                  </td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center text-slate-600 text-xs sm:text-sm">
                    {loan.shareMultiplier > 0 ? `${loan.shareMultiplier}x` : 'จำนอง'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guarantee Limit Tiers */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-3 sm:p-4 border-b border-slate-200 bg-gradient-to-r from-emerald-500 to-teal-600">
          <h3 className="font-semibold text-white text-sm sm:text-base">วงเงินค้ำประกันตามทุนเรือนหุ้น</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-2 sm:px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ทุนเรือนหุ้น</th>
                <th className="px-2 sm:px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase">วงเงินค้ำสูงสุด</th>
                <th className="px-2 sm:px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase">สัญญา</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {limitTiers.map((tier, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="px-2 sm:px-4 py-3 sm:py-4 font-medium text-slate-800 text-xs sm:text-sm">{tier.shares}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-right font-semibold text-emerald-600 text-xs sm:text-sm">{tier.guaranteeLimit}</td>
                  <td className="px-2 sm:px-4 py-3 sm:py-4 text-center text-slate-600 text-xs sm:text-sm">{tier.maxContracts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h4 className="font-semibold text-blue-800 mb-3">คุณสมบัติผู้ค้ำประกัน</h4>
          <ul className="space-y-2 text-sm text-blue-700">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              เป็นสมาชิกมาแล้วไม่น้อยกว่า 1 ปี
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ไม่มีหนี้ค้างชำระ
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              มีหุ้นสะสมไม่น้อยกว่า 10,000 บาท
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              มีรายได้ประจำที่มั่นคง
            </li>
          </ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h4 className="font-semibold text-amber-800 mb-3">ข้อยกเว้น</h4>
          <ul className="space-y-2 text-sm text-amber-700">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              ไม่สามารถค้ำให้บุคคลในครอบครัว
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              ผู้ค้ำที่เคยถูกฟ้องต้องรอ 2 ปี
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              สมาชิกใหม่ต้องรอครบ 1 ปี
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              ผู้ค้ำประกันสินเชื่อ NPL ไม่สามารถค้ำเพิ่ม
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
