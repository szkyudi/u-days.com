const contentful = require('contentful')
import { IPage } from '../@types/generated/contentful'

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
});

export async function getPageData(id: string): Promise<IPage> {
  const page: IPage = await client.getEntry(id)
  return page;
}
