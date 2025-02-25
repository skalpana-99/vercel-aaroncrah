import { ContactForm } from "@/components/ui/ContactForm";
import HeaderV2 from "@/components/ui/HeaderV2";
import Heading from "@/components/ui/Heading";
import { Newsletter } from "@/components/ui/Newsletter";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All about Aaron Crash - science fiction and fantasy author",
  description: "Aaron Crash is the best-selling author of high-octane spicy men's adventures novels that take place in thrilling science fiction and fantasy worlds",
  openGraph: {
    title: "All about Aaron Crash - science fiction and fantasy author",
    description:
      "Aaron Crash is the best-selling author of high-octane spicy men's adventures novels that take place in thrilling science fiction and fantasy worlds",
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
    title: "All about Aaron Crash - science fiction and fantasy author",
    description:
      "Aaron Crash is the best-selling author of high-octane spicy men's adventures novels that take place in thrilling science fiction and fantasy worlds",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/featured-img.webp`], // Can be an array or string
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about-me`,
  }
};

export default async function Page() {
  return (
    <>
      <HeaderV2 />
      <section className="mt-[56px] lg:mt-lg">
        <div className="container xl:px-0 px-[24px]">
          <Image className="hidden sm:block" src="/assets/images/about_aaron.webp" width={1200} height={565} alt="about-aaron" />
          <Image className="block sm:hidden" src="/assets/images/about_aaron_mobile.jpg" width={1200} height={565} alt="about-aaron" />
          <div className="py-[56px] max-sm:pb-sm md:py-inner px-sm md:px-[102px] bg-slate-400 relative rounded-b-md">
            <Image src="/assets/images/about_bg_aaron.webp" alt="blur-background" fill objectFit="cover" className="z-10  rounded-b-md" />
            <div className="absolute w-full h-[100.1%] bg-about-blur-bg-color left-0 top-[-2px] z-20 backdrop-blur-[100px] rounded-b-md"></div>
            <div className="relative z-50">
              <Heading variant="primaryLight" size="lg" className="text-center max-sm:text-[40px] max-sm:leading-[56px]">
                About aaron crash
              </Heading>
              <p className="pt-xsm text-center font-light leading-[28px] text-white text-md">Aaron Crash is the bestselling author of a high-octane men's adventure novels that are filled with action of all kinds. Since the third grade, when he read A PRINCESS OF MARS, he's dreamed of being an author. He grew up in Colorado but mostly stayed home to read and play video games. Later in life, he realized he loved hiking and mountain biking and some of his best ideas come when he's on the trail. Aaron writes spicy adventures where good guys destroy douchebag villains to get harems of beautiful women so they can all live happily ever after.</p>

              <div className="pt-[56px]">
                <Heading variant="primaryLight" size="md" className="text-center max-sm:text-[32px] max-sm:leading-[44px]">
                  11 Weird Things About Aaron Crash
                </Heading>
                <div className="pt-8  text-white text-md">
                  <ul className="list-none text-md font-light leading-[28px]">
                    <li className="ac-list-item-bullet relative pl-5 ">He used to run triathlons. Mostly he did Spring and Olympic Triathlons, but he did do a half Iron Man before he signed his first publishing contract and committed to a life writing books.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He's a huge Stephen King fan, and he loves THE DARK TOWER series.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He used to be a coffee shop writer, but then he transitioned to writing at home with a second monitor showing video game footage (cut scenes, trailers, and game music videos), or fashion videos (who doesn't love scantily clad women?), or ASMR camping videos (girls out in the wild). A few of his favorite YouTube channels are JackersEdit, MathChief, Black Tape Project, Camping Girls, and Karina Wild.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He's a terrible sleeper. When he can't sleep, he imagines he's inside one of his novels. He loves the house on Lonetree Ridge in LAND OF THE LUST, the little blue house in RAGE KING, and the Infinity Ranch in AMERICAN DRAGONS.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He has this really big group of friends from high school that he's still tight with. Three of his ex-girlfriends were at his wedding.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He doesn't mind really old decaf coffee.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He likes deer hunting, but his favorite part is going on hikes with a rifle over he shoulder. He sleeps so good at deer camp.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He didn't really start watching the Denver Broncos until he moved back to Colorado. Now, he never misses a game. His favorite Bronco season of all time is the 2011/2012 season when Tim Tebow (but mostly the defense) took them to the playoffs.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He used to support medical software, and he's been in operating rooms, smelling the Bovie, hearing the saws, while troubleshooting anesthesia documentation software. There is good naked and bad naked. Hospital naked is rarely good naked.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">He owns five bikes. Four of the bikes were given to him. He only bought one, his XXL mountain bike, which he got used. It's the most comfortable bike he's ever owned. He calls it The Cadillac.</li>
                    <li className="ac-list-item-bullet relative pl-5 ">After his mom passed, he committed to learning to play the guitar in her honor. He can play songs with eighth notes. He's a musical genius.</li>
                  </ul>
                </div>
              </div>
              <div className="max-w-[384px] mx-auto pt-[48px] text-white">
                <div>
                  <p className="text-md leading-[28px] font-light text-center mb-4">He's on Facebook a lot, talking to fans and posting cool art</p>
                  <a href="https://www.facebook.com/aaroncrashbooks" target="_blank">
                    <div className="bg-bg-about-social flex px-4 items-center justify-between cursor-pointer">
                      <p className="text-md font-regular leading-[28px] my-3 uppercase">Follow on Facebook</p>
                      <Image src="/assets/images/facebook.png" width={24} height={24} alt="facebook-icon" />
                    </div>
                  </a>
                </div>

                <div className="mt-8">
                  <p className="text-md leading-[28px] font-light text-center mb-4">
                    And if you want to get free stuff and support his work,
                    <br className="hidden md:block" /> he's on Patreon:
                  </p>
                  <a href="https://www.patreon.com/aaroncrashbooks" target="_blank">
                    <div className="bg-bg-about-social flex px-4 items-center justify-between cursor-pointer">
                      <p className="text-md font-regular leading-[28px] my-3 uppercase">join on patreon</p>

                      <Image src="/assets/images/patreon.png" width={24} height={24} alt="patreon-icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-inner lg:mt-lg">
        <Heading size="lg" className="text-center max-sm:text-[32px] max-sm:leading-[44px]">
          <Heading.Text variant="secondaryDark">join my </Heading.Text>
          <Heading.Text variant="primaryDark">arc team</Heading.Text>
        </Heading>

        <div className="max-w-[576px] mx-auto mt-[24px] md:mt-[56px] xl:px-0 px-[24px]">
          <ContactForm />
        </div>
      </section>

      <section className="mt-inner lg:mt-lg mb-0 md:mb-[180px] max-sm:pb-[60px]">
        <div className="container xl:px-0 px-[24px]">
          <Newsletter background="bg-gradient-to-r" secondaryTitle="Join my newsletter to receive a " primaryTitle="free digital copy of " highlightTitle="Time Jacker" coverImage="/assets/images/newsletter_cover.webp" />
        </div>
      </section>
    </>
  );
}
