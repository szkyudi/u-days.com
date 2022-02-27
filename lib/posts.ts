import { ContentfulCollection } from "contentful";
import { IPosts } from "../@types/generated/contentful";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
});

const previewClient = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
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
  try {
    return await client.getEntry(id) as IPosts;
  } catch {
    return undefined
  }
}

export async function getPreviewPostData(id: string) {
  try {
    return await previewClient.getEntry(id) as IPosts
  } catch {
    return undefined
  }
}
