'use client'
import Link from "next/link";
import { useRef, useState } from "react";

export const nav_links = [
  {title: 'Services', url: ''}, 
  {title: 'About', url: ''},
  {title: 'Legal', url: ''}
];

const nav_buttons = [
  {title: 'Free quote', url: ''}, 
  {title: 'Contact us', url: ''},
];

export default function Navbar() {
  const nav_menu = useRef(null);
  const toggleMenu = () => {
    if (nav_menu.current) nav_menu.current.classList.toggle('hidden');
  };
  
  return (
    <nav className="">
      <div className="p-4 grid bg-blue-950 w-full mx-auto grid-cols-2 gap-x-2 md:grid-cols-7">
        <div className="col-span-1 bg-white rounded-lg p-4"> </div>
        <div id="large-screen-nav" className="hidden md:col-span-3 pl-20 gap-x-8 md:flex items-center justify-center">
          {
            nav_links.map((link) => (
              <Link 
                key={link.title}
                href={link.url}
                className="text-white text-lg font-medium hover:scale-110 duration-300 hover:text-blue-600"
              >{link.title}</Link>
            ))
          }
        </div>

        <div className="hidden md:col-span-3 md:flex justify-end gap-2">
          {
            nav_buttons.map((button, index) => (
              <Link 
                key={button.title}
                href={button.url}
                className={`
                  px-3 py-2 text-black text-base font-medium
                  duration-300 text-blue-600 hover:scale-110
                  text-center w-2/5
                  ${
                    index == 0 ?
                     'rounded-full bg-white hover:bg-blue-200 text-blue-950'
                    : 'rounded-md bg-blue-200 text-blue-950 hover:bg-white'
                  }
                  
                `}
              >{button.title}</Link>
            ))
          }
        </div>

        <div className="col-span-1 justify-end items-center gap-y-1 flex md:hidden">
          <a onClick={toggleMenu} className="flex flex-col gap-y-2 hover:scale-110 duration-300 items-end">
            <div className="w-10 h-1 bg-white rounded-full"></div>
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-10 h-1 bg-white rounded-full"></div>
          </a>
        </div>
      </div>
      <div ref={nav_menu} className="hidden w-2/5 flex flex-col border bg-white p-2 absolute top-20 z-40 right-4 mt-1 rounded">
        {
          nav_links.map((link) => (
            <Link 
              key={link.title}
              href={link.url}
              className="text-black text-sm mb-2 font-medium hover:text-base duration-300 hover:text-blue-600"
            >{link.title}</Link>
          ))
        }

        <hr className="w-full mb-2 border" />

        <div className="flex flex-col gap-y-2">
          {
            nav_buttons.map((button) => (
              <Link 
                key={button.title}
                href={button.url}
                className="px-2 py-1 rounded-md text-black bg-blue-100 hover:bg-blue-200 text-sm font-medium hover:text-base duration-300 text-blue-600"
              >{button.title}</Link>
            ))
          }
        </div>
      </div>
    </nav>
  )
}