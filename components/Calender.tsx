"use client";

import React, { useState } from "react";
import {
  addMonths,
  format,
  startOfMonth,
  endOfMonth,
  addDays,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isSameMonth,
  isWithinInterval,
} from "date-fns";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

type SelectedRange = {
  start: Date | null;
  end: Date | null;
};

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedRange, setSelectedRange] = useState<SelectedRange>({
    start: null,
    end: null,
  });

  const generateDays = (month: Date): Date[] => {
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
    setSelectedRange((prev) => {
      if (!prev.start || (prev.start && prev.end)) {
        return { start: day, end: null };
      } else {
        return day > prev.start
          ? { start: prev.start, end: day }
          : { start: day, end: null };
      }
    });
  };

  const handlePrevMonth = (): void => {
    setCurrentMonth((prev) => addMonths(prev, -1));
  };

  const handleNextMonth = (): void => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  const getDayClasses = (day: Date, month: Date): string => {
    let classes =
      "flex justify-center items-center rounded-full text-[15px] cursor-pointer transition-colors duration-150 w-8 h-8";

    if (!isSameMonth(day, month)) {
      classes += " text-gray-300";
    }

    if (selectedRange.start && !selectedRange.end) {
      if (isSameDay(day, selectedRange.start)) {
        classes += " bg-[#af805c] text-white font-semibold";
      }
    } else if (selectedRange.start && selectedRange.end) {
      if (
        isSameDay(day, selectedRange.start) ||
        isSameDay(day, selectedRange.end)
      ) {
        classes += " bg-[#af805c] text-white font-semibold";
      } else if (
        isWithinInterval(day, {
          start: selectedRange.start,
          end: selectedRange.end,
        })
      ) {
        classes += " bg-[#d0a88b] text-white";
      }
    }

    classes += " hover:bg-[#af805c] hover:text-white";

    return classes;
  };

  return (
    <div className="w-full flex justify-center p-4 bg-white shadow-md rounded-3xl mb-2 lg:-mb-3 mt-5">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="rounded-lg p-2">
          <div className="flex items-center justify-between py-2">
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              onClick={handlePrevMonth}
            >
              <SlArrowLeft className="text-[#474C59] text-[12px]" />
            </button>
            <div className="flex justify-center items-center">
              <span className="font-medium text-[16px] text-[#474C59]">
                {format(currentMonth, "MMMM yyyy")}
              </span>
            </div>
            <button
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              onClick={handleNextMonth}
            >
              <SlArrowRight className="text-[12px] text-[#474C59]" />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center mt-4">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((dayLabel) => (
              <div
                key={dayLabel}
                className="text-[12px] font-semibold text-[#836448]"
              >
                {dayLabel}
              </div>
            ))}
            {generateDays(currentMonth).map((day, index) => (
              <div
                key={index}
                className={getDayClasses(day, currentMonth)}
                onClick={() => handleDayClick(day)}
              >
                {format(day, "d")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
