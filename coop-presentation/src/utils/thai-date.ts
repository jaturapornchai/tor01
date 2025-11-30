// Thai Buddhist Era Date Utilities

/**
 * Convert Christian Era year to Buddhist Era year
 * พ.ศ. = ค.ศ. + 543
 */
export function toBuddhistYear(ceYear: number): number {
  return ceYear + 543;
}

/**
 * Convert Buddhist Era year to Christian Era year
 * ค.ศ. = พ.ศ. - 543
 */
export function toChristianYear(beYear: number): number {
  return beYear - 543;
}

/**
 * Format date string (YYYY-MM-DD) to Thai format with Buddhist Era
 * Returns: "DD เดือน พ.ศ. YYYY"
 */
export function formatThaiDate(dateStr: string): string {
  if (!dateStr) return '';

  const [year, month, day] = dateStr.split('-').map(Number);
  if (!year || !month || !day) return dateStr;

  const thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
    'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
    'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  const beYear = toBuddhistYear(year);
  return `${day} ${thaiMonths[month - 1]} ${beYear}`;
}

/**
 * Format date string (YYYY-MM-DD) to short Thai format
 * Returns: "DD/MM/YYYY" with Buddhist Era year
 */
export function formatThaiDateShort(dateStr: string): string {
  if (!dateStr) return '';

  const [year, month, day] = dateStr.split('-').map(Number);
  if (!year || !month || !day) return dateStr;

  const beYear = toBuddhistYear(year);
  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${beYear}`;
}

/**
 * Parse Thai date string to ISO format (YYYY-MM-DD)
 * Input: "DD/MM/YYYY" with Buddhist Era year
 */
export function parseThaiDate(thaiDateStr: string): string {
  if (!thaiDateStr) return '';

  const [day, month, beYear] = thaiDateStr.split('/').map(Number);
  if (!day || !month || !beYear) return '';

  const ceYear = toChristianYear(beYear);
  return `${ceYear}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

/**
 * Get current year in Buddhist Era
 */
export function getCurrentBuddhistYear(): number {
  return toBuddhistYear(new Date().getFullYear());
}

/**
 * Generate array of Buddhist Era years for dropdown
 * @param startOffset - years before current year (default: 100)
 * @param endOffset - years after current year (default: 10)
 */
export function getBuddhistYearOptions(startOffset = 100, endOffset = 10): number[] {
  const currentBE = getCurrentBuddhistYear();
  const years: number[] = [];

  for (let year = currentBE + endOffset; year >= currentBE - startOffset; year--) {
    years.push(year);
  }

  return years;
}

/**
 * Get Thai month names
 */
export function getThaiMonths(): string[] {
  return [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
    'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
    'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];
}

/**
 * Get short Thai month names
 */
export function getThaiMonthsShort(): string[] {
  return [
    'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.',
    'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.',
    'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
  ];
}
