import { ContentfulCollection } from "contentful"
import { ITags } from "../@types/generated/contentful"

const contentful =  require('contentful')

const client = contentful.createClient({
  space: 'qldauggibp1f',
  accessToken: 'Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU'
})

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
