import { css } from '@emotion/react'
import variables from '../../lib/styles/variables'
import utils from '../../lib/styles/utils'
import Copyright from '../atoms/Copyright'
import FooterList from '../molecules/FooterList'

export default function Footer() {
  return (
    <footer css={styles.footer}>
      <div css={styles.container}>
        <FooterList />
        <Copyright />
      </div>
    </footer>
  )
}

const styles = {
  footer: css`
    padding: ${variables.space.lg} 0;
    background: ${variables.color.primary};
  `,
  container: css`
    ${utils.contianer}
  `
};
