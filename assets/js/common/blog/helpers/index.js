export const filteredPosts = (posts, entity) => {
  const filteredPosts =
    entity === "ALL" ? posts : posts.filter((item) => item.type === entity);
  return filteredPosts;
};

export const getTags = (details) => {
  const tags = [];
  details.map((item) => {
    tags.push(item.tag);
  });
  return tags;
};
