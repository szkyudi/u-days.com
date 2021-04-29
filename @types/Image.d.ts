interface ImageSys {
  id: string;
}

interface ImageFields {
  title: string;
  file: {
    url: string;
  };
}

interface ImageEntry {
  sys: ImageSys;
  fields: ImageFields;
}

interface Image {
  url: string;
  alt: string;
}
