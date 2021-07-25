import "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js";
const SERVICE_ID = "service_5o5yu99";
const TEMPLATE_ID = "template_26nu6kl";
const USER_ID = "user_HJgeZJF8p00P1dPppTNJ1";
emailjs.init(USER_ID);

const subscribe = (body) => {
  try {
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, body);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default {
  subscribe,
};
