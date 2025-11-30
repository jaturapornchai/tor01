// ประเภทสหกรณ์ตามกฎหมายไทย 7 ประเภท
// อ้างอิง: พระราชบัญญัติสหกรณ์ พ.ศ. 2542 และที่แก้ไขเพิ่มเติม

export type CooperativeTypeId =
  | 'agricultural'    // สหกรณ์การเกษตร
  | 'fishery'         // สหกรณ์ประมง
  | 'settlement'      // สหกรณ์นิคม
  | 'consumer'        // สหกรณ์ร้านค้า
  | 'service'         // สหกรณ์บริการ
  | 'savings'         // สหกรณ์ออมทรัพย์
  | 'credit_union';   // สหกรณ์เครดิตยูเนี่ยน

export interface CooperativeModule {
  id: string;
  name: string;
  icon: string;
  description: string;
  path: string;
  subModules?: {
    name: string;
    path: string;
    icon: string;
  }[];
}

export interface CooperativeType {
  id: CooperativeTypeId;
  name: string;
  shortName: string;
  description: string;
  color: string;
  gradient: string;
  icon: string;
  // โมดูลหลักที่ทุกประเภทมี
  coreModules: string[];
  // โมดูลเฉพาะประเภท
  specificModules: CooperativeModule[];
  // ลักษณะพิเศษ
  characteristics: string[];
  // กฎระเบียบที่เกี่ยวข้อง
  regulations: string[];
}

// โมดูลหลักที่ทุกสหกรณ์ต้องมี
export const coreModules: CooperativeModule[] = [
  {
    id: 'members',
    name: 'ทะเบียนสมาชิก',
    icon: 'users',
    description: 'จัดการข้อมูลสมาชิก การรับสมัคร การลาออก',
    path: '/admin/members',
    subModules: [
      { name: 'รายชื่อสมาชิก', path: '/admin/members', icon: 'users' },
      { name: 'รับสมัครสมาชิก', path: '/admin/members/register', icon: 'user-plus' },
      { name: 'ลาออก/พ้นสภาพ', path: '/admin/members/resign', icon: 'user-x' },
    ]
  },
  {
    id: 'shares',
    name: 'ทุนเรือนหุ้น',
    icon: 'chart-pie',
    description: 'การซื้อหุ้น ขายหุ้น โอนหุ้น',
    path: '/admin/shares',
    subModules: [
      { name: 'ทะเบียนหุ้น', path: '/admin/shares', icon: 'chart-pie' },
      { name: 'ซื้อหุ้นเพิ่ม', path: '/admin/shares/buy', icon: 'plus-circle' },
      { name: 'ถอนหุ้น', path: '/admin/shares/withdraw', icon: 'minus-circle' },
    ]
  },
  {
    id: 'accounting',
    name: 'บัญชี-การเงิน',
    icon: 'calculator',
    description: 'ระบบบัญชี งบการเงิน รายรับ-รายจ่าย',
    path: '/admin/accounting/ledger',
    subModules: [
      { name: 'บัญชีแยกประเภท', path: '/admin/accounting/ledger', icon: 'book' },
      { name: 'งบทดลอง', path: '/admin/accounting/trial', icon: 'scale' },
      { name: 'งบการเงิน', path: '/admin/accounting/statements', icon: 'trending-up' },
    ]
  },
  {
    id: 'reports',
    name: 'รายงาน',
    icon: 'file-text',
    description: 'รายงานต่างๆ สถิติ Dashboard',
    path: '/admin/reports/members',
    subModules: [
      { name: 'รายงานสมาชิก', path: '/admin/reports/members', icon: 'users' },
      { name: 'รายงานการเงิน', path: '/admin/reports/financial', icon: 'dollar-sign' },
      { name: 'รายงาน กสส.', path: '/admin/reports/cpd', icon: 'government' },
    ]
  },
  {
    id: 'settings',
    name: 'ตั้งค่าระบบ',
    icon: 'settings',
    description: 'ตั้งค่าสหกรณ์ ผู้ใช้งาน สิทธิ์',
    path: '/admin/settings',
    subModules: [
      { name: 'ข้อมูลสหกรณ์', path: '/admin/settings', icon: 'building' },
    ]
  },
];

