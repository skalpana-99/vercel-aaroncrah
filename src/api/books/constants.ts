import path from "path";

export const API = {
  GET_BOOKS_BY_IDS: {
    path: "/customer-common/books",
  },
  GET_BOOK_FORMATS: {
    path: "/customer-common/book-formats",
  }
} as const;

export enum GET_BOOKS_URL_PARAMS {
  PAGE = "page",
  LIMIT = "limit",
  SEARCH = "search",
  ORDER_BY = "orderBy",
}
