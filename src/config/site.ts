import { getSeriesMenu } from "@/utils/helpers";

export const siteConfig = {
  name: "Aaron Crash",
  description: "Official website for [Author Name]",
  mailerliteKey: process.env.NEXT_MAILERLITE_KEY,
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
          label: "eBooks",
          path: {
            pathname: '/books',
            query: { format: 'ebook' },
          },
        },
        {
          id: 38,
          label: "Paperbacks",
          path: {
            pathname: '/books',
            query: { format: 'print_book_paper_back' },
          },
        },
        {
          id: 39,
          label: "Audiobooks",
          path: {
            pathname: '/books',
            query: { format: 'audiobook' },
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
      path: "/about-me",
    },
    {
      id: 6,
      label: "Links",
      path: "/links",
    },
  ]
} as const;


