import { ADD_ARTICLE } from "../constants/types";

export function addArticle(payload) {
  console.log('adding article');
  return { type: ADD_ARTICLE, payload };
}