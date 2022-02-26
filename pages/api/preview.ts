import { getPreviewPostData } from "../../lib/posts"

export default async (req, res) => {
  if (req.query.secret !== process.env.CONTENTFUL_PREVIEW_SECRET_TOKEN || !req.query.id) {
    return res.status(401).json({ messae: 'Invalid token'})
  }

  const post = await getPreviewPostData(req.query.id)

  if (!post) {
    return res.status(401).json({ message: 'Invalid id'})
  }

  res.setPreviewData({})
  res.redirect(`/posts/${post.sys.id}`)
}
