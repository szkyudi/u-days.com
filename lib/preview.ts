const previewClient = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
  host: "preview.contentful.com",
});

export async function getPreviewData(id: string) {
  return await previewClient.getEntry(id);
}
