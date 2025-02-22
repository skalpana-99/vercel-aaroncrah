"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import BookCard from "./BookCard";
import { BookData } from "@/types/localBooks.types";

interface BookSliderProps {
    Books: Array<BookData>;
    bookId: number;
}


export default function BookSlider({ Books, bookId }: BookSliderProps) {
    return (

        <Swiper
            spaceBetween={24}
            slidesPerView={3}
            pagination={{
                clickable: true,
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

                }
            }}

        >
            {Books.map((book, index) => {
                return (

                    <SwiperSlide key={index}>
                        <BookCard
                            isSelected={book.bookId === bookId ? true : false}
                            bookId={book.bookId}
                            cover_image={book.image ? book.image : ""}
                            series_name={`Book ${index + 1}`}
                            series_slug={null}
                            title={book.title}
                        />
                    </SwiperSlide>

                )
            })

            }

        </Swiper>

    )
};