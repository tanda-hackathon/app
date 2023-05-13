"use client";
import { useRouter } from "next/navigation";

export default function Tasks() {

    const router = useRouter()

    const handleOnClick = (e) => {
        e.preventDefault()
        router.push("/Tasks")
    }
    return(
        <button onClick={handleOnClick}>
            Tasks
        </button>
    )
}