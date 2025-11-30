"use client";

import { useState } from "react";

const mainSystems = [
  {
    id: 1,
    name: "ระบบทะเบียนสมาชิก",
    icon: "👤",
    color: "from-emerald-400 to-emerald-600",
    features: ["ข้อมูลสมาชิก", "ผู้รับผลประโยชน์", "ประวัติการเปลี่ยนแปลง", "รายงานต่างๆ"],
  },
  {
    id: 2,
    name: "ระบบทุนเรือนหุ้น",
    icon: "💎",
    color: "from-blue-400 to-blue-600",
    features: ["ค่าหุ้นรายเดือน", "ซื้อหุ้นเพิ่ม", "ถอน/โอนหุ้น", "รายงานหุ้นสะสม"],
  },
  {
    id: 3,
    name: "ระบบเงินกู้และค้ำประกัน",
    icon: "📋",
    color: "from-pink-400 to-pink-600",
    features: ["กู้สามัญ/พิเศษ/ฉุกเฉิน", "ค้ำประกัน", "ตารางผ่อนชำระ", "อนุมัติออนไลน์"],
  },
  {
    id: 4,
    name: "ระบบประมวลผลจัดเก็บ",
    icon: "⚙️",
    color: "from-amber-400 to-amber-600",
    features: ["หักเงินรายเดือน", "จัดเก็บอัตโนมัติ", "ส่งออกข้อมูล", "รายงานจัดเก็บ"],
  },
  {
    id: 5,
    name: "ระบบเงินปันผลและเฉลี่ยคืน",
    icon: "🎁",
    color: "from-purple-400 to-purple-600",
    features: ["คำนวณปันผล", "เฉลี่ยคืน", "โอนเข้าหุ้น/ฝาก", "ใบแจ้งยอด"],
  },
  {
    id: 6,
    name: "ระบบการเงิน",
    icon: "💵",
    color: "from-green-400 to-green-600",
    features: ["รับ-จ่ายเงิน", "เช็ค/ดราฟต์", "ควบคุมเงินสด", "รายงานประจำวัน"],
  },
  {
    id: 7,
    name: "ระบบเงินฝาก",
    icon: "🏦",
    color: "from-cyan-400 to-cyan-600",
    features: ["ออมทรัพย์/ประจำ", "ดอกเบี้ย", "สมุดคู่ฝาก", "Statement"],
  },
  {
    id: 8,
    name: "ระบบบัญชี",
    icon: "📊",
    color: "from-indigo-400 to-indigo-600",
    features: ["ผังบัญชี", "งบทดลอง", "งบการเงิน", "ส่งกรมตรวจฯ"],
  },
  {
    id: 9,
    name: "ระบบสวัสดิการสมาชิก",
    icon: "❤️",
    color: "from-rose-400 to-rose-600",
    features: ["ทุนสาธารณประโยชน์", "สงเคราะห์ศพ", "ทุนการศึกษา", "ช่วยเหลือภัยพิบัติ"],
  },
  {
    id: 10,
    name: "ระบบ MIS",
    icon: "📈",
    color: "from-teal-400 to-teal-600",
    features: ["Dashboard", "วิเคราะห์ข้อมูล", "กราฟ/รายงาน", "ตัดสินใจผู้บริหาร"],
  },
  {
    id: 11,
    name: "ระบบผู้ดูแลระบบ",
    icon: "🔐",
    color: "from-gray-500 to-gray-700",
    features: ["กำหนดสิทธิ์", "Log การใช้งาน", "Backup", "ความปลอดภัย"],
  },
  {
    id: 12,
    name: "ระบบ ATM Online",
    icon: "🏧",
    color: "from-orange-400 to-orange-600",
    features: ["ฝาก-ถอน ATM", "เชื่อมธนาคาร", "เบิกเงินกู้", "Real-time"],
  },
  {
    id: 13,
    name: "ระบบสำรองข้อมูล",
    icon: "💾",
    color: "from-slate-400 to-slate-600",
    features: ["Auto Backup", "DR Site", "Sync ข้อมูล", "กู้คืนได้ทันที"],
  },
  {
    id: 14,
    name: "ระบบ Mobile Application",
    icon: "📱",
    color: "from-violet-400 to-violet-600",
    features: ["ดูยอดหุ้น/หนี้", "ตรวจสอบสถานะ", "แจ้งเตือน", "สะดวกทุกที่"],
  },
];

