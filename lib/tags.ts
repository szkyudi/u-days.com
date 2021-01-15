const contentful = require('contentful')


const client = contentful.createClient({
  space: 'qldauggibp1f',
  accessToken: 'Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU'
})

export async function getAllTagsIds() {
  const entries = await client.getEntries({content_type: 'tags'})
  return entries.items.map(tag => {
    return {
      params: {
        slug: tag.fields.slug,
      }
    }
  })
}

export async function getTagData(slug) {
  const tags = await client.getEntries({
    content_type: 'tags',
    'fields.slug': slug,
    limit: 1
  })

  const tag = tags.items[0]

  return {
    id: tag.sys.id,
    slug: tag.fields.slug,
    name: tag.fields.name
  }
}