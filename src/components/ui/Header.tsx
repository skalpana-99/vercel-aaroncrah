"use client";

import Image from "next/image";
import { useState } from "react";
import Search from "./Search";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Header({ isHome }: { isHome?: boolean }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleDropdown = (itemId: any) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <header className={`z-10 relative ${isHome && "mb-[-90px]"} bg-transparent`}>
      <div className="container xl:px-0 px-[24px]">
        <div className="flex justify-between items-center relative h-[80px] lg:h-[90px] border-b-[1px] border-b-[#ffffff29] border-solid">
          <div className={`${openMobileMenu ? "scale-y-100 h-auto" : "scale-y-0"} scale-y-0 transition-scale duration-200 origin-top lg:hidden top-[65px] absolute w-full  overflow-hidden  bg-slate-100 rounded `}>
            <ul className="lg:flex gap-8 text-white lg:ml-[50px] xl:ml-[100px] p-4">
              {siteConfig.navigation.map((item: any) => (
                <li key={item.id} className="relative text-black mb-3 uppercase">
                  {item.submenu ? (
                    <>
                      <p onClick={() => toggleDropdown(item.id)} className="cursor-pointer relative">
                        {item.label}
                        <Image className={`${openDropdown === item.id ? "rotate-180" : ""} -translate-y-1/2 invert transition-rotate duration-300 absolute top-1/2 right-0`} src="/assets/images/dropdown.png" alt="dropdown-icon" width={15} height={7} />
                      </p>
                      <div className={`transition-scale origin-top duration-300 overflow-hidden ${openDropdown === item.id ? "scale-y-100 h-auto py-2" : "scale-y-0 h-0"}`}>
                        <ul className="text-[#bbbbbb] flex flex-col gap-2 px-2">
                          {item.submenu.map((subitem: any) => (
                            <li className="text-black" key={subitem.id}>
                              <a className="w-full block font-normal uppercase" href={subitem.path}>
                                {subitem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a className="font-normal uppercase" href={item.path}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center ">
            <Link href="/">
              <Image className="max-sm:max-w-[160px]" src="/assets/images/logo.png" alt="Logo" width={174} height={32} />
            </Link>

            <ul className="text-[18px] pt-2 hidden lg:flex gap-8 text-[#bbbbbb] lg:ml-[50px] xl:ml-[100px]">
              {siteConfig.navigation.map((item: any) => (
                <li key={item.id} className={`relative ${item.submenu ? "group" : ""}`}>
                  {item.submenu ? (
                    <>
                      <a className="flex gap-2 font-normal items-center uppercase" href="/">
                        {item.label}
                        <Image src={`/assets/images/dropdown.png`} alt="dropdown-icon" width={15} height={7} />
                      </a>
                      <div className="pt-2">
                        <div className="hidden bg-white group-hover:block min-w-[200px] absolute rounded">
                          <ul className="text-black flex flex-col gap-2 p-4">
                            {item.submenu.map((subitem: any) => (
                              <li className="whitespace-nowrap" key={subitem.id}>
                                <a className="uppercase font-normal" href={subitem.path}>
                                  {subitem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <a className="uppercase font-normal" href={item.path}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-6 items-center">
            <div className="relative flex items-center justify-center lg:hidden cursor-pointer bg-menuBackground  w-[32px] h-[32px] z-10">
              <Image onClick={toggleMobileMenu} src="/assets/images/hummenu.svg" alt="menu" width={15} height={14} />
            </div>
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}
