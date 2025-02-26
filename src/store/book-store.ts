import { MergedBook } from "@/types/books";
import { create } from "zustand";


interface BookStore {
  books: MergedBook[];
  format: string;
  currentPage: number;
  perPage: number;
  searchQuery: string,
  loading: boolean;
  setSearchQuery: (query: string) => void,
  setFormat: (format: string) => void;
  setCurrentPage: (page: number) => void;
  filteredBooks: () => MergedBook[];
  setLoading: (isLoading: boolean) => void;
  paginatedBooks: () => MergedBook[];
  sortOrder: "asc" | "desc" | null;
  setSortOrder: (order: "asc" | "desc" | null) => void;
  setBooks: (books: MergedBook[]) => void;
}

export const useBookStore = create<BookStore>((set, get) => ({
  books: [],
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query, currentPage: 1 }), // Reset page on new search
  format: "all",
  loading: false,
  currentPage: 1,
  perPage: 6,
  sortOrder: null,
  setLoading: (isLoading) => set({ loading: isLoading }),
  setBooks: (books: MergedBook[]) =>
    set({
      books: [...books].sort((a, b) => {
        const dateA = new Date(a.createDate);
        const dateB = new Date(b.createDate);
        return dateB.getTime() - dateA.getTime();
      }),
    }),

  setSortOrder: (order: "asc" | "desc" | null) => set({ sortOrder: order }),


  // Function to update format filter
  setFormat: (format) => set({ format, currentPage: 1 }),

  /**
   * 
   * Function to filter books based on format, search query and sort order
   *   
   */
  filteredBooks: () => {
    const { books, format, sortOrder, searchQuery } = get();

    let searchedBooks = books;
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      searchedBooks = books.filter((book: MergedBook) => {
        return book.bookTitle?.toLowerCase().includes(lowerCaseQuery) ?? false;
      });
    }

    // Apply Format Filter
    let formatFilteredBooks = searchedBooks.filter((book: MergedBook) => {
      return format === "all" || book.format === format;
    });

    // When format is "all", remove duplicate entries by bookTitle
    if (format === "all") {
      const seenTitles = new Set<string>();
      formatFilteredBooks = formatFilteredBooks.filter((book: MergedBook) => {
        if (seenTitles.has(book.bookTitle)) {
          return false;
        } else {
          seenTitles.add(book.bookTitle);
          return true;
        }
      });
    }

    // Apply Sorting if sortOrder is set
    let finalFilteredBooks = formatFilteredBooks;
    if (sortOrder) {
      finalFilteredBooks = [...formatFilteredBooks].sort((a, b) => {
        const dateA = new Date(a.createDate);
        const dateB = new Date(b.createDate);
        return sortOrder === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      });
    }

    return finalFilteredBooks;
  },
  setCurrentPage: (currentPage: any) => set({ currentPage }),
  paginatedBooks: () => {
    const { filteredBooks, currentPage, perPage } = get();
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = currentPage * perPage;

    return filteredBooks().slice(startIndex, endIndex);
  },


}));