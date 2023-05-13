"use client";
import profile from './profile.jpeg';
import { useEffect } from "react";
import Logo from "./components/Logo";
import SignUp from "./components/Signup";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css"

const routeName = {
  "/": "Login",
  "/dashboard": "Dashboard",
  "/leaderboard": "Leaderboard",
};

export default function Navbar() {
    const router = useRouter()
    const CurrentPage = usePathname()
    const [pageName, setPageName] = useState()
    const userPoint = useSelector((state) => state.user.point);

    useEffect(() => {
        setPageName(routeName[CurrentPage])
    }, [CurrentPage])
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <Logo/>
                {`Current Page: ${pageName} | User Point: ${userPoint}`}
                <SignUp/>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
