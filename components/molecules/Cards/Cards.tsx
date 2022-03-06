import { css } from "@emotion/react";
import { Children } from "react";
import variables from "../../../lib/styles/variables";

export const Cards: React.FC = ({ children, ...props }) => {
  return (
    <ul {...props}>
      {Children.map(children, child => (
        <li css={styles.card}>{child}</li>
      ))}
    </ul>
  )
}

const styles = {
  card: css`
    & + & {
      margin-top: ${variables.space.sm};
    }
  `,
}
