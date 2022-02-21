import Image from 'next/image'
import { css } from '@emotion/react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { searchBarIsActiveState, searchBarSelectedState } from '../../lib/states/searchBar'

export default function SearchButton() {
  const [isActive, setIsActive] = useRecoilState(searchBarIsActiveState)
  const setSelected = useSetRecoilState(searchBarSelectedState)

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
          css={styles.button}
          src="/icons/close.svg"
          width={24}
          height={24}
          alt="閉じるアイコン"
          onClick={inactivate}
        />
        :
        <Image
          css={styles.button}
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


const styles = {
  button: css`
    transition: .2s;
    &:hover {
      cursor: pointer;
      opacity: .6;
    }
  `
}
