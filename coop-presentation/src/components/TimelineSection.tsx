"use client";

export default function TimelineSection() {
  const phases = [
    {
      phase: 1,
      title: "ระยะที่ 1 - วิเคราะห์และออกแบบระบบ",
      duration: "30 วัน",
      color: "emerald",
      deliverables: [
        {
          name: "เอกสารวิเคราะห์ระบบ (System Analysis)",
          details: [
            "วิเคราะห์ความต้องการของผู้ใช้งาน",
            "วิเคราะห์กระบวนการทำงาน (Business Process)",
            "วิเคราะห์ข้อมูลและโครงสร้างฐานข้อมูล",
          ],
        },
        {
          name: "เอกสารออกแบบระบบ (System Design)",
          details: [
            "ออกแบบ User Interface (UI/UX)",
            "ออกแบบฐานข้อมูล (Database Design)",
            "ออกแบบสถาปัตยกรรมระบบ (System Architecture)",
          ],
        },
        {
          name: "แผนการดำเนินงาน",
          details: [
            "แผนการพัฒนาระบบ",
            "แผนการทดสอบระบบ",
            "แผนการอบรมผู้ใช้งาน",
          ],
        },
      ],
    },
    {
      phase: 2,
      title: "ระยะที่ 2 - พัฒนาและทดสอบระบบ",
      duration: "60 วัน",
      color: "pink",
      deliverables: [
        {
          name: "ระบบ Web Application",
          details: [
            "14 ระบบหลัก พร้อมใช้งาน",
            "3 ระบบเสริม พร้อมใช้งาน",
            "ระบบรายงาน MIS และ Dashboard",
          ],
        },
        {
          name: "ระบบ Mobile Application",
          details: [
            "รองรับ iOS และ Android",
            "ฟังก์ชันตรวจสอบข้อมูลสมาชิก",
            "ระบบแจ้งเตือน (Push Notification)",
          ],
        },
        {
          name: "การทดสอบระบบ",
          details: [
            "Unit Testing",
            "Integration Testing",
            "User Acceptance Testing (UAT)",
          ],
        },
        {
          name: "เอกสารคู่มือ",
          details: [
            "คู่มือการใช้งานระบบ 28 ชุด",
            "คู่มือผู้ดูแลระบบ (Admin)",
            "คู่มือการติดตั้งและบำรุงรักษา",
          ],
        },
      ],
    },
    {
      phase: 3,
      title: "ระยะที่ 3 - ติดตั้งและอบรม",
      duration: "30 วัน",
      color: "purple",
      deliverables: [
        {
          name: "การติดตั้งระบบ",
          details: [
            "ติดตั้งบน Cloud Server",
            "ตั้งค่า DR Site สำรอง",
            "เชื่อมต่อ ATM Online Banking",
          ],
        },
        {
          name: "การโอนย้ายข้อมูล",
          details: [
            "โอนย้ายข้อมูลจากระบบเดิม",
            "ตรวจสอบความถูกต้องของข้อมูล",
            "ทดสอบระบบหลังโอนย้าย",
          ],
        },
        {
          name: "การอบรม",
          details: [
            "อบรมผู้ดูแลระบบ 2 คน",
            "อบรมเจ้าหน้าที่ปฏิบัติงาน 8 คน",
            "อบรมการใช้งาน Mobile App",
          ],
        },
        {
          name: "รับประกันและบำรุงรักษา",
          details: [
            "รับประกันระบบ 1 ปี",
            "บริการ Support 24/7",
            "แก้ไข Bug ฟรีตลอดระยะรับประกัน",
          ],
        },
      ],
    },
  ];

  const requirements = [
    {
      category: "คุณสมบัติผู้เสนอราคา",
      icon: "📋",
      items: [
        "เป็นนิติบุคคลจดทะเบียนในประเทศไทย",
        "มีประสบการณ์พัฒนาระบบสหกรณ์ไม่น้อยกว่า 3 ปี",
        "มีผลงานพัฒนาระบบ Cloud ไม่น้อยกว่า 3 โครงการ",
        "มีทีมพัฒนาที่มีประสบการณ์ไม่น้อยกว่า 5 คน",
        "มีใบรับรอง ISO 27001 หรือเทียบเท่า",
      ],
    },
    {
      category: "ข้อกำหนดด้านเทคนิค",
      icon: "💻",
      items: [
        "รองรับ Web Browser ทุกค่าย (Chrome, Firefox, Safari, Edge)",
        "รองรับ Windows 10 ขึ้นไป",
        "รองรับผู้ใช้งานพร้อมกันไม่น้อยกว่า 500 คน",
        "Response Time ไม่เกิน 3 วินาที",
        "สำรองข้อมูลอัตโนมัติทุกวัน",
      ],
    },
    {
      category: "การรับประกัน",
      icon: "🛡️",
      items: [
        "รับประกันระบบ 1 ปี นับจากวันส่งมอบงาน",
        "แก้ไข Bug ภายใน 24 ชั่วโมง (Critical)",
        "แก้ไข Bug ภายใน 72 ชั่วโมง (Normal)",
        "บริการ Support ตลอด 24 ชั่วโมง",
        "อัพเดทระบบตามกฎหมายที่เปลี่ยนแปลง",
      ],
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            แผนการดำเนินงาน
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            ระยะเวลาโครงการ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-pink-500">
              120 วัน
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            แบ่งการส่งมอบงานเป็น 3 งวด พร้อมเอกสารและการอบรมครบถ้วน
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-pink-400 to-purple-400 rounded-full"></div>

          {phases.map((phase, index) => (
            <div key={phase.phase} className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-emerald-400 items-center justify-center z-10">
                <span className="text-xl font-bold text-emerald-600">{phase.phase}</span>
              </div>

              <div className={`md:w-[calc(50%-40px)] ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                {/* Phase Card */}
                <div className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-${phase.color}-200`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${
                    phase.color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
                    phase.color === 'pink' ? 'from-pink-500 to-pink-600' :
                    'from-purple-500 to-purple-600'
                  } p-6 text-white`}>
                    <div>
                      <div className="md:hidden w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                        <span className="text-lg font-bold">{phase.phase}</span>
                      </div>
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <p className="text-white/80 mt-1">ระยะเวลา: {phase.duration}</p>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <span className="mr-2">📦</span> สิ่งที่ส่งมอบ
                    </h4>
                    <div className="space-y-4">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4">
                          <h5 className="font-semibold text-gray-800 mb-2">{deliverable.name}</h5>
                          <ul className="space-y-1">
                            {deliverable.details.map((detail, detailIdx) => (
                              <li key={detailIdx} className="text-sm text-gray-600 flex items-start">
                                <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "120", unit: "วัน", desc: "ระยะเวลาทั้งหมด" },
            { value: "3", unit: "งวด", desc: "การส่งมอบงาน" },
            { value: "28", unit: "ชุด", desc: "คู่มือการใช้งาน" },
            { value: "10", unit: "คน", desc: "ผู้รับการอบรม" },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-50 to-pink-50 rounded-2xl p-6 text-center border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
              <div className="text-sm text-pink-600 font-medium">{stat.unit}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            📋 ข้อกำหนดและเงื่อนไข
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{req.icon}</span>
                  <h4 className="font-bold text-gray-800">{req.category}</h4>
                </div>
                <ul className="space-y-2">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
