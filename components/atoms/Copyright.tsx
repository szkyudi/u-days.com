import { css } from '@emotion/react'
import variables from '../../lib/styles/variables'

export default function Copyright() {
  return <small css={styles.copyright}>&copy; 2020 u-days.com</small>
}

const styles = {
  copyright: css`
    display: block;
    text-align: center;
    margin-top: ${variables.space.lg};
    font-size: 12px;
    color: ${variables.color.onPrimary};
  `
};
