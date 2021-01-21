interface PostEntry {
  sys: {
    id: string
  }
  fields: {
    title: string
    publishedAt: string
    body: string
    thumbnail?: ThumbnailEntry
    tags?: TagEntry[]
  }
}

interface Post {
  id: string
  title: string
  publishedAt: string
  contentHtml?: string
  thumbnail?: Thumbnail
  tags?: Tag[]
}
