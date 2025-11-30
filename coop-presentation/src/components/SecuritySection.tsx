"use client";

export default function SecuritySection() {
  const certifications = [
    {
      name: "ISO/IEC 27001:2022",
      desc: "ความปลอดภัยบน Cloud และ Data Center",
      icon: "🛡️",
    },
    {
      name: "ISO/IEC 27701:2019",
      desc: "การจัดการข้อมูลส่วนบุคคล (PDPA)",
      icon: "🔐",
    },
    {
      name: "ISO/IEC 27017:2015",
      desc: "ความปลอดภัยข้อมูลบน Cloud",
      icon: "☁️",
    },
    {
      name: "ISO/IEC 27018:2019",
      desc: "ปกป้องข้อมูลส่วนบุคคลใน Cloud",
      icon: "👤",
    },
    {
      name: "PCI-DSS",
      desc: "มาตรฐานความปลอดภัยบัตรชำระเงิน",
      icon: "💳",
    },
    {
      name: "SOC2 Type II",
      desc: "ความปลอดภัยและความต่อเนื่องของข้อมูล",
      icon: "✅",
    },
    {
      name: "CSA-STAR 4.0",
      desc: "ความปลอดภัยบน Cloud (สูงสุด)",
      icon: "⭐",
    },
    {
      name: "ETDA Certificate",
      desc: "มาตรฐานข้อมูลอิเล็กทรอนิกส์",
      icon: "📜",
    },
  ];

  const securityFeatures = [
    {
      title: "ป้องกันภัยคุกคาม",
      items: [
        "Firewall 500 Mbps Throughput",
        "Anti-DDoS / DOS Protection",
        "Intrusion Prevention System (IPS)",
        "Anti-Virus / Anti-Malware",
      ],
      icon: "🔥",
      color: "from-red-400 to-orange-500",
    },
    {
      title: "การเข้ารหัสข้อมูล",
      items: [
        "SSL/TLS Encryption",
        "IPSec VPN",
        "Data Encryption at Rest",
        "Secure API Gateway",
      ],
      icon: "🔒",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      title: "การควบคุมสิทธิ์",
      items: [
        "Role-Based Access Control",
        "Multi-Factor Authentication",
        "บันทึก Log การใช้งาน",
        "การอนุมัติแบบขั้นตอน",
      ],
      icon: "👁️",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section id="security" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            ความปลอดภัย
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            มาตรฐานความปลอดภัย{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-pink-500">
              ระดับสากล
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ปกป้องข้อมูลของสหกรณ์และสมาชิกด้วยเทคโนโลยีความปลอดภัยชั้นสูง
          </p>
        </div>

        {/* SLA Highlight */}
        <div className="bg-gradient-to-r from-emerald-500 to-pink-500 rounded-3xl p-1 mb-16">
          <div className="bg-white rounded-3xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  🎯 Service Level Agreement (SLA)
                </h3>
                <p className="text-gray-600">
                  รับประกันความพร้อมใช้งานของระบบตลอด 24/7
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-pink-500">
                  99.95%
                </div>
                <p className="text-gray-500 text-sm">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            📋 มาตรฐานและใบรับรอง
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-center"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="font-bold text-sm text-gray-800 mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${feature.color} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{feature.icon}</span>
                  <h4 className="font-bold text-xl">{feature.title}</h4>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Security Flowchart */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            🔐 ขั้นตอนการรักษาความปลอดภัย
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { step: "1", title: "ยืนยันตัวตน", desc: "Login + OTP", icon: "👤" },
              { step: "2", title: "ตรวจสอบสิทธิ์", desc: "RBAC System", icon: "🔑" },
              { step: "3", title: "เข้ารหัสข้อมูล", desc: "SSL/TLS", icon: "🔒" },
              { step: "4", title: "บันทึก Log", desc: "Audit Trail", icon: "📝" },
              { step: "5", title: "สำรองข้อมูล", desc: "Auto Backup", icon: "💾" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-pink-500 text-white rounded-full text-xs font-bold flex items-center justify-center mx-auto -mt-4 mb-2">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                {index < 4 && (
                  <svg className="hidden md:block w-6 h-6 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cyber Security */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl">🛡️</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Cyber Security Team (Co-CSIRT)</h3>
              <p className="text-gray-400">
                ทีมผู้เชี่ยวชาญด้านความปลอดภัยทางไซเบอร์ เฝ้าระวังและป้องกันภัยคุกคามตลอด 24 ชั่วโมง
                พร้อมตอบสนองต่อเหตุการณ์ฉุกเฉินอย่างรวดเร็ว
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
