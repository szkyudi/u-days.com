const contentful = require('contentful')
import remark from 'remark'
import html from 'remark-html'
import { IPage } from '../@types/generated/contentful'

const client = contentful.createClient({
  space: 'qldauggibp1f',
  accessToken: 'Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU'
})

export async function getPageData(id: string): Promise<IPage> {
  const page: IPage = await client.getEntry(id)
  const processedContent = await remark()
    .use(html)
    .process(page.fields.body)
  const convertedHtml = processedContent.toString()

  page.fields.body = convertedHtml;
  return page;
}
