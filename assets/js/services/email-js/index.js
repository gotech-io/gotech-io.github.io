import "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js";
const SERVICE_ID = "service_q0h7v7g";
const SUBSCRIBE_TEMPLATE_ID = "template_bduwfnq";
const USER_ID = "user_sKErxAWlcEHbUzgAWFTWL";
const APLLY_TEMPLATE_ID = "template_ckrs4vn";
emailjs.init(USER_ID);

const subscribe = (form) => {
  try {
    return emailjs.sendForm(SERVICE_ID, SUBSCRIBE_TEMPLATE_ID, form);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const apply = (form) => {
  try {
    return emailjs.sendForm(SERVICE_ID, APLLY_TEMPLATE_ID, form);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default {
  subscribe,
  apply,
};
