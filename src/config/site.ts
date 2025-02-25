import { getSeriesMenu } from "@/utils/helpers";

export const siteConfig = {
  name: "Aaron Crash",
  description: "Official website for Aaron crash",
  mailerliteKey: process.env.NEXT_MAILERLITE_KEY,
  ogImage: "https://placehold.co/1200x628",
  navigation: [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
    {
      id: 2,
      label: "Book by series",
      path: "/bookbyseries",
      submenu: getSeriesMenu(),
    },
    {
      id: 3,
      label: "Formats",
      path: "/formats",
      submenu: [
        {
          id: 37,
          label: "Audiobooks",
          path: {
            pathname: '/books',
            query: { format: 'audiobook' },
          },
        },
        {
          id: 38,
          label: "eBooks",
          path: {
            pathname: '/books',
            query: { format: 'ebook' },
          },
        },
        {
          id: 39,
          label: "Paperbacks",
          path: {
            pathname: '/books',
            query: { format: 'print_book_paper_back' },
          },
        },
        {
          id: 40,
          label: "All Formats",
          path: {
            pathname: '/books',
            query: { format: 'all' },
          },
        },
      ],
    },
    {
      id: 4,
      label: "Visual Novel",
      path: "/visual-novel",
    },
    {
      id: 5,
      label: "Author",
      path: "/about",
    },
  ]
} as const;


