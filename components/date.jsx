/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { parseISO, format } from 'date-fns'

export default function Data({ className, dateString }) {
  const date = parseISO(dateString)
  return <time className={className} dateTime={dateString}>{format(date, 'yyyy/MM/dd')}</time>
}