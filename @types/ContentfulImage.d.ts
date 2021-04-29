interface ContentfulImageSys {
  id: string;
}

interface ContentfulImageFields {
  title: string;
  file: {
    url: string;
  };
}

interface ContentfulImageEntry {
  sys: ContentfulImageSys;
  fields: ContentfulImageFields;
}

interface ContentfulImage {
  url: string;
  alt: string;
}
