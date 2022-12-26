import { COLORS } from "../colors";
import { ICONS } from "../icons";
import { MEDICINE } from "./categories/medicine";
import { CLIENT_TITLES } from "./const";

export const listCategories = [
  MEDICINE,
  {
    type: "EDUCATION",
    title: CLIENT_TITLES.EDUCATION,
    color: COLORS.BLUE,
    icon: ICONS.EDUCATION,
    link: "clients/education",
  },
  {
    type: "SHOPPING",
    title: CLIENT_TITLES.SHOPPING,
    color: COLORS.PINK,
    icon: ICONS.SHOPPING,
    link: "clients/shopping",
  },
  {
    type: "CRYPTOCURRENCY",
    title: CLIENT_TITLES.CRYPTOCURRENCY,
    color: COLORS.ORANGE,
    icon: ICONS.CRYPTOCURRENCY,
    link: "clients/cryptocurrency",
  },
  {
    type: "AI",
    title: CLIENT_TITLES.AI,
    color: COLORS.PURPLE,
    icon: ICONS.AI,
    link: "clients/ai",
  },
  {
    type: "GOVERNMENT",
    title: CLIENT_TITLES.GOVERNMENT,
    color: COLORS.PRIME,
    icon: ICONS.GOVERNMENT,
    link: "clients/government",
  },
];
