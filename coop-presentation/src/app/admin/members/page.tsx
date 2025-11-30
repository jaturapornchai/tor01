"use client";

import { useState } from "react";
import Link from "next/link";

// Mock member data
const mockMembers = [
  { id: "M67001", name: "นายวิชัย รุ่งเรือง", idCard: "1-1001-00001-01-1", phone: "081-234-5678", shares: 150000, loans: 500000, status: "active", joinDate: "15 ม.ค. 2567" },
  { id: "M67002", name: "นางสาวพิมพ์ใจ สดใส", idCard: "1-1001-00002-02-2", phone: "082-345-6789", shares: 80000, loans: 200000, status: "active", joinDate: "14 ม.ค. 2567" },
  { id: "M67003", name: "นายประเสริฐ มั่นคง", idCard: "1-1001-00003-03-3", phone: "083-456-7890", shares: 250000, loans: 800000, status: "active", joinDate: "14 ม.ค. 2567" },
  { id: "M67004", name: "นางมาลี ชื่นใจ", idCard: "1-1001-00004-04-4", phone: "084-567-8901", shares: 50000, loans: 0, status: "active", joinDate: "13 ม.ค. 2567" },
  { id: "M67005", name: "นายสมศักดิ์ ใจซื่อ", idCard: "1-1001-00005-05-5", phone: "085-678-9012", shares: 120000, loans: 350000, status: "active", joinDate: "12 ม.ค. 2567" },
  { id: "M66050", name: "นางสมหญิง รักดี", idCard: "1-1001-00006-06-6", phone: "086-789-0123", shares: 200000, loans: 600000, status: "active", joinDate: "20 ธ.ค. 2566" },
  { id: "M66049", name: "นายสมปอง มีสุข", idCard: "1-1001-00007-07-7", phone: "087-890-1234", shares: 90000, loans: 150000, status: "inactive", joinDate: "18 ธ.ค. 2566" },
  { id: "M66048", name: "นางสาวสมใจ ดีงาม", idCard: "1-1001-00008-08-8", phone: "088-901-2345", shares: 180000, loans: 400000, status: "active", joinDate: "15 ธ.ค. 2566" },
  { id: "M66047", name: "นายสมชาย ใจดี", idCard: "1-1001-00009-09-9", phone: "089-012-3456", shares: 300000, loans: 1000000, status: "active", joinDate: "10 ธ.ค. 2566" },
  { id: "M66046", name: "นางสาวสมศรี สุขใจ", idCard: "1-1001-00010-10-0", phone: "090-123-4567", shares: 75000, loans: 100000, status: "resigned", joinDate: "5 ธ.ค. 2566" },
];

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleExportExcel = () => {
    const data = mockMembers.map(m => `${m.id},${m.name},${m.idCard},${m.phone},${m.shares},${m.loans},${m.status}`).join('\n');
    const blob = new Blob([`รหัส,ชื่อ,เลขบัตร,โทรศัพท์,หุ้น,เงินกู้,สถานะ\n${data}`], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'members-data.csv';
    a.click();
    alert('ส่งออกข้อมูลสมาชิกเรียบร้อยแล้ว');
  };

  const handleViewMember = (memberId: string, memberName: string) => {
    alert(`ดูรายละเอียดสมาชิก: ${memberName} (${memberId})`);
  };

  const handleEditMember = (memberId: string, memberName: string) => {
    alert(`แก้ไขข้อมูลสมาชิก: ${memberName} (${memberId})`);
  };

  const handleDeleteMember = (memberId: string, memberName: string) => {
    if (confirm(`ยืนยันการลบสมาชิก ${memberName} (${memberId})?`)) {
      alert(`ลบสมาชิก ${memberName} เรียบร้อยแล้ว`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.idCard.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || member.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleSelectAll = () => {
    if (selectedMembers.length === filteredMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(filteredMembers.map((m) => m.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">ทะเบียนสมาชิก</h1>
          <p className="text-slate-500 mt-1">จัดการข้อมูลสมาชิกสหกรณ์ทั้งหมด</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button onClick={handleExportExcel} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            ส่งออก Excel
          </button>
          <Link
            href="/admin/members/register"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            เพิ่มสมาชิก
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-2xl font-bold text-slate-800">12,847</div>
          <div className="text-sm text-slate-500">สมาชิกทั้งหมด</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-2xl font-bold text-emerald-600">12,650</div>
          <div className="text-sm text-slate-500">ใช้งานปกติ</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-2xl font-bold text-amber-600">174</div>
          <div className="text-sm text-slate-500">ระงับชั่วคราว</div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-2xl font-bold text-red-600">23</div>
          <div className="text-sm text-slate-500">ลาออก/พ้นสภาพ</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Search */}
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="ค้นหาด้วยชื่อ, รหัสสมาชิก, เลขบัตรประชาชน..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white"
          >
            <option value="all">ทุกสถานะ</option>
            <option value="active">ใช้งานปกติ</option>
            <option value="inactive">ระงับชั่วคราว</option>
            <option value="resigned">ลาออก/พ้นสภาพ</option>
          </select>

          {/* More Filters */}
          <button onClick={() => setShowFilterModal(!showFilterModal)} className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            ตัวกรองเพิ่มเติม
          </button>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedMembers.length === filteredMembers.length && filteredMembers.length > 0}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  สมาชิก
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  เลขบัตรประชาชน
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  โทรศัพท์
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  ทุนเรือนหุ้น
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  เงินกู้คงค้าง
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  สถานะ
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedMembers.includes(member.id)}
                      onChange={() => toggleSelect(member.id)}
                      className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-slate-800">{member.name}</p>
                        <p className="text-xs text-slate-400">{member.id} • {member.joinDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600 font-mono">{member.idCard}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{member.phone}</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-slate-800">
                    {member.shares.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-right font-medium">
                    <span className={member.loans > 0 ? "text-amber-600" : "text-slate-400"}>
                      {member.loans > 0 ? member.loans.toLocaleString() : "-"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        member.status === "active"
                          ? "bg-emerald-100 text-emerald-700"
                          : member.status === "inactive"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {member.status === "active" ? "ปกติ" : member.status === "inactive" ? "ระงับ" : "พ้นสภาพ"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center space-x-1">
                      <button onClick={() => handleViewMember(member.id, member.name)} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="ดูรายละเอียด">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button onClick={() => handleEditMember(member.id, member.name)} className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="แก้ไข">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button onClick={() => handleDeleteMember(member.id, member.name)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="ลบ">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-500">
            แสดง <span className="font-medium">{filteredMembers.length}</span> จาก{" "}
            <span className="font-medium">{mockMembers.length}</span> รายการ
            {selectedMembers.length > 0 && (
              <span className="ml-2 text-indigo-600">
                (เลือก {selectedMembers.length} รายการ)
              </span>
            )}
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-2">
            <button onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled={currentPage === 1}>
              ก่อนหน้า
            </button>
            <button onClick={() => handlePageChange(1)} className={`px-3 py-1.5 rounded-lg text-sm ${currentPage === 1 ? 'bg-indigo-600 text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>1</button>
            <button onClick={() => handlePageChange(2)} className={`px-3 py-1.5 rounded-lg text-sm ${currentPage === 2 ? 'bg-indigo-600 text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>2</button>
            <button onClick={() => handlePageChange(3)} className={`px-3 py-1.5 rounded-lg text-sm ${currentPage === 3 ? 'bg-indigo-600 text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>3</button>
            <span className="px-2 text-slate-400">...</span>
            <button onClick={() => handlePageChange(128)} className={`px-3 py-1.5 rounded-lg text-sm ${currentPage === 128 ? 'bg-indigo-600 text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>128</button>
            <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
              ถัดไป
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
