import { COLORS } from "../colors";
import { ICONS } from "../icons";

export const AI21LABS = {
  type: "AI21LABS",
  title: "AI21 Labs",
  description:
    "When Machines Become Thought Partners. AI has a way to go before it matches human intelligence. We aim to get it a little bit closer.",

  sections: [
    {
      type: "section-alpha",
      color: COLORS.GREEN,
      title: "About Client",
      paragraphs: [
        "AI21 Labs is a cutting-edge technology company that specializes in developing solutions to augment human writing.",
        "They are the creators of Wordtune, a popular tool that helps users write clearly and authentically by suggesting the right sentences.",
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
        "AI21 Labs was facing several challenges with their QA automation tests. The tests were unstable, unorganized, and not providing the results they were looking for.",
    },
    {
      type: "section-delta",
      color: COLORS.GREEN,
      title: "Our Solution",
      paragraphs: [
        "We designed a stable, high-performance, and easy-to-maintain test framework that suited AI21 Labs' specific needs.",
        "Following best practices in test automation, using Playwright and Mocha, we designed the framework to be easy to use and maintain, while still providing the stability and performance that AI21 Labs needed. This allows them to have complete confidence in the results of their automated tests.",
      ],
    },
    {
      type: "section-epsilon",
      color: COLORS.MAIN,
    },
  ],

  images: {
    mockup: {
      src: "/assets/images/case-studies/ai21labs/ai21labs1.jpg",
      alt: "ai21labs",
    },
    main: {
      src: "/assets/images/case-studies/ai21labs/ai21labs2.png",
      alt: "ai21labs",
    },
    parallax: {
      src: "/assets/images/case-studies/ai21labs/ai21labs3.jpg",
      alt: "ai21labs",
    },
  },

  steps: [
    "Needed to be a new test framework that would support multi-platform tests on their Chrome extension",
    "Needed to be migrated their previous tests into the new framework",
  ],

  introduction: [
    { title: "Country", description: "Israel" },
    { title: "Industry", description: "Artificial intelligence" },
    { title: "Services Used", options: ["QA automation"], link: "/service/qa" },
    {
      title: "Technologies Stack",
      options: ["Playwright", "Mocha"],
      link: "/service/qa/#technologies",
    },
  ],

  tags: [
    {
      title: "Playwright",
      image: "/assets/images/technologies/icons/playwright.jpeg",
    },
    { title: "Mocha", image: "/assets/images/technologies/icons/mocha.png" },
  ],
  button: { url: "/case-studies-project/labs", btnText: "see more" },
};
