"use client";

import { useState } from "react";

export default function MemberReportsPage() {
  const [selectedReport, setSelectedReport] = useState('summary');

  const handleExportReport = () => {
    const report = reports.find(r => r.id === selectedReport);
    alert(`กำลังส่งออกรายงาน: ${report?.name || 'รายงาน'}`);
  };

  const reports = [
    { id: 'summary', name: 'สรุปภาพรวมสมาชิก', icon: '📊' },
    { id: 'new', name: 'รายงานสมาชิกใหม่', icon: '🆕' },
    { id: 'resign', name: 'รายงานสมาชิกลาออก', icon: '👋' },
    { id: 'age', name: 'รายงานตามช่วงอายุ', icon: '📅' },
    { id: 'department', name: 'รายงานตามหน่วยงาน', icon: '🏢' },
    { id: 'seniority', name: 'รายงานตามอายุสมาชิก', icon: '⏰' },
  ];

  const stats = {
    totalMembers: 8542,
    activeMembers: 8320,
    newThisYear: 456,
    resignedThisYear: 178,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">รายงานสมาชิก</h1>
          <p className="text-slate-500 mt-1">รายงานและสถิติเกี่ยวกับสมาชิกสหกรณ์</p>
        </div>
        <button onClick={handleExportReport} className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium text-sm shadow-lg flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          ส่งออกรายงาน
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
          <p className="text-sm text-indigo-600">สมาชิกทั้งหมด</p>
          <p className="text-3xl font-bold text-indigo-700 mt-1">{stats.totalMembers.toLocaleString()}</p>
          <p className="text-xs text-indigo-500">คน</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <p className="text-sm text-emerald-600">สมาชิกปกติ</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">{stats.activeMembers.toLocaleString()}</p>
          <p className="text-xs text-emerald-500">คน</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-600">สมัครใหม่ปีนี้</p>
          <p className="text-3xl font-bold text-blue-700 mt-1">{stats.newThisYear}</p>
          <p className="text-xs text-blue-500">คน</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-600">ลาออกปีนี้</p>
          <p className="text-3xl font-bold text-amber-700 mt-1">{stats.resignedThisYear}</p>
          <p className="text-xs text-amber-500">คน</p>
        </div>
      </div>

      {/* Report Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedReport === report.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-slate-200 bg-white hover:border-indigo-300'
            }`}
          >
            <span className="text-2xl block mb-2">{report.icon}</span>
            <p className={`text-sm font-medium ${
              selectedReport === report.id ? 'text-indigo-700' : 'text-slate-700'
            }`}>
              {report.name}
            </p>
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-800 mb-6">
          {reports.find(r => r.id === selectedReport)?.name}
        </h3>

        {/* Sample Chart/Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Member Growth Chart Placeholder */}
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm font-medium text-slate-600 mb-4">การเติบโตของสมาชิก (12 เดือนล่าสุด)</p>
            <div className="h-48 flex items-end justify-between gap-2">
              {[65, 72, 68, 80, 75, 85, 78, 92, 88, 95, 90, 100].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-indigo-500 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-400">
              <span>ม.ค.</span>
              <span>ก.พ.</span>
              <span>มี.ค.</span>
              <span>เม.ย.</span>
              <span>พ.ค.</span>
              <span>มิ.ย.</span>
              <span>ก.ค.</span>
              <span>ส.ค.</span>
              <span>ก.ย.</span>
              <span>ต.ค.</span>
              <span>พ.ย.</span>
              <span>ธ.ค.</span>
            </div>
          </div>

          {/* Age Distribution */}
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm font-medium text-slate-600 mb-4">สัดส่วนตามช่วงอายุ</p>
            <div className="space-y-3">
              {[
                { range: '20-30 ปี', count: 1250, percent: 15, color: 'bg-blue-500' },
                { range: '31-40 ปี', count: 2850, percent: 33, color: 'bg-indigo-500' },
                { range: '41-50 ปี', count: 2750, percent: 32, color: 'bg-violet-500' },
                { range: '51-60 ปี', count: 1692, percent: 20, color: 'bg-purple-500' },
              ].map((item) => (
                <div key={item.range}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">{item.range}</span>
                    <span className="text-slate-500">{item.count.toLocaleString()} คน ({item.percent}%)</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
