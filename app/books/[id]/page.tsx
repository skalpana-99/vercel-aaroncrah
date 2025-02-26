import BookSlider from "@/components/ui/BookSlider";
import { Button } from "@/components/ui/Button";
import HeaderV2 from "@/components/ui/HeaderV2";
import Heading from "@/components/ui/Heading";
import { BookData, BookFormats } from "@/types/localBooks.types";
import { getLocalBookById, getSeriesBooksBySlug } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import ReadMore from "@/components/ui/ReadMore";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const bookId = Number(resolvedParams.id);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const localBook: BookData | undefined = getLocalBookById(bookId);

  if (!localBook) {
    return {
      title: "Book Not Found",
      description: "Book details not available",
    };
  }

  return {
    title: localBook.title,
    description: localBook.description.split(".")[0],
    openGraph: {
      title: `${localBook.title} by Aaron Crash`, // Custom title
      description: localBook.description.split(".")[0], // Book-specific description
      images: [
        {
          url: `${baseUrl}/assets/images/books/${localBook.image}`, // Handle absolute or relative URLs
          width: 1200,
          height: 630,
          alt: `${localBook.title} Cover`,
          type: "image/png",
        },
      ],
      type: "website",
      url: `${baseUrl}/books/${bookId}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${localBook.title} by Aaron Crash`,
      description: localBook.description.split(".")[0],
      images: [`${baseUrl}/assets/images/books/${localBook.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/books/${bookId}`,
    }
  };
}

export default async function SingleBookPage({ params }: PageProps) {
  const resolvedParams = await params;
  const bookId = Number(resolvedParams.id);

  const bookTypes = {
    PRINT_BOOK_PAPER_BACK: "paperback",
    ebook: "ebook",
    audiobook: "audiobook",
  };

  const localBook: BookData | undefined = getLocalBookById(bookId);
  const otherBooks: Array<BookData> = getSeriesBooksBySlug(localBook?.series.slug ?? "");
  const bookFormats: BookFormats = localBook ? localBook.format : {};

  if (!localBook) {
    notFound();
  }
  return (
    <div>
      <HeaderV2 />
      <div className="container xl:px-0 px-[20px] mt-6 lg:mt-12 pb-0">
        <div className="uppercase flex gap-4 items-center text-[18px] leading-7 font-light mb-8 lg:mb-12">
          <Link href={"/books"}>
            <div>Books</div>
          </Link>
          <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.950195 1.07992L7.4702 7.59992C8.2402 8.36992 8.2402 9.62992 7.4702 10.3999L0.950195 16.9199" stroke="#161616" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {localBook?.series.slug && (
            <>
              <Link href={`/series/${localBook?.series.slug}`} className="max-md:hidden">
                <div className="">{localBook?.series.name}</div>
              </Link>
              <div className="md:hidden">...</div>
              <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.950195 1.07992L7.4702 7.59992C8.2402 8.36992 8.2402 9.62992 7.4702 10.3999L0.950195 16.9199" stroke="#161616" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}

          <div className="opacity-40 overflow-hidden whitespace-nowrap text-ellipsis">{localBook?.title}</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[42px] mb-[20px] lg:mb-[56px]">
          <div className="bg-book-card flex w-full lg:max-w-[468px] aspect-[1] lg:max-h-[468px] border border-solid border-[#d3d3d3]">
            <Image alt={localBook ? localBook.title : ""} src={`/assets/images/books/${localBook.image.trim() !== "" ? localBook.image : "no-book.png"}`} width={468} height={468} className="w-full lg:w-full lg:max-w-[468px] lg:max-h-[468px] my-auto aspect-[1]" />
          </div>
          <div className="w-full flex flex-col">
            {localBook?.series.slug && (
              <Link href={`/series/${localBook?.series.slug}`}>
                <div className="px-3 py-2 bg-[#0000001A] font-normal text-[20px] leading-6 w-fit mb-5 uppercase">{localBook?.series.name}</div>
              </Link>
            )}
            <p className="font-normal text-[40px] leading-[60px] mb-5 uppercase">{localBook?.title}</p>
            <hr />
            <p className="uppercase mt-3 font-light text-lg leading-7">Choose format</p>
            <div className="py-5 flex max-lg:flex-wrap lg:flex-col gap-6">
              {Object.entries(bookFormats).map(([key, value]) => {
                return (
                  <a key={key} href={value.url} target="_blank" className="lg:w-fit">
                    <div className="uppercase flex gap-3 bg-[#F2F2F2] pt-5 pb-4 pl-5 pr-6 hover:bg-[#aeaeae]">
                      <Image width={32} height={32} alt="amazon logo" src="/assets/images/amazon-logo-small.png" />
                      {key in bookTypes ? bookTypes[key as keyof typeof bookTypes] : key}
                    </div>
                  </a>
                );
              })}
            </div>
            <hr className="mt-auto" />
          </div>
        </div>

        <ReadMore description={localBook?.description ? localBook?.description : ""} />
        {localBook?.series.slug && (
          <>
            <Heading level={2} size="lg" className="text-center mb-8 lg:mb-14">
              <Heading.Text variant="secondaryDark">Also Check the </Heading.Text>
              <Heading.Text variant="primaryDark">Other Books in this Series</Heading.Text>
            </Heading>
            <div className="relative book-card-carousel">
              <BookSlider Books={otherBooks} bookId={bookId} />
            </div>
          </>
        )}

        <section className="md:pb-sm max-sm:mt-inner">
          <div className="container mt-20 lg:mt-lg xl:px-0">
            <div className="bg-bundle-bg-book bg-cover bg-no-repeat rounded-md max-sm:bg-center">
              <div className="p-sm sm:p-inner bg-bundle-gradient rounded-md max-sm:bg-bundle-bg-book-gradient-mobile">
                <div className="lg:flex">
                  <div>
                    <Heading level={2} size="lg" className="lg:max-w-[574px]">
                      <Heading.Text variant="secondaryLight">Grab the </Heading.Text>
                      <Heading.Text variant="primaryLight">American Dragons: Books 4 - 6 </Heading.Text>
                      <Heading.Text variant="secondaryLight">from amazon</Heading.Text>
                    </Heading>

                    <Button link="https://a.co/d/5QTP0x2" target="_blank" className="mt-8 lg:mt-[183px] w-full lg:w-fit hover:shadow-[5px_5px_20px_#cccccc80] transition duration-200" size="small" variant="primaryLight">
                      Buy now
                    </Button>
                  </div>
                  <div className="max-lg:mt-[56px] relative lg:w-1/2 lg:flex lg:justify-end">
                    <Image className="max-lg:m-auto lg:absolute top-0 " src="/assets/images/bundle_books.webp" alt="bundle-book" width={363} height={486} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
