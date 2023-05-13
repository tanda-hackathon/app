"use client";

import { useEffect } from "react";
import Logo from "./components/Logo"
import SignUp from "./components/Signup"
import { useRouter, usePathname } from 'next/navigation'
import { useState } from "react";

const routeName = {
    "/": "Login",
    "/dashboard": "Dashboard",
    "/leaderboard": "Leaderboard",
}

export default function Navbar() {
    const router = useRouter()
    const CurrentPage = usePathname()
    const [pageName, setPageName] = useState()

    useEffect(() => {
        setPageName(routeName[CurrentPage])
    }, [CurrentPage])
    return(
        <div>
            <Logo/>
            {`Current Page: ${pageName}`}
            <SignUp/>
        </div>
    )
}