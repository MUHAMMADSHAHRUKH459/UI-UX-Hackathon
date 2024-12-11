import { GiSofa } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu,  } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full text-white">
      {/* First Section */}
      <div className="bg-purple-950 text-slate-300 py-2 text-xs sm:text-sm px-4 md:px-16 lg:px-28 flex justify-between items-center">
        <p>✔ Free Shipping On All Orders $50+</p>
        <ul className="flex gap-4 sm:gap-6">
          <li>Eng</li>
          <Link href="./Faq">Faqs</Link>
          <li>Need Help</li>
        </ul>
      </div>

      {/* Second Section */}
      <div className="bg-slate-50 text-black py-3 px-4 md:px-16 lg:px-28 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <GiSofa className="text-emerald-500 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
            Comforty
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
          <span>Cart</span>
          <span className="rounded-full text-white bg-emerald-600 px-2 py-1 text-xs">
            2
          </span>
        </div>
        {/* Mobile Menu Toggle */}
        <label htmlFor="menu-toggle" className="block md:hidden cursor-pointer">
          <HiMenu className="h-6 w-6 text-black" />
        </label>
      </div>

      {/* Third Section */}
      <input
        type="checkbox"
        id="menu-toggle"
        className="peer hidden"
      />
      <nav
        className="peer-checked:flex hidden md:flex flex-col md:flex-row justify-between items-center bg-white px-4 md:px-16 lg:px-28 py-4"
      >
        <ul className="flex flex-col md:flex-row gap-4 text-xs sm:text-sm md:text-base text-black">
          <Link href="#">Home</Link>
          <Link href="./Card">Shop</Link>
          <Link href="./Product">Product</Link>
          <Link href="./About">About</Link>
          <Link href="./Contact">Contact</Link>
        </ul>
        <h1 className="text-xs sm:text-sm md:text-base text-black mt-4 md:mt-0">
          Contact: +92-3205421692
        </h1>
      </nav>
    </header>
  );
}