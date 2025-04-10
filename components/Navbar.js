"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isActive = (path) => {
        if (!mounted) return false;
        // Handle root path specially
        if (path === "/") {
            return pathname === path;
        }
        // For other paths, check if the current path starts with the target path
        return pathname?.startsWith(path);
    };

    const linkStyle = (path) => {
        return `text-gray-200 hover:text-cyan-600 ${
            isActive(path) ? "border-b-2 border-cyan-600 shadow-[inset_0_-8px_8px_-3px_rgba(0,146,184,0.7)]" : ""
        }`;
    };

    return (
        <nav className="flex justify-between items-center p-4">
            <Link href={"/"} className="text-2xl font-bold">
                <Image src="/bus3.svg" alt="logo" width={60} height={60} className="dark:invert-90 hover:scale-105 hover:invert-50 hover:drop-shadow-cyan-900 transition-all duration-300" />
            </Link>
            <div className="flex gap-4">
                <Link href={"/about"} className={linkStyle("/about")}>About</Link>
                <Link href={"/notice"} className={linkStyle("/notice")}>Notice</Link>
                <Link href={"/contact"} className={linkStyle("/contact")}>Contact</Link>
                <Link href={"/register"} className={linkStyle("/register")}>Register</Link>
                <Link href={"/login"} className={linkStyle("/login")}>Login</Link>
            </div>
        </nav>
    )
}
