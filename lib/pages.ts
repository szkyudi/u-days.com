import { ContentfulCollection } from 'contentful';
import { IPage } from '../@types/generated/contentful'

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
});

const previewClient = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
});


export async function getAllPageSlugs() {
  const pages: ContentfulCollection<IPage> = await client.getEntries({
    content_type: "page",
  });
  return pages.items.map((page) => {
    return {
      params: {
        slug: page.fields.slug,
      },
    };
  });
}

export async function getPageData(slug: string): Promise<IPage> {
  const pages: ContentfulCollection<IPage> = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    limit: 1,
  });

  return pages.items[0];
}

export async function getPreviewPageData(slug: string): Promise<IPage> {
  const pages: ContentfulCollection<IPage> = await previewClient.getEntries({
    content_type: "page",
    "fields.slug": slug,
    limit: 1,
  });

  return pages.items[0];
}
