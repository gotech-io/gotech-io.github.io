export const filteredPosts = (posts, entity) => {
  const filteredPosts = posts.filter((item) => item.type === entity);
  return filteredPosts.length ? filteredPosts : posts;
};

export const getTags = (details) => {
  const tags = [];
  details.map((item) => {
    tags.push(item.header.tag);
  });
  return tags;
};
