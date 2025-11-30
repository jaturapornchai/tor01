"use client";

export default function ContactSection() {
  const cooperativeTypes = [
    { name: "สหกรณ์การเกษตร", count: "3,547", icon: "🌾", color: "emerald" },
    { name: "สหกรณ์ประมง", count: "89", icon: "🐟", color: "blue" },
    { name: "สหกรณ์นิคม", count: "85", icon: "🏘️", color: "amber" },
    { name: "สหกรณ์ร้านค้า", count: "191", icon: "🏪", color: "rose" },
    { name: "สหกรณ์บริการ", count: "1,076", icon: "🛎️", color: "purple" },
    { name: "สหกรณ์ออมทรัพย์", count: "1,435", icon: "💰", color: "pink" },
    { name: "สหกรณ์เครดิตยูเนี่ยน", count: "562", icon: "🏦", color: "cyan" },
  ];

  const benefits = [
    {
      title: "ลดต้นทุนการดำเนินงาน",
      desc: "ไม่ต้องลงทุน Server และบุคลากรดูแลระบบ",
      icon: "💵",
    },
    {
      title: "เข้าถึงได้ทุกที่ทุกเวลา",
      desc: "ใช้งานผ่าน Internet ได้ตลอด 24 ชั่วโมง",
      icon: "🌐",
    },
    {
      title: "ปลอดภัยระดับสากล",
      desc: "มาตรฐาน ISO และ PCI-DSS",
      icon: "🔐",
    },
    {
      title: "อัพเดทอัตโนมัติ",
      desc: "ระบบอัพเดทตามกฎหมายและข้อบังคับใหม่",
      icon: "🔄",
    },
    {
      title: "บริการ Support 24/7",
      desc: "ทีมงานพร้อมช่วยเหลือตลอดเวลา",
      icon: "📞",
    },
    {
      title: "สำรองข้อมูลอัตโนมัติ",
      desc: "ข้อมูลปลอดภัย มี DR Site สำรอง",
      icon: "💾",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            รองรับทุกประเภท
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            สหกรณ์ทั้ง{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-pink-500">
              7 ประเภท
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            รองรับสมาชิกมากกว่า 11.13 ล้านคน ครอบคลุมสหกรณ์ทั่วประเทศ
          </p>
        </div>

        {/* Cooperative Types Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-16">
          {cooperativeTypes.map((coop, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-${coop.color}-200 text-center`}
            >
              <div className={`w-14 h-14 bg-${coop.color}-100 rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                <span className="text-2xl">{coop.icon}</span>
              </div>
              <h4 className="font-semibold text-sm text-gray-800 mb-1">{coop.name}</h4>
              <p className={`text-lg font-bold text-${coop.color}-600`}>{coop.count}</p>
              <p className="text-xs text-gray-500">แห่ง</p>
            </div>
          ))}
        </div>

        {/* Total Members */}
        <div className="bg-gradient-to-r from-emerald-500 to-pink-500 rounded-2xl sm:rounded-3xl p-1 mb-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-emerald-600">6,985</div>
                <p className="text-xs sm:text-base text-gray-600 mt-1 sm:mt-2">สหกรณ์ทั้งหมด</p>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-pink-600">11.13</div>
                <p className="text-xs sm:text-base text-gray-600 mt-1 sm:mt-2">ล้านคน (สมาชิก)</p>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-purple-600">3.67</div>
                <p className="text-xs sm:text-base text-gray-600 mt-1 sm:mt-2">ล้านล้านบาท</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            ทำไมต้องเลือก COOP Web App on Cloud?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-emerald-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            พร้อมยกระดับการบริหารงานสหกรณ์ของคุณ?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            ติดต่อเราวันนี้เพื่อรับคำปรึกษาและข้อเสนอพิเศษสำหรับสหกรณ์ของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              โทรหาเรา
            </button>
            <button
              type="button"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ส่งอีเมล
            </button>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            📊 เปรียบเทียบ Cloud vs On-Premise
          </h3>
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full min-w-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-500 to-pink-500 text-white">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base">รายการ</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base">Cloud</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-sm sm:text-base">On-Premise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { item: "ค่าลงทุนเริ่มต้น", cloud: "ต่ำ - จ่ายตามใช้งาน", premise: "สูง - ซื้อ Server/License" },
                  { item: "การดูแลรักษา", cloud: "ผู้ให้บริการดูแล", premise: "ต้องจ้างบุคลากร" },
                  { item: "ความปลอดภัย", cloud: "ISO 27001 + SOC2", premise: "ต้องจัดการเอง" },
                  { item: "สำรองข้อมูล", cloud: "อัตโนมัติ + DR Site", premise: "ต้องจัดการเอง" },
                  { item: "การขยายระบบ", cloud: "ทันที - เพิ่ม Resource", premise: "ต้องซื้ออุปกรณ์เพิ่ม" },
                  { item: "การอัพเดท", cloud: "อัตโนมัติ ฟรี", premise: "ต้องจ่ายค่า Update" },
                  { item: "เข้าถึงจากภายนอก", cloud: "ได้ทันที", premise: "ต้องตั้งค่า VPN" },
                  { item: "Uptime SLA", cloud: "99.95% รับประกัน", premise: "ไม่มีการรับประกัน" },
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-800 text-sm sm:text-base">{row.item}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-emerald-600 text-sm sm:text-base">{row.cloud}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-gray-500 text-sm sm:text-base">{row.premise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
