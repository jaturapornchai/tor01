"use client";

import { useState, useEffect, useMemo } from "react";
import {
  toBuddhistYear,
  toChristianYear,
  getThaiMonths,
  getBuddhistYearOptions,
} from "@/utils/thai-date";

interface ThaiDatePickerProps {
  value: string; // ISO format: YYYY-MM-DD
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  minYear?: number; // Buddhist Era
  maxYear?: number; // Buddhist Era
}

export default function ThaiDatePicker({
  value,
  onChange,
  label,
  required,
  disabled,
  className = "",
  minYear,
  maxYear,
}: ThaiDatePickerProps) {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const thaiMonths = getThaiMonths();

  // Parse value when it changes
  useEffect(() => {
    if (value) {
      const [y, m, d] = value.split("-");
      if (y && m && d) {
        setDay(parseInt(d).toString());
        setMonth(parseInt(m).toString());
        setYear(toBuddhistYear(parseInt(y)).toString());
      }
    } else {
      setDay("");
      setMonth("");
      setYear("");
    }
  }, [value]);

  // Generate year options
  const yearOptions = useMemo(() => {
    const currentBE = toBuddhistYear(new Date().getFullYear());
    const min = minYear || currentBE - 100;
    const max = maxYear || currentBE + 10;
    const years: number[] = [];
    for (let y = max; y >= min; y--) {
      years.push(y);
    }
    return years;
  }, [minYear, maxYear]);

  // Generate day options based on month and year
  const dayOptions = useMemo(() => {
    const days: number[] = [];
    let maxDay = 31;

    if (month) {
      const m = parseInt(month);
      if ([4, 6, 9, 11].includes(m)) {
        maxDay = 30;
      } else if (m === 2) {
        if (year) {
          const ceYear = toChristianYear(parseInt(year));
          const isLeap = (ceYear % 4 === 0 && ceYear % 100 !== 0) || ceYear % 400 === 0;
          maxDay = isLeap ? 29 : 28;
        } else {
          maxDay = 29;
        }
      }
    }

    for (let d = 1; d <= maxDay; d++) {
      days.push(d);
    }
    return days;
  }, [month, year]);

  // Update value when components change
  const handleChange = (newDay: string, newMonth: string, newYear: string) => {
    if (newDay && newMonth && newYear) {
      const ceYear = toChristianYear(parseInt(newYear));
      const isoDate = `${ceYear}-${newMonth.padStart(2, "0")}-${newDay.padStart(2, "0")}`;
      onChange(isoDate);
    } else if (!newDay && !newMonth && !newYear) {
      onChange("");
    }
  };

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex gap-2">
        {/* Day */}
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
            handleChange(e.target.value, month, year);
          }}
          disabled={disabled}
          className="w-20 px-2 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100"
        >
          <option value="">วัน</option>
          {dayOptions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Month */}
        <select
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
            handleChange(day, e.target.value, year);
          }}
          disabled={disabled}
          className="flex-1 px-2 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100"
        >
          <option value="">เดือน</option>
          {thaiMonths.map((m, i) => (
            <option key={i} value={i + 1}>
              {m}
            </option>
          ))}
        </select>

        {/* Year (Buddhist Era) */}
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            handleChange(day, month, e.target.value);
          }}
          disabled={disabled}
          className="w-24 px-2 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-100"
        >
          <option value="">พ.ศ.</option>
          {yearOptions.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
