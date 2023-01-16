import { COLORS } from "../../common/colors";
import { ICONS } from "../../common/icons";
import { CLIENT_TITLES } from "../titles";

export const EDUCATION = {
  type: "EDUCATION",
  title: CLIENT_TITLES.EDUCATION,
  description: "Add Here",
  color: COLORS.BLUE,
  icon: ICONS.EDUCATION,
  link: "/clients/education",

  clients: [
    "/assets/images/home/clients/walmart.png",
    "/assets/images/home/clients/qualcomm.png",
    "/assets/images/home/clients/qualcomm.png",
    "/assets/images/home/clients/qualcomm.png",
  ],

  content: {
    title: "Our Clients on Education Category",
    description: "Add Here",
    clients: [
      {
        title: "Novotalk",
        description: "Add Here",
        range: 5,
        clientName: "Client First",
        image: "/",
      },
    ],
  },
};
