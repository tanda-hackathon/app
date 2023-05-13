"use client";

import Navbar from "../../components/navbar";
import '../../data/images/Landinglottie'
import Landinglottie from '../../data/images/Animation.mp4';

export default function Home() {
  const something = useSelector((state) => state.user.point);
  return (
    <div>
        <Navbar/>

    </div>
  )
}
