import { css } from "@emotion/react";
import variables from "./variables";

const common = css`
  body {
    font-family: "Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN",
      メイリオ, meiryo, sans-serif;
    background: ${variables.color.background};
    color: ${variables.color.textMain};
  }
`;

export default common;
