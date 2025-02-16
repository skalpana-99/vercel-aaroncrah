import { getSeriesBooksBySlug, getSeriesBySlug } from "@/utils/helpers";
import { BookData } from "@/types/localBooks.types";
import BookCard from "@/components/ui/BookCard";
import HeaderV2 from "@/components/ui/HeaderV2";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Series",
  description: "A comprehensive starter template for author websites",
};

interface PageProps {
  params: { slug: string };
}
// Mark as async server component
export default function SingleSeriesPage({ params }: PageProps) {
  const series_slug = params.slug;
  const seriesData = getSeriesBySlug(series_slug);
  const allBooks: Array<BookData> = getSeriesBooksBySlug(series_slug);

  return (
    <div>
      <HeaderV2 />
      <div className="xl:px-0 px-[20px]">
        <div className="container py-20 m-auto max-w-[652px]">
          <div className="px-3 py-2 bg-[#0000001A] font-normal text-[20px] leading-6 w-fit uppercase mx-auto mb-3">series</div>
          <h1 className="font-normal text-[80px] leading-[130px] uppercase text-center mb-8">{seriesData?.name}</h1>
          <p className="font-light text-lg leading-7 text-center" dangerouslySetInnerHTML={{ __html: seriesData?.description ? seriesData?.description : "" }}></p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-xsm gap-y-md">
            {allBooks.map((book, index) => {
              return (
                <BookCard
                  key={book.bookId}
                  // key={book.bookId}
                  bookId={book.bookId}
                  cover_image={book.image ? `/assets/images/books/${book.image}` : ""}
                  series_name={`Book ${index + 1}`}
                  series_slug={null}
                  title={book.title}
                />
              );
            })}
          </div>
        </div>

        <section className="mt-20 lg:mt-[100px] mb-20 lg:mb-[120px]">
          <div className="container ">
            <div className="bg-bundle-bg-series bg-right-top bg-cover bg-no-repeat rounded-md max-lg:bg-right-top">
              <div className="p-10 md:p-inner bg-bundle-gradient rounded-md flex max-lg:flex-col justify-between">
                <div className="flex flex-col justify-between">
                  <Heading level={2} size="lg" className="max-w-[574px]">
                    <Heading.Text variant="secondaryLight">grab the </Heading.Text>
                    <Heading.Text variant="primaryLight">Princesses of the Ironbound Boxset: Books 1 - 3 </Heading.Text>
                    <Heading.Text variant="secondaryLight">from amazon</Heading.Text>
                  </Heading>

                  {/* <p className="mt-inner text-primary text-[80px] leading-[72px]"></p> */}

                  <Button className="mt-8 max-lg:mb-14 lg:mt-auto lg:max-w-[100px]" size="small" variant="primaryLight">
                    buy now
                  </Button>
                </div>
                <Image className="max-lg:m-auto" alt="book bundle" src={"/assets/images/bundle-books-series.png"} width={355} height={486} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Generate the list of all possible slugs
export async function getStaticPaths() {
  const slugs = [{ slug: "robot-bangarang" }]; // Fetch all slugs from your data source
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // Ensure no fallback pages are generated
  };
}

// Fetch data for each slug at build time
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const series_slug = params.slug;
  const seriesData = getSeriesBySlug(series_slug); // Fetch series data by slug
  const allBooks = getSeriesBooksBySlug(series_slug); // Fetch books for the series

  return {
    props: {
      seriesData,
      allBooks,
    },
  };
}
