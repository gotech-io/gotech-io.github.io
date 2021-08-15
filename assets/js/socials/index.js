import api from "../services/api.js";
import { setPosts } from "./ui.js";
window.onload = () => {
  getData();
};

const getData = async () => {
  const data = await api.getInstagramProfile();
  if (!data) return;
  const posts = data.graphql.user.edge_owner_to_timeline_media.edges;
  setPosts(posts);
};
