import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        menuBackground: "rgba(217, 217, 217, 0.1)",
        'about-blur-bg-color': "rgb(43 41 66 / 90%)",
        'bg-about-social': "rgb(255 255 255 / 20%)",
        'mute-2': "rgb(0 0 0 / 20%)",
        'mute': "rgb(0 0 0 / 40%)",
        'mute-3': "rgb(0 0 0 / 5%)",

      },
      fontFamily: {
        sans: ['var(--font-oswald)'],
      },
      fontSize: {
        "24": "24px",
        "md": "var(--text-medium)",
        "2xs": "var( --heading-secondary)",
      },
      margin: {
        xl: "var(--large-space)",
        lg: "var(--section-space)",
        md: "var(--medium-space)",
        inner: "var(--inner-space)",
        sm: "var(--small-space)",
        xsm: "var(--xsmall-space)",
      },
      padding: {
        xl: "var(--large-space)",
        lg: "var(--section-space)",
        inner: "var(--inner-space)",
        md: "var(--medium-space)",
        sm: "var(--small-space)",
        xsm: "var(--xsmall-space)",
      },
      borderRadius: {
        md: "var(--border-radius)",
      },
      gap: {
        md: "var(--medium-space)",
        xsm: "var(--xsmall-space)",
        sm: "var(--small-space)",
      },
      lineHeight: {
        sm: "var(--small-space)",
        xsm: "var(--xsmall-space)",
      },
      backgroundImage: {
        'headerV2-bg': "url('/assets/images/header-bg-2.png')",
        'headerV3-bg': "url('/assets/images/header-bg-3.png')",
        'headerV3-gradient': 'linear-gradient(#000, 60%, transparent)',
        'hero-01': "url('/assets/images/hero_bg_re.jpg')",
        'hero-02': "url('/assets/images/hero-bg-2.webp')",
        'bundle-bg-book': "url('/assets/images/bundle-bg-books.webp')",
        'bundle-bg-book-gradient': "linear-gradient(90deg, rgb(0 0 0 / 70%) 0%, rgb(0 0 0 / 60%) 49%, rgba(0, 0, 0, 0) 100%)",
        'bundle-bg-book-gradient-mobile': "linear-gradient(180deg, rgb(0 0 0 / 70%) 0%, rgb(0 0 0 / 60%) 49%, rgba(0, 0, 0, 0) 100%)",
        'bundle-bg-1-3': "url('/assets/images/bundle-bg-1-3.webp')",
        'bundle-gradient': "linear-gradient(90deg, rgb(0 0 0 / 70%) 0%, rgb(0 0 0 / 60%) 49%, rgba(0, 0, 0, 0) 100%)",
        'hero-tab-blur': "url('/assets/images/hero-tab-blur-bg.png')",
        'bundle-bg-series': "url('/assets/images/bundle-bg-series.png')",
        'bundle-series': "url('/assets/images/bundle-books-series.png')",
        'book-card': "linear-gradient(196deg, #c1c1c1, #efefef)",
      },
      keyframes: {
        // Add custom keyframes here
      },
      animation: {
        // Add custom animations here
      },
    },
  },
  plugins: [typography, forms],
};

export default config;
