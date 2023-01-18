import { COLORS } from "../colors";
import { ICONS } from "../icons";

export const ORBS = {
  type: "ORBS",
  title: "Orbs ",
  description:
    "Orbs is an open, decentralized and public blockchain infrastructure executed by a secure network of permission less validators using Proof-of-Stake (PoS) consensus.",

  sections: [
    {
      type: "section-alpha",
      color: COLORS.GREEN,
      title: "About Client",
      paragraphs: [
        "Orbs is a developer of a public blockchain infrastructure designed for mass usage applications and close integration with EVM-based L1’s such as Ethereum, Binance SmartChain and Polygon.",
        "They came to GoTech needing help building complex Front-End projects, including dashboards, monitors, and the company's website.",
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
        "Orbs was looking for a partner who could take ownership of entire projects, think big, and work independently while providing high-quality products.",
    },
    {
      type: "section-delta",
      color: COLORS.GREEN,
      title: "Our Solution",
      paragraphs: [
        "GoTech was able to help Orbs with their Front-End projects, taking ownership of entire projects and delivering high-quality results. Our team has the ability to think big and work independently, and was able to provide Orbs with the solutions they needed.",
        "We were able to build complex dashboards, monitors, and the company's website, all to their specifications and to the highest standards.",
        "Thanks to the quality of our work, Orbs was able to improve their platform and continue to grow and succeed. With GoTech's help, they were able to overcome their challenges and achieve their goals.",
      ],
    },
    {
      type: "section-epsilon",
      color: COLORS.MAIN,
    },
  ],

  images: {
    mockup: {
      src: "/assets/images/case-studies/orbs/orbs1.jpg",
      alt: "orbs",
    },
    main: {
      src: "/assets/images/case-studies/orbs/orbs2.png",
      alt: "orbs",
    },
    parallax: {
      src: "/assets/images/case-studies/orbs/orbs3.jpg",
      alt: "orbs",
    },
  },

  steps: [
    "They needed a team that could handle the complexity of their Front-End projects",
  ],

  introduction: [
    { title: "Country", description: "Israel" },
    { title: "Industry", description: "Blockchain Infrastructure" },
    { title: "Services Used", options: ["FrontEnd"], link: "/service/web" },
    {
      title: "Technologies Stack",
      options: ["React", "Cuttlebelle", "Redux"],
      link: "/service/web/#technologies",
    },
  ],
  tags: [
    { title: "React.js", icon: ICONS.REACT },
    { title: "Redux", image: "/assets/images/technologies/icons/redux.png" },
    { title: "CSS", icon: ICONS.CSS },
  ],

  button: { url: "/case-studies-project/orbs", btnText: "see more" },
};
