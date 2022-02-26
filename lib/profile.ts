const contentful = require("contentful");
import { IProfile } from "../@types/generated/contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
});

const PROFILE_ID = "jJW1tzhmlClF1LXPv7AtD";

export async function getProfileData(): Promise<IProfile> {
  const profile: IProfile = await client.getEntry(PROFILE_ID);
  return profile;
}
