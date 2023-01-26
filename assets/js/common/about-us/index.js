import { COLORS } from "../colors";
import { SECTIONS } from "../sections";

export const ABOUT_US_DETAILS = {
  title: "About Us",
  description:
    "We help Fortune 500 companies, startups, and enterprises to build relevant digital products, train their teams, solve business problems, and reduce costs while increasing efficiency.",

  video: {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6880909146707787776?compact=1",
    title: "GoTech",
  },

  sections: [
    {
      type: SECTIONS.ALPHA,
      color: COLORS.MAIN,
      title: "You can see Us here!",
      description: "Add here",
    },
    {
      type: SECTIONS.BETA,
      color: COLORS.GREEN,
      title: "Why choose Us?",
      description:
        "With years of experience in the industry, our team has the skills and expertise to deliver top-notch solutions that drive real results for our clients. We are committed to providing exceptional customer service and working closely with our clients to ensure their success.",
    },
    {
      type: SECTIONS.GAMMA,
      color: COLORS.MAIN,
      title: "Meet our professional team!",
      description:
        "At GoTech, we believe in the power of collaboration and partnerships. We work closely with our clients to understand their unique challenges and develop solutions that are tailored to their specific needs. Our team is dedicated to helping our clients achieve their goals and succeed in today's competitive market.",
    },
    {
      type: SECTIONS.DELTA,
      color: COLORS.YELLOW,
      title: "With us, you are a step ahead",
      description:
        "We don’t just simply initiate your project. We step into your shoes and perform a detailed analysis of your business landscape to give you the most purposeful solution. Contact us today to learn more about our services and see how we can help your business grow and thrive.",
    },
  ],
};
