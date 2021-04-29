interface ThumbnailSys {
  id: string;
}

interface ThumbnailFields {
  title: string;
  file: {
    url: string;
  };
}

interface ThumbnailEntry {
  sys: ThumbnailSys;
  fields: ThumbnailFields;
}

interface Thumbnail {
  url: string;
  alt: string;
}
