import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "About NextRunner",
    description: "It is NextRunner bus companies websites about page. It is an little introduction about the bus company.",
}
export default function About() {
    return (
        <main>
            <div className="flex flex-wrap items-center justify-center h-[80vh] gap-6">
                <div className="h-95 w-100 relative">
                    <Image src="https://images.pexels.com/photos/3608967/pexels-photo-3608967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="logo" fill={true} className="rounded-full drop-shadow-2xl drop-shadow-cyan-900 object-cover" />
                </div>
                <span className="flex flex-col gap-2 justify-center items-center">
                    <p className="text-gray-200 italic">Feel the comfort of jouney everywhere</p>
                    <h1 className="text-3xl font-bold justify-center flex-wrap items-baseline gap-2 flex">Enjoy the journey with <Link href={"/"} className="text-4xl text-cyan-600" style={{ fontFamily: 'var(--font-underdog)' }}>NextRunner</Link></h1>
                    <p className="text-gray-500 text-center">Being one of the most favaurite and trusted Chair-Coach among the people since 1999</p>
                </span>
            </div>
        </main>
    )
}
