interface TagEntry {
  sys: TagSys
  fields: TagFields
}

interface TagSys {
  id: string
}

interface TagFields {
  name: string
  slug: string
}

interface Tag {
  id: string
  name: string
  slug: string
}
