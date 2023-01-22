import { COLORS } from "../../common/colors";
import { ICONS } from "../../common/icons";
import { CLIENT_TITLES } from "../titles";

export const FINANCE = {
  type: "FINANCE",
  title: CLIENT_TITLES.FINANCE,
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  color: COLORS.YELLOW,
  icon: ICONS.FINANCE,
  link: "/clients/finance",

  clients: [
    "/assets/images/home/clients/rewire.png",
    "/assets/images/home/clients/altshuler.png",
    "/assets/images/home/clients/surecomp.png",
    "/assets/images/home/clients/mimun.png",
    "/assets/images/home/clients/migdal.png",
    "/assets/images/home/clients/tastock.png",
    "/assets/images/home/clients/oneZero.png",
    "/assets/images/home/clients/menora.png",
    "/assets/images/home/clients/travelersbox.png",
    "/assets/images/home/clients/orbs.png",
  ],

  content: {
    title: "Our Clients on Finance & Cryptocurrency Category",
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
