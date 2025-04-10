import Link from "next/link";
import Image from "next/image";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata = {
    title: "Contact NextRunner",
    description: "It is NextRunner bus companies websites contact page. It is an little introduction about the bus company.",
}

export default function Contact() {
    return (
        <main className="flex flex-col justify-center items-center min-h-[80vh]">
            <div className="flex flex-wrap justify-around w-3/5 m-auto md:p-6 items-center">
                <div className="relative w-60 h-60">
                    <Image src="https://images.pexels.com/photos/2942172/pexels-photo-2942172.jpeg" alt="Contact" fill={true} className="rounded-full drop-shadow-lg drop-shadow-cyan-600 object-cover" />
                </div>
                <div className="flex flex-col justify-center gap-2 items-center">
                    <h1 className="text-4xl p-2 font-bold text-nowrap text-center"><u>Contact Us</u></h1>
                    <ul className="list-disc">
                        <li>Our Hotline Number: 0123456789</li>
                        <li>Our Email: nextrunner@gmail.com</li>
                        <li>Our Address: 123 Main St, Anytown, USA</li>
                    </ul>
                </div>
            </div>
            <FeedbackForm />
        </main>
    )
}

