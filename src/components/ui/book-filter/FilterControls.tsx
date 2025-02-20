"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SingleValue } from "react-select";
import { Option } from "@/types/filters";
import { FilterItem } from "./FilterItem";
import { useBookStore } from "@/store/book-store";
import { useMemo } from "react";
import { getFormatsWithCount } from "@/utils/helpers";
import { useRouter, useSearchParams } from "next/navigation";

const sortOptions: Option[] = [
  { value: "", label: "Date Added" },
  { value: "dateAdded-desc", label: "Date Added (Newest First)" },
  { value: "dateAdded-asc", label: "Date Added (Oldest First)" },
];

const formatOptions: Option[] = [
  { value: "all", label: "All books" },
  { value: "PRINT_BOOK_PAPER_BACK", label: "Paperbacks" },
  { value: "EBOOK", label: "Ebooks" },
  { value: "AUDIOBOOK", label: "Audio books" },
];

export function FilterControls() {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [activeFormat, setActiveFormat] = useState("all");

  const filteredBooks = useBookStore((state) => state.filteredBooks());
  const { books, setFormat, setSortOrder, searchQuery } = useBookStore();

  const searchParams = useSearchParams();
  // const format = searchParams.get("format");
  const router = useRouter();
  const searchParam = searchParams.get("search");
  const searchQry = searchParam ? `&search=${searchParam}` : '';

  // useEffect(() => {
  //   if (format) {
  //     const bookFormat: string = format === 'ALL' ? 'all' : format;
  //     const formatUpper = format.toUpperCase();
  //     const bookFormat: string = formatUpper === 'ALL' ? 'all' : formatUpper;
  //     // setFormat(bookFormat);
  //     // setActiveFormat(bookFormat);
  //     // setIsOpen(false);
  //   }
  // }, [format]);

  // let formats;
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



  const activeLabel = formats.find((f) => f.id === activeFormat)?.label;

  //======== this is done to fix hydration errors ========
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  //=======================

  const handleSortChange = (newValue: SingleValue<Option>) => {
    if (newValue?.value) {
      const [sortBy, order] = newValue.value.split("-");
      if (sortBy === "dateAdded" && (order === "asc" || order === "desc")) {
        setSortOrder(order as "asc" | "desc"); // Update the sort order in the store
        setIsFilterOpen(false);
      }
    }
  };

  const handleFormatChange = (newValue: SingleValue<Option>) => {
    // Update the format filter in the store
    const format = newValue?.value || "all";
    // setActiveFormat(format);
    // setFormat(format);
    setIsFilterOpen(false);
    // router.push(`?format=${format}`, { scroll: false });
    router.push(`?format=${format.toLowerCase()}${searchQry}`, { scroll: false });
  };

  return (
    <div className="w-full">
      <div className="flex mb-1 justify-between items-center md:hidden">
        <p className="uppercase font-light">{activeLabel}</p>
        <p className="uppercase font-light">{formats.find((f) => f.id === activeFormat)?.count} books</p>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="uppercase w-full flex items-center justify-center gap-3 px-4 py-[10px] text-[#161616] border font-light border-[#cccccc]" type="button">
          <Image src="/assets/images/sort-icon.svg" width="24" height="24" alt="sort-menu" />
          <span>Filter and sort</span>
        </button>

        {isFilterOpen && (
          <form className="mt-4 space-y-4 p-3 border rounded-md bg-white shadow-sm absolute w-full z-10">
            <FilterItem label="Sort by" options={sortOptions} defaultValue={sortOptions[0]} onChange={handleSortChange} />
            <FilterItem label="Format" options={formatOptions} defaultValue={formatOptions[0]} onChange={handleFormatChange} />
          </form>
        )}
      </div>
      <form className="hidden md:flex justify-between" action="#">
        <FilterItem label="Sort by" options={sortOptions} defaultValue={sortOptions[0]} onChange={handleSortChange} />
      </form>
    </div>
  );
}

export default FilterControls;
