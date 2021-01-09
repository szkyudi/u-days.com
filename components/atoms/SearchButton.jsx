/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useGlobal, setGlobal } from 'reactn'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

const button = css`
  cursor: pointer;
`

setGlobal({selectedSearchInput: true})

export default function SearchButton() {
  const [isActive, setIsActive] = useGlobal('isSearchBarActive')
  const [selected, setSelected] = useGlobal('selectedSearchInput')

  function inactivate() {
    setIsActive(false)
  }

  function activate() {
    setSelected(true)
    setIsActive(true)
  }

  return (
    <>
      {isActive ?
        <CloseIcon css={button} onClick={inactivate} />
        :
        <SearchIcon css={button} onClick={activate} />
      }
    </>
  )
}