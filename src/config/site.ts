export const siteConfig = {
  name: "Author Website",
  description: "Official website for [Author Name]",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  mailerliteKey: process.env.NEXT_MAILERLITE_KEY,
  ogImage: "https://your-domain.com/og.jpg",
  links: {
    twitter: "https://twitter.com/author",
    github: "https://github.com/author",
  },
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
          path: "/formats/audiobooks",
        },
        {
          id: 37,
          label: "eBooks",
          path: "/formats/ebooks",
        },
        {
          id: 38,
          label: "Paperbacks",
          path: "/formats/paperbacks",
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
      path: "/author",
    },
    {
      id: 6,
      label: "Links",
      path: "/links",
    },
  ]
} as const;
