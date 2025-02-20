"use client";
import Heading from "./Heading";
import { useBookStore } from "@/store/book-store";
import { MergedBook } from "@/types/books";
import BookCard from "./BookCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
// import { truncateString } from "@/utils/helpers";
import Image from "next/image";

export function BookGrid() {
  const paginatedBooks = useBookStore((state) => state.paginatedBooks());
  const searchQuery = useBookStore((state) => state.searchQuery);
  const setSearchQuery = useBookStore((state) => state.setSearchQuery);
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  useEffect(() => {
    setSearchQuery(searchTerm);
  }, [searchTerm]);

  const handleClearSearch = () => {
    // setSearchQuery("");
    router.push(`/books`);
  };

  if (paginatedBooks.length === 0) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Heading level={2} size="lg">
          No books found
        </Heading>
      </div>
    );
  }

  return (
    <>
      <div>
        {searchQuery && (
          <div className="uppercase flex gap-2 align-center items-center max-md:mt-4">
            Search results for: "{searchQuery}" -
            <button className="uppercase" onClick={handleClearSearch}>
              <Image className="mt-1" src="/assets/images/close.svg" width={20} height={20} alt="clear" title="clear" />
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-xsm gap-y-[48px] md:gap-y-md mt-8 md:mt-sm auto-rows-auto">
        {paginatedBooks.map((book: MergedBook) => (
          <BookCard key={book.id} cover_image={book.cover_image} attribTitle={book.bookTitle} title={book.bookTitle} series_name={`${book.series_name} : book ${book.order}`} series_slug={book.series_slug} bookId={book.book_id} />
        ))}
      </div>
    </>
  );
}
