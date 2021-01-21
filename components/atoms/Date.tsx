import { parseISO, format } from 'date-fns'

export default function Data({ dateString }: {
  dateString: string
}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy/MM/dd')}</time>
}