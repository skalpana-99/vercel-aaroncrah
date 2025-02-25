import { getSeriesBooksBySlug, getSeriesBySlug } from "@/utils/helpers";
import { BookData } from "@/types/localBooks.types";
import BookCard from "@/components/ui/BookCard";
import HeaderV2 from "@/components/ui/HeaderV2";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";


interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const seriesSlug = resolvedParams.slug;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // const localBook: BookData | undefined = getLocalBookById(seriesSlug);
  const seriesData = getSeriesBySlug(seriesSlug);

  if (!seriesData) {
    return {
      title: "Book Series by Aaron Crash",
      description: "It's time to discover your next favorite science fiction or fantasy series. Dive into the worlds of author Aaron Crash today",
    };
  }

  return {
    title: seriesData.name,
    description: seriesData.description.split(".")[0],
    openGraph: {
      title: `${seriesData.name} by Aaron Crash`, // Custom title
      description: seriesData.description.split(".")[0], // Book-specific description
      images: [
        {
          url: `${baseUrl}/assets/images/featured-img.webp`, // Handle absolute or relative URLs
          width: 1200,
          height: 630,
          alt: `${seriesData.name} Cover`,
          type: "image/webp",
        },
      ],
      type: "website",
      url: `${baseUrl}/series/${seriesSlug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${seriesData.name} by Aaron Crash`,
      description: seriesData.description.split(".")[0],
      images: [`${baseUrl}/assets/images/featured-img.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/series/${seriesSlug}`,
    }
  };
}

export default function SingleSeriesPage({ params }: PageProps) {
  const series_slug = params.slug;
  const seriesData = getSeriesBySlug(series_slug);
  const allBooks: Array<BookData> = getSeriesBooksBySlug(series_slug);

  if (!seriesData) {
    notFound();
  }

  return (
    <div>
      <HeaderV2 />
      <div className="xl:px-0 px-[20px]">
        <div className="container pt-10 md:pt-20 pb-8 md:pb-20 m-auto">
          <div className="px-3 py-2 bg-[#0000001A] font-normal text-[20px] leading-6 w-fit uppercase mx-auto mb-3">series</div>
          <h1 className="font-normal text-[40px] md:text-[80px] leading-[56px] md:leading-[130px] uppercase text-center mb-6 md:mb-8">{seriesData?.name}</h1>
          <p className="max-w-[652px] font-light text-lg leading-7 text-center m-auto" dangerouslySetInnerHTML={{ __html: seriesData?.description ? seriesData?.description : "" }}></p>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-xsm gap-y-md">
            {allBooks.map((book, index) => {
              return (
                <BookCard
                  key={book.bookId}
                  bookId={book.bookId}
                  cover_image={book.image ? book.image : ""}
                  series_name={book.series.order === 0 ? 'Unordered' : `Book ${index + 1}`}
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

                  <Button link="https://a.co/d/dxZUzyr" target="_blank" className="mt-8 max-lg:mb-14 lg:mt-auto lg:max-w-[100px] hover:shadow-[5px_5px_20px_#000000] transition duration-200" size="small" variant="primaryLight">
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
