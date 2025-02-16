"use client";
import Heading from "./Heading";
import { useBookStore } from "@/store/book-store";
import { MergedBook } from "@/types/books";
import BookCard from "./BookCard";
import { truncateString } from "@/utils/helpers";

export function BookGrid() {
  const paginatedBooks = useBookStore((state) => state.paginatedBooks());
  const searchQuery = useBookStore((state) => state.searchQuery);
  const setSearchQuery = useBookStore((state) => state.setSearchQuery);

  const handleClearSearch = () => {
    setSearchQuery("");
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
          <div className="uppercase">
            Search results for: "{searchQuery}"{" "}
            <button className="uppercase" onClick={handleClearSearch}>
              {" "}
              - Clear
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-xsm gap-y-[48px] md:gap-y-md mt-8 md:mt-sm auto-rows-auto">
        {paginatedBooks.map((book: MergedBook) => (
          <BookCard key={book.id} cover_image={book.cover_image} title={truncateString(book.bookTitle, 35)} series_name={`${book.series_name} : book ${book.order}`} series_slug={null} bookId={book.book_id} />
        ))}
      </div>
    </>
  );
}
