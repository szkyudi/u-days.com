import { css } from "@emotion/react";
import utils from "../../../lib/styles/utils";
import variables from "../../../lib/styles/variables";

export const styles = {
  main: css`
    ${utils.contianer}
    margin-top: ${variables.space.lg};
    margin-bottom: ${variables.space.lg};
    @media (min-width: ${variables.breakpoints.lg}px) {
      margin-top: ${variables.space.xl};
      margin-bottom: ${variables.space.xl};
    }
  `,
  section: css`
    & + & {
      margin-top: ${variables.space.lg};
    }
  `,
  title: css`
    margin-bottom: ${variables.space.md};
    font-size: 24px;
    font-weight: bold;
    color: ${variables.color.onBackground};
  `,
  subTitle: css`
    margin-bottom: ${variables.space.md};
    font-size: 20px;
    font-weight: bold;
    color: ${variables.color.onBackground};
  `,
  aside: css`
    ${utils.contianer}
    margin-bottom: ${variables.space.lg};
    @media (min-width: ${variables.breakpoints.lg}px) {
      margin-bottom: ${variables.space.xl};
    }
  `,
};
