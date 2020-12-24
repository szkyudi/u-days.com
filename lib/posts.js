const contentful = require('contentful')
import remark from 'remark'
import html from 'remark-html'


const client = contentful.createClient({
  space: 'qldauggibp1f',
  accessToken: 'Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU'
})

export async function getSortedPostsData() {
  let posts = await client.getEntries({content_type: 'posts'})
  posts = posts.items.map(post => {
    return {
      id: post.sys.id,
      title: post.fields.title,
      thumbnail: post.fields.thumbnail | null,
      publishedAt: post.fields.publishedAt,
    }
  })
  return posts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getTaggedPostsData(tagId) {
  let posts = await client.getEntries({
    content_type: 'posts',
    'fields.tags.sys.id': tagId
  })
  posts = posts.items.map(post => {
    return {
      id: post.sys.id,
      title: post.fields.title,
      thumbnail: post.fields.thumbnail || null,
      publishedAt: post.fields.publishedAt,
    }
  })
  return posts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getAllPostsIds() {
  const posts = await client.getEntries({content_type: 'posts'})
  return posts.items.map(post => {
    return {
      params: {
        id: post.sys.id
      }
    }
  })
}

export async function getPostData(id) {
  const post = await client.getEntry(id)
  const processedContent = await remark()
    .use(html)
    .process(post.fields.body)
  const contentHtml = processedContent.toString()

  const thumbnail = post.fields.thumbnail ? {
    alt: post.fields.thumbnail.fields.title,
    url: post.fields.thumbnail.fields.file.url
  } : null

  const tags = post.fields.tags ? post.fields.tags.map(tag => {
    return {
      id: tag.sys.id,
      slug: tag.fields.slug,
      name: tag.fields.name
    }
  }) : null
  
  return {
    id: post.sys.id,
    title: post.fields.title,
    tags: tags,
    thumbnail: thumbnail,
    publishedAt: post.fields.publishedAt,
    contentHtml: contentHtml
  }
}