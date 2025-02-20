"use client";
import { useSearchStore } from "@/store/search-store";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { useRef } from "react";
import { useBookStore } from "@/store/book-store";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const { isSearchOpen, closeSearch } = useSearchStore();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const setSearchQuery = useBookStore((state) => state.setSearchQuery);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const searchTerm = (form.elements.namedItem("search") as HTMLInputElement)?.value || "";

    isSearchOpen && closeSearch();

    // setSearchQuery(searchTerm);
    router.push(`/books?search=${searchTerm}`);
  };

  useEffect(() => {
    if (isSearchOpen) {
      setIsAnimating(true);
      // Small delay to ensure component is mounted before animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen && !isAnimating) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        transition-all duration-300
        ${isVisible ? "opacity-100 bg-black/50 backdrop-blur-sm" : "opacity-0 bg-black/0 backdrop-blur-none"}
      `}
      onClick={closeSearch}
    >
      <div
        className={` absolute top-1/4
          w-full max-w-2xl px-4
          transition-all duration-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <form onSubmit={handleSearchSubmit} action="/books" method="get">
            <input ref={searchRef} type="text" name="search" placeholder="Search for books..." className="uppercase w-full py-4 pl-[25px]  rounded-md text-md focus:outline-none shadow-lg" autoFocus />
            <Button type="submit" className="absolute right-[4px] top-1/2 -translate-y-1/2 rounded-md px-[25px]" variant="primary">
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
