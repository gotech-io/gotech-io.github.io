import { COLORS } from "../../common/colors";
import { ICONS } from "../../common/icons";
import { CLIENT_TITLES } from "../titles";

export const SHOPPING = {
  type: "SHOPPING",
  title: CLIENT_TITLES.SHOPPING,
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  color: COLORS.PINK,
  icon: ICONS.SHOPPING,
  link: "/clients/shopping",

  clients: [
    "/assets/images/home/clients/augury.png",
    "/assets/images/home/clients/namogoo.png",
    "/assets/images/home/clients/weissbeerger.png",
    "/assets/images/home/clients/lightico.png",
    "/assets/images/home/clients/lisuto.png",
    "/assets/images/home/clients/lusha.png",
    "/assets/images/home/clients/promo.png",
    "/assets/images/home/clients/rfkeeper.png",
    "/assets/images/home/clients/roojoom.png",
    "/assets/images/home/clients/riskified.png",
    "/assets/images/home/clients/renuar.png",
    "/assets/images/home/clients/toolway.png",
  ],

  content: {
    title: "Our Clients on Commerce & Retail Category",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    clients: [
      {
        title: "Project Name 1",
        description:
          "fghjlk jjgfg vcjvkjdhvj dgv fhvjhdfgvjhdg vjhdg vdfvgdjhvgdjhvg jdhfvbdjhvdjhfvjhdfgvbhjdb",
        range: 5,
        clientName: "Client First",
        image: "/",
      },
      {
        title: "Project Name 2",
        description:
          "fghjlk jjgfg vcjvkjdhvj dgv fhvjhdfgvjhdg vjhdg vdfvgdjhvgdjhvg jdhfvbdjhvdjhfvjhdfgvbhjdb",
        range: 3,
        clientName: "Client Second",
        image: "/",
      },
    ],
  },
};
