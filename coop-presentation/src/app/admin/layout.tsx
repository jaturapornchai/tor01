"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cooperativeTypes, CooperativeTypeId, getCooperativeType } from "@/data/cooperativeTypes";

// Dynamic menu structure based on cooperative type
const getMenuItemsForType = (coopType: CooperativeTypeId) => {
  const type = getCooperativeType(coopType);

  // Base menu items for all types
  const baseMenuItems = [
    {
      category: "หน้าหลัก",
      items: [
        { name: "แดชบอร์ด", href: "/admin", icon: "home" },
      ],
    },
    {
      category: "สมาชิก",
      items: [
        { name: "ทะเบียนสมาชิก", href: "/admin/members", icon: "users" },
        { name: "สมัครสมาชิกใหม่", href: "/admin/members/register", icon: "user-plus" },
        { name: "ลาออก/พ้นสภาพ", href: "/admin/members/resign", icon: "user-x" },
      ],
    },
    {
      category: "ทุนเรือนหุ้น",
      items: [
        { name: "ทะเบียนหุ้น", href: "/admin/shares", icon: "coins" },
        { name: "ซื้อหุ้นเพิ่ม", href: "/admin/shares/buy", icon: "trending-up" },
        { name: "ถอนหุ้น", href: "/admin/shares/withdraw", icon: "trending-down" },
      ],
    },
  ];

  // Type-specific menu items
  const typeSpecificMenus: Record<CooperativeTypeId, typeof baseMenuItems> = {
    agricultural: [
      {
        category: "สินเชื่อเกษตร",
        items: [
          { name: "ภาพรวมสินเชื่อ", href: "/admin/loans", icon: "credit-card" },
          { name: "สินเชื่อสามัญ", href: "/admin/loans/ordinary", icon: "file-text" },
          { name: "สินเชื่อฉุกเฉิน", href: "/admin/loans/emergency", icon: "zap" },
          { name: "สินเชื่อพิเศษ", href: "/admin/loans/special", icon: "star" },
          { name: "อนุมัติสินเชื่อ", href: "/admin/loans/approval", icon: "check-square" },
          { name: "ติดตามหนี้", href: "/admin/loans/tracking", icon: "alert-circle" },
        ],
      },
      {
        category: "เงินฝาก",
        items: [
          { name: "บัญชีเงินฝาก", href: "/admin/deposits", icon: "wallet" },
          { name: "ออมทรัพย์", href: "/admin/deposits/savings", icon: "piggy-bank" },
          { name: "ฝากประจำ", href: "/admin/deposits/fixed", icon: "lock" },
        ],
      },
      {
        category: "ค้ำประกัน",
        items: [
          { name: "ทะเบียนผู้ค้ำประกัน", href: "/admin/guarantor/registry", icon: "shield" },
          { name: "วงเงินค้ำประกัน", href: "/admin/guarantor/limits", icon: "sliders" },
          { name: "ประวัติการค้ำ", href: "/admin/guarantor/history", icon: "history" },
        ],
      },
      {
        category: "สวัสดิการ",
        items: [
          { name: "ภาพรวมสวัสดิการ", href: "/admin/welfare/overview", icon: "heart" },
          { name: "สวัสดิการสมาชิก", href: "/admin/welfare/member", icon: "gift" },
          { name: "ทุนการศึกษา", href: "/admin/welfare/scholarship", icon: "book-open" },
        ],
      },
    ],
    fishery: [
      {
        category: "สินเชื่อประมง",
        items: [
          { name: "ภาพรวมสินเชื่อ", href: "/admin/loans", icon: "credit-card" },
          { name: "สินเชื่อสามัญ", href: "/admin/loans/ordinary", icon: "file-text" },
          { name: "สินเชื่อฉุกเฉิน", href: "/admin/loans/emergency", icon: "zap" },
          { name: "สินเชื่อพิเศษ", href: "/admin/loans/special", icon: "star" },
          { name: "อนุมัติสินเชื่อ", href: "/admin/loans/approval", icon: "check-square" },
        ],
      },
      {
        category: "เงินฝาก",
        items: [
          { name: "บัญชีเงินฝาก", href: "/admin/deposits", icon: "wallet" },
          { name: "ออมทรัพย์", href: "/admin/deposits/savings", icon: "piggy-bank" },
          { name: "ฝากประจำ", href: "/admin/deposits/fixed", icon: "lock" },
        ],
      },
      {
        category: "ค้ำประกัน",
        items: [
          { name: "ทะเบียนผู้ค้ำประกัน", href: "/admin/guarantor/registry", icon: "shield" },
          { name: "วงเงินค้ำประกัน", href: "/admin/guarantor/limits", icon: "sliders" },
          { name: "ประวัติการค้ำ", href: "/admin/guarantor/history", icon: "history" },
        ],
      },
      {
        category: "สวัสดิการ",
        items: [
          { name: "ภาพรวมสวัสดิการ", href: "/admin/welfare/overview", icon: "heart" },
          { name: "สวัสดิการสมาชิก", href: "/admin/welfare/member", icon: "gift" },
          { name: "ทุนการศึกษา", href: "/admin/welfare/scholarship", icon: "book-open" },
        ],
      },
    ],
    settlement: [
      {
        category: "สินเชื่อนิคม",
        items: [
          { name: "ภาพรวมสินเชื่อ", href: "/admin/loans", icon: "credit-card" },
          { name: "สินเชื่อที่อยู่อาศัย", href: "/admin/loans/housing", icon: "home" },
          { name: "สินเชื่อฉุกเฉิน", href: "/admin/loans/emergency", icon: "zap" },
          { name: "สินเชื่อพิเศษ", href: "/admin/loans/special", icon: "star" },
          { name: "อนุมัติสินเชื่อ", href: "/admin/loans/approval", icon: "check-square" },
        ],
      },
      {
        category: "เงินฝาก",
        items: [
          { name: "บัญชีเงินฝาก", href: "/admin/deposits", icon: "wallet" },
          { name: "ออมทรัพย์", href: "/admin/deposits/savings", icon: "piggy-bank" },
          { name: "ฝากประจำ", href: "/admin/deposits/fixed", icon: "lock" },
        ],
      },
      {
        category: "ค้ำประกัน",
        items: [
          { name: "ทะเบียนผู้ค้ำประกัน", href: "/admin/guarantor/registry", icon: "shield" },
          { name: "วงเงินค้ำประกัน", href: "/admin/guarantor/limits", icon: "sliders" },
          { name: "ประวัติการค้ำ", href: "/admin/guarantor/history", icon: "history" },
        ],
      },
      {
        category: "สวัสดิการ",
        items: [
          { name: "ภาพรวมสวัสดิการ", href: "/admin/welfare/overview", icon: "heart" },
          { name: "สวัสดิการสมาชิก", href: "/admin/welfare/member", icon: "gift" },
          { name: "ทุนการศึกษา", href: "/admin/welfare/scholarship", icon: "book-open" },
        ],
      },
    ],
    consumer: [
      {
        category: "สินเชื่อ",
        items: [
          { name: "ภาพรวมสินเชื่อ", href: "/admin/loans", icon: "credit-card" },
          { name: "สินเชื่อสามัญ", href: "/admin/loans/ordinary", icon: "file-text" },
          { name: "สินเชื่อฉุกเฉิน", href: "/admin/loans/emergency", icon: "zap" },
          { name: "อนุมัติสินเชื่อ", href: "/admin/loans/approval", icon: "check-square" },
        ],
      },
      {
        category: "เงินฝาก",
        items: [
          { name: "บัญชีเงินฝาก", href: "/admin/deposits", icon: "wallet" },
          { name: "ออมทรัพย์", href: "/admin/deposits/savings", icon: "piggy-bank" },
          { name: "ฝากประจำ", href: "/admin/deposits/fixed", icon: "lock" },
        ],
      },
      {
        category: "ค้ำประกัน",
        items: [
          { name: "ทะเบียนผู้ค้ำประกัน", href: "/admin/guarantor/registry", icon: "shield" },
          { name: "วงเงินค้ำประกัน", href: "/admin/guarantor/limits", icon: "sliders" },
          { name: "ประวัติการค้ำ", href: "/admin/guarantor/history", icon: "history" },
        ],
      },
      {
        category: "สวัสดิการ",
        items: [
          { name: "ภาพรวมสวัสดิการ", href: "/admin/welfare/overview", icon: "heart" },
          { name: "สวัสดิการสมาชิก", href: "/admin/welfare/member", icon: "gift" },
          { name: "ทุนการศึกษา", href: "/admin/welfare/scholarship", icon: "book-open" },
        ],
      },
    ],
    service: [
      {
        category: "สินเชื่อบริการ",
        items: [
          { name: "ภาพรวมสินเชื่อ", href: "/admin/loans", icon: "credit-card" },
          { name: "สินเชื่อสามัญ", href: "/admin/loans/ordinary", icon: "file-text" },
          { name: "สินเชื่อฉุกเฉิน", href: "/admin/loans/emergency", icon: "zap" },
          { name: "สินเชื่อพิเศษ", href: "/admin/loans/special", icon: "star" },
          { name: "อนุมัติสินเชื่อ", href: "/admin/loans/approval", icon: "check-square" },
        ],
      },
      {
        category: "เงินฝาก",
        items: [
          { name: "บัญชีเงินฝาก", href: "/admin/deposits", icon: "wallet" },
          { name: "ออมทรัพย์", href: "/admin/deposits/savings", icon: "piggy-bank" },
          { name: "ฝากประจำ", href: "/admin/deposits/fixed", icon: "lock" },
        ],
      },
      {
        category: "ค้ำประกัน",
        items: [
          { name: "ทะเบียนผู้ค้ำประกัน", href: "/admin/guarantor/registry", icon: "shield" },
          { name: "วงเงินค้ำประกัน", href: "/admin/guarantor/limits", icon: "sliders" },
          { name: "ประวัติการค้ำ", href: "/admin/guarantor/history", icon: "history" },
        ],
      },
      {
        category: "สวัสดิการ",
        items: [
          { name: "ภาพรวมสวัสดิการ", href: "/admin/welfare/overview", icon: "heart" },
          { name: "สวัสดิการสมาชิก", href: "/admin/welfare/member", icon: "gift" },
          { name: "ทุนการศึกษา", href: "/admin/welfare/scholarship", icon: "book-open" },
        ],
      },
    ],
    savings: [
      {
        category: "สินเชื่อ",
        items: [
          { name: "ภาพรวมสินเชื่อ", href: "/admin/loans", icon: "credit-card" },
          { name: "เงินกู้สามัญ", href: "/admin/loans/ordinary", icon: "file-text" },
          { name: "เงินกู้ฉุกเฉิน", href: "/admin/loans/emergency", icon: "zap" },
          { name: "เงินกู้พิเศษ", href: "/admin/loans/special", icon: "star" },
          { name: "เงินกู้ที่อยู่อาศัย", href: "/admin/loans/housing", icon: "home" },
          { name: "อนุมัติสินเชื่อ", href: "/admin/loans/approval", icon: "check-square" },
          { name: "ติดตามหนี้", href: "/admin/loans/tracking", icon: "alert-circle" },
        ],
      },
      {
        category: "เงินฝาก",
        items: [
          { name: "บัญชีเงินฝาก", href: "/admin/deposits", icon: "wallet" },
          { name: "ออมทรัพย์", href: "/admin/deposits/savings", icon: "piggy-bank" },
          { name: "ฝากประจำ", href: "/admin/deposits/fixed", icon: "lock" },
          { name: "ฝากทวีทรัพย์", href: "/admin/deposits/special", icon: "trending-up" },
        ],
      },
      {
        category: "ค้ำประกัน",
        items: [
          { name: "ทะเบียนผู้ค้ำประกัน", href: "/admin/guarantor/registry", icon: "shield" },
          { name: "วงเงินค้ำประกัน", href: "/admin/guarantor/limits", icon: "sliders" },
          { name: "ประวัติการค้ำ", href: "/admin/guarantor/history", icon: "history" },
        ],
      },
      {
        category: "สวัสดิการ",
        items: [
          { name: "ภาพรวมสวัสดิการ", href: "/admin/welfare/overview", icon: "heart" },
          { name: "สวัสดิการสมาชิก", href: "/admin/welfare/member", icon: "gift" },
          { name: "สวัสดิการเสียชีวิต", href: "/admin/welfare/death", icon: "heart" },
          { name: "ทุนการศึกษา", href: "/admin/welfare/scholarship", icon: "book-open" },
        ],
      },
      {
        category: "หักเงินเดือน",
        items: [
          { name: "ตั้งค่าการหัก", href: "/admin/payroll/setup", icon: "settings" },
          { name: "ไฟล์หักเงิน", href: "/admin/payroll/files", icon: "file-text" },
          { name: "ตรวจสอบการหัก", href: "/admin/payroll/verify", icon: "check-square" },
        ],
      },
    ],
    credit_union: [
      {
        category: "สินเชื่อ",
        items: [
          { name: "ภาพรวมสินเชื่อ", href: "/admin/loans", icon: "credit-card" },
          { name: "เงินกู้สามัญ", href: "/admin/loans/ordinary", icon: "file-text" },
          { name: "เงินกู้ฉุกเฉิน", href: "/admin/loans/emergency", icon: "zap" },
          { name: "เงินกู้พิเศษ", href: "/admin/loans/special", icon: "star" },
          { name: "อนุมัติสินเชื่อ", href: "/admin/loans/approval", icon: "check-square" },
        ],
      },
      {
        category: "เงินฝาก",
        items: [
          { name: "บัญชีเงินฝาก", href: "/admin/deposits", icon: "wallet" },
          { name: "ออมทรัพย์", href: "/admin/deposits/savings", icon: "piggy-bank" },
          { name: "ฝากประจำ", href: "/admin/deposits/fixed", icon: "lock" },
        ],
      },
      {
        category: "ค้ำประกัน",
        items: [
          { name: "ทะเบียนผู้ค้ำประกัน", href: "/admin/guarantor/registry", icon: "shield" },
          { name: "วงเงินค้ำประกัน", href: "/admin/guarantor/limits", icon: "sliders" },
        ],
      },
      {
        category: "สวัสดิการชุมชน",
        items: [
          { name: "ภาพรวมสวัสดิการ", href: "/admin/welfare/overview", icon: "heart" },
          { name: "สวัสดิการสมาชิก", href: "/admin/welfare/member", icon: "gift" },
        ],
      },
      {
        category: "หักเงินเดือน",
        items: [
          { name: "ตั้งค่าการหัก", href: "/admin/payroll/setup", icon: "settings" },
          { name: "ไฟล์หักเงิน", href: "/admin/payroll/files", icon: "file-text" },
          { name: "ตรวจสอบการหัก", href: "/admin/payroll/verify", icon: "check-square" },
        ],
      },
    ],
  };

  // Common ending menus
  const endingMenus = [
    {
      category: "บัญชี-การเงิน",
      items: [
        { name: "บัญชีแยกประเภท", href: "/admin/accounting/ledger", icon: "book" },
        { name: "งบทดลอง", href: "/admin/accounting/trial", icon: "file-minus" },
        { name: "งบการเงิน", href: "/admin/accounting/statements", icon: "bar-chart-2" },
        { name: "ปิดบัญชี", href: "/admin/accounting/closing", icon: "calendar" },
      ],
    },
    {
      category: "รายงาน",
      items: [
        { name: "รายงานสมาชิก", href: "/admin/reports/members", icon: "users" },
        { name: "รายงานการเงิน", href: "/admin/reports/financial", icon: "dollar-sign" },
        { name: "รายงานสินเชื่อ", href: "/admin/reports/loans", icon: "file-text" },
        { name: "รายงาน กสส.", href: "/admin/reports/cpd", icon: "government" },
      ],
    },
    {
      category: "ตั้งค่า",
      items: [
        { name: "ข้อมูลสหกรณ์", href: "/admin/settings", icon: "settings" },
      ],
    },
  ];

  return [...baseMenuItems, ...(typeSpecificMenus[coopType] || typeSpecificMenus.savings), ...endingMenus];
};

