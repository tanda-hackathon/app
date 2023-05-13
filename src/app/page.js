"use client";

import Navbar from "../../components/navbar";

import { useSelector } from "react-redux";


export default function Home() {
  const something = useSelector((state) => state.user.point);
  return (
    <div>
    </div>
  )
}
