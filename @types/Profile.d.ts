interface ProfileEntity {
  fields: {
    name: string;
    icon?: ContentfulImageEntry;
    bio: string;
    twitterId?: string;
  };
}

interface Profile {
  name: string;
  icon?: ContentfulImage;
  bioHtml: string;
  twitterId?: string;
}
