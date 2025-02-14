"use client";
import Image from "next/image";
import { useSearchStore } from "@/store/search-store";

export default function Search() {
  const toggleSearch = useSearchStore((state) => state.toggleSearch);

  return <Image onClick={toggleSearch} className="max-lg:hidden cursor-pointer mb-2" src="/assets/images/search.png" alt="search" width={20} height={20} />;
}
