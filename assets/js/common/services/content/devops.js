import { COLORS } from "../../colors";
import { ICONS } from "../../icons";
import { SECTIONS } from "../../sections";

export const DEVOPS_DEV = {
  title: "DevOps",
  details:
    "Boost the efficiency of your tech and business processes with our professional DevOps engineers.",
  description:
    "We work with you to leverage the latest technologies and DevOps methodologies so that we can create sustainable value for your organization. We have helped businesses of all sizes, from startups to established companies adapt in today's changing market environments and deliver innovative solutions quickly and seamlessly.",
  link: "/service/devops",
  image: "/assets/images/services/devops.png",
  sections: [
    {
      type: SECTIONS.ALPHA,
      color: COLORS.MAIN,
      title: "Our Services",
      description:
        "GoTech DevOps services can enhance the performance of your teams and equip them to build better products faster for greater customer satisfaction. Such collaboration and productivity will help you achieve your business goals and compete more effectively in the market.",
    },
    {
      type: SECTIONS.BETA,
      color: COLORS.DEFAULT,
      title: "App Development process",
      description:
        "There is a long and complex process that starts with receiving a client’s request and finishes with developing an application and successfully launching it. Yet we apply the best methods and techniques to make this process run smoothly and to facilitate the efficiency of each of its stages.",
    },
    {
      type: SECTIONS.GAMMA,
      color: COLORS.ORANGE,
      title: "Is DevOps a tool?",
      paragraphs: [
        "DevOps cannot be referred to as a tool. It is a compound of Dev representing development and Ops, which stands for operations. It is a work culture that combines people, process and technology.",
        "By adopting DevOps culture with its practices and tools, teams are more equipped to better respond to customer requirements, increase confidence in their applications and achieve business goals faster.",
        "DevOps fulfills the requirement for fast and reliable development and also the deployment of a software.",
      ],
    },
    {
      type: SECTIONS.DELTA,
      color: COLORS.MAIN,
      title: "Technologies",
      description:
        "We focus on research and user experience prior to start the development of the DevOps. We offer only well-recognized and time-tested technologies to support any of your business goals.",
    },
    {
      type: SECTIONS.EPSILON,
      color: COLORS.PRIME,
      title: "DevOps drive business results!",
      paragraphs: [
        "DevOps is all about providing continuous value to customers. The business results of adopting DevOps should be measured in relation to your business goals and objectives. ",
        "DevOps teams can promote frequent code versions thereby reducing the number of implementation failures. This reduces the recovery time considerably allowing agile response to the market.",
      ],
    },
  ],
  stages: [
    {
      title: "requirements analysis",
      color: COLORS.GREEN,
      icon: ICONS.UNIT,
    },
    {
      title: "infrastructure setup",
      color: COLORS.BLUE,
      icon: ICONS.RESTORE,
    },
    {
      title: "Deployment automation",
      color: COLORS.YELLOW,
      icon: ICONS.DEVELOP,
    },
    {
      title: "Configuration & management",
      color: COLORS.ORANGE,
      icon: ICONS.PROGRESS,
    },
    {
      title: "AP & health monitoring",
      color: COLORS.PINK,
      icon: ICONS.SANITY,
    },
    {
      title: "Support & optimization",
      color: COLORS.PURPLE,
      icon: ICONS.SUPPORT,
    },
  ],

  services: [
    {
      icon: "AUTO_DEV",
      title: "DevOps Automation",
      description:
        "Automate your delivery pipeline to ensure smooth deployments and seamless rollbacks across IT processes. We can help segment your bulky enterprise apps into self-sustained services, migrate your IT infrastructure to the cloud, fix bugs, and deploy new features with zero risks.",
    },
    {
      icon: "ENV_DEV",
      title: "Environment Configuration",
      description:
        "Our DevOps services company specializes in setting up server environments using AWS, Microsoft Azure, and Google Cloud. We ensure consistency and save your time by having your servers configured for optimal load balancing.",
    },
    {
      icon: "EtE_TEST",
      title: "End-to-end Testing",
      description:
        "Our DevOps services conduct end-to-end DevOps testing, which involves regression and functionality tests and validation of environment configuration to ensure every piece of information is passed between different software components within the system in a seamless and optimum way.",
    },
    {
      icon: "INTEGRATION",
      title: "Continuous Integration",
      description:
        "GoTech team of skilled coders and extensively experienced DevOps engineers integrate code into a shared repository and verify each integration through automated tests for better code quality and improved build.",
    },
  ],

  technologies: [
    { title: "aws", icon: "/assets/images/technologies/devops/aws.png" },
    { title: "azure", icon: "/assets/images/technologies/devops/azure.png" },
    {
      title: "digitalOcean",
      icon: "/assets/images/technologies/devops/digitalOcean.png",
    },
    { title: "docker", icon: "/assets/images/technologies/devops/docker.png" },
    { title: "gitlab", icon: "/assets/images/technologies/devops/gitlab.png" },
    {
      title: "googleCloud",
      icon: "/assets/images/technologies/devops/googleCloud.png",
    },
    { title: "linux", icon: "/assets/images/technologies/devops/linux.png" },
    { title: "php", icon: "/assets/images/technologies/devops/php.png" },
    { title: "python", icon: "/assets/images/technologies/devops/python.png" },

    { title: "argo", icon: "/assets/images/technologies/devops/argo.png" },
    {
      title: "jenkins",
      icon: "/assets/images/technologies/devops/jenkins.png",
    },
    {
      title: "datadog",
      icon: "/assets/images/technologies/devops/datadog.png",
    },
    {
      title: "kubernetes",
      icon: "/assets/images/technologies/devops/kubernetes.png",
    },
    { title: "redis", icon: "/assets/images/technologies/devops/redis.png" },
    {
      title: "snowflake",
      icon: "/assets/images/technologies/devops/snowflake.png",
    },
    {
      title: "terraform",
      icon: "/assets/images/technologies/devops/terraform.png",
    },
  ],
};
