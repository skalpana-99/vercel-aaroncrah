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
      submenu: [
        {
          id: 31,
          label: "Do the hard things first",
          path: "/bookbyseries/dothehardthingsfirst",
        },
        {
          id: 32,
          label: "Pathways to mastery",
          path: "/bookbyseries/pathwaystomastery",
        },
        {
          id: 33,
          label: "Bulletproof mindset mastery",
          path: "/bookbyseries/bulletproofmindsetmastery",
        },
        {
          id: 34,
          label: "Lifestyle mastery",
          path: "/bookbyseries/lifestylemastery",
        },
      ],
    },
    {
      id: 3,
      label: "Formats",
      path: "/formats",
      submenu: [
        {
          id: 36,
          label: "Audiobooks",
          path: {
            pathname: '/books',
            query: { format: 'audiobook' },
          },
        },
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
