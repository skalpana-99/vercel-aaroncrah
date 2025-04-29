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
import land_lust from "@/series-covers/land_lust.png";

export const metadata: Metadata = {
  title: "Aaron Crash - best-selling author of high-octane science fiction and fantasy",
  description: "Discover author Aaron Crash and his bestelling series: War God's Mantle, American Dragons, Princesses of the Ironbound, and more",
  openGraph: {
    title: "Aaron Crash - best-selling author of high-octane science fiction and fantasy",
    description: "Discover author Aaron Crash and his bestselling series: War God's Mantle, American Dragons, Princesses of the Ironbound, and more",
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
    title: "Aaron Crash - best-selling author of high-octane science fiction and fantasy",
    description: "Discover author Aaron Crash and his bestselling series: War God's Mantle, American Dragons, Princesses of the Ironbound, and more",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`], // Can be an array or string
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
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
              <div className="flex justify-between">
                <div>
                  <span className="xl:text-[100px] text-primary md:text-[60px] text-[32px]">
                    CRASH <span className="font-light text-white">IT.</span>
                  </span>
                </div>
                <div>
                  <span className="xl:text-[100px] text-primary md:text-[60px] text-[32px]">
                    CRUSH <span className="font-light text-white">IT.</span>
                  </span>
                </div>
                <div>
                  <span className="xl:text-[100px] text-primary md:text-[60px] text-[32px]">
                    LOVE <span className="font-light text-white">IT.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="relative">
          <Image className="mx-auto max-sm:min-h-[500px] max-sm:object-cover max-sm:object-right" src="/assets/images/hero_3.webp" alt="hero" width={3840} height={2700} priority />
          <div className="py-8 px-[22px] w-full backdrop-blur-[100px] absolute flex justify-center bottom-0 left-1/2 -translate-x-1/2">
            <div className="container flex gap-x-[4%] justify-center">
              <h3 className="text-[100px] uppercase">
                <span className="text-primary">Crash </span>
                <span className="text-white font-light">it.</span>
              </h3>
              <h3 className="text-[100px] uppercase">
                <span className="text-primary">Crush </span>
                <span className="text-white font-light">it.</span>
              </h3>
              <h3 className="text-[100px] uppercase">
                <span className="text-primary">Love </span>
                <span className="text-white font-light">it.</span>
              </h3>
            </div>
          </div>
        </div>
      </section> */}

      {/* series section */}
      <section className="mt-inner lg:mt-lg">
        <div className="container xl:px-0 px-[24px]">
          <div className="max-w-[815px] mx-auto">
            <Heading level={2} size="lg" className="text-center mb-sm md:mb-md">
              <Heading.Text variant="secondaryDark">Newest </Heading.Text>
              <Heading.Text variant="primaryDark">Series</Heading.Text>
            </Heading>

            <div className="flex flex-col gap-xsm md:gap-md">
              <div className="max-w-[792px] relative rounded-md bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(/assets/images/series-covers/series_3_bg.webp` }}>
                <div className="w-full md:max-w-[630px] md:w-[630px] mx-auto  flex flex-col items-center px-[40px] md:px-[0px] mt-sm lg:mt-[56px]">
                  <Heading level={3} className="text-center pb-4" variant="primaryLight" size="md">
                    Land of the Lust
                  </Heading>
                  <p className="text-white text-center font-light leading-[28px] text-[18px]">Sid and two women—his hot MILF professor and his bratty cheerleader crush—are all grabbed by an energy storm and flung to a strange patchwork world, like someone chopped up a thousand planets and quilted them together. Can they survive the lust?</p>
                  <Button size="small" link="https://a.co/d/3RxuzDY" variant="primary" className="mt-8 md:mt-[44px]">
                    Buy now
                  </Button>
                </div>
                <Image className="mt-sm lg:mt-[26px] mx-auto mb-[-27px]" src={land_lust} alt="series-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* series section */}
      <section className="mt-inner lg:mt-lg">
        <div className="container xl:px-0 px-[24px]">
          <div className="max-w-[815px] mx-auto">
            <Heading level={2} size="lg" className="text-center mb-sm lg:mb-md">
              <Heading.Text variant="secondaryDark">Reader </Heading.Text>
              <Heading.Text variant="primaryDark">Favorites</Heading.Text>
            </Heading>

            <div className="flex flex-col gap-xsm md:gap-md">
              <SeriesCard title="American dragons" description="Steven Whipp, a normal, poor college student, is kissed and shot on the night of his twentieth birthday. He realizes three things: he's bulletproof, he's a dragon, and everything he's ever wanted is within his reach. But the attempts on his life are just the beginning of his troubles." background="assets/images/series-covers/series_1_bg.webp" image={series_1} link="/series/american-dragons" />
              <SeriesCard title="Princesses of the Ironbound" description="Banished by his tribe, Ymir travels to Old Ironbound to learn about magic and love. Being one of the only men there, he has a lot to learn." background="assets/images/series-covers/series_2_bg.webp" image={series_2} link="/series/princesses-of-the-ironbound" />
              <SeriesCard title="War God Saga" description="When Marine Corps pilot Jacob Merely crashed during a routine mission, he was sure it was game over. After surviving the crash and pulling himself onto the sandy shores of a long-abandoned island, however, Jacob meets the god of war and his life changes forever. The War God Saga is a slow-burn, fade-to-black gamelit harem adventure. Less sex. More stats." background="assets/images/series-covers/series_4_bg.webp" image={series_4} link="/series/the-war-god-saga" />
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
              <div className="flex justify-center">
                <span className="px-[24px] py-[12px] bg-[#464759] text-white mb-xsm uppercase text-[24px] leading-">Coming soon</span>
              </div>
              <Heading level={2} size="lg" variant="primaryLight" className="text-center ">
                <Heading.Text variant="secondaryLight" className="max-sm:text-2xl max-sm:leading-[34px]">
                  Explore the World of Mask City{" "}
                </Heading.Text>
                <br className="d-none md:d-block" />
                <Heading.Text className="max-sm:text-[40px] max-sm:leading-[56px]  max-sm:mt-4 mt-2 block" variant="primaryLight">
                  An Adult Visual Novel
                </Heading.Text>
              </Heading>
              <p className="max-w-[630px] pb-8 md:pb-[68px] mx-auto  mt-xsm md:mt-8 font-light text-md leading-[28px] text-center text-white"> Dive into immersive storytelling with Aaron Crash's first visual novel! Explore captivating narratives, stunning visuals, and interactive gameplay on any device. Your next adventure awaits.</p>
              <div className="flex justify-center">
                <Button variant="primaryLight" size="small" link="/visual-novel">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="px-0 sm:px-[50px] xl:px-0 mx-auto mt-sm md:mt-[68px] max-w-[1268px] ">
              <div className="grid grid-cols-[1fr,3fr,1fr] gap-[15px] md:gap-[30px] lg:gap-[54px] min-h-[25vw] xl:min-h-[384px] max-sm:min-h-[30vw]">
                <div className="self-end relative">
                  <Image className="w-[100%] relative max-sm:-left-[35px]" src="/assets/images/visual_2.png" alt="mask city" width={232} height={262} />
                </div>
                <div className="relative ">
                  <Image className="w-[100%]" src="/assets/images/visual_1.png" alt="mask city" width={692} height={332} />
                </div>
                <div className=" self-end relative">
                  <Image className="w-[100%] relative max-sm:-right-[35px]" src="/assets/images/visual_3.png" alt="mask city" width={232} height={262} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* newsletter section */}
      <section className="mt-inner lg:mt-lg mb-0 md:mb-[70px] max-sm:pb-[60px]">
        <div className="container xl:px-0 px-[24px]">
          <Newsletter background="bg-gradient-to-r" secondaryTitle="Want a Free Book? " primaryTitle="Download " highlightTitle="Time Jacker " coverImage="/assets/images/newsletter_cover.webp" />
        </div>
      </section>
    </>
  );
}
