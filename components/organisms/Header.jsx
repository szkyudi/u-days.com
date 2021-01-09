/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Router from 'next/router'
import utils from '../../lib/styles/utils'
import variables from '../../lib/styles/variables'
import HeaderLogo from '../molecules/HeaderLogo'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'


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

const button = css`
  cursor: pointer;
`

const aside = css`
  position: relative;
  display: none;
  z-index: 1;
`

const isActive = css`
  display: block;
`

const bar = css`
  position: absolute;
  width: 100%;
  padding: ${variables.padding.md} 0;
  z-index: 2;
`

const barContainer = css`
  ${utils.contianer}
`

const input = css`
  display: block;
  width: 100%;
  padding: ${variables.padding.sm};
  border: 1px solid ${variables.color.primaryVariant};
  border-radius: 2px;
  font-size: 14px;
  color: ${variables.color.onPrimary};
  background: ${variables.color.background};
`

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchBarActive: false,
      searchInputValue: ''
    }
    this.searchInput = React.createRef()
  }

  componentDidUpdate = () => {
    if (this.state.isSearchBarActive) {
      this.searchInput.current.focus()
    }
  }
  
  toggleSearchBar = (e) => {
    e.preventDefault();
    if (this.state.isSearchBarActive) {
      this.setState({ isSearchBarActive: false })
    } else {
      this.searchInput.current.select()
      this.setState({ isSearchBarActive: true })
    }
  }

  getSearchPage = (e) => {
    e.preventDefault();
    this.setState({ isSearchBarActive: false })
    if (!this.state.searchInputValue) {
      Router.push('/')
      return
    }
    Router.push({
      pathname: '/search',
      query: { keyword: this.state.searchInputValue }
    })
  }

  changeSearchInput = (e) => {
    e.preventDefault();
    this.setState({ searchInputValue: this.searchInput.current.value })
  }

  render = () => {
    const ToggleButton = () => {
      if (this.state.isSearchBarActive) {
        return <CloseIcon css={button} onClick={this.toggleSearchBar}/>
      } else {
        return <SearchIcon css={button} onClick={this.toggleSearchBar}/>
      }
    }

    return (
      <>
        <header>
          <div css={header}>
            <div css={container}>
              <HeaderLogo />
              <ToggleButton />
            </div>
          </div>
        </header>
        <aside css={[aside, this.state.isSearchBarActive && isActive]}>
          <div css={bar}>
            <form css={barContainer} onSubmit={this.getSearchPage}>
              <input 
                ref={this.searchInput}
                css={input}
                type="text"
                value={this.state.searchInputValue}
                onChange={this.changeSearchInput}
                placeholder="検索キーワード"
              />
            </form>
          </div>
          <div css={overlay} onClick={this.toggleSearchBar}/>
        </aside>
      </>
    )
  }
}