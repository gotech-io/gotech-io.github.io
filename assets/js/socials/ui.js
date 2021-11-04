import { getElement } from "../heplers.js";

export const setPosts = (posts) => {
  const container = getElement(".socials-feed");
  posts.forEach(({ node }) => {
    const postElement = postConstructor(node);
    container.append(postElement);
  });
};

const postConstructor = (post) => {
  const div = document.createElement("div");
  const html = `
        <section>
       <img width="200" height="200" src="${post.display_url}" />
        </section>
    `;
  div.innerHTML = html;
  div.classList.add("post");
  return div;
};