const additionalSystems = [
  {
    id: 15,
    name: "ระบบ Wallet (Close Loop)",
    icon: "💳",
    color: "from-indigo-500 to-blue-500",
    features: ["กระเป๋าเงินสมาชิก", "โอนเงินภายใน", "ชำระค่าบริการ", "ใช้ได้เฉพาะสมาชิก"],
  },
  {
    id: 16,
    name: "ระบบบริหารสำนักงาน",
    icon: "🏢",
    color: "from-emerald-500 to-pink-500",
    features: ["งานบุคคล", "พัสดุ/ครุภัณฑ์", "ทะเบียนเอกสาร", "เงินเดือน"],
  },
  {
    id: 17,
    name: "ระบบตั๋วสัญญาใช้เงิน",
    icon: "📜",
    color: "from-pink-500 to-purple-500",
    features: ["ออกตั๋ว", "ดอกเบี้ย", "ไถ่ถอน", "รายงานครบกำหนด"],
  },
  {
    id: 18,
    name: "ระบบบริหารลูกหนี้ค้างชำระ",
    icon: "⚠️",
    color: "from-red-400 to-red-600",
    features: ["ติดตามหนี้", "จัดชั้นหนี้", "NPL", "ประนอมหนี้"],
  },
];

export default function SystemsSection() {
  const [selectedSystem, setSelectedSystem] = useState<typeof mainSystems[0] | null>(null);

  return (
    <section id="systems" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-4">
            ระบบงานทั้งหมด
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-emerald-500">14</span> ระบบหลัก +{" "}
            <span className="text-pink-500">4</span> ระบบเสริม
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ครอบคลุมทุกภารกิจของสหกรณ์ ตั้งแต่สมาชิก การเงิน บัญชี จนถึงรายงานผู้บริหาร
          </p>
        </div>

        {/* Main Systems Grid */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm mr-2 sm:mr-3">
              14
            </span>
            ระบบหลัก
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-4">
            {mainSystems.map((system) => (
              <button
                key={system.id}
                onClick={() => setSelectedSystem(system)}
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 ${
                  selectedSystem?.id === system.id ? "ring-2 ring-emerald-500 border-emerald-500" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${system.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-lg sm:text-2xl">{system.icon}</span>
                </div>
                <p className="text-[10px] sm:text-xs font-medium text-gray-700 text-center leading-tight line-clamp-2">
                  {system.name.replace("ระบบ", "")}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Systems */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">
              4
            </span>
            ระบบเสริม
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalSystems.map((system) => (
              <button
                key={system.id}
                onClick={() => setSelectedSystem(system)}
                className={`group bg-gradient-to-r ${system.color} rounded-2xl p-6 text-white text-left hover:scale-105 transition-all duration-300 ${
                  selectedSystem?.id === system.id ? "ring-4 ring-white ring-opacity-50" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{system.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg">{system.name}</h4>
                    <p className="text-sm text-white/80">{system.features.slice(0, 2).join(" • ")}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected System Details */}
        {selectedSystem && (
          <div className="bg-gradient-to-r from-emerald-50 to-pink-50 rounded-3xl p-8 border border-emerald-100">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedSystem.color} flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-4xl">{selectedSystem.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedSystem.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSystem.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedSystem(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Summary Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-500 rounded-2xl p-6 text-white">
            <div className="text-4xl mb-2">🔄</div>
            <h4 className="font-bold text-xl mb-2">เชื่อมต่อทุกระบบ</h4>
            <p className="text-emerald-100">ข้อมูลเชื่อมโยงอัตโนมัติ ไม่ต้องกรอกซ้ำ</p>
          </div>
          <div className="bg-pink-500 rounded-2xl p-6 text-white">
            <div className="text-4xl mb-2">📱</div>
            <h4 className="font-bold text-xl mb-2">ใช้งานได้ทุกที่</h4>
            <p className="text-pink-100">Web + Mobile Application รองรับทุกอุปกรณ์</p>
          </div>
          <div className="bg-purple-500 rounded-2xl p-6 text-white">
            <div className="text-4xl mb-2">📊</div>
            <h4 className="font-bold text-xl mb-2">รายงานครบถ้วน</h4>
            <p className="text-purple-100">ตามมาตรฐานกรมตรวจบัญชีสหกรณ์</p>
          </div>
        </div>
      </div>
    </section>
  );
}
