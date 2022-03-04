import config from "../../lib/config"

type Props = {
  title: string,
  url?: string,
  description?: string,
  type?: 'website' | 'article',
  imageUrl?: string,
  width?: number,
  height?: number,
}
export const Seo = ({ title, url, description, type = 'article', imageUrl, width, height }: Props) => {
  return (
    <>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name="description" content={description || config.description} />
      <meta property='og:url' content={url || config.siteUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:type' content={type} />
      <meta property='og:description' content={description || config.description} />
      <meta property='og:image' content={imageUrl || `${config.siteUrl}/default-thumbnail.png`} />
      <meta property='og:image:width' content={String(width || 1200)}/>
      <meta property='og:image:height' content={String(height || 630)} />
    </>
  )
}
