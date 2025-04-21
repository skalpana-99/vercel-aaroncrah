import { Button } from "@/components/ui/Button";
import HeaderV2 from "@/components/ui/HeaderV2";
import { Newsletter } from "@/components/ui/Newsletter";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Step into the world of Mask City - an Adult Visual Novel",
  description: "Mask City is a fully-immersive adult visual novel where you get to be the spicy superhero you've always wanted to be - coming soon!",
  openGraph: {
    title: "Step into the world of Mask City - an Adult Visual Novel",
    description: "Mask City is a fully-immersive adult visual novel where you get to be the spicy superhero you've always wanted to be - coming soon!",
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
    title: "Step into the world of Mask City - an Adult Visual Novel",
    description: "Mask City is a fully-immersive adult visual novel where you get to be the spicy superhero you've always wanted to be - coming soon!",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/visual-novel`,
  },
};

export default async function VisualNovel() {
  return (
    <div className="">
      <HeaderV2 />
      <section className="relative max-md:bg-center bg-hero-01 max-md:pt-14 max-md:pb-10 md:py-[101px] bg-cover text-white">
        <div className="container xl:px-0 w-[90%]">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative max-w-[791px] text-center mx-auto">
            <p className="text-[24px] md:text-[32px] leading-[34px] md:leading-[56px] font-light mb-5 md:mb-10 max-md:opacity-60 uppercase">Small town superhero. Big city killer. So much spice.</p>
            <p className="text-[18px] leading-7 font-light mb-10">
              Middleton's favorite superhero is no stranger to fighting crime. He's been protecting his town for years against a variety of villains, both the enhanced kind and the normies.
              <br />
              <br />
              But when his beautiful nemesis robs the wrong jewelry store, everything changes. There's a killer on the loose, and this small-town superhero has to team up with a bunch of sexy allies…the photographer with a secret, the MILF-y detective with a chip on her shoulder, and an old high school crush who now sees him in a new light.
              <br />
              <br /> But his most powerful partner just might be the beautiful but ruthless burglar he's been pursuing for years.
            </p>
            <Button className="text-primary font-normal text-[18px] m-auto cursor-default leading-8 py-[0px] px-[0px]">Coming May 2025</Button>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-[100px] md:pt-[120px] xl:pb-[190px] max-w-[1440px] lg:relative mx-auto">
        <div className="container xl:px-0 w-[90%] flex flex-col lg:flex-row justify-between">
          <div className="lg:max-w-[792px] lg:w-[65%]">
            <h2 className="text-[40px] md:text-[56px] leading-[56px] md:leading-[80px] font-normal text-[#22B1E9] uppercase mb-6 md:mb-10">
              An experience
              <br className="hidden lg:block" /> unlike any other!
            </h2>
            <p className="text-[24px] md:text-[32px] leading-[40px] md:leading-[56px] font-light text-[#8A8A8A]">
              <span className="uppercase font-normal text-[#161616]">MASK CITY</span> is an interactive Adult Visual Novel with mind-blowing art, sexy scenes, and a fully immersive experience where story, art, sound, and music let you be the spicy superhero you've always wanted to be.
              <br />
              <br />
              Finding this killer is going to take a lot of leg work.
            </p>
          </div>

          <div className="max-lg:aspect-[747/1012]">
            <Image className="absolute lg:right-0 lg:top-14 lg:max-w-[508px] w-[95%] lg:w-[35vw]" src="/assets/images/hero_5.png" alt="lady hero" width={508} height={688} />
          </div>
        </div>
      </section>
    </div>
  );
}
