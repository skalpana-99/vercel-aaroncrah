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
  title: "Books",
  description: "A comprehensive starter template for author websites",
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
          <div className="max-w-[224px] mx-auto mt-8 md:mt-md">
            <BooksPagination />
          </div>
        </div>
      </section>

      <section className="md:pb-sm max-sm:mt-inner">
        <div className="container lg:mt-lg xl:px-0 px-[24px]">
          <div className="bg-bundle-bg-book bg-cover bg-no-repeat rounded-md max-sm:bg-center">
            <div className="p-sm sm:p-inner bg-bundle-gradient rounded-md max-sm:bg-bundle-bg-book-gradient-mobile">
              <div className="lg:flex">
                <div>
                  <Heading level={2} size="lg" className="lg:max-w-[574px]">
                    <Heading.Text variant="secondaryLight">Grab the </Heading.Text>
                    <Heading.Text variant="primaryLight">American Dragons: Books 4 - 6 </Heading.Text>
                    <Heading.Text variant="secondaryLight">from amazon</Heading.Text>
                  </Heading>

                  <Button className="mt-8 lg:mt-[183px] w-full lg:w-auto" size="small" variant="primaryLight">
                    Buy now
                  </Button>
                </div>
                <div className="max-lg:mt-[56px] relative lg:w-1/2 lg:flex lg:justify-end">
                  <Image className="lg:absolute top-0 " src="/assets/images/bundle_books.webp" alt="bundle-book" width={363} height={486} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
