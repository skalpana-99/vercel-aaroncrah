import { Metadata } from "next";
import Header from "@/components/ui/Header";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import { SeriesCard } from "@/components/ui/SeriesCard";
import { Button } from "@/components/ui/Button";
import { Newsletter } from "@/components/ui/Newsletter";

import series_1 from "@/series-covers/series_1.webp";
import series_2 from "@/series-covers/series_2.webp";
import series_3 from "@/series-covers/series_3.webp";
import series_4 from "@/series-covers/series_4.webp";
import series_5 from "@/series-covers/series_5.png";
import series_6 from "@/series-covers/series_6.webp";

export const metadata: Metadata = {
  title: "Aaron Crash - best-selling author of high-octane science fiction and fantasy",
  description: "Discover author Aaron Crash and his bestelling series: War God's Mantle, American Dragons, Princesses of the Ironbound, and more",
  openGraph: {
    title: "Aaron Crash - best-selling author of high-octane science fiction and fantasy",
    description:
      "Discover author Aaron Crash and his bestselling series: War God's Mantle, American Dragons, Princesses of the Ironbound, and more",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`,
        width: 1200,
        height: 630,
        alt: "Featured Image for Aaron Crash",
        type: 'image/webp'
      },
    ],
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Aaron Crash",
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Aaron Crash - best-selling author of high-octane science fiction and fantasy",
    description:
      "Discover author Aaron Crash and his bestselling series: War God's Mantle, American Dragons, Princesses of the Ironbound, and more",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`], // Can be an array or string
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }
};

