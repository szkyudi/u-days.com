import { ContentfulCollection } from "contentful"
import { ITags } from "../@types/generated/contentful"

const contentful =  require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

export async function getAllTagsIds() {
  const entries: ContentfulCollection<ITags> = await client.getEntries({content_type: 'tags'})
  return entries.items.map((tag) => {
    return {
      params: {
        slug: tag.fields.slug,
      }
    }
  })
}

export async function getTagData(slug: string): Promise<ITags> {
  const tags: ContentfulCollection<ITags> = await client.getEntries({
    content_type: 'tags',
    'fields.slug': slug,
    limit: 1
  })

  return tags.items[0]
}
