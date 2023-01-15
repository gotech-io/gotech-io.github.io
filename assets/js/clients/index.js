import { COLORS } from "../common/colors";
import { SECTIONS } from "../common/sections";

export const CLIENTS_DETAILS = {
  title: "Our Best Clients",
  description:
    "GoTech creates software products in collaboration with governments and engages in volunteer work, charitable activities. We working with small startups and Giant companies from the Forbes list.",

  sections: [
    {
      type: SECTIONS.ALPHA,
      color: COLORS.GREEN,
      title: "Expertise & Competencies",
      description:
        "With our technical know-how and experience engineering sophisticated IT systems, we can help you achieve your business objectives in tune with your time, budget, and expectations.",
    },
    {
      type: SECTIONS.BETA,
      color: COLORS.GRAY,
      title: "Please choose one interesting of all Industries!",
      description:
        "Access domain expertise and market knowledge to help your business evolve and scale with a relevant tech solution.",
    },
    {
      type: SECTIONS.GAMMA,
      color: COLORS.PRIME,
    },
  ],
};
