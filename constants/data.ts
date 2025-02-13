import { footerLink, stat, testimonial } from "./types";

export const stats: stat[] = [
  {
    title: "User Active",
    count: "3800+",
    hasBorder: true,
  },
  {
    title: "Trusted By Company",
    count: "230+",
    hasBorder: true,
  },
  {
    title: "Transactions",
    count: "$230m+",
    hasBorder: false,
  },
];

export const testimonials: testimonial[] = [
  {
    author: "Herman Jensen",

    desc: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  },
  {
    author: "Steve Mark",
    desc: "Money makes your life easier. If you're lucky to have it, you're lucky.",
  },
  {
    author: "Kenn Gallagher",
    desc: "It is usually people in the money business, finance, and international trade that are really rich.",
  },
];

export const footerlinks: footerLink[] = [
  {
    title: "Useful Links",
    links: ["Content", "How it Works", "Create", "Explore", "Terms & Services"],
  },
  {
    title: "Community",
    links: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"],
  },
  {
    title: "Partner",
    links: ["Our Partner", "Become a Partner"],
  },
];