// Default menu items for backwards compatibility
const menuItems = [
  {
    category: "หน้าหลัก",
    items: [
      { name: "แดชบอร์ด", href: "/admin", icon: "home" },
    ],
  },
  {
    category: "สมาชิก",
    items: [
      { name: "ทะเบียนสมาชิก", href: "/admin/members", icon: "users" },
      { name: "สมัครสมาชิกใหม่", href: "/admin/members/register", icon: "user-plus" },
      { name: "ลาออก/พ้นสภาพ", href: "/admin/members/resign", icon: "user-x" },
    ],
  },
  {
    category: "ทุนเรือนหุ้น",
    items: [
      { name: "ทะเบียนหุ้น", href: "/admin/shares", icon: "coins" },
      { name: "ซื้อหุ้นเพิ่ม", href: "/admin/shares/buy", icon: "trending-up" },
      { name: "ถอนหุ้น", href: "/admin/shares/withdraw", icon: "trending-down" },
    ],
  },
  {
    category: "สินเชื่อ",
    items: [
      { name: "ภาพรวมสินเชื่อ", href: "/admin/loans", icon: "credit-card" },
      { name: "เงินกู้สามัญ", href: "/admin/loans/ordinary", icon: "file-text" },
      { name: "เงินกู้ฉุกเฉิน", href: "/admin/loans/emergency", icon: "zap" },
      { name: "เงินกู้พิเศษ", href: "/admin/loans/special", icon: "star" },
      { name: "อนุมัติสินเชื่อ", href: "/admin/loans/approval", icon: "check-square" },
      { name: "ติดตามหนี้", href: "/admin/loans/tracking", icon: "alert-circle" },
    ],
  },
  {
    category: "เงินฝาก",
    items: [
      { name: "บัญชีเงินฝาก", href: "/admin/deposits", icon: "wallet" },
      { name: "ออมทรัพย์", href: "/admin/deposits/savings", icon: "piggy-bank" },
      { name: "ฝากประจำ", href: "/admin/deposits/fixed", icon: "lock" },
    ],
  },
  {
    category: "ค้ำประกัน",
    items: [
      { name: "ทะเบียนผู้ค้ำประกัน", href: "/admin/guarantor/registry", icon: "shield" },
      { name: "วงเงินค้ำประกัน", href: "/admin/guarantor/limits", icon: "sliders" },
    ],
  },
  {
    category: "สวัสดิการ",
    items: [
      { name: "ภาพรวมสวัสดิการ", href: "/admin/welfare/overview", icon: "heart" },
      { name: "ทุนการศึกษา", href: "/admin/welfare/scholarship", icon: "book-open" },
      { name: "สวัสดิการสมาชิก", href: "/admin/welfare/member", icon: "gift" },
    ],
  },
  {
    category: "บัญชี-การเงิน",
    items: [
      { name: "บัญชีแยกประเภท", href: "/admin/accounting/ledger", icon: "book" },
      { name: "งบทดลอง", href: "/admin/accounting/trial", icon: "file-minus" },
      { name: "งบการเงิน", href: "/admin/accounting/statements", icon: "bar-chart-2" },
      { name: "ปิดบัญชี", href: "/admin/accounting/closing", icon: "calendar" },
    ],
  },
  {
    category: "รายงาน",
    items: [
      { name: "รายงานสมาชิก", href: "/admin/reports/members", icon: "users" },
      { name: "รายงานการเงิน", href: "/admin/reports/financial", icon: "dollar-sign" },
      { name: "รายงานสินเชื่อ", href: "/admin/reports/loans", icon: "file-text" },
    ],
  },
  {
    category: "ตั้งค่า",
    items: [
      { name: "ข้อมูลสหกรณ์", href: "/admin/settings", icon: "settings" },
    ],
  },
];

