"use client";
import { useState, useEffect } from "react";
import { useBookStore } from "@/store/book-store";
import Image from "next/image";

export function BooksPagination() {
  const { currentPage, setCurrentPage, filteredBooks, perPage } = useBookStore();
  const totalPages = Math.ceil(filteredBooks().length / perPage);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle page clicks
  function handlePagination(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  // Generate an array of pages based on the viewport
  function getPaginationPages() {
    if (!isMobile) {
      // Desktop: show all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    // if more than 3 pages, show ... in the middle
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      return [1, 2, "ellipsis", totalPages];
    }
  }

  const pages = getPaginationPages();

  return (
    <div className="flex text-black gap-4 justify-center leading-sm text-24">
      {pages.map((page, index) => {
        // For the mobile (...) placeholder
        if (page === "ellipsis") {
          return (
            <div key={index} className="bg-[#F2F2F2] min-w-[60px] min-h-[60px] flex justify-center items-center">
              ...
            </div>
          );
        }
        // Otherwise, render a clickable page button
        return (
          <div key={index} onClick={() => handlePagination(page as number)} className={`bg-[#F2F2F2] min-w-[52px] min-h-[52px] md:min-w-[60px] md:min-h-[60px] flex justify-center items-center cursor-pointer ${currentPage === page ? "bg-black text-white" : ""}`}>
            {page}
          </div>
        );
      })}

      {totalPages !== 0 && (
        <div className="bg-[#F2F2F2] min-w-[60px] min-h-[60px] flex justify-center items-center cursor-pointer">
          <Image src="/assets/images/rightarrow.svg" alt="arrow-right" width={9} height={18} />
        </div>
      )}
    </div>
  );
}
