/* eslint-disable @next/next/no-img-element */
import HeaderV2 from "@/components/ui/HeaderV2";
import Heading from "@/components/ui/Heading";
import FormatTabs from "@/components/ui/FormatTabs";
import FilterControls from "@/components/ui/book-filter/FilterControls";
import { BookGrid } from "@/components/ui/AllBooksGrid";
import BooksClientWrapper from "@/components/ui/BookClientWrapper";
import { BooksPagination } from "@/components/ui/BooksPagination";
import { getAllBookFormats } from "@/utils/helpers";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books by Aaron Crash",
  description: "Your next favorite thrilling adventure read awaits. Dive into the worlds of author Aaron Crash today",
  openGraph: {
    title: "Books by Aaron Crash",
    description: "Your next favorite thrilling adventure read awaits. Dive into the worlds of author Aaron Crash today",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`,
        width: 1200,
        height: 630,
        alt: "Featured Image for Aaron Crash",
        type: "image/webp",
      },
    ],
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Aaron Crash",
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Books by Aaron Crash",
    description: "Your next favorite thrilling adventure read awaits. Dive into the worlds of author Aaron Crash today",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`], // Can be an array or string
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/books`,
  },
};

export default async function BooksPage() {
  const bookFormats = getAllBookFormats();

  return (
    <>
      <HeaderV2 />
      <section className="mt-sm md:mt-inner ">
        <div className="container xl:px-0 px-[24px]">
          <Heading level={1} size="lg" className="text-center">
            <Heading.Text variant="secondaryDark">Browse </Heading.Text>
            <Heading.Text variant="primaryDark">all books</Heading.Text>
          </Heading>
          <div className="mt-8 md:mt-sm md:border-b border-[#cccccc]">
            <FormatTabs books={bookFormats} />
          </div>
          <div className="mt-8 md:mt-xsm">
            <FilterControls />
          </div>
          <BooksClientWrapper books={bookFormats}>
            <BookGrid />
          </BooksClientWrapper>
          <div className=" mx-auto mt-8 md:mt-md">
            <BooksPagination />
          </div>
        </div>
      </section>

      <section className="mt-20 lg:mt-[100px] mb-20 lg:mb-[40px] px-6">
        <div className="container ">
          <div className="bg-bundle-bg-1-3 bg-cover bg-no-repeat rounded-md max-lg:bg-right-top">
            <div className="p-10 md:p-inner bg-bundle-gradient rounded-md flex max-lg:flex-col justify-between">
              <div className="flex flex-col justify-between">
                <Heading level={2} size="lg" className="max-w-[574px]">
                  <Heading.Text variant="secondaryLight">Grab the </Heading.Text>
                  <Heading.Text variant="primaryLight">American Dragons: Books 1 - 3 </Heading.Text>
                  <Heading.Text variant="secondaryLight">from amazon</Heading.Text>
                </Heading>

                <Button link="https://a.co/d/e4tsqvT" target="_blank" className="mt-8 max-lg:mb-14 lg:mt-auto lg:max-w-[100px] hover:shadow-[5px_5px_20px_#000000] transition duration-200" size="small" variant="primaryLight">
                  Buy now
                </Button>
              </div>
              <Image className="max-lg:m-auto" alt="book bundle" src={"/assets/images/bundle-1-3.webp"} width={355} height={486} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
