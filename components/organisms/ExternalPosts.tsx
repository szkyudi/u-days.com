import Link from "next/link"
import { IExternalPost } from "../../@types/generated/contentful"
import { Card, Cards } from "../molecules/Cards"
type Props = {
  data: IExternalPost[]
}
export const ExternalPosts = ({ data }: Props) => {
  if (data.length !== 0) {
    return (
      <Cards>
        {data.map(item => (
          <a key={item.sys.id} href={item.fields.url} target="_blank" rel="noreferrer" >
            <Card
              title={item.fields.title}
            />
          </a>
        ))}
      </Cards>
    )
  } else {
    return <p>記事が見つかりませんでした。</p>
  }
}
