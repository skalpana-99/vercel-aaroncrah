"use client";

import Image from "next/image";
import Heading from "./Heading";
import { Button } from "./Button";
import { createSubscriber } from "@/actions/createSubscriber";
import { useFormState } from "react-dom";
import { getCountry } from "@/utils/helpers";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface newsletterProps {
  secondaryTitle?: string;
  primaryTitle?: string;
  highlightTitle?: string;
  higlightStyle?: string;
  background?: string;
  coverImage: string;
  coverStyle?: string;
  mobileBg?: string;
}

const initialState = {
  message: "",
  error: "",
};

export function Newsletter({ secondaryTitle, primaryTitle, highlightTitle, higlightStyle, coverImage, coverStyle, background, mobileBg }: newsletterProps) {
  const [state, subscribe] = useFormState(createSubscriber, initialState);

  const [country, setCountry] = useState("");

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  function handleChange(value: string | null) {
    setCaptchaValue(value);
    state.message = "Sign up";
  }

  useEffect(() => {
    async function getCountryClientSide() {
      const clientCountry = await getCountry();
      setCountry(clientCountry);
    }
    getCountryClientSide();
  }, []);

  return (
    <div
      className={`
      relative grid grid-cols-1 sm:grid-cols-[1fr_2fr] max-xl:gap-[50px] max-sm:gap-0 items-center
      rounded-md ${background} from-[#aa9fb4] from-20% to-[#512e30]
      max-sm:flex max-sm:flex-col-reverse max-sm:pt-[40px] 
    `}
    >
      {/* Background blur */}
      <div className={`absolute inset-0 rounded-md backdrop-blur-lg ${mobileBg ? mobileBg : ""}`}></div>

      {/* Image newsltter */}
      <div className="max-lg:relative max-lg:h-full flex justify-center max-sm:w-full">
        <Image
          className={`
            z-50
          max-sm:relative max-sm:top-16 sm:absolute sm:top-[30px] sm:left-[40px] lg:left-[70px]
          max-lg:w-full max-sm:w-[70%] ${coverStyle ? coverStyle : ""}
        `}
          src={coverImage}
          width={337}
          height={718}
          alt="newsletter"
        />
      </div>

      {/* Content  */}
      <div className="relative z-50 p-[50px] lg:p-[100px] max-sm:px-[40px] max-sm:pb-0 max-sm:pt-0 lg:pt-[65px] lg:pb-[130px]">
        {/* Heading */}
        <Heading level={2} size="lg" variant="primaryLight" className="md:leading-[80px] max-sm:text-center">
          {secondaryTitle && <Heading.Text variant="secondaryLight">{secondaryTitle}</Heading.Text>}
          {primaryTitle && <Heading.Text variant="primaryLight">{primaryTitle}</Heading.Text>}
          {highlightTitle && <Heading.Text className={`text-primary  ${higlightStyle ? higlightStyle : ""}`}>{highlightTitle}</Heading.Text>}
        </Heading>

        {/* newsletter Form */}
        <div className="mt-8 relative">
          <form action={subscribe}>
            <input type="hidden" name="country" value={country} />
            <input type="hidden" name="recaptchaToken" value={captchaValue || ""} />
            <div>
              <input
                className={`
                min-h-[52px] w-full border border-white bg-transparent text-white text-md font-light
                placeholder:text-white uppercase pl-4 py-[10px] focus:outline-none focus:ring-0 focus:border-white
              `}
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </div>

            <div className="mt-4">
              <input
                className={`
                min-h-[52px] w-full border border-white bg-transparent text-white text-md font-light
                placeholder:text-white uppercase focus:outline-none focus:ring-0 focus:border-white
              `}
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>

            <Button type="submit" variant="primaryLight" size="full" className="mt-8 hover:shadow-[5px_5px_20px_#00000080] transition duration-200">
              {state?.message ? state.message : "Sign Up"}
            </Button>

            {/* Success/Error Message */}
            <div className="absolute  bottom-[-100px]">
              <ReCAPTCHA style={{ display: "inline-block", marginTop: "20px" }} theme="dark" sitekey="6LfKu-EqAAAAAE3dOTDnHX51BnqXQdfyT5p7CNlI" onChange={handleChange} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
