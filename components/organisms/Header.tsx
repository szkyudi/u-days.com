import { css } from '@emotion/react'
import utils from '../../lib/styles/utils'
import variables from '../../lib/styles/variables'
import HeaderLogo from '../molecules/HeaderLogo'
import SearchButton from '../atoms/SearchButton'
import SearchBar from '../atoms/SearchBar'
import { useRecoilState } from 'recoil'
import { searchBarIsActiveState } from '../../lib/states/searchBar'


export default function Header() {
  const [isSearchBarActive, setIsSearchBarActive] = useRecoilState(searchBarIsActiveState);

  function inactivateSearchBar() {
    setIsSearchBarActive(false);
  }

  return (
    <>
      <header>
        <div css={styles.header}>
          <div css={styles.container}>
            <HeaderLogo />
            <SearchButton />
          </div>
        </div>
      </header>
      <aside css={[styles.aside, isSearchBarActive && styles.isActive]}>
        <div css={styles.barContainer}>
          <SearchBar css={styles.bar} focus={true} />
        </div>
        {isSearchBarActive && <div css={styles.overlay} onClick={inactivateSearchBar}/>}
      </aside>
    </>
  )
}

const styles = {
  header: css`
    background: ${variables.color.primary};
    box-shadow: ${variables.shadow.dp4};
    z-index: 1000;
    position: relative;
  `,
  container: css`
    ${utils.contianer}
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: ${variables.space.md};
    padding-bottom: ${variables.space.md};
  `,
  aside: css`
    margin-top: -48px;
    position: absolute;
    width: 100%;
    transition: .2s ease-out;
  `,
  isActive: css`
    margin-top: ${variables.space.md};
    display: block;
  `,
  barContainer: css`
    ${utils.contianer}
    position: relative;
    z-index: 2;
  `,
  bar: css`
    box-shadow: ${variables.shadow.dp1};
  `,
  overlay: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(2px);
    cursor: pointer;
    z-index: 1;
  `
}
