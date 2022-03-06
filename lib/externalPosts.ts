import { ContentfulCollection } from "contentful";
import { IExternalPost } from "../@types/generated/contentful";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
});

export async function getExternalPostsData(keyword: string = "") {
  const externalPosts: ContentfulCollection<IExternalPost>  = await client.getEntries({
    content_type: "externalPost",
    query: keyword,
  });
  return externalPosts.items;
}
