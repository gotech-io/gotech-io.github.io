import { COLORS } from "../../common/colors";
import { ICONS } from "../../common/icons";
import { CLIENT_TITLES } from "../titles";

export const GOVERNMENT = {
  type: "GOVERNMENT",
  title: CLIENT_TITLES.GOVERNMENT,
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  color: COLORS.ORANGE,
  icon: ICONS.GOVERNMENT,
  link: "/clients/government",

  clients: [
    "/assets/images/home/clients/pmo.png",
    "/assets/images/home/clients/police.png",
    "/assets/images/home/clients/iso.png",
    "/assets/images/home/clients/navy.png",
    "/assets/images/home/clients/tax.png",
  ],

  sections: [],
};
