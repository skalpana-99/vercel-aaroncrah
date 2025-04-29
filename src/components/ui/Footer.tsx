import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

export default function Footer() {
  return (
    <footer className="bg-[#131426] pt-[40px] mt-[80px] pb-[22px]">
      <div className="container mx-auto">
        <div className="grid gap-[42px]">
          <div className="flex flex-col items-center gap-[24px]">
            <Link href="/">
              <Heading className="text-[32px] lg:text-[33px] font-bold text-white" level={2}>
                <Heading.Text variant={"secondaryLight"}>Aaron</Heading.Text>
                <Heading.Text variant={"primaryLight"} className="font-normal">
                  {" "}
                  Crash
                </Heading.Text>
              </Heading>
            </Link>
            <div className="flex ">
              <ul className="text-white flex flex-col md:flex-row gap-xsm md:gap-sm uppercase text-[18px] font-light max-sm:text-center">
                <li>
                  <Link className="underline  leading-8" href="/books">
                    Books
                  </Link>
                </li>
                <li>
                  <Link className="underline leading-8" href="/about-me">
                    Author
                  </Link>
                </li>
                <li>
                  <Link className="underline leading-8" href="/visual-novel">
                    Visual Novel
                  </Link>
                </li>
                <li>
                  <Link className="underline leading-8" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Image className="pt-[24px] pb-[12px]" src="/assets/images/line.svg" alt="Line" width={1200} height={1} />
        <p className="text-[16px] text-white opacity-60 leading-[28px] text-center uppercase font-light">Copyright © aaron crash Powered by ReaderScout</p>
      </div>
    </footer>
  );
}
