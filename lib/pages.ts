const contentful = require('contentful')
import remark from 'remark'
import html from 'remark-html'

const client = contentful.createClient({
  space: 'qldauggibp1f',
  accessToken: 'Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU'
})

export async function getPageData(id: string): Promise<Page> {
  const page: PageEntity = await client.getEntry(id)
  const processedContent = await remark()
    .use(html)
    .process(page.fields.body)
  const contentHtml = processedContent.toString()

  return {
    id: page.sys.id,
    title: page.fields.title,
    contentHtml: contentHtml
  }
}