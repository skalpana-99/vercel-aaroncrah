"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SingleValue } from "react-select";
import { Option } from "@/types/filters";
import { FilterItem } from "./FilterItem";
import { useBookStore } from "@/store/book-store";

const sortOptions: Option[] = [
  { value: "", label: "Date Added" },
  { value: "dateAdded-desc", label: "Date Added (Newest First)" },
  { value: "dateAdded-asc", label: "Date Added (Oldest First)" },
];

export function FilterControls() {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const setSortOrder = useBookStore((state) => state.setSortOrder);

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
      }
    }
  };

  return (
    <div className="w-full">
      <div className="md:hidden">
        <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="uppercase w-full flex items-center justify-center gap-3 px-4 py-[10px] text-[#161616] border font-light border-[#cccccc]" type="button">
          <Image src="/assets/images/sort-icon.svg" width="24" height="24" alt="sort-menu" />
          <span>Filter and sort</span>
        </button>

        {isFilterOpen && (
          <form className="mt-4 space-y-4 p-3 border rounded-md bg-white shadow-sm">
            <FilterItem label="Sort by" options={sortOptions} defaultValue={sortOptions[0]} onChange={handleSortChange} />
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