// สหกรณ์ทั้ง 7 ประเภท
export const cooperativeTypes: CooperativeType[] = [
  {
    id: 'agricultural',
    name: 'สหกรณ์การเกษตร',
    shortName: 'เกษตร',
    description: 'สหกรณ์ที่จัดตั้งขึ้นเพื่อส่งเสริมอาชีพทำกินของสมาชิกที่เป็นเกษตรกร',
    color: '#22c55e', // green-500
    gradient: 'from-green-500 to-emerald-600',
    icon: 'wheat',
    coreModules: ['members', 'shares', 'accounting', 'reports', 'settings'],
    specificModules: [
      {
        id: 'loans',
        name: 'สินเชื่อเกษตร',
        icon: 'banknote',
        description: 'สินเชื่อระยะสั้น กลาง ยาว สำหรับการเกษตร',
        path: '/admin/loans',
        subModules: [
          { name: 'สินเชื่อสามัญ', path: '/admin/loans/ordinary', icon: 'banknote' },
          { name: 'สินเชื่อฉุกเฉิน', path: '/admin/loans/emergency', icon: 'alert-circle' },
          { name: 'สินเชื่อพิเศษ', path: '/admin/loans/special', icon: 'star' },
        ]
      },
      {
        id: 'deposits',
        name: 'เงินฝาก',
        icon: 'wallet',
        description: 'เงินฝากออมทรัพย์ ฝากประจำ',
        path: '/admin/deposits',
        subModules: [
          { name: 'ฝากออมทรัพย์', path: '/admin/deposits/savings', icon: 'piggy-bank' },
          { name: 'ฝากประจำ', path: '/admin/deposits/fixed', icon: 'lock' },
        ]
      },
      {
        id: 'guarantors',
        name: 'ค้ำประกัน',
        icon: 'shield',
        description: 'จัดการผู้ค้ำประกัน วงเงินค้ำ',
        path: '/admin/guarantor/registry',
        subModules: [
          { name: 'ทะเบียนค้ำประกัน', path: '/admin/guarantor/registry', icon: 'users' },
          { name: 'วงเงินค้ำประกัน', path: '/admin/guarantor/limits', icon: 'credit-card' },
          { name: 'ประวัติการค้ำ', path: '/admin/guarantor/history', icon: 'history' },
        ]
      },
      {
        id: 'welfare',
        name: 'สวัสดิการ',
        icon: 'heart',
        description: 'สวัสดิการสมาชิก เงินช่วยเหลือ',
        path: '/admin/welfare/overview',
        subModules: [
          { name: 'ภาพรวมสวัสดิการ', path: '/admin/welfare/overview', icon: 'heart' },
          { name: 'สวัสดิการสมาชิก', path: '/admin/welfare/member', icon: 'gift' },
          { name: 'ทุนการศึกษา', path: '/admin/welfare/scholarship', icon: 'book-open' },
        ]
      },
    ],
    characteristics: [
      'สมาชิกส่วนใหญ่เป็นเกษตรกร',
      'ดำเนินธุรกิจเกี่ยวกับการเกษตรเป็นหลัก',
      'มีธุรกิจรวบรวมผลผลิตและจัดหาปัจจัยการผลิต',
      'อาจมีธุรกิจแปรรูปผลผลิตการเกษตร'
    ],
    regulations: [
      'พ.ร.บ. สหกรณ์ พ.ศ. 2542',
      'ระเบียบว่าด้วยการรับฝากเงิน',
      'ระเบียบว่าด้วยการให้สินเชื่อ',
      'ระเบียบว่าด้วยการรวบรวมผลผลิต'
    ]
  },
  {
    id: 'fishery',
    name: 'สหกรณ์ประมง',
    shortName: 'ประมง',
    description: 'สหกรณ์ที่จัดตั้งขึ้นเพื่อส่งเสริมอาชีพประมงของสมาชิก',
    color: '#0ea5e9', // sky-500
    gradient: 'from-sky-500 to-blue-600',
    icon: 'fish',
    coreModules: ['members', 'shares', 'accounting', 'reports', 'settings'],
    specificModules: [
      {
        id: 'loans',
        name: 'สินเชื่อประมง',
        icon: 'banknote',
        description: 'สินเชื่อเพื่อการประมง ซ่อมเรือ ซื้ออุปกรณ์',
        path: '/admin/loans',
        subModules: [
          { name: 'สินเชื่อสามัญ', path: '/admin/loans/ordinary', icon: 'banknote' },
          { name: 'สินเชื่อฉุกเฉิน', path: '/admin/loans/emergency', icon: 'alert-circle' },
          { name: 'สินเชื่อพิเศษ', path: '/admin/loans/special', icon: 'star' },
        ]
      },
      {
        id: 'deposits',
        name: 'เงินฝาก',
        icon: 'wallet',
        description: 'เงินฝากออมทรัพย์ ฝากประจำ',
        path: '/admin/deposits',
        subModules: [
          { name: 'ฝากออมทรัพย์', path: '/admin/deposits/savings', icon: 'piggy-bank' },
          { name: 'ฝากประจำ', path: '/admin/deposits/fixed', icon: 'lock' },
        ]
      },
      {
        id: 'guarantors',
        name: 'ค้ำประกัน',
        icon: 'shield',
        description: 'จัดการผู้ค้ำประกัน วงเงินค้ำ',
        path: '/admin/guarantor/registry',
        subModules: [
          { name: 'ทะเบียนค้ำประกัน', path: '/admin/guarantor/registry', icon: 'users' },
          { name: 'วงเงินค้ำประกัน', path: '/admin/guarantor/limits', icon: 'credit-card' },
          { name: 'ประวัติการค้ำ', path: '/admin/guarantor/history', icon: 'history' },
        ]
      },
      {
        id: 'welfare',
        name: 'สวัสดิการ',
        icon: 'heart',
        description: 'สวัสดิการสมาชิก เงินช่วยเหลือ',
        path: '/admin/welfare/overview',
        subModules: [
          { name: 'ภาพรวมสวัสดิการ', path: '/admin/welfare/overview', icon: 'heart' },
          { name: 'สวัสดิการสมาชิก', path: '/admin/welfare/member', icon: 'gift' },
          { name: 'ทุนการศึกษา', path: '/admin/welfare/scholarship', icon: 'book-open' },
        ]
      },
    ],
    characteristics: [
      'สมาชิกส่วนใหญ่เป็นชาวประมง',
      'ดำเนินธุรกิจเกี่ยวกับการประมงเป็นหลัก',
      'มีธุรกิจรวบรวมสัตว์น้ำและจัดหาเครื่องมือประมง',
      'อาจมีธุรกิจแปรรูปสัตว์น้ำ'
    ],
    regulations: [
      'พ.ร.บ. สหกรณ์ พ.ศ. 2542',
      'พ.ร.บ. การประมง พ.ศ. 2558',
      'ระเบียบว่าด้วยการให้สินเชื่อ',
      'ระเบียบว่าด้วยการรวบรวมสัตว์น้ำ'
    ]
  },
  {
    id: 'settlement',
    name: 'สหกรณ์นิคม',
    shortName: 'นิคม',
    description: 'สหกรณ์ที่จัดตั้งขึ้นในเขตนิคมสหกรณ์หรือเขตจัดรูปที่ดิน',
    color: '#f59e0b', // amber-500
    gradient: 'from-amber-500 to-orange-600',
    icon: 'home',
    coreModules: ['members', 'shares', 'accounting', 'reports', 'settings'],
    specificModules: [
      {
        id: 'loans',
        name: 'สินเชื่อนิคม',
        icon: 'banknote',
        description: 'สินเชื่อเพื่อที่อยู่อาศัยและประกอบอาชีพ',
        path: '/admin/loans',
        subModules: [
          { name: 'สินเชื่อที่อยู่อาศัย', path: '/admin/loans/housing', icon: 'home' },
          { name: 'สินเชื่อสามัญ', path: '/admin/loans/ordinary', icon: 'banknote' },
          { name: 'สินเชื่อฉุกเฉิน', path: '/admin/loans/emergency', icon: 'alert-circle' },
        ]
      },
      {
        id: 'deposits',
        name: 'เงินฝาก',
        icon: 'wallet',
        description: 'เงินฝากออมทรัพย์ ฝากประจำ',
        path: '/admin/deposits',
        subModules: [
          { name: 'ฝากออมทรัพย์', path: '/admin/deposits/savings', icon: 'piggy-bank' },
          { name: 'ฝากประจำ', path: '/admin/deposits/fixed', icon: 'lock' },
        ]
      },
      {
        id: 'guarantors',
        name: 'ค้ำประกัน',
        icon: 'shield',
        description: 'จัดการผู้ค้ำประกัน วงเงินค้ำ',
        path: '/admin/guarantor/registry',
        subModules: [
          { name: 'ทะเบียนค้ำประกัน', path: '/admin/guarantor/registry', icon: 'users' },
          { name: 'วงเงินค้ำประกัน', path: '/admin/guarantor/limits', icon: 'credit-card' },
          { name: 'ประวัติการค้ำ', path: '/admin/guarantor/history', icon: 'history' },
        ]
      },
      {
        id: 'welfare',
        name: 'สวัสดิการ',
        icon: 'heart',
        description: 'สวัสดิการสมาชิก เงินช่วยเหลือ',
        path: '/admin/welfare/overview',
        subModules: [
          { name: 'ภาพรวมสวัสดิการ', path: '/admin/welfare/overview', icon: 'heart' },
          { name: 'สวัสดิการสมาชิก', path: '/admin/welfare/member', icon: 'gift' },
          { name: 'ทุนการศึกษา', path: '/admin/welfare/scholarship', icon: 'book-open' },
        ]
      },
    ],
    characteristics: [
      'ตั้งอยู่ในเขตนิคมสหกรณ์',
      'ดำเนินการเกี่ยวกับที่ดินและที่อยู่อาศัย',
      'มีการจัดสรรที่ดินให้สมาชิก',
      'ส่งเสริมการประกอบอาชีพในนิคม'
    ],
    regulations: [
      'พ.ร.บ. สหกรณ์ พ.ศ. 2542',
      'พ.ร.บ. จัดที่ดินเพื่อการครองชีพ พ.ศ. 2511',
      'ระเบียบว่าด้วยการจัดสรรที่ดิน',
      'ระเบียบว่าด้วยสาธารณูปโภค'
    ]
  },
  {
    id: 'consumer',
    name: 'สหกรณ์ร้านค้า',
    shortName: 'ร้านค้า',
    description: 'สหกรณ์ที่จัดตั้งขึ้นเพื่อจัดหาสินค้าอุปโภคบริโภคมาจำหน่ายให้สมาชิก',
    color: '#ec4899', // pink-500
    gradient: 'from-pink-500 to-rose-600',
    icon: 'store',
    coreModules: ['members', 'shares', 'accounting', 'reports', 'settings'],
    specificModules: [
      {
        id: 'loans',
        name: 'สินเชื่อ',
        icon: 'banknote',
        description: 'สินเชื่อสำหรับสมาชิก',
        path: '/admin/loans',
        subModules: [
          { name: 'สินเชื่อสามัญ', path: '/admin/loans/ordinary', icon: 'banknote' },
          { name: 'สินเชื่อฉุกเฉิน', path: '/admin/loans/emergency', icon: 'alert-circle' },
        ]
      },
      {
        id: 'deposits',
        name: 'เงินฝาก',
        icon: 'wallet',
        description: 'เงินฝากออมทรัพย์ ฝากประจำ',
        path: '/admin/deposits',
        subModules: [
          { name: 'ฝากออมทรัพย์', path: '/admin/deposits/savings', icon: 'piggy-bank' },
          { name: 'ฝากประจำ', path: '/admin/deposits/fixed', icon: 'lock' },
        ]
      },
      {
        id: 'guarantors',
        name: 'ค้ำประกัน',
        icon: 'shield',
        description: 'จัดการผู้ค้ำประกัน วงเงินค้ำ',
        path: '/admin/guarantor/registry',
        subModules: [
          { name: 'ทะเบียนค้ำประกัน', path: '/admin/guarantor/registry', icon: 'users' },
          { name: 'วงเงินค้ำประกัน', path: '/admin/guarantor/limits', icon: 'credit-card' },
          { name: 'ประวัติการค้ำ', path: '/admin/guarantor/history', icon: 'history' },
        ]
      },
      {
        id: 'welfare',
        name: 'สวัสดิการ',
        icon: 'heart',
        description: 'สวัสดิการสมาชิก เงินช่วยเหลือ',
        path: '/admin/welfare/overview',
        subModules: [
          { name: 'ภาพรวมสวัสดิการ', path: '/admin/welfare/overview', icon: 'heart' },
          { name: 'สวัสดิการสมาชิก', path: '/admin/welfare/member', icon: 'gift' },
          { name: 'ทุนการศึกษา', path: '/admin/welfare/scholarship', icon: 'book-open' },
        ]
      },
    ],
    characteristics: [
      'จำหน่ายสินค้าอุปโภคบริโภค',
      'มีระบบ POS หน้าร้าน',
      'จ่ายเงินปันผลตามยอดซื้อ',
      'สมาชิกคือผู้บริโภค'
    ],
    regulations: [
      'พ.ร.บ. สหกรณ์ พ.ศ. 2542',
      'ระเบียบว่าด้วยการจัดหาสินค้ามาจำหน่าย',
      'ระเบียบว่าด้วยการจ่ายเงินปันผลตามส่วนธุรกิจ',
      'ระเบียบว่าด้วยการควบคุมสินค้า'
    ]
  },
  {
    id: 'service',
    name: 'สหกรณ์บริการ',
    shortName: 'บริการ',
    description: 'สหกรณ์ที่จัดตั้งขึ้นเพื่อให้บริการต่างๆ แก่สมาชิก เช่น รถแท็กซี่ รถโดยสาร',
    color: '#8b5cf6', // violet-500
    gradient: 'from-violet-500 to-purple-600',
    icon: 'headphones',
    coreModules: ['members', 'shares', 'accounting', 'reports', 'settings'],
    specificModules: [
      {
        id: 'loans',
        name: 'สินเชื่อบริการ',
        icon: 'banknote',
        description: 'สินเชื่อเพื่อประกอบอาชีพบริการ',
        path: '/admin/loans',
        subModules: [
          { name: 'สินเชื่อสามัญ', path: '/admin/loans/ordinary', icon: 'banknote' },
          { name: 'สินเชื่อพิเศษ', path: '/admin/loans/special', icon: 'star' },
          { name: 'สินเชื่อฉุกเฉิน', path: '/admin/loans/emergency', icon: 'alert-circle' },
        ]
      },
      {
        id: 'deposits',
        name: 'เงินฝาก',
        icon: 'wallet',
        description: 'เงินฝากออมทรัพย์ ฝากประจำ',
        path: '/admin/deposits',
        subModules: [
          { name: 'ฝากออมทรัพย์', path: '/admin/deposits/savings', icon: 'piggy-bank' },
          { name: 'ฝากประจำ', path: '/admin/deposits/fixed', icon: 'lock' },
        ]
      },
      {
        id: 'guarantors',
        name: 'ค้ำประกัน',
        icon: 'shield',
        description: 'จัดการผู้ค้ำประกัน วงเงินค้ำ',
        path: '/admin/guarantor/registry',
        subModules: [
          { name: 'ทะเบียนค้ำประกัน', path: '/admin/guarantor/registry', icon: 'users' },
          { name: 'วงเงินค้ำประกัน', path: '/admin/guarantor/limits', icon: 'credit-card' },
          { name: 'ประวัติการค้ำ', path: '/admin/guarantor/history', icon: 'history' },
        ]
      },
      {
        id: 'welfare',
        name: 'สวัสดิการสมาชิก',
        icon: 'heart',
        description: 'สวัสดิการต่างๆ เงินช่วยเหลือ',
        path: '/admin/welfare/overview',
        subModules: [
          { name: 'ภาพรวมสวัสดิการ', path: '/admin/welfare/overview', icon: 'heart' },
          { name: 'สวัสดิการสมาชิก', path: '/admin/welfare/member', icon: 'gift' },
          { name: 'ทุนการศึกษา', path: '/admin/welfare/scholarship', icon: 'book-open' },
        ]
      },
    ],
    characteristics: [
      'ให้บริการแก่สมาชิกเป็นหลัก',
      'ประเภทบริการหลากหลาย เช่น รถแท็กซี่ รถโดยสาร',
      'อาจมีสวัสดิการพิเศษสำหรับสมาชิก',
      'สมาชิกคือผู้ประกอบอาชีพบริการ'
    ],
    regulations: [
      'พ.ร.บ. สหกรณ์ พ.ศ. 2542',
      'ระเบียบว่าด้วยการให้บริการ',
      'ระเบียบว่าด้วยสวัสดิการสมาชิก',
      'กฎหมายว่าด้วยการขนส่ง (กรณีสหกรณ์รถ)'
    ]
  },
  {
    id: 'savings',
    name: 'สหกรณ์ออมทรัพย์',
    shortName: 'ออมทรัพย์',
    description: 'สหกรณ์ที่จัดตั้งขึ้นเพื่อส่งเสริมการออมและให้สินเชื่อแก่สมาชิก',
    color: '#6366f1', // indigo-500
    gradient: 'from-indigo-500 to-blue-600',
    icon: 'piggy-bank',
    coreModules: ['members', 'shares', 'accounting', 'reports', 'settings'],
    specificModules: [
      {
        id: 'loans',
        name: 'สินเชื่อ',
        icon: 'banknote',
        description: 'สินเชื่อสามัญ ฉุกเฉิน พิเศษ',
        path: '/admin/loans',
        subModules: [
          { name: 'สินเชื่อสามัญ', path: '/admin/loans/ordinary', icon: 'banknote' },
          { name: 'สินเชื่อฉุกเฉิน', path: '/admin/loans/emergency', icon: 'alert-circle' },
          { name: 'สินเชื่อพิเศษ', path: '/admin/loans/special', icon: 'star' },
          { name: 'สินเชื่อเพื่อที่อยู่อาศัย', path: '/admin/loans/housing', icon: 'home' },
        ]
      },
      {
        id: 'deposits',
        name: 'เงินฝาก',
        icon: 'wallet',
        description: 'เงินฝากออมทรัพย์ ฝากประจำ',
        path: '/admin/deposits',
        subModules: [
          { name: 'ฝากออมทรัพย์', path: '/admin/deposits/savings', icon: 'piggy-bank' },
          { name: 'ฝากประจำ', path: '/admin/deposits/fixed', icon: 'lock' },
          { name: 'ฝากทวีทรัพย์', path: '/admin/deposits/special', icon: 'trending-up' },
        ]
      },
      {
        id: 'guarantors',
        name: 'ค้ำประกัน',
        icon: 'shield',
        description: 'จัดการผู้ค้ำประกัน วงเงินค้ำ',
        path: '/admin/guarantor/registry',
        subModules: [
          { name: 'ทะเบียนค้ำประกัน', path: '/admin/guarantor/registry', icon: 'users' },
          { name: 'วงเงินค้ำประกัน', path: '/admin/guarantor/limits', icon: 'credit-card' },
          { name: 'ประวัติการค้ำ', path: '/admin/guarantor/history', icon: 'history' },
        ]
      },
      {
        id: 'welfare',
        name: 'สวัสดิการ',
        icon: 'heart',
        description: 'สวัสดิการสมาชิก เงินช่วยเหลือ',
        path: '/admin/welfare/overview',
        subModules: [
          { name: 'ภาพรวมสวัสดิการ', path: '/admin/welfare/overview', icon: 'heart' },
          { name: 'สวัสดิการสมาชิก', path: '/admin/welfare/member', icon: 'gift' },
          { name: 'ทุนการศึกษา', path: '/admin/welfare/scholarship', icon: 'book-open' },
        ]
      },
      {
        id: 'payroll',
        name: 'หักเงินเดือน',
        icon: 'file-spreadsheet',
        description: 'หักชำระเงินผ่านเงินเดือน',
        path: '/admin/payroll/setup',
        subModules: [
          { name: 'ตั้งค่าการหัก', path: '/admin/payroll/setup', icon: 'settings' },
          { name: 'ไฟล์หักเงิน', path: '/admin/payroll/files', icon: 'file' },
          { name: 'ตรวจสอบการหัก', path: '/admin/payroll/verify', icon: 'check-circle' },
        ]
      },
    ],
    characteristics: [
      'เน้นการออมเงินและให้สินเชื่อ',
      'สมาชิกมักเป็นพนักงานองค์กรเดียวกัน',
      'มีระบบหักเงินเดือนอัตโนมัติ',
      'มีสวัสดิการครบถ้วน'
    ],
    regulations: [
      'พ.ร.บ. สหกรณ์ พ.ศ. 2542',
      'ระเบียบนายทะเบียนสหกรณ์ว่าด้วยการรับฝากเงิน',
      'ระเบียบนายทะเบียนสหกรณ์ว่าด้วยการให้เงินกู้',
      'ระเบียบว่าด้วยการถือหุ้น'
    ]
  },
  {
    id: 'credit_union',
    name: 'สหกรณ์เครดิตยูเนี่ยน',
    shortName: 'เครดิตยูเนี่ยน',
    description: 'สหกรณ์ที่จัดตั้งขึ้นโดยกลุ่มคนในชุมชนเดียวกัน เพื่อส่งเสริมการออมและให้สินเชื่อ',
    color: '#14b8a6', // teal-500
    gradient: 'from-teal-500 to-cyan-600',
    icon: 'hand-coins',
    coreModules: ['members', 'shares', 'accounting', 'reports', 'settings'],
    specificModules: [
      {
        id: 'loans',
        name: 'สินเชื่อ',
        icon: 'banknote',
        description: 'สินเชื่อเพื่อการอุปโภคบริโภค',
        path: '/admin/loans',
        subModules: [
          { name: 'สินเชื่อสามัญ', path: '/admin/loans/ordinary', icon: 'banknote' },
          { name: 'สินเชื่อฉุกเฉิน', path: '/admin/loans/emergency', icon: 'alert-circle' },
          { name: 'สินเชื่อพิเศษ', path: '/admin/loans/special', icon: 'star' },
        ]
      },
      {
        id: 'deposits',
        name: 'เงินฝาก',
        icon: 'wallet',
        description: 'เงินฝากออมทรัพย์ ฝากประจำ',
        path: '/admin/deposits',
        subModules: [
          { name: 'ฝากออมทรัพย์', path: '/admin/deposits/savings', icon: 'piggy-bank' },
          { name: 'ฝากประจำ', path: '/admin/deposits/fixed', icon: 'lock' },
        ]
      },
      {
        id: 'guarantors',
        name: 'ค้ำประกัน',
        icon: 'shield',
        description: 'จัดการผู้ค้ำประกัน',
        path: '/admin/guarantor/registry',
        subModules: [
          { name: 'ทะเบียนค้ำประกัน', path: '/admin/guarantor/registry', icon: 'users' },
          { name: 'วงเงินค้ำประกัน', path: '/admin/guarantor/limits', icon: 'credit-card' },
        ]
      },
      {
        id: 'welfare',
        name: 'สวัสดิการ',
        icon: 'heart',
        description: 'สวัสดิการชุมชน',
        path: '/admin/welfare/overview',
        subModules: [
          { name: 'ภาพรวมสวัสดิการ', path: '/admin/welfare/overview', icon: 'heart' },
          { name: 'สวัสดิการสมาชิก', path: '/admin/welfare/member', icon: 'gift' },
        ]
      },
      {
        id: 'payroll',
        name: 'หักเงินเดือน',
        icon: 'file-spreadsheet',
        description: 'หักชำระเงินผ่านเงินเดือน',
        path: '/admin/payroll/setup',
        subModules: [
          { name: 'ตั้งค่าการหัก', path: '/admin/payroll/setup', icon: 'settings' },
          { name: 'ไฟล์หักเงิน', path: '/admin/payroll/files', icon: 'file' },
          { name: 'ตรวจสอบการหัก', path: '/admin/payroll/verify', icon: 'check-circle' },
        ]
      },
    ],
    characteristics: [
      'สมาชิกมาจากชุมชนเดียวกัน',
      'เน้นความสัมพันธ์และความไว้วางใจในชุมชน',
      'มีกิจกรรมชุมชนเป็นตัวเชื่อม',
      'ระบบค้ำประกันอาจยืดหยุ่นกว่า'
    ],
    regulations: [
      'พ.ร.บ. สหกรณ์ พ.ศ. 2542',
      'ระเบียบว่าด้วยการรับฝากเงิน',
      'ระเบียบว่าด้วยการให้เงินกู้',
      'ระเบียบว่าด้วยกองทุนสวัสดิการชุมชน'
    ]
  },
];

// Helper functions
export const getCooperativeType = (id: CooperativeTypeId): CooperativeType | undefined => {
  return cooperativeTypes.find(type => type.id === id);
};

export const getCooperativeModules = (typeId: CooperativeTypeId): CooperativeModule[] => {
  const coopType = getCooperativeType(typeId);
  if (!coopType) return coreModules;

  // รวม core modules กับ specific modules
  return [...coreModules.slice(0, 2), ...coopType.specificModules, ...coreModules.slice(2)];
};

export const getAllModulesForType = (typeId: CooperativeTypeId) => {
  const coopType = getCooperativeType(typeId);
  if (!coopType) return { coreModules, specificModules: [] };

  return {
    coreModules,
    specificModules: coopType.specificModules,
  };
};
