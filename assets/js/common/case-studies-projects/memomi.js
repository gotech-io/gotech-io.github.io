import { COLORS } from "../colors";

export const MEMOMI = {
  type: "MEMOMI",
  title: "Memomi ",
  description:
    "Memomi is the award-winning smart mirror software transforming the luxury shopping market.",

  sections: [
    {
      type: "section-alpha",
      color: COLORS.GREEN,
      title: "About Client",
      paragraphs: [
        "Memomi is a developer of an augmented reality and artificial intelligence platform that enables customers to try products virtually and receive personalized product recommendations. They approached GoTech needing help integrating an AR engine between their server and mobile applications.",
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
        "Memomi needed assistance integrating their complex AR engine between the server and mobile applications.",
    },
    {
      type: "section-delta",
      color: COLORS.GREEN,
      title: "Our Solution",
      paragraphs: [
        "GoTech was able to help Memomi integrate the AR engine into their server and mobile applications, both for iOS and Android. Our team of experts has experience in AR and ML, and was able to deliver high-quality mobile applications that offered a seamless and engaging AR experience.",
        "We also assisted Memomi in integrating the SDK into their clients' applications, further enhancing the functionality of their platform. With GoTech's help, Memomi was able to overcome the challenges of integrating their AR engine and take their platform to the next level. Memomi was eventually acquired by Walmart.",
      ],
    },
    {
      type: "section-epsilon",
      color: COLORS.MAIN,
    },
  ],

  images: {
    mockup: {
      src: "/assets/images/case-studies/memomi/memomi1.jpg",
      alt: "memomi",
    },
    main: {
      src: "/assets/images/case-studies/memomi/memomi2.png",
      alt: "memomi",
    },
    parallax: {
      src: "/assets/images/case-studies/memomi/memomi3.jpg",
      alt: "memomi",
    },
  },

  steps: [
    "Needed to be integrating the SDK into their clients' applications",
    "It was necessary to develop a system for machine learning and augmented reality",
  ],

  introduction: [
    { title: "Country", description: "Israel" },
    { title: "Industry", description: "AR Market" },
    { title: "Services Used", options: ["Mobile"], link: "/service/mobile" },
    {
      title: "Technologies Stack",
      options: ["iOS", "Android", "ML", "AR", "SDK"],
      link: "/service/mobile/#technologies",
    },
  ],

  tags: ["iOS", "Android", "ML", "AR", "SDK"],
  button: { url: "/case-studies-project/memomi", btnText: "see more" },
};
