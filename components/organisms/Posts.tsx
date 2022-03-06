import Link from "next/link"
import { IPosts } from "../../@types/generated/contentful"
import { Card, Cards } from "../molecules/Cards"
type Props = {
  data: IPosts[]
}
export const Posts = ({ data }: Props) => {
  if (data.length !== 0) {
    return (
      <Cards>
        {data.map(item => (
          <article key={item.sys.id}>
            <Link href={`/posts/${item.sys.id}`}>
              <a>
                <Card
                  title={item.fields.title}
                  date={item.fields.publishedAt}
                />
              </a>
            </Link>
          </article>
        ))}
      </Cards>
    )
  } else {
    return <p>記事が見つかりませんでした。</p>
  }
}