// Lucide-style icons (simplified SVG)
const Icon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  const icons: { [key: string]: React.ReactElement } = {
    home: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    users: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    "user-plus": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    "user-x": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="17" y1="8" x2="22" y2="13" />
        <line x1="22" y1="8" x2="17" y2="13" />
      </svg>
    ),
    coins: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="m16.71 13.88.7.71-2.82 2.82" />
      </svg>
    ),
    "trending-up": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    "trending-down": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
      </svg>
    ),
    "credit-card": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    "file-text": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    zap: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    star: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    "check-square": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    "alert-circle": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    wallet: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    ),
    "piggy-bank": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
        <path d="M2 9v1c0 1.1.9 2 2 2h1" />
        <path d="M16 11h.01" />
      </svg>
    ),
    lock: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    shield: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    sliders: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
    heart: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    "book-open": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    gift: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
    book: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    "file-minus": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    "bar-chart-2": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    calendar: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    "dollar-sign": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    settings: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    percent: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
    "user-cog": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="19" cy="11" r="2" />
        <path d="M19 8v1" />
        <path d="M19 13v1" />
        <path d="m21.6 9.5-.87.5" />
        <path d="m17.27 12-.87.5" />
        <path d="m21.6 12.5-.87-.5" />
        <path d="m17.27 10-.87-.5" />
      </svg>
    ),
    menu: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    search: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    bell: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    "chevron-down": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    "log-out": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
    "arrow-left": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    ),
    history: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M12 7v5l4 2" />
      </svg>
    ),
    plus: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  };

  return icons[name] || icons.home;
};

