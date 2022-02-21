const contentful = require("contentful");
import hljs from "remark-highlight.js";
import remark from "remark";
import html from "remark-html";
import { IProfile } from "../@types/generated/contentful";

const client = contentful.createClient({
  space: "qldauggibp1f",
  accessToken: "Ncaig05I3g2XVfMOw5Aw1dP5LgKPCwRNQOskyGKIFdU",
});

const PROFILE_ID = "jJW1tzhmlClF1LXPv7AtD";

export async function getProfileData(): Promise<IProfile> {
  const profile: IProfile = await client.getEntry(PROFILE_ID);
  const processedContent = await remark()
    .use(hljs)
    .use(html)
    .process(profile.fields.bio);
  const convertedHtml = processedContent.toString();

  profile.fields.bio = convertedHtml;
  return profile;
}
