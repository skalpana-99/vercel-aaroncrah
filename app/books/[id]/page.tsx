"use client";

import BookCard from "@/components/ui/BookCard";
import { Button } from "@/components/ui/Button";
import HeaderV2 from "@/components/ui/HeaderV2";
import Heading from "@/components/ui/Heading";
import { BookData, BookFormats } from "@/types/localBooks.types";
import { getAllBookFormats, getLocalBookById, getSeriesBooksBySlug } from "@/utils/helpers";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Link from "next/link";

interface PageProps {
  params: { id: number };
}

// Generate the list of all possible slugs
export async function generateStaticParams() {
  const slugs = [{ id: 1 }, { id: 2 }, { id: 3 }]; // Fetch all slugs from your data source
  return slugs.map(({ id }) => ({ id }));
}

export default function SingleBookPage({ params }: PageProps) {
  const [readmore, setReadmore] = useState(false);
  const [height, setHeight] = useState("170px");
  const [showReadmore, setShowReadmore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (contentRef.current.scrollHeight > 170 && contentRef.current.scrollWidth < 967) {
        setShowReadmore(true);
      } else {
        setHeight("auto");
      }
    }
  }, []);

  useEffect(() => {
    if (showReadmore) {
      if (readmore && contentRef.current) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("170px");
      }
    }
  }, [readmore]);

  const bookId = Number(params.id);

  const bookTypes = {
    PRINT_BOOK_PAPER_BACK: "paperback",
    ebook: "ebook",
    audiobook: "audiobook",
  };

  const localBook: BookData | undefined = getLocalBookById(bookId);
  const otherBooks: Array<BookData> = getSeriesBooksBySlug(localBook?.series.slug ?? "");
  const bookFormats: BookFormats = localBook ? localBook.format : {};

  return (
    <div>
      <HeaderV2 />
      <div className="container xl:px-0 px-[20px] mt-6 lg:mt-12 uppercase pb-0">
        <div className="uppercase flex gap-4 items-center text-[18px] leading-7 font-light mb-8 lg:mb-12">
          <Link href={"/books"}>
            <div>Books</div>
          </Link>
          <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.950195 1.07992L7.4702 7.59992C8.2402 8.36992 8.2402 9.62992 7.4702 10.3999L0.950195 16.9199" stroke="#161616" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link href={`/series/${localBook?.series.slug}`}>
            <div className="max-md:hidden">{localBook?.series.name}</div>
          </Link>
          <div className="md:hidden">...</div>
          <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.950195 1.07992L7.4702 7.59992C8.2402 8.36992 8.2402 9.62992 7.4702 10.3999L0.950195 16.9199" stroke="#161616" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="opacity-40 overflow-hidden whitespace-nowrap text-ellipsis">{localBook?.title}</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[42px] mb-[20px] lg:mb-[56px]">
          <div className="bg-book-card p-4 flex w-full lg:max-w-[468px] aspect-[1] lg:max-h-[468px]">
            <Image alt={localBook ? localBook.title : ""} src={localBook ? `/assets/images/books/${localBook.image}` : ""} width={468} height={468} objectFit="contain" className="w-full lg:w-full lg:max-w-[468px] lg:max-h-[384px] object-contain my-auto aspect-[1]" />
          </div>
          <div className="lg:max-w-[690px] flex flex-col">
            <Link href={`/series/${localBook?.series.slug}`}>
              <div className="px-3 py-2 bg-[#0000001A] font-normal text-[20px] leading-6 w-fit mb-5">{localBook?.series.name}</div>
            </Link>
            <p className="font-normal text-[40px] leading-[60px] mb-5">{localBook?.title}</p>
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
            {/* <div className="mt-3 uppercase">
              <div className={`relative overflow-hidden transition-[height]   ease-in-out `} style={{ 'height': `${height}` }}>
                <p ref={contentRef} className={`text-[18px] font-light leading-7
                after:content-[''] after:absolute after:inset-0 ${!readmore && showReadmore ? 'after:bg-gradient-to-t after:from-white after:to-transparent' : ''}`}>{localBook?.description}</p>
              </div>

              {showReadmore &&

                <div onClick={() => setReadmore(readmore ? false : true)} className="flex gap-2 items-center font-normal leading-8 cursor-pointer mt-2 ">
                  Read more
                  <svg className={`transform transition duration-300 ease-in-out ${readmore ? 'rotate-180' : ''}`} width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9201 0.949219L10.4001 7.46922C9.63008 8.23922 8.37008 8.23922 7.60008 7.46922L1.08008 0.949219" stroke="#161616" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

              }
            </div> */}
          </div>
        </div>

        <section className="mb-[80px] lg:mb-[124px]">
          <div className="mt-3 uppercase">
            <div className={`relative overflow-hidden transition-[height]   ease-in-out `} style={{ height: `${height}` }}>
              <p
                ref={contentRef}
                className={`text-[18px] font-light leading-7
              after:content-[''] after:absolute after:inset-0 ${!readmore && showReadmore ? "after:bg-gradient-to-t after:from-white after:to-transparent" : ""}`}
                dangerouslySetInnerHTML={{ __html: localBook?.description ? localBook?.description : "" }}
              >
                {/* {localBook?.description} */}
              </p>
            </div>

            {showReadmore && (
              <div onClick={() => setReadmore(readmore ? false : true)} className="flex gap-2 items-center font-normal leading-8 cursor-pointer mt-2 ">
                Read more
                <svg className={`transform transition duration-300 ease-in-out ${readmore ? "rotate-180" : ""}`} width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9201 0.949219L10.4001 7.46922C9.63008 8.23922 8.37008 8.23922 7.60008 7.46922L1.08008 0.949219" stroke="#161616" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        </section>

        <Heading level={2} size="lg" className="text-center mb-8 lg:mb-14">
          <Heading.Text variant="secondaryDark">Also Check the </Heading.Text>
          <Heading.Text variant="primaryDark">Other Books in this Series</Heading.Text>
        </Heading>
        <div className="relative book-card-carousel">
          {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-xsm gap-y-md mt-sm */}

          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            pagination={{
              clickable: true,
              // renderBullet: (index, className) => `<span class="${className}"> TTT ${index + 1} </span>`,
            }}
            modules={[Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {otherBooks.map((book, index) => {
              return (
                <SwiperSlide key={index}>
                  <BookCard
                    isSelected={book.bookId === bookId ? true : false}
                    // key={book.bookId}
                    bookId={book.bookId}
                    series_slug={null}
                    cover_image={book.image ? `/assets/images/books/${book.image}` : ""}
                    series_name={`Book ${index + 1}`}
                    title={book.title}
                  />
                  {/* {book.title} */}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <section className="mt-20 lg:mt-[100px] mb-20 lg:mb-[120px]">
          <div className="container ">
            <div className="bg-bundle-bg-1-3 bg-cover bg-no-repeat rounded-md max-lg:bg-right-top">
              <div className="p-10 md:p-inner bg-bundle-gradient rounded-md flex max-lg:flex-col justify-between">
                <div className="flex flex-col justify-between">
                  <Heading level={2} size="lg" className="max-w-[574px]">
                    <Heading.Text variant="secondaryLight">grab the </Heading.Text>
                    <Heading.Text variant="primaryLight">American Dragons: Books 1 - 3 </Heading.Text>
                    <Heading.Text variant="secondaryLight">from amazon</Heading.Text>
                  </Heading>

                  {/* <p className="mt-inner text-primary text-[80px] leading-[72px]"></p> */}
                  <Button className="mt-8 max-lg:mb-14 lg:mt-auto lg:max-w-[100px]" size="small" variant="primaryLight">
                    buy now
                  </Button>
                </div>
                <Image className="max-lg:m-auto" alt="book bundle" src={"/assets/images/bundle-1-3.webp"} width={355} height={486} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