// Cooperative Type Icons
const CoopTypeIcon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  const icons: { [key: string]: React.ReactElement } = {
    wheat: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v12M6 8c3 0 6 2 6 6-3 0-6-2-6-6zM18 8c-3 0-6 2-6 6 3 0 6-2 6-6z" />
      </svg>
    ),
    fish: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 12c3-5 11-5 14 0-3 5-11 5-14 0z" />
        <path d="M3.5 12L6.5 12M17 12h.01" />
      </svg>
    ),
    home: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    store: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l2.5-5h13L21 9" />
        <path d="M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    headphones: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    "piggy-bank": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
        <path d="M2 9v1c0 1.1.9 2 2 2h1" />
        <path d="M16 11h.01" />
      </svg>
    ),
    "hand-coins": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
        <path d="M16.71 13.88l.7.71-2.82 2.82" />
      </svg>
    ),
  };

  return icons[name] || icons.home;
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["หน้าหลัก"]);
  const [coopType, setCoopType] = useState<CooperativeTypeId>('savings');
  const [showCoopSelector, setShowCoopSelector] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on navigation (mobile only)
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [pathname, isMobile]);

  // Get dynamic menu items based on cooperative type
  const dynamicMenuItems = getMenuItemsForType(coopType);
  const currentCoopType = getCooperativeType(coopType);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const isActiveCategory = (items: typeof dynamicMenuItems[0]["items"]) => {
    return items.some((item) => pathname === item.href || pathname.startsWith(item.href + "/"));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* FlowAccount-style Top Header - White with shadow */}
      <header className="fixed top-0 left-0 right-0 h-14 sm:h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-2 sm:px-4">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
          >
            <Icon name="menu" className="w-5 h-5" />
          </button>
          <Link href="/admin" className="flex items-center space-x-2 sm:space-x-3">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br ${currentCoopType?.gradient || 'from-indigo-500 to-purple-600'} rounded-lg flex items-center justify-center shadow-lg`} style={{ boxShadow: `0 4px 14px ${currentCoopType?.color}40` }}>
              <span className="text-white font-bold text-base sm:text-lg">C</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-slate-800 text-sm sm:text-base">COOP Management</h1>
              <p className="text-xs text-slate-500 hidden md:block">{currentCoopType?.name}</p>
            </div>
          </Link>
          {/* Cooperative Type Selector */}
          <div className="relative">
            <button
              onClick={() => setShowCoopSelector(!showCoopSelector)}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentCoopType?.gradient}`}></div>
              <span className="text-slate-600 hidden md:inline">{currentCoopType?.shortName}</span>
              <Icon name="chevron-down" className="w-4 h-4 text-slate-400" />
            </button>

            {/* Dropdown */}
            {showCoopSelector && (
              <div className="absolute top-full left-0 sm:left-0 right-0 sm:right-auto mt-2 w-[calc(100vw-1rem)] sm:w-72 max-w-72 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden">
                <div className="p-3 bg-slate-50 border-b border-slate-200">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">เลือกประเภทสหกรณ์</p>
                </div>
                <div className="max-h-[60vh] sm:max-h-96 overflow-y-auto">
                  {cooperativeTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => {
                        setCoopType(type.id);
                        setShowCoopSelector(false);
                        setExpandedCategories(["หน้าหลัก"]);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                        coopType === type.id ? 'bg-indigo-50' : ''
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${type.gradient} flex items-center justify-center flex-shrink-0`}>
                        <CoopTypeIcon name={type.icon} className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${coopType === type.id ? 'text-indigo-600' : 'text-slate-800'}`}>
                          {type.name}
                        </p>
                        <p className="text-xs text-slate-400 truncate">{type.description}</p>
                      </div>
                      {coopType === type.id && (
                        <svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Search - FlowAccount style */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-48 xl:w-72">
            <Icon name="search" className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="ค้นหาสมาชิก..."
              className="bg-transparent border-none text-slate-700 placeholder-slate-400 focus:outline-none ml-2 w-full text-sm"
            />
            <kbd className="hidden xl:inline-flex items-center px-2 py-0.5 text-xs text-slate-400 bg-slate-200 rounded">
              ⌘K
            </kbd>
          </div>

          {/* Mobile search button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
            <Icon name="search" className="w-5 h-5" />
          </button>

          {/* Quick Actions */}
          <button className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
            <Icon name="plus" className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors">
            <Icon name="bell" className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 pl-2 sm:pl-3 ml-1 sm:ml-2 border-l border-slate-200">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-500/30">
              สช
            </div>
            <div className="hidden xl:block text-right">
              <p className="text-sm font-medium text-slate-800">สมชาย ใจดี</p>
              <p className="text-xs text-slate-500">ผู้จัดการ</p>
            </div>
            <Icon name="chevron-down" className="w-4 h-4 text-slate-400 hidden sm:block" />
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* FlowAccount-style Sidebar - Clean white with indigo accents */}
      <aside
        className={`fixed left-0 top-14 sm:top-16 bottom-0 bg-white border-r border-slate-200 transition-all duration-300 z-40 overflow-hidden ${
          sidebarOpen ? "w-64 lg:w-60" : "w-0"
        }`}
      >
        <div className="h-full overflow-y-auto py-3">
          <nav className="px-2">
            {dynamicMenuItems.map((menu) => {
              const isExpanded = expandedCategories.includes(menu.category);
              const hasActiveItem = isActiveCategory(menu.items);

              return (
                <div key={menu.category} className="mb-1">
                  <button
                    onClick={() => toggleCategory(menu.category)}
                    className={`w-full px-3 py-2 flex items-center justify-between rounded-lg text-sm font-medium transition-colors ${
                      hasActiveItem
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{menu.category}</span>
                    <Icon
                      name="chevron-down"
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isExpanded ? "max-h-96 mt-1" : "max-h-0"
                    }`}
                  >
                    {menu.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center px-3 py-2 ml-2 rounded-lg text-sm transition-all ${
                            isActive
                              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <Icon
                            name={item.icon}
                            className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`}
                          />
                          <span className="ml-3">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-slate-50 border-t border-slate-100">
            <Link
              href="/"
              className="flex items-center justify-center px-4 py-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors"
            >
              <Icon name="arrow-left" className="w-4 h-4 mr-2" />
              กลับหน้าเว็บไซต์
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-14 sm:pt-16 min-h-screen transition-all duration-300 ${
          sidebarOpen && !isMobile ? "lg:ml-60" : "ml-0"
        }`}
      >
        <div className="p-3 sm:p-4 lg:p-6">{children}</div>
      </main>
    </div>
  );
}
