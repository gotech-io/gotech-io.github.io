import { COLORS } from "../../common/colors";
import { ICONS } from "../../common/icons";
import { CLIENT_TITLES } from "../titles";

export const HEALTHCARE = {
  type: "HEALTHCARE",
  title: "Professional Services for the Healthcare Industry",
  description:
    "Delivering cutting-edge technology solutions to help healthcare companies thrive.",
  color: COLORS.GREEN,
  icon: ICONS.HEALTHCARE,
  link: "/clients/healthcare",

  clients: [
    "/assets/images/home/clients/scopio.png",
    "/assets/images/home/clients/brainlab.png",
    "/assets/images/home/clients/earlysense.png",
    "/assets/images/home/clients/dyn.png",
    "/assets/images/home/clients/paradigma.png",
    "/assets/images/home/clients/glucotrack.jpg",
  ],

  sections: [
    {
      title: "Mobilizing Healthcare with Custom Mobile Applications",
      description:
        "In today’s fast-paced world, patients expect to have access to their healthcare information on the go. Our team of mobile application developers can help healthcare companies meet these demands by creating custom mobile apps that are tailored to their specific needs. We have extensive experience in integrating mobile apps with various devices and technologies, enabling seamless communication between patients and healthcare providers.",
      image: { src: "/assets/images/home/clients/scopio.png", alt: "img" },
    },
    {
      title: "Optimizing Operations with Automation and DevOps",
      description:
        "Healthcare companies need to ensure that their systems are running smoothly and efficiently. Our team of experts can help by implementing automated testing and continuous integration/continuous deployment processes. This ensures that any bugs or issues are caught early and can be fixed quickly, resulting in less downtime and more streamlined operations.",
      image: { src: "/assets/images/home/clients/scopio.png", alt: "img" },
    },
    {
      title: "Ensuring Data Security with Secure REST APIs",
      description:
        "Security is of the utmost importance when it comes to healthcare data. Our team of developers can create a secure and scalable REST API that allows healthcare companies to share information between different systems and devices easily. This ensures that patient data is kept confidential and accessible only to those who need it.",
      image: { src: "/assets/images/home/clients/scopio.png", alt: "img" },
    },
    {
      title: "Providing Insights with Custom Management Dashboards",
      description:
        "Healthcare companies need to be able to access and analyze data in real time. Our team can create custom management dashboards that provide real-time insights into patient data, operations, and performance. This allows healthcare companies to make data-driven decisions and improve patient outcomes. With our expertise, we can help healthcare companies stay ahead of the game with cutting-edge technology solutions.",
      image: { src: "/assets/images/home/clients/scopio.png", alt: "img" },
    },
  ],
};
