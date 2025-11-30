"use client";

import { useState } from "react";
import Link from "next/link";

export default function MembershipPage() {
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [formData, setFormData] = useState({
    // ข้อมูลผู้สมัคร
    prefix: "",
    firstName: "",
    lastName: "",
    idCard: "",
    age: "",
    birthDate: "",
    maritalStatus: "โสด",
    spouseName: "",

    // ที่อยู่ตามทะเบียนบ้าน
    regHouseNo: "",
    regMoo: "",
    regVillage: "",
    regSoi: "",
    regRoad: "",
    regSubDistrict: "",
    regDistrict: "",
    regProvince: "",

    // ที่อยู่สำหรับติดต่อ
    contactHouseNo: "",
    contactMoo: "",
    contactVillage: "",
    contactSoi: "",
    contactRoad: "",
    contactSubDistrict: "",
    contactDistrict: "",
    contactProvince: "",
    contactPostalCode: "",
    contactPhone: "",
    contactMobile: "",

    // ข้อมูลอาชีพ
    occupation: "",
    occupationOther: "",
    monthlyIncome: "",
    workplaceName: "",
    workplaceMoo: "",
    workplaceVillage: "",
    workplaceSoi: "",
    workplaceRoad: "",
    workplaceSubDistrict: "",
    workplaceDistrict: "",
    workplaceProvince: "",

    // ข้อมูลหุ้น
    sharePerPeriod: "100",
    notOtherCoopMember: true,
    agreeToRules: true,
  });

  const [sameAsRegistered, setSameAsRegistered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSameAddress = (checked: boolean) => {
    setSameAsRegistered(checked);
    if (checked) {
      setFormData({
        ...formData,
        contactHouseNo: formData.regHouseNo,
        contactMoo: formData.regMoo,
        contactVillage: formData.regVillage,
        contactSoi: formData.regSoi,
        contactRoad: formData.regRoad,
        contactSubDistrict: formData.regSubDistrict,
        contactDistrict: formData.regDistrict,
        contactProvince: formData.regProvince,
      });
    }
  };

  const handleSaveDraft = () => {
    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 3000);
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.idCard) {
      alert("กรุณากรอกข้อมูลที่จำเป็น: ชื่อ, นามสกุล, เลขบัตรประชาชน");
      return;
    }
    setShowSubmitMessage(true);
    setTimeout(() => setShowSubmitMessage(false), 5000);
  };

  // คำนวณค่าธรรมเนียมและหุ้น
  const entryFee = 200;
  const initialShares = 10;
  const shareValue = 100;
  const initialShareAmount = initialShares * shareValue;
  const totalInitialPayment = entryFee + initialShareAmount;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold">C</span>
              </div>
              <div>
                <h1 className="font-bold text-xl">COOP Web App</h1>
                <p className="text-white/80 text-sm">ระบบสมัครสมาชิกสหกรณ์</p>
              </div>
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm"
            >
              กลับหน้าหลัก
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-pink-500 p-6 text-white text-center">
            <h2 className="text-2xl font-bold mb-1">ใบสมัครเข้าเป็นสมาชิกสหกรณ์</h2>
            <p className="text-white/80">กรุณากรอกข้อมูลให้ครบถ้วนตามความเป็นจริง</p>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* ========== ส่วนที่ 1: ข้อมูลส่วนตัว ========== */}
            <section>
              <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-emerald-200">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-lg font-bold text-gray-800">ข้อมูลส่วนตัว</h3>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-4 text-sm text-blue-700">
                <strong>คำแนะนำ:</strong> กรอกชื่อ-นามสกุลตามบัตรประชาชน | เลขบัตรประชาชน 13 หลัก | ต้องมีอายุ 20 ปีขึ้นไป
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    คำนำหน้า <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="prefix"
                    value={formData.prefix}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">เลือก</option>
                    <option value="นาย">นาย</option>
                    <option value="นาง">นาง</option>
                    <option value="นางสาว">นางสาว</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ชื่อ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    เลขบัตรประจำตัวประชาชน <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="idCard"
                    value={formData.idCard}
                    onChange={handleChange}
                    maxLength={13}
                    placeholder="กรอกเลข 13 หลัก"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    อายุ <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-10"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">ปี</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    วัน/เดือน/ปี เกิด <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    สถานภาพ <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-4 mt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="โสด"
                        checked={formData.maritalStatus === "โสด"}
                        onChange={handleChange}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="ml-2">โสด</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="maritalStatus"
                        value="สมรส"
                        checked={formData.maritalStatus === "สมรส"}
                        onChange={handleChange}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="ml-2">สมรส</span>
                    </label>
                  </div>
                </div>
                {formData.maritalStatus === "สมรส" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อคู่สมรส
                    </label>
                    <input
                      type="text"
                      name="spouseName"
                      value={formData.spouseName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                )}
              </div>
            </section>

            {/* ========== ส่วนที่ 2: ที่อยู่ตามทะเบียนบ้าน ========== */}
            <section>
              <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-emerald-200">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-lg font-bold text-gray-800">ที่อยู่ตามทะเบียนบ้าน</h3>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-4 text-sm text-blue-700">
                <strong>คำแนะนำ:</strong> กรอกตามทะเบียนบ้าน | กรุงเทพฯ ใช้ "แขวง/เขต" | ต่างจังหวัดใช้ "ตำบล/อำเภอ"
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    บ้านเลขที่ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="regHouseNo"
                    value={formData.regHouseNo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">หมู่ที่</label>
                  <input
                    type="text"
                    name="regMoo"
                    value={formData.regMoo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">หมู่บ้าน/อาคาร</label>
                  <input
                    type="text"
                    name="regVillage"
                    value={formData.regVillage}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ตรอก/ซอย</label>
                  <input
                    type="text"
                    name="regSoi"
                    value={formData.regSoi}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ถนน</label>
                  <input
                    type="text"
                    name="regRoad"
                    value={formData.regRoad}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ตำบล/แขวง <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="regSubDistrict"
                    value={formData.regSubDistrict}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    อำเภอ/เขต <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="regDistrict"
                    value={formData.regDistrict}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    จังหวัด <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="regProvince"
                    value={formData.regProvince}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </section>

            {/* ========== ส่วนที่ 3: ที่อยู่สำหรับติดต่อ ========== */}
            <section>
              <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-emerald-200">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-lg font-bold text-gray-800">ที่อยู่สำหรับติดต่อและจัดส่งเอกสาร</h3>
              </div>

              <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sameAsRegistered}
                    onChange={(e) => handleSameAddress(e.target.checked)}
                    className="w-5 h-5 text-emerald-600 rounded"
                  />
                  <span className="ml-3 text-emerald-700 font-medium">ใช้ที่อยู่เดียวกับทะเบียนบ้าน</span>
                </label>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    บ้านเลขที่ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactHouseNo"
                    value={formData.contactHouseNo}
                    onChange={handleChange}
                    disabled={sameAsRegistered}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">หมู่ที่</label>
                  <input
                    type="text"
                    name="contactMoo"
                    value={formData.contactMoo}
                    onChange={handleChange}
                    disabled={sameAsRegistered}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">หมู่บ้าน/อาคาร</label>
                  <input
                    type="text"
                    name="contactVillage"
                    value={formData.contactVillage}
                    onChange={handleChange}
                    disabled={sameAsRegistered}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ตรอก/ซอย</label>
                  <input
                    type="text"
                    name="contactSoi"
                    value={formData.contactSoi}
                    onChange={handleChange}
                    disabled={sameAsRegistered}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ถนน</label>
                  <input
                    type="text"
                    name="contactRoad"
                    value={formData.contactRoad}
                    onChange={handleChange}
                    disabled={sameAsRegistered}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ตำบล/แขวง <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactSubDistrict"
                    value={formData.contactSubDistrict}
                    onChange={handleChange}
                    disabled={sameAsRegistered}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    อำเภอ/เขต <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactDistrict"
                    value={formData.contactDistrict}
                    onChange={handleChange}
                    disabled={sameAsRegistered}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    จังหวัด <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactProvince"
                    value={formData.contactProvince}
                    onChange={handleChange}
                    disabled={sameAsRegistered}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    รหัสไปรษณีย์ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPostalCode"
                    value={formData.contactPostalCode}
                    onChange={handleChange}
                    maxLength={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">โทรศัพท์</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="02-XXX-XXXX"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    โทรศัพท์มือถือ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contactMobile"
                    value={formData.contactMobile}
                    onChange={handleChange}
                    placeholder="08X-XXX-XXXX"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </section>

            {/* ========== ส่วนที่ 4: ข้อมูลอาชีพ ========== */}
            <section>
              <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-emerald-200">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-lg font-bold text-gray-800">ข้อมูลอาชีพและรายได้</h3>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-4 text-sm text-blue-700">
                <strong>คำแนะนำ:</strong> กรอกรายได้รวมทั้งหมดต่อเดือน | ระบุสถานที่ทำงานให้ชัดเจน
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  อาชีพ <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { value: "ประกอบกิจการส่วนตัว", label: "ประกอบกิจการส่วนตัว" },
                    { value: "พนักงานบริษัท", label: "พนักงานบริษัท" },
                    { value: "รับราชการ", label: "รับราชการ" },
                    { value: "อื่นๆ", label: "อื่นๆ" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.occupation === option.value
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="occupation"
                        value={option.value}
                        checked={formData.occupation === option.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.occupation === "อื่นๆ" && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ระบุอาชีพ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="occupationOther"
                    value={formData.occupationOther}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    รายได้ต่อเดือน <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-12"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">บาท</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ชื่อสถานที่ทำงาน <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="workplaceName"
                    value={formData.workplaceName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">หมู่ที่</label>
                  <input
                    type="text"
                    name="workplaceMoo"
                    value={formData.workplaceMoo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">หมู่บ้าน</label>
                  <input
                    type="text"
                    name="workplaceVillage"
                    value={formData.workplaceVillage}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ตรอก/ซอย</label>
                  <input
                    type="text"
                    name="workplaceSoi"
                    value={formData.workplaceSoi}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ถนน</label>
                  <input
                    type="text"
                    name="workplaceRoad"
                    value={formData.workplaceRoad}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ตำบล/แขวง</label>
                  <input
                    type="text"
                    name="workplaceSubDistrict"
                    value={formData.workplaceSubDistrict}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">อำเภอ/เขต</label>
                  <input
                    type="text"
                    name="workplaceDistrict"
                    value={formData.workplaceDistrict}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">จังหวัด</label>
                  <input
                    type="text"
                    name="workplaceProvince"
                    value={formData.workplaceProvince}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </section>

            {/* ========== ส่วนที่ 5: ข้อมูลหุ้น ========== */}
            <section>
              <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-emerald-200">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">5</div>
                <h3 className="text-lg font-bold text-gray-800">ข้อมูลการถือหุ้นและข้อตกลง</h3>
              </div>

              {/* ข้อ 3 */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="notOtherCoopMember"
                    checked={formData.notOtherCoopMember}
                    onChange={handleChange}
                    className="w-5 h-5 text-emerald-600 rounded mt-0.5"
                  />
                  <span className="ml-3 text-gray-700">
                    <strong>ข้อ 3.</strong> ข้าพเจ้ามิได้เป็นสมาชิกในสหกรณ์อื่นซึ่งมีวัตถุประสงค์ในการกู้ยืมเงิน
                  </span>
                </label>
              </div>

              {/* ข้อ 4 - ค่าหุ้นรายงวด */}
              <div className="bg-emerald-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  <strong>ข้อ 4.</strong> การส่งเงินค่าหุ้นรายงวด
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  มูลค่าหุ้นละ 100 บาท รอบปีบัญชีแบ่งเป็น 12 งวด
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 max-w-xs">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      จำนวนเงินค่าหุ้นต่องวด <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        name="sharePerPeriod"
                        value={formData.sharePerPeriod}
                        onChange={handleChange}
                        min="100"
                        step="100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 pr-16"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">บาท/งวด</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">ขั้นต่ำ 100 บาท (1 หุ้น)</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-xs text-gray-500">เท่ากับ</p>
                    <p className="text-lg font-bold text-emerald-600">{parseInt(formData.sharePerPeriod) / 100 || 0} หุ้น/งวด</p>
                  </div>
                </div>
              </div>

              {/* ข้อ 5 และ 6 */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToRules"
                    checked={formData.agreeToRules}
                    onChange={handleChange}
                    className="w-5 h-5 text-emerald-600 rounded mt-0.5"
                  />
                  <span className="ml-3 text-gray-700 text-sm">
                    <strong>ข้อ 5.</strong> ข้าพเจ้าสัญญาว่าถ้าคณะกรรมการดำเนินการสหกรณ์ตกลงให้ข้าพเจ้าเป็นสมาชิกได้
                    ข้าพเจ้าจะลงลายมือชื่อในทะเบียนสมาชิก ทั้งชำระค่าธรรมเนียมแรกเข้าและเงินค่าหุ้นตามข้อบังคับต่อสหกรณ์
                    ให้เสร็จภายในวันที่ซึ่งคณะกรรมการดำเนินการจะได้กำหนด
                    <br /><br />
                    <strong>ข้อ 6.</strong> ถ้าข้าพเจ้าได้เป็นสมาชิก จะปฏิบัติตามข้อบังคับ ระเบียบการ และมติที่คณะกรรมการ
                    ดำเนินการของสหกรณ์ ได้กำหนดขึ้นในการประชุมแต่ละครั้ง ทุกประการ
                  </span>
                </label>
              </div>

              {/* สรุปค่าใช้จ่าย */}
              <div className="bg-gradient-to-r from-emerald-500 to-pink-500 rounded-lg p-0.5">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-3">สรุปค่าใช้จ่ายเมื่อแรกเข้า</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ค่าธรรมเนียมแรกเข้า</span>
                      <span className="font-semibold">{entryFee.toLocaleString()} บาท</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ค่าถือหุ้นเมื่อแรกเข้า ({initialShares} หุ้น)</span>
                      <span className="font-semibold">{initialShareAmount.toLocaleString()} บาท</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-bold text-gray-800">รวมทั้งสิ้น</span>
                      <span className="text-xl font-bold text-emerald-600">{totalInitialPayment.toLocaleString()} บาท</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== ส่วนที่ 6: ลงนาม ========== */}
            <section>
              <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-emerald-200">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">6</div>
                <h3 className="text-lg font-bold text-gray-800">ลงนามผู้สมัคร</h3>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mb-4">
                <p className="text-sm text-yellow-800">
                  <strong>คำรับรอง:</strong> ข้าพเจ้าขอรับรองว่าข้อความที่ได้กรอกไว้ในใบสมัครนี้เป็นความจริงทุกประการ
                  หากข้อความใดเป็นเท็จ ข้าพเจ้ายินยอมให้สหกรณ์มีสิทธิ์เพิกถอนการเป็นสมาชิกได้ทันที
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">ลงชื่อผู้สมัคร</p>
                  <div className="h-16 border-b border-gray-400 mb-2"></div>
                  <p className="text-sm">( {formData.prefix}{formData.firstName} {formData.lastName} )</p>
                  <p className="text-xs text-gray-500">ผู้สมัครเป็นสมาชิก</p>
                </div>
                <div className="text-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">ได้ตรวจสอบข้อมูลถูกต้องแล้ว</p>
                  <div className="h-16 border-b border-gray-400 mb-2"></div>
                  <p className="text-sm">( .......................................... )</p>
                  <p className="text-xs text-gray-500">เจ้าหน้าที่สหกรณ์</p>
                </div>
              </div>
            </section>
          </div>

          {/* Toast Messages */}
          {showSaveMessage && (
            <div className="fixed bottom-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-pulse">
              ✓ บันทึกร่างเรียบร้อยแล้ว
            </div>
          )}
          {showSubmitMessage && (
            <div className="fixed bottom-4 right-4 bg-gradient-to-r from-emerald-500 to-pink-500 text-white px-6 py-3 rounded-xl shadow-lg z-50">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                กำลังส่งใบสมัคร... กรุณารอสักครู่
              </div>
            </div>
          )}

          {/* Form Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              ข้อมูลของคุณถูกเข้ารหัสและปลอดภัย
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleSaveDraft}
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                บันทึกร่าง
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                ยืนยันการสมัคร
              </button>
            </div>
          </div>
        </div>

        {/* เอกสารที่ต้องเตรียม */}
        <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
          <h4 className="font-semibold text-blue-800 mb-2">เอกสารที่ต้องเตรียม</h4>
          <ul className="text-sm text-blue-700 grid grid-cols-1 md:grid-cols-2 gap-1">
            <li>• สำเนาบัตรประจำตัวประชาชน พร้อมรับรองสำเนา</li>
            <li>• สำเนาทะเบียนบ้าน พร้อมรับรองสำเนา</li>
            <li>• รูปถ่ายหน้าตรง ขนาด 1 นิ้ว จำนวน 1 รูป</li>
            <li>• สลิปเงินเดือน หรือหนังสือรับรองรายได้ (ถ้ามี)</li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 COOP Web App on Cloud Technology - ระบบสมัครสมาชิกสหกรณ์ออนไลน์
          </p>
        </div>
      </footer>
    </div>
  );
}
