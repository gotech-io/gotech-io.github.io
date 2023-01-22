import { COLORS } from "../../common/colors";
import { ICONS } from "../../common/icons";
import { CLIENT_TITLES } from "../titles";

export const NETWORK = {
  type: "NETWORK",
  title: CLIENT_TITLES.NETWORK,
  description: "Add Here",
  color: COLORS.BLUE,
  icon: ICONS.NETWORK,
  link: "/clients/network",

  clients: [
    "/assets/images/home/clients/celltick.png",
    "/assets/images/home/clients/cisco.svg",
    "/assets/images/home/clients/klh.png",
    "/assets/images/home/clients/cellcom.png",
    "/assets/images/home/clients/pelephone.png",
    "/assets/images/home/clients/cellwize.png",
    "/assets/images/home/clients/telicomm.png",
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
