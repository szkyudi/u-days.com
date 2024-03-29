// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IExternalPostFields {
  /** title */
  title: string;

  /** url */
  url: string;

  /** mediaName */
  mediaName: string;
}

/** 外部サイトの関連記事 */

export interface IExternalPost extends Entry<IExternalPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "externalPost";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Title */
  title: string;

  /** Body */
  body: string;

  /** Slug */
  slug: string;
}

/** 固定ページ */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPostsFields {
  /** Title */
  title: string;

  /** Published at */
  publishedAt: string;

  /** Thumbnail */
  thumbnail?: Asset | undefined;

  /** Tags */
  tags?: Entry<ITagsFields>[] | undefined;

  /** Body */
  body: string;
}

/** 記事ページ */

export interface IPosts extends Entry<IPostsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "posts";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProfileFields {
  /** Name */
  name: string;

  /** Icon */
  icon?: Asset | undefined;

  /** Bio */
  bio?: string | undefined;

  /** Twitter ID */
  twitterId?: string | undefined;
}

/** プロフィール */

export interface IProfile extends Entry<IProfileFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "profile";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITagsFields {
  /** Name */
  name: string;

  /** Slug */
  slug: string;
}

/** タグ */

export interface ITags extends Entry<ITagsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "tags";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "externalPost"
  | "page"
  | "posts"
  | "profile"
  | "tags";

export type LOCALE_CODE = "ja";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "ja";
