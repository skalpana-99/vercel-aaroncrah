"use client";

import { useEffect } from "react";
import { useBookStore } from "@/store/book-store";

interface BooksClientWrapperProps {
  books: any;
  children: React.ReactNode;
}

export default function BooksClientWrapper({ books, children }: BooksClientWrapperProps) {
  // Update Zustand state on the client
  useEffect(() => {
    useBookStore.setState({ books: books });
  }, [books]);

  return <>{children}</>;
}
