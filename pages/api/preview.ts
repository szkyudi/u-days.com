import { NextApiRequest, NextApiResponse } from "next"
import { CONTENT_TYPE } from "../../@types/generated/contentful"
import { getPreviewData } from "../../lib/preview"

interface Request extends NextApiRequest  {
  query: {
    secret: string;
    id: string;
    type: CONTENT_TYPE;
  }
}
const preview = async (req: Request, res: NextApiResponse) => {
  if (req.query.secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET_TOKEN || !req.query.id) {
    return res.status(401).json({ messae: 'Invalid token'})
  }

  const data = await getPreviewData(req.query.id)

  if (!data) {
    return res.status(401).json({ message: 'Invalid id'})
  }

  res.setPreviewData({})
  switch (req.query.type) {
    case 'posts':
      res.redirect(`/posts/${data.sys.id}`)
    case 'page':
      res.redirect(`/${data.fields.slug}`)
  }
}

export default preview
