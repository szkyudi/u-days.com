const contentful =  require('contentful')

const client = contentful.createClient({
  space: 'qldauggibp1f',
  accessToken: 'Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU'
})

export async function getAllTagsIds() {
  const entries: any = await client.getEntries({content_type: 'tags'})
  return entries.items.map((tag: TagEntry) => {
    return {
      params: {
        slug: tag.fields.slug,
      }
    }
  })
}

export async function getTagData(slug: string): Promise<Tag> {
  const tags: any = await client.getEntries({
    content_type: 'tags',
    'fields.slug': slug,
    limit: 1
  })

  const tag: TagEntry = tags.items[0]

  return {
    id: tag.sys.id,
    slug: tag.fields.slug,
    name: tag.fields.name
  }
}