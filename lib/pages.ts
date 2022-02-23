const contentful = require('contentful')
import { IPage } from '../@types/generated/contentful'

const client = contentful.createClient({
  space: 'qldauggibp1f',
  accessToken: 'Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU'
})

export async function getPageData(id: string): Promise<IPage> {
  const page: IPage = await client.getEntry(id)
  return page;
}
