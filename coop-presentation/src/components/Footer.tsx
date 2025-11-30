"use client";

export default function Footer() {
  const systemList = [
    "ระบบทะเบียนสมาชิก",
    "ระบบทุนเรือนหุ้น",
    "ระบบเงินกู้และค้ำประกัน",
    "ระบบประมวลผลจัดเก็บ",
    "ระบบเงินปันผลและเฉลี่ยคืน",
    "ระบบการเงิน",
    "ระบบเงินฝาก",
    "ระบบบัญชี",
    "ระบบสวัสดิการสมาชิก",
    "ระบบ MIS",
    "ระบบผู้ดูแลระบบ",
    "ระบบ ATM Online",
    "ระบบสำรองข้อมูล",
    "ระบบ Mobile Application",
  ];

  const certifications = [
    "ISO/IEC 27001:2022",
    "ISO/IEC 27701:2019",
    "ISO/IEC 27017:2015",
    "ISO/IEC 27018:2019",
    "PCI-DSS",
    "SOC2 Type II",
    "CSA-STAR 4.0",
    "ETDA Certificate",
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-pink-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">COOP Web App</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              ระบบบริหารจัดการงานสหกรณ์แบบดิจิทัลครบวงจร บน Cloud Technology ที่ปลอดภัยและเชื่อถือได้
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span>SLA 99.95% Uptime</span>
            </div>
          </div>

          {/* 14 Main Systems */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-4 text-emerald-400">14 ระบบหลัก</h4>
            <div className="grid grid-cols-2 gap-2">
              {systemList.map((system, index) => (
                <p key={index} className="text-gray-400 text-sm flex items-center">
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>
                  {system}
                </p>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-pink-400">มาตรฐานความปลอดภัย</h4>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <p key={index} className="text-gray-400 text-sm flex items-center">
                  <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {cert}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Features Icons */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { icon: "☁️", label: "Cloud Based" },
              { icon: "📱", label: "Mobile App" },
              { icon: "🔐", label: "Secure" },
              { icon: "🏧", label: "ATM Online" },
              { icon: "📊", label: "MIS Report" },
              { icon: "💾", label: "Auto Backup" },
              { icon: "🔄", label: "DR Site" },
              { icon: "📞", label: "24/7 Support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cooperative Types */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h4 className="font-bold text-center mb-4 text-gray-400">รองรับสหกรณ์ทั้ง 7 ประเภท</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "สหกรณ์การเกษตร",
              "สหกรณ์ประมง",
              "สหกรณ์นิคม",
              "สหกรณ์ร้านค้า",
              "สหกรณ์บริการ",
              "สหกรณ์ออมทรัพย์",
              "สหกรณ์เครดิตยูเนี่ยน",
            ].map((type, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 border border-gray-700"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800/50 rounded-2xl p-6">
            <h4 className="font-bold text-lg mb-4 text-center">ข้อมูลโครงการ</h4>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-emerald-400">120</p>
                <p className="text-sm text-gray-400">วัน (ระยะเวลาโครงการ)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-400">14+3</p>
                <p className="text-sm text-gray-400">ระบบงาน</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">28</p>
                <p className="text-sm text-gray-400">ชุดคู่มือ</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">1</p>
                <p className="text-sm text-gray-400">ปี (รับประกัน)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 COOP Web App on Cloud Technology. สงวนลิขสิทธิ์
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                ISO 27001 Certified
              </span>
              <span>|</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                PCI-DSS Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
