const contentful = require("contentful");
import { ContentfulCollection } from "contentful";
import { IPosts } from "../@types/generated/contentful";

const client = contentful.createClient({
  space: "qldauggibp1f",
  accessToken: "Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU",
});

export async function getSortedPostsData(keyword: string = "") {
  const posts: ContentfulCollection<IPosts>  = await client.getEntries({
    content_type: "posts",
    query: keyword,
  });
  return posts.items.sort((a, b) => {
    if (a.fields.publishedAt < b.fields.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getTaggedPostsData(tagId: string) {
  const posts: ContentfulCollection<IPosts> = await client.getEntries({
    content_type: "posts",
    "fields.tags.sys.id": tagId,
  });
  return posts.items.sort((a, b) => {
    if (a.fields.publishedAt < b.fields.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostsIds() {
  const posts: ContentfulCollection<IPosts> = await client.getEntries({ content_type: "posts" });
  return posts.items.map((post) => {
    return {
      params: {
        id: post.sys.id,
      },
    };
  });
}

export async function getPostData(id: string) {
  const post: IPosts = await client.getEntry(id);
  return post
}
