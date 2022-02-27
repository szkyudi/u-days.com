import ReactMarkdown from "react-markdown"
import config from "../../lib/config"
import { CodeBlock } from "./CodeBlock"

export const Markdown = ({ children, ...props }) => {
  return (
    <ReactMarkdown
      components={{
        code: CodeBlock,
        a: ({ href, ...props }) => {
          const domain = config.hostname
          const regexp = new RegExp(domain)
          if (!regexp.test(href)) {
            return <a href={href} target="_blank" rel="noreferrer noopener" {...props} />
          } else {
            return <a href={href} {...props} />
          }
        }
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  )
}
