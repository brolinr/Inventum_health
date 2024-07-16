'use client'
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

export const nav_links = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Services', url: '/services' },
];

const nav_buttons = [
  { title: 'Free quote', url: '/#book-quote' },
  { title: 'Contact us', url: '/contact' },
];

export default function Navbar() {
  const nav_menu = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="p-4 grid bg-[#3E4095] w-full mx-auto grid-cols-2 gap-x-2 md:grid-cols-10">
        <div className="col-span-1 md:col-span-3 rounded-lg ">
          <Link className="text-indigo-500" href="/">
            <Image
              src='/inventum.png' width={150} height={125}
              className="rounded bg-white duration-300 hover:scale-95"
              alt='inventum Logo'
              title='Logo'
            />
          </Link>
        </div>
        <div id="large-screen-nav" className="hidden md:col-span-4 gap-x-8 md:flex items-center justify-center">
          {nav_links.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="text-white text-lg font-medium hover:scale-110 duration-300 hover:text-blue-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:col-span-3 md:flex justify-end gap-2">
          {nav_buttons.map((button, index) => (
            <Link
              key={button.title}
              href={button.url}
              className={
                `py-1 text-black text-base font-medium duration-300 text-blue-600 
                hover:scale-110 w-2/5 flex items-center justify-center 
                ${ 
                  index === 0 ? 'rounded-full bg-white hover:bg-blue-200 text-blue-950' :
                    'rounded-md bg-blue-200 text-blue-950 hover:bg-white'
                }`
              }
              >
                {button.title}
            </Link>
          ))}
        </div>
        <div className="col-span-1 justify-end items-center gap-y-1 flex md:hidden">
          <button onClick={toggleMenu} className="flex flex-col gap-y-2 hover:scale-110 duration-300 items-end">
            <div className="w-10 h-1 bg-white rounded-full"></div>
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-10 h-1 bg-white rounded-full"></div>
          </button>
        </div>
      </div>
      <div ref={nav_menu} className={`absolute top-20 right-4 mt-1 w-2/5 flex flex-col border bg-white p-2 z-40 rounded ${isMenuOpen ? '' : 'hidden'}`}>
        {nav_links.map((link) => (
          <Link 
            key={link.title}
            href={link.url}
            className="text-black text-sm mb-2 font-medium hover:text-base duration-300 hover:text-blue-600"
          >
            {link.title}
          </Link>
        ))}
        <hr className="w-full mb-2 border" />
        <div className="flex flex-col gap-y-2">
          {nav_buttons.map((button) => (
            <Link
              key={button.title}
              href={button.url}
              className="
                px-2 py-1 rounded-md text-black bg-blue-100 hover:bg-blue-200 text-sm font-medium
                hover:text-base duration-300 text-blue-600
              "
            >
              {button.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
