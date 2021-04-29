interface ProfileEntity {
  fields: {
    name: string;
    icon?: ContentfulImageEntry;
    bio: string;
  };
}

interface Profile {
  name: string;
  icon?: ContentfulImage;
  bioHtml: string;
}
