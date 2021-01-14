/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useGlobal } from 'reactn'
import { useState, useEffect, useRef } from 'react'
import Router from 'next/router'
import variables from '../../lib/styles/variables'

const input = css`
  display: block;
  width: 100%;
  padding: .5em;
  border: 1px solid ${variables.color.primaryVariant};
  border-radius: 2px;
  font-size: 16px;
  color: ${variables.color.onPrimary};
  background: ${variables.color.background};
`

export default function SearchBar(props) {
  const [_, setIsActive] = useGlobal('isSearchBarActive')
  const [selected, setSelected] = useGlobal('selectedSearchInput')
  const [inputValue, setInputValue] = useState('')
  const inputElement = useRef(null)

  function getSearchPage(e) {
    e.preventDefault()
    setIsActive(false)
    if (!inputValue) {
      Router.push('/')
      return
    }
    Router.push({
      pathname: '/search',
      query: { keyword: inputValue }
    })
  }

  function changeSearchInput(e) {
    e.preventDefault();
    setInputValue(e.target.value)
  }
  
  useEffect(() => {
    if (selected) {
      inputElement.current.select()
      setSelected(false)
    }
    if (props.focus) {
      inputElement.current.focus()
    }
  })
  
  return (
    <form onSubmit={getSearchPage}>
      <input
        className={props.className}
        ref={inputElement}
        css={input}
        type="text"
        value={inputValue}
        onChange={changeSearchInput}
        placeholder="検索キーワード"
      />
    </form>
  )
}