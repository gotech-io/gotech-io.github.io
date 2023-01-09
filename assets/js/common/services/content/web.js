import { COLORS } from "../../colors";
import { ICONS } from "../../icons";
import { SECTIONS } from "../../sections";

export const WEB_DEV = {
  title: "Web Development",
  details:
    "Web teams to be responsible for the coding, innovative design and layout of the website",
  description:
    "Web teams to be responsible for the coding, innovative design and layout of the website. Web developers responsibilities include building the website from concept all the way to completion.",
  url: "/service/web",
  color: COLORS.GREEN,

  sections: [
    {
      type: SECTIONS.ALPHA,
      color: COLORS.GREEN,
      title: "our services",
      description:
        "GoTech is your reliable partner for any business-changing solutions. Our teams help build your brand, increase your identity, promote your products and services to help you gain a competitive advantage.",
    },
    {
      type: SECTIONS.BETA,
      color: COLORS.MAIN,
      title: "app development process",
      paragraphs: [
        "Whether you decide to develop your web application in-house team or outsource, your project will be more successful if you understand the process involved in web application development in advance.",
        "There is a long and complex process that starts with receiving a client’s request and finishes with developing an application and successfully launching it. Yet we apply the best methods and techniques to make this process run smoothly and to facilitate the efficiency of each of its stages.",
      ],
    },
    {
      type: SECTIONS.GAMMA,
      color: COLORS.YELLOW,
      title: "First Point of Engagement with your buisnes",
      paragraphs: [
        "Your web app is the place that reflects what you do, your services, products, and your reputation. We help you develop end-to-end custom web applications designed to meet your specific business challenges. Leverage the next-gen technologies with our custom web application development services to build innovations that help you stand out from the crowd!",
        "Having an app is an opportunity to build a great first impression and give people assurance that you’re a modern business.",
      ],
    },
    {
      type: SECTIONS.DELTA,
      color: COLORS.MAIN,
      title: "technologies",
      description:
        "We offer only well-recognized and time-tested technologies to support any of your business goals. The following web development technologies enable the creation of high-performing, fast, and advanced web applications.",
    },
    {
      type: SECTIONS.EPSILON,
      color: COLORS.PRIME,
      title: "You Business have a Smart Future",
      paragraphs: [
        "Web development is defined through the upcoming trends and changes in the digital world. Businesses around the globe are in a quest to build outstanding websites. If you want your business to stay ahead of the race, the smartest thing u can do is to try out innovative and brave things.",
        "We are not afraide to experiment and provide our clients with customized, robust, and secure web applications within the stipulated time and budget.",
      ],
    },
    {
      type: SECTIONS.ZETA,
      color: COLORS.MAIN,
      title: "case studies example",
      description:
        "Our teams help integrate the tailored experience of native apps with easy access on a website browser from any device, that provide immersive and tailored experiences like the native apps directly from the browser.",
    },
  ],

  stages: [
    { title: "Strategy", color: COLORS.GREEN, icon: ICONS.STRATEGY },
    {
      title: "Design",
      color: COLORS.BLUE,
      icon: ICONS.DESIGN,
    },
    {
      title: "Development",
      color: COLORS.YELLOW,
      icon: ICONS.DEVELOP,
    },
    {
      title: "Testing",
      color: COLORS.ORANGE,
      icon: ICONS.BUG,
    },
    {
      title: "Launch",
      color: COLORS.PINK,
      icon: ICONS.LAUNCH,
    },
    {
      title: "Support",
      color: COLORS.PURPLE,
      icon: ICONS.SUPPORT,
    },
  ],

  services: [
    {
      icon: "FRONT_DEV",
      title: "Front-end Development",
      description:
        "Front-end development primarily focuses on user experience. Using the related coding and design techniques, you as front-end developers build the elements of an application that are directly accessed by end-users with a goal of rendering the entire interface elegant, easy to use, fast, and secure, fostering user engagement and interaction.",
    },
    {
      icon: "BACK_DEV",
      title: "Back-end Development",
      description:
        "Back-end development is the process of building the components for running the application behind the scenes. Examples are components for data storage, infrastructure, integration with external systems, and code written in one or more programming languages. Users cannot access the back end.",
    },
  ],

  technologies: [
    { title: "angular", icon: "/assets/images/technologies/web/angular.png" },
    { title: "react", icon: "/assets/images/technologies/web/react.png" },
    { title: "c#", icon: "/assets/images/technologies/web/c.png" },
    {
      title: "bootstrap",
      icon: "/assets/images/technologies/web/bootstrap.png",
    },
    { title: "material", icon: "/assets/images/technologies/web/material.png" },
    { title: "css", icon: "/assets/images/technologies/web/css.png" },
    { title: "sass", icon: "/assets/images/technologies/web/sass.png" },
    { title: "java", icon: "/assets/images/technologies/web/java.png" },
    { title: "spring", icon: "/assets/images/technologies/web/spring.png" },
    { title: "python", icon: "/assets/images/technologies/web/python.png" },
    { title: "django", icon: "/assets/images/technologies/web/django.png" },
    { title: "js", icon: "/assets/images/technologies/web/js.png" },
    { title: "ts", icon: "/assets/images/technologies/web/ts.png" },
    { title: "nodejs", icon: "/assets/images/technologies/web/nodejs.png" },
    { title: "redux", icon: "/assets/images/technologies/web/redux.png" },
    { title: "mobx", icon: "/assets/images/technologies/web/mobx.png" },
    { title: "rxjs", icon: "/assets/images/technologies/web/rxjs.png" },
    { title: "zustand", icon: "/assets/images/technologies/web/zustand.png" },
    { title: "prisma", icon: "/assets/images/technologies/web/prisma.png" },
    { title: "typeorm", icon: "/assets/images/technologies/web/typeorm.png" },
  ],

  example: "NOVOTALK",
};
