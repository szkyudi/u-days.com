/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { setGlobal, useGlobal } from 'reactn'
import utils from '../../lib/styles/utils'
import variables from '../../lib/styles/variables'
import animations from '../../lib/styles/animations'
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
  padding: ${variables.space.md};
`;

const aside = css`
  margin-top: -48px;
  position: absolute;
  width: 100%;
  transition: .2s ease-out;
`

const isActive = css`
  margin-top: ${variables.space.md};
  display: block;
`

const barContainer = css`
  ${utils.contianer}
  position: relative;
  z-index: 2;
`

const bar = css`
  box-shadow: ${variables.shadow.dp1};
`

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(2px);
  cursor: pointer;
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
          <SearchBar css={bar} focus={true} />
        </div>
        {isSearchBarActive && <div css={overlay} onClick={inactivateSearchBar}/>}
      </aside>
    </>
  )
}