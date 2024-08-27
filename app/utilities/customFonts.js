import localFont from "next/font/local";

const fonts = localFont({
  src: [
    {
      path: "../assets/fonts/DFPOPCorn-W7.ttf",
    },
    {
      path: "../assets/fonts/Prompt-Medium",
    },
  ],
});

export { fonts };