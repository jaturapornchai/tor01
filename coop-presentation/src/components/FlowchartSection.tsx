"use client";

export default function FlowchartSection() {
  return (
    <section id="flowchart" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            ภาพรวมระบบ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            การทำงานของระบบ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-pink-500">
              COOP Web App
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ระบบบริหารงานสหกรณ์ครบวงจร เชื่อมต่อทุกส่วนงานเข้าด้วยกัน
          </p>
        </div>

        {/* Main Flowchart */}
        <div className="relative">
          {/* Central System */}
          <div className="flex flex-col items-center">
            {/* Cloud Icon */}
            <div className="relative mb-8">
              <div className="w-40 h-40 bg-gradient-to-br from-emerald-400 to-pink-400 rounded-3xl rotate-45 transform hover:rotate-0 transition-transform duration-500 shadow-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
                  </svg>
                  <span className="font-bold text-lg">Cloud</span>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="w-0.5 h-12 bg-gradient-to-b from-emerald-400 to-pink-400"></div>

            {/* Core System Box */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-emerald-200 max-w-4xl w-full">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                🏢 ระบบแกนกลาง (Core System)
              </h3>

              {/* Main Flow */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* สมาชิก */}
                <div className="bg-emerald-50 rounded-2xl p-6 text-center border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-emerald-800 mb-2">👤 สมาชิก</h4>
                  <p className="text-sm text-gray-600">ทะเบียน • ทุนเรือนหุ้น • สวัสดิการ</p>
                </div>

                {/* การเงิน */}
                <div className="bg-pink-50 rounded-2xl p-6 text-center border-2 border-pink-100 hover:border-pink-300 transition-colors">
                  <div className="w-16 h-16 bg-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-pink-800 mb-2">💰 การเงิน</h4>
                  <p className="text-sm text-gray-600">เงินกู้ • เงินฝาก • ปันผล/เฉลี่ยคืน</p>
                </div>

                {/* บัญชี */}
                <div className="bg-purple-50 rounded-2xl p-6 text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg text-purple-800 mb-2">📊 บัญชี</h4>
                  <p className="text-sm text-gray-600">บันทึก • รายงาน • งบการเงิน</p>
                </div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex items-center justify-center my-6">
              <svg className="w-8 h-8 text-emerald-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Process Flow */}
            <div className="bg-gradient-to-r from-emerald-500 to-pink-500 rounded-3xl p-1 max-w-6xl w-full">
              <div className="bg-white rounded-3xl p-8">
                <h3 className="text-xl font-bold text-center text-gray-800 mb-8">
                  📋 ขั้นตอนการทำงานหลัก
                </h3>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {[
                    { step: "1", title: "สมัครสมาชิก", icon: "📝", desc: "กรอกข้อมูล ยืนยันตัวตน" },
                    { step: "2", title: "ซื้อหุ้น/ฝากเงิน", icon: "💵", desc: "ชำระค่าหุ้น ฝากออมทรัพย์" },
                    { step: "3", title: "ขอสินเชื่อ", icon: "📄", desc: "ยื่นกู้ ตรวจสอบ อนุมัติ" },
                    { step: "4", title: "ชำระเงินกู้", icon: "💳", desc: "หักบัญชี ATM Mobile" },
                    { step: "5", title: "รับปันผล", icon: "🎉", desc: "เงินปันผล เฉลี่ยคืน" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-pink-100 rounded-2xl flex items-center justify-center mb-3 mx-auto hover:scale-110 transition-transform">
                          <span className="text-3xl">{item.icon}</span>
                        </div>
                        <div className="w-6 h-6 bg-emerald-500 text-white rounded-full text-xs font-bold flex items-center justify-center mx-auto -mt-5 mb-2">
                          {item.step}
                        </div>
                        <h4 className="font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                      </div>
                      {index < 4 && (
                        <svg className="hidden md:block w-8 h-8 text-pink-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex items-center justify-center my-6">
              <svg className="w-8 h-8 text-pink-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Output Channels */}
            <div className="grid md:grid-cols-4 gap-4 max-w-5xl w-full">
              {[
                { icon: "🖥️", title: "Web Application", desc: "เข้าถึงผ่านเว็บเบราว์เซอร์" },
                { icon: "📱", title: "Mobile App", desc: "แอปบนมือถือ iOS/Android" },
                { icon: "🏧", title: "ATM Online", desc: "เชื่อมต่อธนาคาร" },
                { icon: "📊", title: "รายงาน MIS", desc: "วิเคราะห์ข้อมูลผู้บริหาร" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <span className="text-4xl block mb-3">{item.icon}</span>
                  <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Note */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-pink-50 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            🔗 การเชื่อมต่อกับหน่วยงานภายนอก
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["กรมตรวจบัญชีสหกรณ์", "กรมส่งเสริมสหกรณ์", "ธนาคาร", "ETDA"].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
