const contentful = require("contentful");
import remark from "remark";
import html from "remark-html";

const client = contentful.createClient({
  space: "qldauggibp1f",
  accessToken: "Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU",
});

export async function getSortedPostsData(keyword: string = "") {
  const postEntries: any = await client.getEntries({
    content_type: "posts",
    query: keyword,
  });
  const posts = postEntries.items.map(
    (post: PostEntry): Post => {
      return {
        id: post.sys.id,
        title: post.fields.title,
        publishedAt: post.fields.publishedAt,
      };
    }
  );
  return posts.sort((a: Post, b: Post) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getTaggedPostsData(tagId: string) {
  const postEntries: any = await client.getEntries({
    content_type: "posts",
    "fields.tags.sys.id": tagId,
  });
  const posts = postEntries.items.map(
    (post: PostEntry): Post => {
      return {
        id: post.sys.id,
        title: post.fields.title,
        publishedAt: post.fields.publishedAt,
      };
    }
  );
  return posts.sort((a: Post, b: Post) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostsIds() {
  const posts: any = await client.getEntries({ content_type: "posts" });
  return posts.items.map((post: PostEntry) => {
    return {
      params: {
        id: post.sys.id,
      },
    };
  });
}

export async function getPostData(id: string) {
  const post: PostEntry = await client.getEntry(id);
  const processedContent = await remark().use(html).process(post.fields.body);
  const contentHtml = processedContent.toString();

  const thumbnail: ContentfulImage = post.fields.thumbnail
    ? {
        alt: post.fields.thumbnail.fields.title,
        url: post.fields.thumbnail.fields.file.url,
      }
    : null;

  const tags = post.fields.tags
    ? post.fields.tags.map(
        (tag: TagEntry): Tag => {
          return {
            id: tag.sys.id,
            slug: tag.fields.slug,
            name: tag.fields.name,
          };
        }
      )
    : null;

  return {
    id: post.sys.id,
    title: post.fields.title,
    tags: tags,
    thumbnail: thumbnail,
    publishedAt: post.fields.publishedAt,
    contentHtml: contentHtml,
  };
}
