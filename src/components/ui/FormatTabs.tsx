"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { useBookStore } from "@/store/book-store";
import { getFormatsWithCount } from "@/utils/helpers";
import { MergedBook } from "@/types/books";
import { useRouter, useSearchParams } from "next/navigation";

export default function FormatTabs({ books }: { books: MergedBook[] }) {
  const { setFormat } = useBookStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const format = searchParams.get("format");
  const [isOpen, setIsOpen] = useState(false);
  const [activeFormat, setActiveFormat] = useState("all");
  const searchQuery = useBookStore((state) => state.searchQuery);
  const filteredBooks = useBookStore((state) => state.filteredBooks());
  // let formats;
  const searchParam = searchParams.get("search");
  const searchQry = searchParam ? `&search=${searchParam}` : "";

  useEffect(() => {
    if (format) {
      const formatUpper = format.toUpperCase();
      const bookFormat: string = formatUpper === "ALL" ? "all" : formatUpper;
      setFormat(bookFormat);
      setActiveFormat(bookFormat);
      setIsOpen(false);
    }
  }, [format]);

  const handleFormatChange = (formatId: string) => {
    router.push(`?format=${formatId.toLowerCase()}${searchQry}`, { scroll: false });
  };

  // if (searchQuery) {
  //   formats = useMemo(() => getFormatsWithCount(filteredBooks), [searchQuery]);
  // } else {
  //   formats = useMemo(() => getFormatsWithCount(books), [books]);
  // }

  const formats = useMemo(() => {
    // console.log(filteredBooks);
    if (searchParam) {
      return getFormatsWithCount(books, searchParam);
    } else {
      return getFormatsWithCount(books);
    }
  }, [searchParam, books]);

  // console.log(books);

  const activeLabel = formats.find((f) => f.id === activeFormat)?.label;

  return (
    <div className="max-w-[677px] mx-auto">
      <div className="hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full px-4 py-2 bg-[#F2F2F2] border-[1px] border-[#C2C2C2] ">
          <div className="flex items-center gap-2">
            <Image className="invert" src="/assets/images/tab-menu.svg" width="20" height="20" alt="category-menu" />
            <span className="font-light uppercase text-[16px]">{activeLabel}</span>
          </div>
          <span className="font-light uppercase text-[#6e6e6e]">{formats.find((f) => f.id === activeFormat)?.count} books</span>
        </button>

        {isOpen && (
          <div className="mt-2 p-2 bg-white border border-[#C2C2C2] rounded-md shadow-sm absolute w-full z-10">
            {formats.map((format) => (
              <button
                key={format.id}
                onClick={() => handleFormatChange(format.id)}
                className={`w-full text-left px-4 py-3 rounded-[8px] transition-colors
                  ${format.id === activeFormat ? "bg-[#161616] text-white" : "text-[#6e6e6e] hover:bg-[#F2F2F2]"}`}
              >
                <div className="flex items-center justify-between font-light uppercase">
                  <span>{format.label} </span>
                  <span>({format.count})</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:block">
        <div className="flex gap-xsm justify-center">
          {formats.map((format) => (
            <button key={format.id} onClick={() => handleFormatChange(format.id)} className={`text-[24px] leading-[40px] font-light pb-[12px] uppercase  ${format.id === activeFormat ? "border-b-2 border-black text-black" : "text-[#999999]"}`}>
              {format.label} [{format.count}]
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
