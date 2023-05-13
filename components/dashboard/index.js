"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const sidebarOptions = [
    "Timetable", "Task", "Analytics"
]
export default function Dashboard(){
    const [currentPageDashBoard, setCurrentPageDashBoard] = useState("Timetable")
    const router = useRouter()

    const handleOnClick = (e) => {
        setCurrentPageDashBoard(e.target.value)
    }

    return(
        <div>
            {sidebarOptions.map((option, index) => {
                
            return(
                <button key={index} value={option} onClick={handleOnClick}>
                    {option}
                </button>
                )
            })}
            {(() => {
                switch(currentPageDashBoard) {
                    case "Timetable": return "Timetable";
                    case "Task": return "Task";
                    case "Analytics": return "Analytics";
                }
            })()}
        </div>
        
    )
}