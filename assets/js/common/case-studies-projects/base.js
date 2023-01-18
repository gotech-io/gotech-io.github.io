import { COLORS } from "../colors";
import { ICONS } from "../icons";

export const BASE = {
  type: "BASE",
  title: "Base",
  description:
    "Base helps B2B companies engage their customers automatically throughout their lifecycle.",

  sections: [
    {
      type: "section-alpha",
      color: COLORS.GREEN,
      title: "About Client",
      paragraphs: [
        "Base is a B2B company that helps other businesses engage with their customers throughout their lifecycle.",
        "They offer a range of services, including advocacy, feedback, lead generation, and social amplification, all aimed at improving customer interactions and driving business growth. Base can help increase references, referrals, product reviews, ranking, loyalty, customer-based lead generation, crowd-based content creation, ideation, and more.",
      ],
    },
    {
      type: "section-beta",
      color: COLORS.MAIN,
    },
    {
      type: "section-gamma",
      color: COLORS.DEFAULT,
      title: "Challenge Faced",
      description:
        "As Base's client base grew, the demands on their R&D department increased.",
    },
    {
      type: "section-delta",
      color: COLORS.GREEN,
      title: "Our Solution",
      paragraphs: [
        "We took full ownership of Base's End-to-End and API automated testing. Using Java, Cucumber, and Playwright, we designed a comprehensive framework that integrated smoothly into Base's CI processes.",
        "We made automation an integral part of their manual regression testing, providing visibility through reporting, logging, and integration with external systems. This allowed our teams to work together effectively and provided Base with the confidence and reliability they needed to succeed.",
      ],
    },
    {
      type: "section-epsilon",
      color: COLORS.MAIN,
    },
  ],

  images: {
    mockup: {
      src: "/assets/images/case-studies/base/base1.jpg",
      alt: "base",
    },
    main: {
      src: "/assets/images/case-studies/base/base2.png",
      alt: "base",
    },
    parallax: {
      src: "/assets/images/case-studies/base/base3.jpg",
      alt: "base",
    },
  },

  steps: [
    "Base needed a solution that would integrate seamlessly into their existing processes and be easy for their teams to use.",
    "It was necessary to conduct a of End-to-End and API automated testing",
  ],

  introduction: [
    { title: "Country", description: "Israel" },
    { title: "Industry", description: "B2B Businesses" },
    {
      title: "Services Used",
      options: ["QA automation"],
      link: "/service/qa",
    },
    {
      title: "Technologies Stack",
      options: ["Java", "Cucumber", "Playwright"],
      link: "/service/qa/#technologies",
    },
  ],

  tags: [
    {
      title: "Cucumber",
      image: "/assets/images/technologies/icons/cucumber.png",
    },
    {
      title: "Playwright",
      image: "/assets/images/technologies/icons/playwright.jpeg",
    },
    { title: "Java", icon: ICONS.JAVA },
  ],
  button: { url: "/case-studies-project/base", btnText: "see more" },
};
