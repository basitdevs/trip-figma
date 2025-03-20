"use client";
import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";
import {
  addMonths,
  addDays,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  differenceInCalendarDays,
} from "date-fns";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

type SelectedRange = {
  start: Date | null;
  end: Date | null;
};

type CalendarProps = {};

const Calendar: React.FC<CalendarProps> = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedRange, setSelectedRange] = useState<SelectedRange>({
    start: null,
    end: null,
  });

  const daysInMonth = (month: Date): Date[] => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);

    const startDate = startOfWeek(start);
    const endDate = endOfWeek(end);

    const days: Date[] = [];
    let day = startDate;
    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  const handleDayClick = (day: Date): void => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: day, end: null });
    } else {
      let start = selectedRange.start;
      let end = day;
      if (day < start) {
        start = day;
        end = selectedRange.start;
      }
      const diff = differenceInCalendarDays(end, start);
      if (diff > 31) {
        end = addDays(start, 31);
      }
      setSelectedRange({ start, end });
    }
  };

  const handlePrevMonth = (): void => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const handleNextMonth = (): void => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const getDayStyles = (
    day: Date,
    month: Date,
    selectedRange: { start: Date | null; end: Date | null }
  ): React.CSSProperties => {
    let styles: React.CSSProperties = {
      padding: "12px",
      fontSize: "15px",
      cursor: "pointer",
      transition: "all 0.15s ease-in-out",
      textAlign: "center",
    };

    if (!isSameMonth(day, month)) {
      styles.color = "#D1D5DB";
    } else {
      const startDate = selectedRange.start
        ? new Date(selectedRange.start)
        : null;
      const endDate = selectedRange.end ? new Date(selectedRange.end) : null;

      if (startDate && !endDate) {
        if (isSameDay(day, startDate)) {
          styles.backgroundColor = "#af805c";
          styles.color = "white";
          styles.fontWeight = "bold";
          styles.borderRadius = "8px";
          styles.border = "3px solid #f3e2d8";
          styles.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        }
      } else if (startDate && endDate) {
        if (isSameDay(day, startDate)) {
          styles.backgroundColor = "#af805c";
          styles.color = "white";
          styles.fontWeight = "bold";
          styles.borderTopLeftRadius = "8px";
          styles.borderBottomLeftRadius = "8px";
          styles.border = "3px solid #f3e2d8";
          styles.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        } else if (isSameDay(day, endDate)) {
          styles.backgroundColor = "#af805c";
          styles.color = "white";
          styles.fontWeight = "bold";
          styles.borderTopRightRadius = "8px";
          styles.borderBottomRightRadius = "8px";
          styles.border = "3px solid #f3e2d8";
          styles.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        } else if (isWithinInterval(day, { start: startDate, end: endDate })) {
          styles.backgroundColor = "#f3e2d8";
          styles.color = "black";
        }
      }
    }

    return styles;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: easeInOut }}
      className="w-full flex justify-center p-4 bg-white shadow-md rounded-3xl mb-2 lg:-mb-3 mt-5"
    >
      <div className="w-full grid-cols-1 lg:grid-cols-2 gap-4 grid">
        <div className="rounded-lg p-2 ">
          <div className="flex items-center justify-between py-2">
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
              onClick={handlePrevMonth}
            >
              <SlArrowLeft className="text-[#474C59] text-[12px]" />
            </button>
            <div className="flex justify-center items-center">
              <select
                className="font-medium text-[16px] text-[#474C59] cursor-pointer bg-white border-none px-1 py-1 outline-none"
                value={format(currentMonth, "yyyy-MM")}
                onChange={(e) => {
                  const [year, month] = e.target.value.split("-").map(Number);
                  setCurrentMonth(new Date(year, month - 1, 1));
                }}
              >
                {Array.from({ length: 12 }, (_, i) => {
                  const newMonth = new Date(currentMonth.getFullYear(), i, 1);
                  return (
                    <option key={i} value={format(newMonth, "yyyy-MM")}>
                      {format(newMonth, "MMMM yyyy")}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              className="lg:hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
              onClick={handleNextMonth}
            >
              <SlArrowRight className="text-[12px] text-[#474C59]" />
            </button>
            <button className="hidden lg:block opacity-0"></button>
          </div>
          <div className="grid grid-cols-7 text-center mt-5">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div
                key={day}
                className="text-[12px] font-semibold text-[#836448]"
              >
                {day}
              </div>
            ))}
            {daysInMonth(currentMonth).map((day, index) => (
              <div
                key={index}
                style={getDayStyles(day, currentMonth, selectedRange)}
                onClick={() => handleDayClick(day)}
              >
                {format(day, "dd")}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg p-2 hidden lg:block">
          <div className="flex items-center justify-between py-2">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-white opacity-0" />
            <div className="flex justify-center items-center">
              <select
                className="font-medium text-[16px] text-[#474C59] cursor-pointer bg-white border-none px-1 py-1 outline-none"
                value={format(addMonths(currentMonth, 1), "yyyy-MM")}
                onChange={(e) => {
                  const [year, month] = e.target.value.split("-").map(Number);
                  setCurrentMonth(new Date(year, month - 1, 1));
                }}
              >
                {Array.from({ length: 12 }, (_, i) => {
                  const newMonth = new Date(currentMonth.getFullYear(), i, 1);
                  return (
                    <option key={i} value={format(newMonth, "yyyy-MM")}>
                      {format(newMonth, "MMMM yyyy")}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
              onClick={handleNextMonth}
            >
              <SlArrowRight className="text-[12px] text-[#474C59]" />
            </button>
          </div>
          <div className="grid grid-cols-7 text-center mt-5">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day: string) => (
              <div
                key={day}
                className="text-[12px] font-semibold text-[#836448]"
              >
                {day}
              </div>
            ))}
            {daysInMonth(addMonths(currentMonth, 1)).map(
              (day, index: number) => (
                <div
                  key={index}
                  style={getDayStyles(
                    day,
                    addMonths(currentMonth, 1),
                    selectedRange
                  )}
                  onClick={() => handleDayClick(day)}
                >
                  {format(day, "dd")}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Calendar;
