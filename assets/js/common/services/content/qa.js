import { COLORS } from "../../colors";
import { ICONS } from "../../icons";
import { SECTIONS } from "../../sections";

export const QA_DEV = {
  title: "QA Automation",
  details: "Upgrade the quality of your software with a certified QA team.",
  description:
    "With our test automation services, we can help you accurately check the software so that human error isn't an issue. It will speed up testing and increase coverage for future updates with minimal time investment on your part, while getting a higher return on investment (ROI) in the long run.",
  link: "/service/qa",
  image: "/assets/images/services/qa.png",

  sections: [
    {
      type: SECTIONS.ALPHA,
      color: COLORS.MAIN,
      title: "Our Services",
      paragraphs: [
        "GoTech will devise a tailored testing strategy or improve on your established QA processes that proved inefficient.",
        "We offer services such as implementing and integrating automation infrastructure, developing test tools and reporting tools, and providing automation training to your team.",
      ],
    },
    {
      type: SECTIONS.BETA,
      color: COLORS.DEFAULT,
      title: "Test Automation Range",
      description:
        "Our experts have extensive experience in automation, and can help you create stable and maintainable test automation systems that will save time and improve the reliability of your software",
    },
    {
      type: SECTIONS.GAMMA,
      color: COLORS.ORANGE,
      paragraphs: [
        "GoTech will devise a tailored testing strategy or improve on your established QA processes that proved inefficient.",
        "Functional tests will verify how well the entire system operates, what results it yields, and which aspects need to be improved.",
        "Our team will evaluate how stable and responsive the software is under normal and extreme workloads. Subjecting your system to an individual set of tests on stress resilience and load endurance, we will assess its compliance with performance criteria and detect scalability limits.",
      ],
    },
    {
      type: SECTIONS.DELTA,
      color: COLORS.MAIN,
      title: "Technologies",
      paragraphs: [
        "We design a custom set of QA testing services depending on your vertical to properly address every specific botch, bottleneck, or risk.",
        "We offer only well-recognized and time-tested technologies to support any of your business goals.",
      ],
    },
    {
      type: SECTIONS.EPSILON,
      color: COLORS.PRIME,
      paragraphs: [
        "GoTech teams will build a tailored automated testing framework covering your development scope and requirements.",
        "We will run a multi-faceted evaluation to measure the level of the system protection and the safety of sensitive user data. Our team will scan for vulnerabilities in the network infrastructure, the client & server sides, as well as perform a series of simulated tests to reveal all possible flaws.",
      ],
    },
    {
      type: SECTIONS.ZETA,
      color: COLORS.MAIN,
      title: "Case Studies Example",
      description:
        "We have a proven track record of building high quality solutions for customers all over the world.",
    },
  ],

  stages: [
    { title: "unit testing", color: COLORS.GREEN, icon: ICONS.UNIT },
    {
      title: "sanity & smoke testing",
      color: COLORS.BLUE,
      icon: ICONS.SANITY,
    },
    {
      title: "cross-platform testing",
      color: COLORS.YELLOW,
      icon: ICONS.CROSS_PLATFORM,
    },
    {
      title: "regression testing",
      color: COLORS.ORANGE,
      icon: ICONS.REGRESSION,
    },
    {
      title: "integration testing",
      color: COLORS.PINK,
      icon: ICONS.INTEGRATION,
    },
    {
      title: "automated testing",
      color: COLORS.PURPLE,
      icon: ICONS.AUTOMATED,
    },
  ],

  services: [
    {
      icon: "QA_AUTO",
      title: "Automated Testing",
      description:
        "Our software teams will unleash the full potential of Automation Testing for your company, reduce QA costs, speed up your time to market, and give a transparent overview of the state of your product at any time",
    },
    {
      icon: "QA_MANUAL",
      title: "Manual Testing",
      description:
        "Manual Testing is a type of software testing in which test cases are executed manually by a tester without using any automated tools. The purpose of Manual Testing is to identify the bugs, issues, and defects in the software application. Manual software testing is the most primitive technique of all testing types and it helps to find critical bugs in the software application.",
    },
  ],

  technologies: [
    { title: "jenkins", icon: "/assets/images/technologies/qa/jenkins.png" },
    { title: "postman", icon: "/assets/images/technologies/qa/postman.png" },
    { title: "selenium", icon: "/assets/images/technologies/qa/selenium.png" },
    { title: "cucumber", icon: "/assets/images/technologies/qa/cucumber.png" },
    { title: "appium", icon: "/assets/images/technologies/qa/appium.png" },
    { title: "chai", icon: "/assets/images/technologies/qa/chai.png" },
    { title: "mocha", icon: "/assets/images/technologies/qa/mocha.png" },
    {
      title: "cinelytic",
      icon: "/assets/images/technologies/qa/cinelytic.png",
    },
    { title: "junit", icon: "/assets/images/technologies/qa/junit.png" },
    { title: "nunit", icon: "/assets/images/technologies/qa/nunit.png" },
    {
      title: "playwrihht",
      icon: "/assets/images/technologies/qa/playwright.png",
    },
  ],

  example: "BASE",
};
