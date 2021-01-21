interface PageEntity {
  sys: {
    id: string
  }
  fields: {
    body: string
    title: string
  }
}

interface Page {
  id: string
  title: string
  contentHtml: string
}
