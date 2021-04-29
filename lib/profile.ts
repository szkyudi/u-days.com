const contentful = require("contentful");
import remark from "remark";
import html from "remark-html";

const client = contentful.createClient({
  space: "qldauggibp1f",
  accessToken: "Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU",
});

const PROFILE_ID = "jJW1tzhmlClF1LXPv7AtD";

export async function getProfileData(): Promise<Profile> {
  const profile: ProfileEntity = await client.getEntry(PROFILE_ID);
  const processedContent = await remark().use(html).process(profile.fields.bio);
  const bioHtml = processedContent.toString();

  const icon = profile.fields.icon
    ? {
        alt: profile.fields.icon.fields.title,
        url: profile.fields.icon.fields.file.url,
      }
    : null;

  return {
    name: profile.fields.name,
    icon: icon,
    bioHtml: bioHtml,
    twitterId: profile.fields.twitterId,
  };
}
