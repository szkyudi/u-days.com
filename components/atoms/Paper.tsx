import { css } from '@emotion/react'
import variables from '../../lib/styles/variables'

export default function Paper({children}) {
  return (
    <div css={styles.paper}>
      {children}
    </div>
  )
}

const styles = {
  paper: css`
    background: ${variables.color.white};
    box-shadow: ${variables.shadow.dp1};
    padding: ${variables.space.lg} ${variables.space.md};
    ${variables.rounded};
    @media (min-width: ${variables.breakpoints.lg}px) {
      padding: ${variables.space.xl} ${variables.space.lg};
    }
  `
}
