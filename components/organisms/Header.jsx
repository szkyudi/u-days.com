/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { setGlobal, useGlobal } from 'reactn'
import utils from '../../lib/styles/utils'
import variables from '../../lib/styles/variables'
import HeaderLogo from '../molecules/HeaderLogo'
import SearchButton from '../atoms/SearchButton'
import SearchBar from '../atoms/SearchBar'


const header = css`
  background: ${variables.color.primary};
  box-shadow: ${variables.shadow.dp4};
  z-index: 1000;
  position: relative;
`

const container = css`
  ${utils.contianer}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${variables.padding.md};
`;

const aside = css`
  display: none;
  position: absolute;
  width: 100%;
  margin-top: ${variables.margin.md};
`

const isActive = css`
  display: block;
`

const barContainer = css`
  ${utils.contianer}
  position: relative;
  z-index: 2;
`

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

setGlobal({isSearchBarActive: false})

export default function Header() {
  const [isSearchBarActive, setIsSearchBarActive] = useGlobal('isSearchBarActive')
  
  function inactivateSearchBar() {
    setIsSearchBarActive(false);
  }
  
  return (
    <>
      <header>
        <div css={header}>
          <div css={container}>
            <HeaderLogo />
            <SearchButton />
          </div>
        </div>
      </header>
      <aside css={[aside, isSearchBarActive && isActive]}>
        <div css={barContainer}>
          <SearchBar focus={true} />
        </div>
        <div css={overlay} onClick={inactivateSearchBar}/>
      </aside>
    </>
  )
}