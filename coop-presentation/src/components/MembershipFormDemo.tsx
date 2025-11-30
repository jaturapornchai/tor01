"use client";

import { useState } from "react";
import Link from "next/link";

export default function MembershipFormDemo() {
  const [activeTab, setActiveTab] = useState("personal");
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [beneficiaryCount, setBeneficiaryCount] = useState(1);
  const [formData, setFormData] = useState({
    // ข้อมูลส่วนตัว
    memberType: "สามัญ",
    prefix: "",
    firstName: "",
    lastName: "",
    idCard: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    nationality: "ไทย",
    religion: "",

    // ที่อยู่
    houseNo: "",
    moo: "",
    soi: "",
    road: "",
    subDistrict: "",
    district: "",
    province: "",
    postalCode: "",
    phone: "",
    mobile: "",
    email: "",

    // ที่ทำงาน
    workplace: "",
    position: "",
    department: "",
    workPhone: "",
    salary: "",
    startDate: "",

    // หุ้นและผู้รับผลประโยชน์
    shares: "50",
    beneficiary1Name: "",
    beneficiary1Relation: "",
    beneficiary1Percent: "",
  });

  const tabs = [
    { id: "personal", label: "ข้อมูลส่วนตัว", icon: "👤" },
    { id: "address", label: "ที่อยู่", icon: "🏠" },
    { id: "work", label: "ที่ทำงาน", icon: "💼" },
    { id: "shares", label: "หุ้น/ผู้รับประโยชน์", icon: "💎" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveDraft = () => {
    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 3000);
  };

  const handleAddBeneficiary = () => {
    if (beneficiaryCount < 5) {
      setBeneficiaryCount(beneficiaryCount + 1);
      alert(`เพิ่มผู้รับผลประโยชน์คนที่ ${beneficiaryCount + 1} แล้ว`);
    } else {
      alert("สามารถเพิ่มผู้รับผลประโยชน์ได้สูงสุด 5 คน");
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            ตัวอย่างหน้าจอระบบ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            ใบสมัครเข้าเป็น{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-pink-500">
              สมาชิกสหกรณ์
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ระบบทะเบียนสมาชิก - กรอกข้อมูลครบถ้วน เชื่อมโยงอัตโนมัติ
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-pink-500 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-xl">ใบสมัครสมาชิกสหกรณ์</h3>
                  <p className="text-white/80 text-sm">แบบฟอร์ม สก.1</p>
                </div>
              </div>
              <div className="text-right text-white">
                <p className="text-sm text-white/80">เลขที่ใบสมัคร</p>
                <p className="font-bold">SM-2024-001234</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {/* Personal Information Tab */}
            {activeTab === "personal" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ประเภทสมาชิก <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="memberType"
                      value={formData.memberType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="สามัญ">สมาชิกสามัญ</option>
                      <option value="สมทบ">สมาชิกสมทบ</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      คำนำหน้า <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="prefix"
                      value={formData.prefix}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">เลือก</option>
                      <option value="นาย">นาย</option>
                      <option value="นาง">นาง</option>
                      <option value="นางสาว">นางสาว</option>
                    </select>
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="กรอกชื่อ"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      นามสกุล <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="กรอกนามสกุล"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เลขบัตรประชาชน <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="idCard"
                      value={formData.idCard}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="X-XXXX-XXXXX-XX-X"
                      maxLength={17}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      วันเกิด <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เพศ <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-4 mt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="ชาย"
                          checked={formData.gender === "ชาย"}
                          onChange={handleChange}
                          className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                        />
                        <span className="ml-2 text-gray-700">ชาย</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="หญิง"
                          checked={formData.gender === "หญิง"}
                          onChange={handleChange}
                          className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                        />
                        <span className="ml-2 text-gray-700">หญิง</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      สถานภาพ
                    </label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">เลือก</option>
                      <option value="โสด">โสด</option>
                      <option value="สมรส">สมรส</option>
                      <option value="หม้าย">หม้าย</option>
                      <option value="หย่า">หย่า</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      สัญชาติ
                    </label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ศาสนา
                    </label>
                    <select
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">เลือก</option>
                      <option value="พุทธ">พุทธ</option>
                      <option value="คริสต์">คริสต์</option>
                      <option value="อิสลาม">อิสลาม</option>
                      <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Address Tab */}
            {activeTab === "address" && (
              <div className="space-y-6">
                <h4 className="font-bold text-gray-800 flex items-center">
                  <span className="mr-2">🏠</span> ที่อยู่ตามทะเบียนบ้าน
                </h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      บ้านเลขที่ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="houseNo"
                      value={formData.houseNo}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      หมู่ที่
                    </label>
                    <input
                      type="text"
                      name="moo"
                      value={formData.moo}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ซอย
                    </label>
                    <input
                      type="text"
                      name="soi"
                      value={formData.soi}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ถนน
                    </label>
                    <input
                      type="text"
                      name="road"
                      value={formData.road}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ตำบล/แขวง <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subDistrict"
                      value={formData.subDistrict}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      อำเภอ/เขต <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      จังหวัด <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      รหัสไปรษณีย์ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      maxLength={5}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      โทรศัพท์บ้าน
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="02-XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      โทรศัพท์มือถือ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="08X-XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      อีเมล
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Work Tab */}
            {activeTab === "work" && (
              <div className="space-y-6">
                <h4 className="font-bold text-gray-800 flex items-center">
                  <span className="mr-2">💼</span> ข้อมูลการทำงาน
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      สถานที่ทำงาน <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="workplace"
                      value={formData.workplace}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="ชื่อหน่วยงาน/บริษัท"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ตำแหน่ง <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      แผนก/ฝ่าย
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      โทรศัพท์ที่ทำงาน
                    </label>
                    <input
                      type="tel"
                      name="workPhone"
                      value={formData.workPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      วันที่เริ่มทำงาน
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เงินเดือน <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-12"
                        placeholder="0.00"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">บาท</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Shares & Beneficiary Tab */}
            {activeTab === "shares" && (
              <div className="space-y-6">
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h4 className="font-bold text-gray-800 flex items-center mb-4">
                    <span className="mr-2">💎</span> การถือหุ้น
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        จำนวนหุ้นที่ต้องการถือ <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="shares"
                          value={formData.shares}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-12"
                          min="50"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">หุ้น</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">ขั้นต่ำ 50 หุ้น (หุ้นละ 10 บาท)</p>
                    </div>
                    <div className="flex items-end">
                      <div className="bg-white rounded-xl p-4 border border-emerald-200 w-full">
                        <p className="text-sm text-gray-600">มูลค่าหุ้นรวม</p>
                        <p className="text-2xl font-bold text-emerald-600">
                          {(parseInt(formData.shares) * 10 || 0).toLocaleString()} บาท
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                  <h4 className="font-bold text-gray-800 flex items-center mb-4">
                    <span className="mr-2">❤️</span> ผู้รับผลประโยชน์
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    กรณีสมาชิกเสียชีวิต ให้จ่ายเงินค่าหุ้น เงินปันผล เงินเฉลี่ยคืน และเงินอื่นๆ แก่บุคคลต่อไปนี้
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border border-pink-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-gray-700">ผู้รับผลประโยชน์คนที่ 1</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            ชื่อ-นามสกุล
                          </label>
                          <input
                            type="text"
                            name="beneficiary1Name"
                            value={formData.beneficiary1Name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            ความสัมพันธ์
                          </label>
                          <select
                            name="beneficiary1Relation"
                            value={formData.beneficiary1Relation}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                          >
                            <option value="">เลือก</option>
                            <option value="คู่สมรส">คู่สมรส</option>
                            <option value="บุตร">บุตร</option>
                            <option value="บิดา">บิดา</option>
                            <option value="มารดา">มารดา</option>
                            <option value="พี่น้อง">พี่น้อง</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            สัดส่วน (%)
                          </label>
                          <input
                            type="number"
                            name="beneficiary1Percent"
                            value={formData.beneficiary1Percent}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            max="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleAddBeneficiary}
                    className="mt-4 text-pink-600 hover:text-pink-700 font-medium text-sm flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    เพิ่มผู้รับผลประโยชน์ ({beneficiaryCount}/5)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Save Message Toast */}
          {showSaveMessage && (
            <div className="fixed bottom-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-pulse">
              ✓ บันทึกร่างเรียบร้อยแล้ว
            </div>
          )}

          {/* Form Footer */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                ข้อมูลของคุณถูกเข้ารหัสและปลอดภัย
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleSaveDraft}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                >
                  บันทึกร่าง
                </button>
                <Link
                  href="/membership"
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity font-medium"
                >
                  ดูแบบฟอร์มเต็ม
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Note */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { icon: "✅", title: "ตรวจสอบอัตโนมัติ", desc: "ตรวจสอบข้อมูลซ้ำ และความถูกต้อง" },
            { icon: "🔗", title: "เชื่อมต่อทุกระบบ", desc: "ข้อมูลเชื่อมโยงกับหุ้น เงินกู้ เงินฝาก" },
            { icon: "📱", title: "สมัครผ่าน Mobile", desc: "ทำรายการผ่านแอปได้ทุกที่ทุกเวลา" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start space-x-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h5 className="font-semibold text-gray-800">{item.title}</h5>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
