import { COLORS } from "../../colors";
import { ICONS } from "../../icons";
import { SECTIONS } from "../../sections";

export const MOBILE_DEV = {
  title: "Mobile Development",
  details:
    "Boost your mobile application development with our in-house team of experts.",
  description:
    "Mobile app development is an ongoing process of a constant, iterative effort to make your product better and better. Our mobile development team of experts will help you build smart business solutions and develop state-of-the-art mobile apps with ease.",
  link: "/service/mobile",
  image: "/assets/images/services/mobile.png",

  sections: [
    {
      type: SECTIONS.ALPHA,
      color: COLORS.MAIN,
      title: "our services",
      paragraphs: [
        "Robust Mobile Applications For Improved Client And Workforce Engagement.",
        "An effectively designed and developed mobile app helps in reinforcing your brand value, extends brand visibility through a new channel, increases accessibility by connecting with users on the move, caters to a wider audience, and beyond.",
      ],
    },
    {
      type: SECTIONS.BETA,
      color: COLORS.DEFAULT,
      title: "app development process",
      description:
        "There is a long and complex process that starts with receiving a client’s request and finishes with developing an application and successfully launching it. Yet we apply the best methods and techniques to make this process run smoothly and to facilitate the efficiency of each of its stages.",
    },
    {
      type: SECTIONS.GAMMA,
      color: COLORS.ORANGE,
      title: "Mobile Strategies",
      paragraphs: [
        "We blend our mobile strategies with your technology needs to ensure that you delight your customers and attain business success. The goal is to gain maximum benefit from the current mobile technologies.",
      ],
    },
    {
      type: SECTIONS.DELTA,
      color: COLORS.MAIN,
      title: "technologies",
      description:
        "We offer only well-recognized and time-tested technologies to support any of your business goals. We employ platform-specific SDKs for Android and iOS, cross-platform approaches relying on HTML5, and conversion tools, to develop cost-effective enterprise mobile solutions.",
    },
    {
      type: SECTIONS.EPSILON,
      color: COLORS.PRIME,
      title: "Device Compatibility",
      description:
        "We ensure that all the applications that we develop are compatible with the device types used by our customers. iOS applications are tested on iOS and iPad devices, and Android applications are tested on popular Android phones and tablets to ensure compatibility.",
    },
    {
      type: SECTIONS.ZETA,
      color: COLORS.MAIN,
      title: "case studies example",
      description:
        "Keeping abreast of the latest trends and developments in mobile technologies to deliver value to our customers all over the world.",
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
      icon: "CROSS_DEV",
      title: "Cross-platform",
      description:
        "Cross-platform mobile apps can run on multiple mobile platforms and have a number of other benefits. For instance, a single-source code can be used here. It requires less time for developing and deploying cross-platform mobile apps at app stores. During the implementation of an MVP, there is no fragmentation or any need for subsequent upgrades.",
    },
    {
      icon: "NATIVE_DEV",
      title: "Native Development",
      description:
        "Native applications are more complicated to create than mobile websites. They must be developed for platform-specific iOS or Android. You may use the native capabilities of mobile operating systems to create a richer user experience and implement app features.",
    },
  ],

  technologies: [
    {
      title: "android",
      icon: "/assets/images/technologies/mobile/android.png",
    },
    { title: "cdk", icon: "/assets/images/technologies/mobile/cdk.png" },

    {
      title: "flutter",
      icon: "/assets/images/technologies/mobile/flutter.png",
    },
    { title: "ios", icon: "/assets/images/technologies/mobile/ios.png" },
    { title: "java", icon: "/assets/images/technologies/mobile/java.png" },
    { title: "spring", icon: "/assets/images/technologies/mobile/spring.png" },
    { title: "lonic", icon: "/assets/images/technologies/mobile/lonic.png" },
    { title: "python", icon: "/assets/images/technologies/mobile/python.png" },
    {
      title: "react native",
      icon: "/assets/images/technologies/mobile/react.png",
    },
    { title: "kotlin", icon: "/assets/images/technologies/mobile/kotlin.png" },
    { title: "swift", icon: "/assets/images/technologies/mobile/swift.png" },

    { title: "dart", icon: "/assets/images/technologies/mobile/dart.png" },
    {
      title: "fastlane",
      icon: "/assets/images/technologies/mobile/fastlane.png",
    },
    {
      title: "rxswift",
      icon: "/assets/images/technologies/mobile/rxswift.png",
    },
  ],

  example: "MEMOMI",
};