export default function HomePage() {
  return (
    <>
      <Header isHome={true} />

      {/* hero section */}
      <section>
        <div className="relative">
          <Image className="mx-auto max-sm:min-h-[500px] max-sm:object-cover max-sm:object-right" src="/assets/images/hero_3.webp" alt="hero" width={3840} height={2700} priority />
          <div className="py-8 px-[22px] w-full backdrop-blur-[100px] absolute flex justify-center bottom-0 left-1/2 -translate-x-1/2">
            <div className="container">
              <Image className="" src="/assets/images/banner_text.webp" alt="blur_banner" width={2400} height={408} />
            </div>
          </div>
        </div>
      </section>
      {/* series section */}
      <section className="mt-inner lg:mt-lg">
        <div className="container xl:px-0 px-[24px]">
          <div className="max-w-[815px] mx-auto">
            <Heading level={2} size="lg" className="text-center mb-sm lg:mb-md">
              <Heading.Text variant="secondaryDark">Check our </Heading.Text>
              <Heading.Text variant="primaryDark">Most popular series</Heading.Text>
            </Heading>

            <div className="flex flex-col gap-xsm md:gap-md">
              <SeriesCard title="American dragons" description="Steven Whipp, a normal, poor college student, is kissed and shot on the night of his twentieth birthday. He realizes three things: he's bulletproof, he's a dragon, and everything he's ever wanted is within his reach. But the attempts on his life are just the beginning of his troubles." background="assets/images/series-covers/series_1_bg.webp" image={series_1} link="/series/american-dragons" />
              <SeriesCard title="Princesses of the Ironbound" description="The barbarians of the frozen north live to fight, drink, hunt, and screw, and Ymir is a true son of the Ax Tundra, until a demon curses him with magic. Orphaned by battle and banished by his tribe, Ymir heads south to Old Ironbound, a university where the rich and well-connected learn to master magic. Will..." background="assets/images/series-covers/series_2_bg.webp" image={series_2} link="/series/princesses-of-the-ironbound" />
            </div>
          </div>
        </div>
      </section>

      {/* meet aaron */}
      <section className="mt-inner lg:mt-lg">
        <div className="container xl:px-0 px-[24px] ">
          <div className="md:grid md:grid-cols-[2fr,3fr] lg:grid-cols-[2fr,3fr]">
            <div className="relative w-full max-md:h-[360px]">
              <Image className="max-md:rounded-t-md md:rounded-l-md object-cover" src="/assets/images/aaron.jpg" fill alt="author" />
            </div>

            <div className="relative">
              <div className="absolute w-full h-full backdrop-blur-2xl max-md:rounded-b-md md:rounded-r-md z-10"></div>
              <Image className="absolute max-md:rounded-b-md md:rounded-r-md z-0 object-cover" src="/assets/images/about_bg.webp" alt="author" fill />
              <div className="relative z-10 p-sm md:p-md max-sm:text-center">
                <Heading level={2} className="text-[36px] leading-[44px] md:leading-[50px]" variant="primaryLight" size="lg">
                  Meet aaron crash
                </Heading>
                <p className="font-light text-md text-white leading-[28px] mt-xsm">Aaron Crash is the bestselling author of a high-octane men's adventure novels where good guys destroy douchebag villains to get harems of beautiful women so they can all live happily ever after.</p>
                <div className="flex gap-4 md:gap-xsm mt-8 md:mt-md max-sm:justify-center">
                  <Button variant="primaryLight" link="/about-me">
                    Learn more
                  </Button>

                  <div className="flex gap-4 md:gap-xsm">
                    <div className="relative w-[52px] h-[52px] cursor-pointer">
                      <div className="absolute inset-0 bg-white opacity-20"></div>
                      <a href="https://www.facebook.com/aaroncrashbooks" target="_blank">
                        <Image className="absolute w-[20px] h-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/assets/images/facebook.png" alt="facebook" width={20} height={20} />
                      </a>
                    </div>
                    <div className="relative w-[52px] h-[52px] cursor-pointer">
                      <div className="absolute inset-0 bg-white opacity-20"></div>
                      <a href="https://www.patreon.com/aaroncrashbooks" target="_blank">
                        <Image className="absolute w-[20px] h-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/assets/images/patreon.png" alt="patreon" width={20} height={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-inner lg:mt-lg">
        <div className="xl:px-0 ">
          <div className="bg-gradient-to-b from-[#131426] to-[#464A8C] pt-[44px] md:pt-inner overflow-hidden">
            <div className="px-4 md:px-0">
              <Heading level={2} size="lg" variant="primaryLight" className="text-center ">
                <Heading.Text variant="secondaryLight" className="max-sm:text-2xl max-sm:leading-[34px]">
                  Explore the World of Mask City:{" "}
                </Heading.Text>
                <br className="d-none md:d-block" />
                <Heading.Text className="max-sm:text-[40px] max-sm:leading-[56px]  max-sm:mt-4 mt-2 block" variant="primaryLight">
                  An Adult Visual Novel
                </Heading.Text>
              </Heading>
              <p className="max-w-[630px] pb-8 md:pb-[68px] mx-auto  mt-xsm md:mt-8 font-light text-md leading-[28px] text-center text-white">Dive into immersive storytelling with our visual novels! Explore captivating narratives, stunning visuals, and interactive gameplay on any device. Your next adventure awaits.</p>
              <div className="flex justify-center">
                <Button variant="primaryLight" size="small" link="/visual-novel">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="px-0 sm:px-[50px] xl:px-0 mx-auto mt-sm md:mt-[68px] max-w-[1268px] ">
              <div className="grid grid-cols-[1fr,3fr,1fr] gap-[15px] md:gap-[30px] lg:gap-[54px] min-h-[25vw] xl:min-h-[384px] max-sm:min-h-[30vw]">
                <div className="self-end relative">
                  <Image className="w-[100%] relative max-sm:-left-[35px]" src="/assets/images/hero-2.png" alt="mask city" width={232} height={262} />
                </div>
                <div className="relative ">
                  <Image className="w-[100%]" src="/assets/images/hero-1.png" alt="mask city" width={692} height={332} />
                </div>
                <div className=" self-end relative">
                  <Image className="w-[100%] relative max-sm:-right-[35px]" src="/assets/images/hero-3.png" alt="mask city" width={232} height={262} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* series section */}
      <section className="mt-inner lg:mt-lg">
        <div className="container xl:px-0 px-[24px]">
          <div className="max-w-[815px] mx-auto">
            <Heading level={2} size="lg" className="text-center mb-sm md:mb-md">
              <Heading.Text variant="secondaryDark">Don't miss our latest </Heading.Text>
              <Heading.Text variant="primaryDark">series</Heading.Text>
            </Heading>

            <div className="flex flex-col gap-xsm md:gap-md">
              <SeriesCard title="Land of the Lust" description="Sid and two women—his hot MILF professor and his bratty cheerleader crush—are all grabbed by an energy storm and flung to a strange patchwork world, like someone chopped up a thousand planets and quilted them together." background="assets/images/series-covers/series_3_bg.webp" image={series_3} link="#" buttonText="Coming soon" />

              <SeriesCard title="War God Saga" description="When Marine Corps pilot Jacob Merely crashes during a routine mission off the coast of Cyprus, he was sure it was game over.After surviving the crash and pulling himself onto the sandy shores of a long-abandoned island, however, Jacob unwittingly stumbles headfirst into the ancient ruins of a dead city." background="assets/images/series-covers/series_4_bg.webp" image={series_4} link="/series/the-war-god-saga" />

              <SeriesCard title="Creature Girl Creations" description="He's lost his company and his body, and the man who murdered him might still be alive. The good news is he's on Plymouth, an almost mythical world where monsters are designed and printed for Roy's game worlds.First order of the day: print himself a superpowered body and get back what's his." background="assets/images/series-covers/series_5_bg.webp" image={series_5} link="/series/creature-girl-creations" />

              <SeriesCard title="Son of Fire" description="He was minding his own business on Earth when a beautiful sorceress summoned him to defend a backwater village from demonic raiders. He's lost his gun, his family, and even his name, but it's not the first fight he's been in, and it won't be the last." background="assets/images/series-covers/series_6_bg.webp" image={series_6} link="/series/son-of-fire" />
            </div>
          </div>
        </div>
      </section>
      {/* newsletter section */}
      <section className="mt-inner lg:mt-lg mb-0 md:mb-[70px] max-sm:pb-[60px]">
        <div className="container xl:px-0 px-[24px]">
          <Newsletter background="bg-gradient-to-r" secondaryTitle="Join my newsletter to receive a " primaryTitle="free digital copy of " highlightTitle="Time Jacker" coverImage="/assets/images/newsletter_cover.webp" />
        </div>
      </section>
    </>
  );
}
