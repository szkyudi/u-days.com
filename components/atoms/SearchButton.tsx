import Image from 'next/image'
import { css } from '@emotion/react'
import React, { useGlobal, setGlobal } from 'reactn'

const button = css`
  transition: .2s;
  &:hover {
    cursor: pointer;
    opacity: .6;
  }
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
        <Image
          css={button}
          src="/icons/close.svg"
          width={24}
          height={24}
          alt="閉じるアイコン"
          onClick={inactivate}
        />
        :
        <Image
          css={button}
          src="/icons/search.svg"
          width={24}
          height={24}
          alt="検索アイコン"
          onClick={activate}
        />
      }
    </>
  )
}