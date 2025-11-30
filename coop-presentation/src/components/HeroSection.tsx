"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-pink-500">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse mr-2"></span>
            <span className="text-white/90 text-sm font-medium">
              ระบบบริหารงานสหกรณ์แห่งอนาคต
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block">COOP Web App</span>
            <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-light text-white/90">
              บน Cloud Technology
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-white/80 leading-relaxed">
            ระบบบริหารจัดการงานสหกรณ์แบบดิจิทัลครบวงจร
            <br className="hidden sm:block" />
            รองรับสหกรณ์ทั้ง{" "}
            <span className="text-pink-200 font-semibold">7 ประเภท</span>{" "}
            สมาชิกมากกว่า{" "}
            <span className="text-pink-200 font-semibold">11.13 ล้านคน</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            {[
              { value: "14+3", label: "ระบบหลัก+เสริม" },
              { value: "99.95%", label: "SLA รับประกัน" },
              { value: "24/7", label: "บริการตลอด" },
              { value: "ISO", label: "มาตรฐานสากล" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="/admin"
              className="group px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ทดลองใช้งาน Demo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#flowchart"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              ดูภาพรวมระบบ
            </a>
            <a
              href="#systems"
              className="px-8 py-4 bg-transparent border-2 border-white/50 text-white/90 font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              ระบบงานทั้งหมด
            </a>
          </div>

          {/* Demo Features */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              "สหกรณ์ 7 ประเภท",
              "ระบบสมาชิก",
              "สินเชื่อ",
              "เงินฝาก",
              "ทุนเรือนหุ้น",
              "สวัสดิการ",
            ].map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm border border-white/20"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
