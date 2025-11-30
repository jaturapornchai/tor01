"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getProvinces, getDistricts, getSubDistricts, getPostalCode } from "@/data/thailand-address";
import { getBestCoordinates } from "@/data/thailand-subdistrict-coordinates";

// Dynamic import for MapPicker to avoid SSR issues
const MapPicker = dynamic(() => import("@/components/MapPicker"), { ssr: false });
const GoogleMapPicker = dynamic(() => import("@/components/GoogleMapPicker"), { ssr: false });
import IdCardScanner from "@/components/IdCardScanner";
import ThaiDatePicker from "@/components/ThaiDatePicker";
import { toBuddhistYear } from "@/utils/thai-date";

export default function NewMemberRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // ข้อมูลส่วนตัว
    title: '',
    firstName: '',
    lastName: '',
    idCard: '',
    birthDate: '',
    gender: '',
    maritalStatus: '',
    nationality: 'ไทย',
    ethnicity: 'ไทย',
    religion: 'พุทธ',

    // ที่อยู่ตามทะเบียนบ้าน
    regHouseNo: '',
    regMoo: '',
    regSoi: '',
    regRoad: '',
    regSubDistrict: '',
    regDistrict: '',
    regProvince: '',
    regPostalCode: '',
    regLat: '',
    regLng: '',

    // ที่อยู่ปัจจุบัน
    sameAsRegistered: false,
    currHouseNo: '',
    currMoo: '',
    currSoi: '',
    currRoad: '',
    currSubDistrict: '',
    currDistrict: '',
    currProvince: '',
    currPostalCode: '',
    currLat: '',
    currLng: '',

    // ข้อมูลการติดต่อ
    phone: '',
    mobile: '',
    email: '',
    lineId: '',

    // ข้อมูลการทำงาน
    employeeId: '',
    department: '',
    position: '',
    jobLevel: '',
    startDate: '',
    salary: '',
    bankName: '',
    bankBranch: '',
    bankAccountNo: '',
    bankAccountName: '',

    // ข้อมูลสมาชิกสหกรณ์
    memberType: 'สามัญ',
    initialShares: '10',
    monthlyShares: '10',
    paymentMethod: 'หักเงินเดือน',

    // ผู้รับผลประโยชน์
    beneficiaries: [
      { name: '', relation: '', percentage: '', idCard: '', phone: '' }
    ],
  });

  // Map picker state
  const [showRegMapPicker, setShowRegMapPicker] = useState(false);
  const [showCurrMapPicker, setShowCurrMapPicker] = useState(false);
  const [showRegGoogleMap, setShowRegGoogleMap] = useState(false);
  const [showCurrGoogleMap, setShowCurrGoogleMap] = useState(false);

  const handleRegLocationSelect = (lat: number, lng: number) => {
    setFormData({
      ...formData,
      regLat: lat.toFixed(6),
      regLng: lng.toFixed(6),
    });
  };

  const handleCurrLocationSelect = (lat: number, lng: number) => {
    setFormData({
      ...formData,
      currLat: lat.toFixed(6),
      currLng: lng.toFixed(6),
    });
  };

  // Handle ID Card scan data
  const handleIdCardData = (data: {
    idCard: string;
    title: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    religion: string;
    addressNo: string;
    moo: string;
    soi: string;
    road: string;
    subDistrict: string;
    district: string;
    province: string;
  }) => {
    // Find matching province, district, subdistrict from our data
    const provinces = getProvinces();
    const matchedProvince = data.province ? provinces.find(p =>
      p === data.province ||
      p.includes(data.province) ||
      data.province.includes(p)
    ) || '' : '';

    const districts = matchedProvince ? getDistricts(matchedProvince) : [];
    const matchedDistrict = data.district ? districts.find(d =>
      d === data.district ||
      d.includes(data.district) ||
      data.district.includes(d)
    ) || '' : '';

    const subDistrictsList = matchedDistrict ? getSubDistricts(matchedProvince, matchedDistrict) : [];
    const matchedSubDistrictObj = data.subDistrict ? subDistrictsList.find(s =>
      s.name === data.subDistrict ||
      s.name.includes(data.subDistrict) ||
      data.subDistrict.includes(s.name)
    ) : null;
    const matchedSubDistrict = matchedSubDistrictObj?.name || '';

    const postalCode = matchedSubDistrictObj?.postalCode || '';

    setFormData({
      ...formData,
      idCard: data.idCard || formData.idCard,
      title: data.title || formData.title,
      firstName: data.firstName || formData.firstName,
      lastName: data.lastName || formData.lastName,
      birthDate: data.birthDate || formData.birthDate,
      religion: data.religion || formData.religion,
      // Address fields
      regHouseNo: data.addressNo || formData.regHouseNo,
      regMoo: data.moo || formData.regMoo,
      regSoi: data.soi || formData.regSoi,
      regRoad: data.road || formData.regRoad,
      regProvince: matchedProvince || formData.regProvince,
      regDistrict: matchedDistrict || formData.regDistrict,
      regSubDistrict: matchedSubDistrict || formData.regSubDistrict,
      regPostalCode: postalCode || formData.regPostalCode,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirm('ยืนยันการบันทึกใบสมัครสมาชิก?')) {
      alert('บันทึกใบสมัครสมาชิกเรียบร้อยแล้ว\nรหัสใบสมัคร: REG-2567-00125');
    }
  };

  const handleSaveDraft = () => {
    alert('บันทึกแบบร่างเรียบร้อยแล้ว');
  };

  const addBeneficiary = () => {
    if (formData.beneficiaries.length < 5) {
      setFormData({
        ...formData,
        beneficiaries: [...formData.beneficiaries, { name: '', relation: '', percentage: '', idCard: '', phone: '' }]
      });
    }
  };

  const removeBeneficiary = (index: number) => {
    if (formData.beneficiaries.length > 1) {
      const newBeneficiaries = formData.beneficiaries.filter((_, i) => i !== index);
      setFormData({ ...formData, beneficiaries: newBeneficiaries });
    }
  };

  const updateBeneficiary = (index: number, field: string, value: string) => {
    const newBeneficiaries = [...formData.beneficiaries];
    newBeneficiaries[index] = { ...newBeneficiaries[index], [field]: value };
    setFormData({ ...formData, beneficiaries: newBeneficiaries });
  };

  const steps = [
    { id: 1, name: 'ข้อมูลส่วนตัว' },
    { id: 2, name: 'ที่อยู่' },
    { id: 3, name: 'การทำงาน' },
    { id: 4, name: 'สมาชิกสหกรณ์' },
    { id: 5, name: 'ผู้รับผลประโยชน์' },
  ];

  // Thailand address data
  const provinces = useMemo(() => getProvinces(), []);

  const regDistricts = useMemo(() =>
    formData.regProvince ? getDistricts(formData.regProvince) : [],
    [formData.regProvince]
  );

  const regSubDistricts = useMemo(() =>
    formData.regProvince && formData.regDistrict
      ? getSubDistricts(formData.regProvince, formData.regDistrict)
      : [],
    [formData.regProvince, formData.regDistrict]
  );

  const currDistricts = useMemo(() =>
    formData.currProvince ? getDistricts(formData.currProvince) : [],
    [formData.currProvince]
  );

  const currSubDistricts = useMemo(() =>
    formData.currProvince && formData.currDistrict
      ? getSubDistricts(formData.currProvince, formData.currDistrict)
      : [],
    [formData.currProvince, formData.currDistrict]
  );

  // Address change handlers
  const handleRegProvinceChange = (province: string) => {
    setFormData({
      ...formData,
      regProvince: province,
      regDistrict: '',
      regSubDistrict: '',
      regPostalCode: '',
    });
  };

  const handleRegDistrictChange = (district: string) => {
    setFormData({
      ...formData,
      regDistrict: district,
      regSubDistrict: '',
      regPostalCode: '',
    });
  };

  const handleRegSubDistrictChange = (subDistrict: string) => {
    const postalCode = getPostalCode(formData.regProvince, formData.regDistrict, subDistrict);
    setFormData({
      ...formData,
      regSubDistrict: subDistrict,
      regPostalCode: postalCode,
    });
  };

  const handleCurrProvinceChange = (province: string) => {
    setFormData({
      ...formData,
      currProvince: province,
      currDistrict: '',
      currSubDistrict: '',
      currPostalCode: '',
    });
  };

  const handleCurrDistrictChange = (district: string) => {
    setFormData({
      ...formData,
      currDistrict: district,
      currSubDistrict: '',
      currPostalCode: '',
    });
  };

  const handleCurrSubDistrictChange = (subDistrict: string) => {
    const postalCode = getPostalCode(formData.currProvince, formData.currDistrict, subDistrict);
    setFormData({
      ...formData,
      currSubDistrict: subDistrict,
      currPostalCode: postalCode,
    });
  };

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return '-';
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/members/register"
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">สมัครสมาชิกใหม่</h1>
          <p className="text-slate-500 mt-1">กรอกข้อมูลใบสมัครสมาชิกสหกรณ์ออมทรัพย์</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => setCurrentStep(step.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentStep === step.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : currentStep > step.id
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                  currentStep === step.id
                    ? 'bg-indigo-600 text-white'
                    : currentStep > step.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-300 text-white'
                }`}>
                  {currentStep > step.id ? '✓' : step.id}
                </span>
                <span className="hidden md:inline font-medium">{step.name}</span>
              </button>
              {index < steps.length - 1 && (
                <div className={`w-8 h-1 mx-2 rounded ${
                  currentStep > step.id ? 'bg-emerald-300' : 'bg-slate-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        {/* Step 1: ข้อมูลส่วนตัว */}
        {currentStep === 1 && (
          <div className="space-y-6">
            {/* ID Card Scanner */}
            <IdCardScanner onDataExtracted={handleIdCardData} />

            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
              ข้อมูลส่วนตัว
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  คำนำหน้าชื่อ <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">เลือก</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                  <option value="ว่าที่ร้อยตรี">ว่าที่ร้อยตรี</option>
                  <option value="ร้อยตรี">ร้อยตรี</option>
                  <option value="ร้อยโท">ร้อยโท</option>
                  <option value="ร้อยเอก">ร้อยเอก</option>
                  <option value="พันตรี">พันตรี</option>
                  <option value="พันโท">พันโท</option>
                  <option value="พันเอก">พันเอก</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ชื่อ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="ชื่อ"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  นามสกุล <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="นามสกุล"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  เลขบัตรประชาชน <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.idCard}
                  onChange={(e) => setFormData({ ...formData, idCard: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="1-1234-56789-01-0"
                  maxLength={17}
                  required
                />
              </div>
              <div>
                <ThaiDatePicker
                  label="วัน/เดือน/ปีเกิด"
                  value={formData.birthDate}
                  onChange={(value) => setFormData({ ...formData, birthDate: value })}
                  required
                  maxYear={toBuddhistYear(new Date().getFullYear())}
                  minYear={toBuddhistYear(new Date().getFullYear()) - 100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">อายุ</label>
                <input
                  type="text"
                  value={`${calculateAge(formData.birthDate)} ปี`}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50"
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  เพศ <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">เลือก</option>
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  สถานภาพ <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.maritalStatus}
                  onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">เลือก</option>
                  <option value="โสด">โสด</option>
                  <option value="สมรส">สมรส</option>
                  <option value="หม้าย">หม้าย</option>
                  <option value="หย่าร้าง">หย่าร้าง</option>
                  <option value="แยกกันอยู่">แยกกันอยู่</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">สัญชาติ</label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">เชื้อชาติ</label>
                <input
                  type="text"
                  value={formData.ethnicity}
                  onChange={(e) => setFormData({ ...formData, ethnicity: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ศาสนา</label>
                <select
                  value={formData.religion}
                  onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="พุทธ">พุทธ</option>
                  <option value="คริสต์">คริสต์</option>
                  <option value="อิสลาม">อิสลาม</option>
                  <option value="ฮินดู">ฮินดู</option>
                  <option value="ซิกข์">ซิกข์</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>
            </div>

            {/* ข้อมูลการติดต่อ */}
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2 mt-8">
              ข้อมูลการติดต่อ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">โทรศัพท์บ้าน</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="02-xxx-xxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  โทรศัพท์มือถือ <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="08x-xxx-xxxx"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">อีเมล</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Line ID</label>
                <input
                  type="text"
                  value={formData.lineId}
                  onChange={(e) => setFormData({ ...formData, lineId: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Line ID"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: ที่อยู่ */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
              ที่อยู่ตามทะเบียนบ้าน
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  บ้านเลขที่ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.regHouseNo}
                  onChange={(e) => setFormData({ ...formData, regHouseNo: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">หมู่ที่</label>
                <input
                  type="text"
                  value={formData.regMoo}
                  onChange={(e) => setFormData({ ...formData, regMoo: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ซอย</label>
                <input
                  type="text"
                  value={formData.regSoi}
                  onChange={(e) => setFormData({ ...formData, regSoi: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ถนน</label>
                <input
                  type="text"
                  value={formData.regRoad}
                  onChange={(e) => setFormData({ ...formData, regRoad: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  จังหวัด <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.regProvince}
                  onChange={(e) => handleRegProvinceChange(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">-- เลือกจังหวัด --</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  อำเภอ/เขต <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.regDistrict}
                  onChange={(e) => handleRegDistrictChange(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                  disabled={!formData.regProvince}
                >
                  <option value="">-- เลือกอำเภอ/เขต --</option>
                  {regDistricts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ตำบล/แขวง <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.regSubDistrict}
                  onChange={(e) => handleRegSubDistrictChange(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                  disabled={!formData.regDistrict}
                >
                  <option value="">-- เลือกตำบล/แขวง --</option>
                  {regSubDistricts.map((subDistrict) => (
                    <option key={subDistrict.name} value={subDistrict.name}>{subDistrict.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  รหัสไปรษณีย์ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.regPostalCode}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50"
                  readOnly
                  placeholder="เลือกตำบลเพื่อแสดงรหัส"
                />
              </div>
            </div>

            {/* GPS Location */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium text-slate-700">ตำแหน่ง GPS</span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowRegMapPicker(true)}
                    className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    OpenStreetMap
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRegGoogleMap(true)}
                    className="px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Google Maps
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">ละติจูด (Latitude)</label>
                  <input
                    type="text"
                    value={formData.regLat}
                    onChange={(e) => setFormData({ ...formData, regLat: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500"
                    placeholder="เช่น 13.756331"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">ลองจิจูด (Longitude)</label>
                  <input
                    type="text"
                    value={formData.regLng}
                    onChange={(e) => setFormData({ ...formData, regLng: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500"
                    placeholder="เช่น 100.501762"
                  />
                </div>
              </div>
              {formData.regLat && formData.regLng && (
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>พิกัดถูกบันทึกแล้ว</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${formData.regLat},${formData.regLng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm rounded-lg hover:bg-slate-50 flex items-center gap-2 shadow-sm"
                  >
                    <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    ดูใน Google Maps
                  </a>
                </div>
              )}
            </div>

            {/* ที่อยู่ปัจจุบัน */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mt-8">
              <h3 className="text-lg font-semibold text-slate-800">ที่อยู่ปัจจุบัน</h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.sameAsRegistered}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    if (checked) {
                      setFormData({
                        ...formData,
                        sameAsRegistered: true,
                        currHouseNo: formData.regHouseNo,
                        currMoo: formData.regMoo,
                        currSoi: formData.regSoi,
                        currRoad: formData.regRoad,
                        currSubDistrict: formData.regSubDistrict,
                        currDistrict: formData.regDistrict,
                        currProvince: formData.regProvince,
                        currPostalCode: formData.regPostalCode,
                        currLat: formData.regLat,
                        currLng: formData.regLng,
                      });
                    } else {
                      setFormData({ ...formData, sameAsRegistered: false });
                    }
                  }}
                  className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <span className="text-sm text-slate-600">ที่อยู่เดียวกับทะเบียนบ้าน</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">บ้านเลขที่</label>
                <input
                  type="text"
                  value={formData.currHouseNo}
                  onChange={(e) => setFormData({ ...formData, currHouseNo: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  disabled={formData.sameAsRegistered}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">หมู่ที่</label>
                <input
                  type="text"
                  value={formData.currMoo}
                  onChange={(e) => setFormData({ ...formData, currMoo: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  disabled={formData.sameAsRegistered}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ซอย</label>
                <input
                  type="text"
                  value={formData.currSoi}
                  onChange={(e) => setFormData({ ...formData, currSoi: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  disabled={formData.sameAsRegistered}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ถนน</label>
                <input
                  type="text"
                  value={formData.currRoad}
                  onChange={(e) => setFormData({ ...formData, currRoad: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  disabled={formData.sameAsRegistered}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">จังหวัด</label>
                <select
                  value={formData.currProvince}
                  onChange={(e) => handleCurrProvinceChange(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  disabled={formData.sameAsRegistered}
                >
                  <option value="">-- เลือกจังหวัด --</option>
                  {provinces.map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">อำเภอ/เขต</label>
                <select
                  value={formData.currDistrict}
                  onChange={(e) => handleCurrDistrictChange(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  disabled={formData.sameAsRegistered || !formData.currProvince}
                >
                  <option value="">-- เลือกอำเภอ/เขต --</option>
                  {currDistricts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ตำบล/แขวง</label>
                <select
                  value={formData.currSubDistrict}
                  onChange={(e) => handleCurrSubDistrictChange(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  disabled={formData.sameAsRegistered || !formData.currDistrict}
                >
                  <option value="">-- เลือกตำบล/แขวง --</option>
                  {currSubDistricts.map((subDistrict) => (
                    <option key={subDistrict.name} value={subDistrict.name}>{subDistrict.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">รหัสไปรษณีย์</label>
                <input
                  type="text"
                  value={formData.currPostalCode}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-indigo-500"
                  maxLength={5}
                  readOnly
                  placeholder="เลือกตำบลเพื่อระบุรหัส"
                />
              </div>
            </div>

            {/* GPS Location for Current Address */}
            <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100 ${formData.sameAsRegistered ? 'opacity-50' : ''}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium text-slate-700">ตำแหน่ง GPS</span>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowCurrMapPicker(true)}
                    disabled={formData.sameAsRegistered}
                    className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    OpenStreetMap
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCurrGoogleMap(true)}
                    disabled={formData.sameAsRegistered}
                    className="px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Google Maps
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600 mb-1">ละติจูด (Latitude)</label>
                  <input
                    type="text"
                    value={formData.currLat}
                    onChange={(e) => setFormData({ ...formData, currLat: e.target.value })}
                    disabled={formData.sameAsRegistered}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100"
                    placeholder="เช่น 13.756331"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 mb-1">ลองจิจูด (Longitude)</label>
                  <input
                    type="text"
                    value={formData.currLng}
                    onChange={(e) => setFormData({ ...formData, currLng: e.target.value })}
                    disabled={formData.sameAsRegistered}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100"
                    placeholder="เช่น 100.501762"
                  />
                </div>
              </div>
              {formData.currLat && formData.currLng && (
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>พิกัดถูกบันทึกแล้ว</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${formData.currLat},${formData.currLng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm rounded-lg hover:bg-slate-50 flex items-center gap-2 shadow-sm"
                  >
                    <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    ดูใน Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: การทำงาน */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
              ข้อมูลการทำงาน
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  รหัสพนักงาน <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  หน่วยงาน/แผนก <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ตำแหน่ง <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ระดับ/ซี</label>
                <input
                  type="text"
                  value={formData.jobLevel}
                  onChange={(e) => setFormData({ ...formData, jobLevel: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="เช่น ซี 5, ระดับ 6"
                />
              </div>
              <div>
                <ThaiDatePicker
                  label="วันที่บรรจุ/เริ่มงาน"
                  value={formData.startDate}
                  onChange={(value) => setFormData({ ...formData, startDate: value })}
                  required
                  maxYear={toBuddhistYear(new Date().getFullYear()) + 1}
                  minYear={toBuddhistYear(new Date().getFullYear()) - 50}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  เงินเดือน (บาท) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>

            {/* ข้อมูลบัญชีธนาคาร */}
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2 mt-8">
              ข้อมูลบัญชีธนาคาร (สำหรับรับเงินปันผล/เงินกู้)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ธนาคาร <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.bankName}
                  onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">เลือกธนาคาร</option>
                  <option value="กรุงไทย">ธนาคารกรุงไทย</option>
                  <option value="กรุงเทพ">ธนาคารกรุงเทพ</option>
                  <option value="กสิกรไทย">ธนาคารกสิกรไทย</option>
                  <option value="ไทยพาณิชย์">ธนาคารไทยพาณิชย์</option>
                  <option value="ทหารไทยธนชาต">ธนาคารทหารไทยธนชาต</option>
                  <option value="กรุงศรีอยุธยา">ธนาคารกรุงศรีอยุธยา</option>
                  <option value="ออมสิน">ธนาคารออมสิน</option>
                  <option value="ธ.ก.ส.">ธนาคาร ธ.ก.ส.</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">สาขา</label>
                <input
                  type="text"
                  value={formData.bankBranch}
                  onChange={(e) => setFormData({ ...formData, bankBranch: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  เลขที่บัญชี <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.bankAccountNo}
                  onChange={(e) => setFormData({ ...formData, bankAccountNo: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ชื่อบัญชี <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.bankAccountName}
                  onChange={(e) => setFormData({ ...formData, bankAccountName: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: สมาชิกสหกรณ์ */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
              ข้อมูลการสมัครสมาชิกสหกรณ์
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ประเภทสมาชิก <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.memberType}
                  onChange={(e) => setFormData({ ...formData, memberType: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="สามัญ">สมาชิกสามัญ</option>
                  <option value="สมทบ">สมาชิกสมทบ</option>
                </select>
                <p className="text-xs text-slate-500 mt-1">
                  สมาชิกสามัญ: ข้าราชการ/พนักงานประจำ | สมาชิกสมทบ: ลูกจ้าง/พนักงานราชการ
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  วิธีชำระเงิน <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="หักเงินเดือน">หักเงินเดือน ณ ที่จ่าย</option>
                  <option value="โอนเงิน">โอนเงินเข้าบัญชีสหกรณ์</option>
                  <option value="ชำระเงินสด">ชำระเงินสดที่สหกรณ์</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  จำนวนหุ้นแรกเข้า <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.initialShares}
                  onChange={(e) => setFormData({ ...formData, initialShares: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  min="10"
                  required
                />
                <p className="text-xs text-slate-500 mt-1">ขั้นต่ำ 10 หุ้น (หุ้นละ 10 บาท = {parseInt(formData.initialShares || '0') * 10} บาท)</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ค่าหุ้นรายเดือน (หุ้น) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.monthlyShares}
                  onChange={(e) => setFormData({ ...formData, monthlyShares: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  min="10"
                  required
                />
                <p className="text-xs text-slate-500 mt-1">ขั้นต่ำ 10 หุ้น/เดือน ({parseInt(formData.monthlyShares || '0') * 10} บาท/เดือน)</p>
              </div>
            </div>

            {/* สรุปค่าใช้จ่าย */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mt-6">
              <h4 className="font-semibold text-indigo-800 mb-4">สรุปค่าใช้จ่ายแรกเข้า</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-indigo-700">ค่าธรรมเนียมแรกเข้า</span>
                  <span className="font-medium">100 บาท</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-indigo-700">ค่าหุ้นแรกเข้า ({formData.initialShares} หุ้น x 10 บาท)</span>
                  <span className="font-medium">{(parseInt(formData.initialShares || '0') * 10).toLocaleString()} บาท</span>
                </div>
                <div className="border-t border-indigo-200 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-indigo-800">รวมทั้งสิ้น</span>
                    <span className="font-bold text-indigo-800 text-lg">
                      {(100 + parseInt(formData.initialShares || '0') * 10).toLocaleString()} บาท
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ข้อกำหนด */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h4 className="font-medium text-amber-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ข้อกำหนดและเงื่อนไข
              </h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• สมาชิกต้องถือหุ้นไม่เกิน 1 ใน 5 ของทุนเรือนหุ้นทั้งหมด</li>
                <li>• ค่าหุ้นรายเดือนต้องไม่เกิน 30% ของเงินเดือน</li>
                <li>• สมาชิกมีสิทธิ์กู้เงินได้หลังเป็นสมาชิกครบ 6 เดือน</li>
                <li>• การลาออกจากสหกรณ์ต้องแจ้งล่วงหน้าอย่างน้อย 30 วัน</li>
              </ul>
            </div>
          </div>
        )}

        {/* Step 5: ผู้รับผลประโยชน์ */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">ผู้รับผลประโยชน์</h3>
                <p className="text-sm text-slate-500">กรุณาระบุผู้รับผลประโยชน์กรณีสมาชิกเสียชีวิต (รวมกัน 100%)</p>
              </div>
              <button
                type="button"
                onClick={addBeneficiary}
                disabled={formData.beneficiaries.length >= 5}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                + เพิ่มผู้รับผลประโยชน์
              </button>
            </div>

            {formData.beneficiaries.map((beneficiary, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-800">ผู้รับผลประโยชน์คนที่ {index + 1}</h4>
                  {formData.beneficiaries.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBeneficiary(index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      ลบ
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ชื่อ-นามสกุล <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={beneficiary.name}
                      onChange={(e) => updateBeneficiary(index, 'name', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ความสัมพันธ์ <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={beneficiary.relation}
                      onChange={(e) => updateBeneficiary(index, 'relation', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">เลือก</option>
                      <option value="บิดา">บิดา</option>
                      <option value="มารดา">มารดา</option>
                      <option value="คู่สมรส">คู่สมรส</option>
                      <option value="บุตร">บุตร</option>
                      <option value="พี่น้อง">พี่น้อง</option>
                      <option value="ญาติ">ญาติ</option>
                      <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      สัดส่วน (%) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={beneficiary.percentage}
                      onChange={(e) => updateBeneficiary(index, 'percentage', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      min="1"
                      max="100"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">โทรศัพท์</label>
                    <input
                      type="tel"
                      value={beneficiary.phone}
                      onChange={(e) => updateBeneficiary(index, 'phone', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">เลขบัตรประชาชน</label>
                    <input
                      type="text"
                      value={beneficiary.idCard}
                      onChange={(e) => updateBeneficiary(index, 'idCard', e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      maxLength={17}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* สรุปสัดส่วน */}
            <div className={`p-4 rounded-lg ${
              formData.beneficiaries.reduce((sum, b) => sum + (parseInt(b.percentage) || 0), 0) === 100
                ? 'bg-emerald-50 border border-emerald-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`font-medium ${
                  formData.beneficiaries.reduce((sum, b) => sum + (parseInt(b.percentage) || 0), 0) === 100
                    ? 'text-emerald-800'
                    : 'text-red-800'
                }`}>
                  รวมสัดส่วนทั้งหมด
                </span>
                <span className={`text-xl font-bold ${
                  formData.beneficiaries.reduce((sum, b) => sum + (parseInt(b.percentage) || 0), 0) === 100
                    ? 'text-emerald-700'
                    : 'text-red-700'
                }`}>
                  {formData.beneficiaries.reduce((sum, b) => sum + (parseInt(b.percentage) || 0), 0)}%
                </span>
              </div>
              {formData.beneficiaries.reduce((sum, b) => sum + (parseInt(b.percentage) || 0), 0) !== 100 && (
                <p className="text-sm text-red-600 mt-1">สัดส่วนรวมต้องเท่ากับ 100%</p>
              )}
            </div>

            {/* เอกสารแนบ */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
              <h4 className="font-medium text-blue-800 mb-3">เอกสารที่ต้องแนบ</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span>สำเนาบัตรประชาชน (รับรองสำเนาถูกต้อง)</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span>สำเนาทะเบียนบ้าน (รับรองสำเนาถูกต้อง)</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span>หนังสือรับรองเงินเดือน หรือสลิปเงินเดือนล่าสุด</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span>สำเนาหน้าบัญชีธนาคาร (Book Bank)</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span>รูปถ่ายขนาด 1 นิ้ว จำนวน 2 รูป</span>
                </li>
              </ul>
            </div>

            {/* การยินยอม */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded mt-0.5" required />
                <span className="text-sm text-slate-700">
                  ข้าพเจ้าขอรับรองว่าข้อความข้างต้นเป็นความจริงทุกประการ และยินยอมให้สหกรณ์ตรวจสอบข้อมูลได้
                  ทั้งนี้ข้าพเจ้าได้อ่านและเข้าใจข้อบังคับและระเบียบของสหกรณ์แล้ว และยินดีปฏิบัติตามทุกประการ
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
          <div>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
              >
                ← ย้อนกลับ
              </button>
            )}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleSaveDraft}
              className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
            >
              บันทึกแบบร่าง
            </button>
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                ถัดไป →
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                ยืนยันใบสมัคร
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Map Picker Modals */}
      <MapPicker
        isOpen={showRegMapPicker}
        onClose={() => setShowRegMapPicker(false)}
        onSelectLocation={handleRegLocationSelect}
        initialLat={
          formData.regLat ? parseFloat(formData.regLat) :
          getBestCoordinates(formData.regProvince, formData.regDistrict, formData.regSubDistrict).lat
        }
        initialLng={
          formData.regLng ? parseFloat(formData.regLng) :
          getBestCoordinates(formData.regProvince, formData.regDistrict, formData.regSubDistrict).lng
        }
      />
      <MapPicker
        isOpen={showCurrMapPicker}
        onClose={() => setShowCurrMapPicker(false)}
        onSelectLocation={handleCurrLocationSelect}
        initialLat={
          formData.currLat ? parseFloat(formData.currLat) :
          getBestCoordinates(formData.currProvince, formData.currDistrict, formData.currSubDistrict).lat
        }
        initialLng={
          formData.currLng ? parseFloat(formData.currLng) :
          getBestCoordinates(formData.currProvince, formData.currDistrict, formData.currSubDistrict).lng
        }
      />

      {/* Google Maps Pickers */}
      <GoogleMapPicker
        isOpen={showRegGoogleMap}
        onClose={() => setShowRegGoogleMap(false)}
        onSelectLocation={handleRegLocationSelect}
        initialLat={
          formData.regLat ? parseFloat(formData.regLat) :
          getBestCoordinates(formData.regProvince, formData.regDistrict, formData.regSubDistrict).lat
        }
        initialLng={
          formData.regLng ? parseFloat(formData.regLng) :
          getBestCoordinates(formData.regProvince, formData.regDistrict, formData.regSubDistrict).lng
        }
      />
      <GoogleMapPicker
        isOpen={showCurrGoogleMap}
        onClose={() => setShowCurrGoogleMap(false)}
        onSelectLocation={handleCurrLocationSelect}
        initialLat={
          formData.currLat ? parseFloat(formData.currLat) :
          getBestCoordinates(formData.currProvince, formData.currDistrict, formData.currSubDistrict).lat
        }
        initialLng={
          formData.currLng ? parseFloat(formData.currLng) :
          getBestCoordinates(formData.currProvince, formData.currDistrict, formData.currSubDistrict).lng
        }
      />
    </div>
  );
}
