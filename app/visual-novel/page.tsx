import { Button } from "@/components/ui/Button";
import HeaderV2 from "@/components/ui/HeaderV2";
import { Newsletter } from "@/components/ui/Newsletter";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Step into the world of Mask City - an Adult Visual Novel",
  description: "Mask City is a fully-immersive adult visual novel where you get to be the spicy superhero you've always wanted to be - coming soon!",
};

export default async function VisualNovel() {
  return (
    <div className="">
      <HeaderV2 />
      <section className="relative max-md:bg-center bg-hero-01 max-md:pt-14 max-md:pb-10 md:py-[101px] bg-cover text-white">
        <div className="container xl:px-0 w-[90%]">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative max-w-[791px] text-center mx-auto">
            <h1 className="text-[40px]  md:text-6xl font-normal leading-[56px] md:leading-[80px] uppercase mb-3">Blurb Working Draft</h1>
            <p className="text-[24px] md:text-[32px] leading-[34px] md:leading-[56px] font-light mb-5 md:mb-10 max-md:opacity-60 uppercase">Small town superhero. Big city killer. So much spice.</p>
            <p className="text-[18px] leading-7 font-light mb-10">
              Middleton’s favorite superhero is no stranger to fighting crime. He’s been protecting his town for years against a variety of villains, both the enhanced kind and the normies.
              <br />
              <br />
              But when his beautiful nemesis robs the wrong jewelry store, everything changes. There’s a killer on the loose, and this small-town superhero has to team up with a bunch of sexy allies…the photographer with a secret, the MILF-y detective with a chip on her shoulder, and an old high school crush who now sees him in a new light.
              <br /> But his most powerful partner just might be the beautiful but ruthless burglar he’s been pursuing for years.
            </p>
            <Button className="px-4 py-[10px] bg-[#EE93F7] text-black font-normal text-lg leading-8 m-auto hover:shadow-[2px_2px_10px_#ccc] transition duration-200">Coming March 2025</Button>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-[100px] md:pt-[120px] xl:pb-[190px] max-w-[1440px] lg:relative mx-auto">
        <div className="container xl:px-0 w-[90%] flex flex-col lg:flex-row justify-between">
          <div className="lg:max-w-[792px] lg:w-[65%]">
            <h2 className="text-[40px] md:text-[56px] leading-[56px] md:leading-[80px] font-normal text-[#22B1E9] uppercase mb-6 md:mb-10">
              You’ve not experienced <br className="hidden lg:block" /> anything like THIS!
            </h2>
            <p className="text-[24px] md:text-[32px] leading-[40px] md:leading-[56px] font-light text-[#8A8A8A]">
              <span className="uppercase font-normal text-[#161616]">TITLE OF ADULT VIDEO NOVEL</span> is an interactive Adult Visual Novel with mind-blowing art, sexy scenes, and a fully immersive experience where story, art, sound, and music let you be the spicy superhero you’ve always wanted to be.
              <br />
              <br />
              Finding this killer is going to take a lot of leg work.
            </p>
          </div>
          {/* absolute right-0 top-0 */}
          <div className="max-lg:aspect-[747/1012]">
            <Image className="absolute lg:right-0 lg:top-14 lg:max-w-[508px] w-[95%] lg:w-[35vw]" src="/assets/images/hero-girl-4.png" alt="lady hero" width={508} height={688} />
          </div>
        </div>
      </section>
      <div className="w-full max-w-full overflow-hidden">{/* <Image className="lg:hidden w-full" src='/assets/images/hero-girl-2.png' alt="lady hero" width={508} height={688} /> */}</div>

      {/* <section className="mb-[200px]">
                <div className="container xl:px-0 w-[90%] bg-hero-02 rounded-[12px]">
                    <div className="backdrop-blur-[6em] bg-[#00000033] flex flex-row rounded-[12px] px-[8%] pt-[100px] justify-between">
                        <Image className="mb-[-100px]" src='/assets/images/hero-tablet.webp' alt="hero in a tablet" width={368} height={787} />
                        <div className="max-w-[576px]">
                            <p className="text-[60px] leading-[80px] font-light text-[#BBBBBB]">
                                Want to learn more about the upcoming release of <span className="font-normal text-[#FFFFFF]">Mask City?</span> Sign up below
                            </p>
                        </div>
                    </div>

                </div>
            </section> */}

      {/* newsletter section */}
      <section className=" mb-0 md:mb-[183px] max-sm:pb-[60px]">
        <div className="container xl:px-0 px-[24px]">
          <Newsletter background="bg-hero-tab-blur" secondaryTitle="Want to learn more about the upcoming release of " primaryTitle="Mask City? " highlightTitle="Sign up below" higlightStyle="!text-light font-light" coverImage="/assets/images/hero-tablet-fixed.webp" coverStyle="md:top-[120px]" mobileBg="max-sm:bg-black/20" />
        </div>
      </section>
    </div>
  );
}
