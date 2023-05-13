"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "./style.css";
import calendar from '../calendar/calendar.js'

const sidebarOptions = ["Timetable", "Task", "Analytics"];

export default function Dashboard() {
  const [currentPageDashBoard, setCurrentPageDashBoard] = useState("Timetable");
  const router = useRouter();

  const handleOnClick = (e) => {
    setCurrentPageDashBoard(e.target.value);
  };

  return (
    <div className="dashboard-container">
        <div className="sidebar">
            {sidebarOptions.map((option, index) => (
            <div className = "sidebar-button">
            <button key={index} value={option} onClick={handleOnClick}>
                {option}
            </button>
            </div>
            ))}
        </div>
      <div className="dashboard-content">
        {(() => {
          switch (currentPageDashBoard) {
            case "Timetable":
              return calendar();
            case "Task":
              return "Task";
            case "Analytics":
              return "Analytics";
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}
