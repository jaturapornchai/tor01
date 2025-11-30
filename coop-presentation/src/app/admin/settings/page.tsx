"use client";

import React, { useState } from "react";
import { cooperativeTypes, CooperativeTypeId, getCooperativeType, getAllModulesForType } from "@/data/cooperativeTypes";

export default function SettingsPage() {
  const [selectedType, setSelectedType] = useState<CooperativeTypeId>('savings');
  const [coopName, setCoopName] = useState('สหกรณ์ออมทรัพย์พนักงานบริษัท ABC จำกัด');
  const [coopCode, setCoopCode] = useState('10101-01-0001');
  const [activeTab, setActiveTab] = useState<'general' | 'modules' | 'users' | 'permissions'>('general');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showNotification = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSaveSettings = () => {
    showNotification('✓ บันทึกการตั้งค่าเรียบร้อยแล้ว');
  };

  const handleAddUser = () => {
    showNotification('เปิดหน้าต่างเพิ่มผู้ใช้งานใหม่');
  };

  const handleEditPermission = (roleName: string) => {
    showNotification(`เปิดหน้าต่างแก้ไขสิทธิ์: ${roleName}`);
  };

  const currentCoopType = getCooperativeType(selectedType);
  const modules = getAllModulesForType(selectedType);

  const tabs = [
    { id: 'general', name: 'ข้อมูลทั่วไป', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'modules', name: 'โมดูลระบบ', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { id: 'users', name: 'ผู้ใช้งาน', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'permissions', name: 'สิทธิ์การใช้งาน', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-pulse">
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">ตั้งค่าระบบ</h1>
        <p className="text-slate-500 mt-1">กำหนดค่าสหกรณ์และระบบต่างๆ</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
              </svg>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* General Settings Tab */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          {/* Cooperative Type Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">ประเภทสหกรณ์</h2>
            <p className="text-sm text-slate-500 mb-6">เลือกประเภทสหกรณ์เพื่อแสดงโมดูลและฟีเจอร์ที่เหมาะสม</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cooperativeTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                    selectedType === type.id
                      ? 'border-indigo-500 bg-indigo-50 shadow-md'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  {selectedType === type.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${type.gradient} flex items-center justify-center mb-3`}
                  >
                    <CoopIcon name={type.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{type.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{type.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Current Type Info */}
          {currentCoopType && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentCoopType.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <CoopIcon name={currentCoopType.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-800">{currentCoopType.name}</h2>
                  <p className="text-slate-500 mt-1">{currentCoopType.description}</p>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">ลักษณะเฉพาะ:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {currentCoopType.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-slate-700 mb-2">กฎระเบียบที่เกี่ยวข้อง:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCoopType.regulations.map((reg, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                          {reg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cooperative Info */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">ข้อมูลสหกรณ์</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ชื่อสหกรณ์
                </label>
                <input
                  type="text"
                  value={coopName}
                  onChange={(e) => setCoopName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  เลขทะเบียนสหกรณ์
                </label>
                <input
                  type="text"
                  value={coopCode}
                  onChange={(e) => setCoopCode(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  วันที่จดทะเบียน
                </label>
                <input
                  type="date"
                  defaultValue="2010-05-15"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ที่อยู่
                </label>
                <input
                  type="text"
                  defaultValue="123 อาคารสำนักงานใหญ่ ถ.พหลโยธิน แขวงจตุจักร เขตจตุจักร กรุงเทพฯ 10900"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  โทรศัพท์
                </label>
                <input
                  type="tel"
                  defaultValue="02-123-4567"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  defaultValue="info@abccoop.or.th"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSaveSettings}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 font-medium transition-all shadow-sm"
              >
                บันทึกการตั้งค่า
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modules Tab */}
      {activeTab === 'modules' && (
        <div className="space-y-6">
          {/* Core Modules */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800">โมดูลหลัก</h2>
                <p className="text-sm text-slate-500">โมดูลพื้นฐานที่ทุกสหกรณ์ต้องมี</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.coreModules.map((module) => (
                <div key={module.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                      <ModuleIcon name={module.icon} className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-800">{module.name}</h3>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">เปิดใช้งาน</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{module.description}</p>
                  {module.subModules && (
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <p className="text-xs text-slate-400 mb-2">เมนูย่อย:</p>
                      <div className="flex flex-wrap gap-1">
                        {module.subModules.map((sub, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Specific Modules */}
          {currentCoopType && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentCoopType.gradient} flex items-center justify-center`}>
                  <CoopIcon name={currentCoopType.icon} className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">โมดูลเฉพาะ{currentCoopType.name}</h2>
                  <p className="text-sm text-slate-500">โมดูลที่ออกแบบมาเฉพาะสำหรับ{currentCoopType.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {modules.specificModules.map((module) => (
                  <div key={module.id} className={`p-4 rounded-xl border-2 border-dashed`} style={{ borderColor: currentCoopType.color + '40', backgroundColor: currentCoopType.color + '08' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentCoopType.gradient} flex items-center justify-center`}>
                        <ModuleIcon name={module.icon} className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800">{module.name}</h3>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded">เปิดใช้งาน</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500">{module.description}</p>
                    {module.subModules && (
                      <div className="mt-3 pt-3 border-t" style={{ borderColor: currentCoopType.color + '20' }}>
                        <p className="text-xs text-slate-400 mb-2">เมนูย่อย:</p>
                        <div className="flex flex-wrap gap-1">
                          {module.subModules.map((sub, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-white border rounded text-slate-600" style={{ borderColor: currentCoopType.color + '30' }}>
                              {sub.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">ผู้ใช้งานระบบ</h2>
              <p className="text-sm text-slate-500">จัดการบัญชีผู้ใช้งานและสิทธิ์การเข้าถึง</p>
            </div>
            <button
              onClick={handleAddUser}
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 font-medium text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              เพิ่มผู้ใช้งาน
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-slate-500 border-b border-slate-200">
                  <th className="pb-3 font-medium">ผู้ใช้งาน</th>
                  <th className="pb-3 font-medium">อีเมล</th>
                  <th className="pb-3 font-medium">ระดับสิทธิ์</th>
                  <th className="pb-3 font-medium">สถานะ</th>
                  <th className="pb-3 font-medium text-right">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'นายสมชาย ใจดี', email: 'somchai@abc.co.th', role: 'ผู้ดูแลระบบ', status: 'active' },
                  { name: 'นางสาวสมหญิง รักดี', email: 'somying@abc.co.th', role: 'พนักงานบัญชี', status: 'active' },
                  { name: 'นายสมศักดิ์ ดีใจ', email: 'somsak@abc.co.th', role: 'พนักงานสินเชื่อ', status: 'active' },
                  { name: 'นางสาวสมใจ จริงใจ', email: 'somjai@abc.co.th', role: 'พนักงานทั่วไป', status: 'inactive' },
                ].map((user, idx) => (
                  <tr key={idx} className="text-sm">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-medium text-slate-800">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-600">{user.email}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.role === 'ผู้ดูแลระบบ'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {user.status === 'active' ? 'ใช้งาน' : 'ปิดใช้งาน'}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button className="text-slate-400 hover:text-indigo-600 p-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Permissions Tab */}
      {activeTab === 'permissions' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-800">ระดับสิทธิ์การใช้งาน</h2>
            <p className="text-sm text-slate-500">กำหนดสิทธิ์การเข้าถึงโมดูลต่างๆ</p>
          </div>

          <div className="space-y-4">
            {[
              { name: 'ผู้ดูแลระบบ', desc: 'เข้าถึงทุกโมดูล แก้ไขตั้งค่าได้', color: 'purple' },
              { name: 'พนักงานบัญชี', desc: 'เข้าถึงโมดูลบัญชี-การเงิน, รายงาน', color: 'blue' },
              { name: 'พนักงานสินเชื่อ', desc: 'เข้าถึงโมดูลสินเชื่อ, ค้ำประกัน, สมาชิก', color: 'green' },
              { name: 'พนักงานทะเบียน', desc: 'เข้าถึงโมดูลสมาชิก, หุ้น', color: 'amber' },
              { name: 'พนักงานทั่วไป', desc: 'ดูข้อมูลได้อย่างเดียว', color: 'slate' },
            ].map((role, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-${role.color}-100 flex items-center justify-center`}>
                    <svg className={`w-5 h-5 text-${role.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">{role.name}</h3>
                    <p className="text-sm text-slate-500">{role.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEditPermission(role.name)}
                  className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-100 text-sm font-medium"
                >
                  แก้ไขสิทธิ์
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Cooperative Type Icons
function CoopIcon({ name, className }: { name: string; className?: string }) {
  const icons: { [key: string]: React.ReactElement } = {
    wheat: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m0-12c-2.5 0-4.5 2-4.5 4.5S9.5 15 12 15m0-9c2.5 0 4.5 2 4.5 4.5S14.5 15 12 15M7 3v2m10-2v2M7 19v2m10-2v2M3 12h2m14 0h2" />
      </svg>
    ),
    fish: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12c-2 3-5 5-8 5s-6-2-8-5c2-3 5-5 8-5s6 2 8 5z" />
        <circle cx="16" cy="12" r="1" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12l-2-2m0 4l2-2" />
      </svg>
    ),
    home: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    store: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    headphones: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    'piggy-bank': (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    'hand-coins': (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return icons[name] || icons.home;
}

// Module Icons
function ModuleIcon({ name, className }: { name: string; className?: string }) {
  const icons: { [key: string]: React.ReactElement } = {
    users: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    'chart-pie': (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    calculator: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    'file-text': (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    settings: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    banknote: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    wallet: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    shield: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    heart: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    package: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    truck: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    boxes: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    anchor: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 4a4 4 0 100 8 4 4 0 000-8zm0 8v4m-6-4h12" />
      </svg>
    ),
    ship: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    map: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    briefcase: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    car: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 17H3v-4a1 1 0 011-1h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H16a1 1 0 001-1V9a1 1 0 00-1-1H8.414a1 1 0 01-.707-.293L5.293 5.293A1 1 0 004.586 5H3a1 1 0 00-1 1v2m18 9h-2m-1-4v4h-2" />
      </svg>
    ),
    monitor: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    sprout: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 14c-4 0-7-3-7-7 0-2 1-4 3-5.5C10 5 12 5 12 5s2 0 4 1.5c2 1.5 3 3.5 3 5.5 0 4-3 7-7 7z" />
      </svg>
    ),
    percent: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h.01M15 16h.01M6 18l12-12" />
      </svg>
    ),
    'shopping-cart': (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    'file-spreadsheet': (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  };

  return icons[name] || icons.settings;
}
