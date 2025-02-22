"use client";
import { useEffect } from "react";
import { useBookStore } from "@/store/book-store";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

export function BooksPagination() {
  const { currentPage, setCurrentPage, filteredBooks, perPage } = useBookStore();
  const totalPages = Math.ceil(filteredBooks().length / perPage);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageNum = searchParams.get("page");

  useEffect(() => {
    setCurrentPage(parseInt(pageNum ? pageNum : "1", 10));
  }, [pageNum]);

  // Handle page clicks
  function handlePagination(pageNumber: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  }

  // Generate an array of pages based on the viewport
  function getPaginationPages() {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      let pageList: Array<string | number> = [];

      if (currentPage <= 4) {
        return [1, 2, 3, 4, 5, "ellipsis", totalPages];
      } else if (currentPage >= totalPages - 3) {
        pageList = [1, "ellipsis"];
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageList.push(i);
        }
        return pageList;
      } else {
        pageList = [1, "ellipsis"];
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageList.push(i);
        }
        pageList = [...pageList, "ellipsis", totalPages];
        return pageList;
      }
    }
  }

  const pages = getPaginationPages();

  if (totalPages === 1) {
    return <></>;
  }

  return (
    <div className="flex text-black gap-2 sm:gap-4 justify-center sm:leading-sm text-lg sm:text-24">
      <div onClick={() => handlePagination(currentPage - 1)} className={`${currentPage > 1 ? "" : "invisible"} w-full max-w-[60px] aspect-square flex bg-[#F2F2F2] cursor-pointer rotate-180 hover:bg-[#cdcdcd]`}>
        <Image src="/assets/images/rightarrow.svg" alt="arrow-right" width={9} height={18} className="m-auto" />
      </div>

      {pages.map((page, index) => {
        if (page === "ellipsis") {
          return (
            <div key={index} className="bg-[#F2F2F2] w-full max-w-[60px] aspect-square flex">
              <span className="m-auto">...</span>
            </div>
          );
        }
        // Otherwise, render a clickable page button
        return (
          <div key={index} onClick={() => handlePagination(page as number)} className={` bg-[#F2F2F2] w-full max-w-[60px] aspect-square flex cursor-pointer ${currentPage === page ? "bg-black text-white" : "hover:bg-[#cdcdcd]"}`}>
            <span className="m-auto">{page}</span>
          </div>
        );
      })}

      <div onClick={() => handlePagination(currentPage + 1)} className={`${currentPage < totalPages ? "" : "invisible"} w-full max-w-[60px] aspect-square flex bg-[#F2F2F2]  cursor-pointer hover:bg-[#cdcdcd]`}>
        <Image src="/assets/images/rightarrow.svg" alt="arrow-right" width={9} height={18} className="m-auto" />
      </div>
    </div>
  );
}
