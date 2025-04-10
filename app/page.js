import Image from "next/image";
import "./styles/style.css";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center sticky top-0 -z-1 h-[70vh]">
        <h3 className="text-2xl font-bold">Welcome to</h3>
        <svg viewBox="0 0 200 140" className="w-full sm:h-2/7 h-1/6">
          <text x="50%" y="50%" textAnchor="middle" className="txt">
            NextRunner
          </text>
        </svg>
        <p className="text-gray-500">Enjoy your best journey with us.</p>
      </div>
    </main>
  );
}
