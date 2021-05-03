import { css } from "@emotion/react";
import variables from "./variables";

const postContent = css`
  line-height: 1.8;
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.8em 0 0.6em;
    line-height: 1.5;
    font-weight: bold;
  }
  h2 {
    font-size: 24px;
    border-bottom: 1px solid ${variables.color.textMuted};
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 16px;
  }
  p + p {
    margin-top: 0.6em;
  }
  a {
    color: ${variables.color.primaryVariant};
    &:hover {
      text-decoration: underline;
    }
  }
  ul,
  ol {
    margin: 1em 0;
    padding: 0 0 0 1.5em;
  }
  li ul,
  li ol {
    margin: 0 0 0.5em;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  strong,
  b {
    font-weight: bold;
  }
  img {
    display: block;
    max-width: 100%;
    max-height: 300px;
    margin: 1em 0;
    @media screen and (min-width: ${variables.breakpoints.md}px) {
      max-height: 600px;
    }
  }
`;

export default postContent;
