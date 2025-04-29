"use client";

import { Button } from "./Button";
import { createArcJoiner } from "@/actions/createJoiner";
import { useFormState } from "react-dom";
import { getCountry } from "@/utils/helpers";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const initialState = {
  message: "",
  error: "",
};

export function JoinArcForm() {
  const [state, createEntry] = useFormState(createArcJoiner, initialState);

  console.log(state);

  const [country, setCountry] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  function handleChange(value: string | null) {
    setCaptchaValue(value);
  }

  useEffect(() => {
    async function getCountryClientSide() {
      const clientCountry = await getCountry();
      setCountry(clientCountry);
    }
    getCountryClientSide();
  }, []);
  return (
    <form action={createEntry}>
      <div className="flex flex-col gap-xsm">
        <div>
          <input type="hidden" name="country" value={country} />
          <input type="hidden" name="recaptchaToken" value={captchaValue || ""} />
          <input required className="w-full h-[52px] bg-mute-3 uppercase focus:outline-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <input required className="w-full h-[52px] bg-mute-3 uppercase focus:outline-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" name="email" type="text" placeholder="Email" />
        </div>
        <div>
          <input required className="w-full h-[52px] bg-mute-3 uppercase focus:outline-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" name="favorite-book" type="text" placeholder="What's your favorite Aaron Crash book?" />
        </div>
        <div>
          <textarea required className="w-full  bg-mute-3 focus:outline-none uppercase resize-none focus:ring-0 focus:border-mute-2 border-mute-2 text-mute placeholder:text-mute" name="message" placeholder="your message here" rows={8}></textarea>
        </div>
      </div>
      {/* <div className="mt-4">
        <ReCAPTCHA style={{ display: "inline-block" }} theme="light" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} onChange={handleChange} />
      </div> */}
      <div>
        <Button type="submit" variant="primary" size="full" className="mt-8">
          Submit
        </Button>
        {/* Success/Error Message */}
        <p className="mt-4 text-center text-base font-light text-[#3ede75] uppercase">{state?.message}</p>
      </div>
    </form>
  );
}
