import { CONTACT } from "../contact";

export const FOOTER_INFO = [
  {
    title: "Company",
    list: [
      { title: "About Us", link: "/#about" },
      { title: "Services", link: "/services" },
      { title: "Clients", link: "/clients" },
      { title: "Teams", link: "/#team" },
      { title: "Cases", link: "/case-studies" },
      { title: "Careers", link: "/careers/" },
    ],
  },
  {
    title: "Services",
    list: [
      { title: "Web Development", link: "/service/web" },
      { title: "Mobile Development", link: "/service/mobile" },
      { title: "QA Development", link: "/service/qa" },
      { title: "DevOps", link: "/service/devops" },
    ],
  },
  {
    title: "Case Studies",
    list: [
      {
        title: "Application Development",
        link: "/case-studies-project/novotalk",
      },
      {
        title: "iOS & Android Development",
        link: "/case-studies-project/memomi",
      },
      { title: "QA Automation Tests", link: "/case-studies-project/base" },
    ],
  },
  {
    title: "Join Us",
    list: [CONTACT.SOCIAL_MEDIA, CONTACT.PHONE, CONTACT.ADDRESS],
  },
];
