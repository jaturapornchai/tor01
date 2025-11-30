"use client";

export default function TechnologySection() {
  const techStack = [
    {
      category: "Web Application",
      icon: "🌐",
      items: [".NET Framework / PHP", "Web Browser รองรับทุกค่าย", "Windows 10+"],
    },
    {
      category: "Database",
      icon: "💾",
      items: ["Microsoft SQL Server", "Oracle Database", "สำรองข้อมูลอัตโนมัติ"],
    },
    {
      category: "Network",
      icon: "🔗",
      items: ["LAN / WAN", "Online Banking", "VPN Security"],
    },
    {
      category: "Mobile",
      icon: "📱",
      items: ["iOS / Android", "Real-time Sync", "Push Notification"],
    },
  ];

  const cloudFeatures = [
    { value: "4-8", unit: "vCPU", desc: "ประมวลผลรวดเร็ว" },
    { value: "8-32", unit: "GB RAM", desc: "รองรับผู้ใช้จำนวนมาก" },
    { value: "500GB-1TB", unit: "Storage", desc: "พื้นที่จัดเก็บเพียงพอ" },
    { value: "40", unit: "Gbps", desc: "Bandwidth ในประเทศ" },
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
            เทคโนโลยี
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Cloud Technology{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-pink-400">
              ระดับองค์กร
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            โครงสร้างพื้นฐานระดับ Enterprise รองรับการใช้งานตลอด 24 ชั่วโมง
          </p>
        </div>

        {/* Cloud Architecture Diagram */}
        <div className="bg-gray-800/50 rounded-3xl p-8 mb-16 border border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-8">
            ☁️ สถาปัตยกรรม Cloud ของระบบ
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Data Center */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">🏢</span>
              </div>
              <h4 className="font-bold text-lg mb-2">DC Site หลัก</h4>
              <p className="text-gray-400 text-sm">ศูนย์ข้อมูลหลัก ประมวลผลทุกระบบ</p>
            </div>

            {/* Arrows */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-500 to-pink-500"></div>
                <span className="text-2xl">🔄</span>
                <div className="w-20 h-0.5 bg-gradient-to-r from-pink-500 to-emerald-500"></div>
              </div>
            </div>

            {/* Backup Site */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">🏛️</span>
              </div>
              <h4 className="font-bold text-lg mb-2">DR Site สำรอง</h4>
              <p className="text-gray-400 text-sm">ศูนย์สำรอง พร้อมทำงานทันที</p>
            </div>
          </div>

          {/* Users */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              {[
                { icon: "🖥️", label: "สำนักงานใหญ่" },
                { icon: "🏪", label: "สาขา" },
                { icon: "📱", label: "สมาชิก Mobile" },
                { icon: "🏧", label: "ATM ธนาคาร" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center mb-2">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h4 className="font-bold text-lg mb-3 text-emerald-400">{tech.category}</h4>
              <ul className="space-y-2">
                {tech.items.map((item, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cloud Specs */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-pink-500/10 rounded-3xl p-8 border border-emerald-500/20">
          <h3 className="text-2xl font-bold text-center mb-8">
            💪 สเปค Cloud Server
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cloudFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-400">{feature.value}</div>
                <div className="text-sm text-pink-400 font-medium">{feature.unit}</div>
                <div className="text-xs text-gray-500 mt-1">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-lg mb-2">ประสิทธิภาพสูง</h4>
            <p className="text-gray-400 text-sm">
              ประมวลผลรวดเร็ว รองรับผู้ใช้พร้อมกันหลายพันคน
            </p>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/20 rounded-2xl p-6">
            <div className="text-3xl mb-3">🔄</div>
            <h4 className="font-bold text-lg mb-2">ขยายได้ง่าย</h4>
            <p className="text-gray-400 text-sm">
              เพิ่ม Resource ได้ทันทีตามความต้องการ
            </p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
            <div className="text-3xl mb-3">🌍</div>
            <h4 className="font-bold text-lg mb-2">เข้าถึงได้ทุกที่</h4>
            <p className="text-gray-400 text-sm">
              ใช้งานผ่าน Internet ได้ทั่วประเทศ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
