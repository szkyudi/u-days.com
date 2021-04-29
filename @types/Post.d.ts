interface PostEntry {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    publishedAt: string;
    body: string;
    thumbnail?: ContentfulImageEntry;
    tags?: TagEntry[];
  };
}

interface Post {
  id: string;
  title: string;
  publishedAt: string;
  contentHtml?: string;
  thumbnail?: ContentfulImage;
  tags?: Tag[];
}
