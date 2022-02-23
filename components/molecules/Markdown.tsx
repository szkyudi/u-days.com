import ReactMarkdown from "react-markdown"
import { CodeBlock } from "./CodeBlock"

export const Markdown = ({ children, ...props }) => {
  return (
    <ReactMarkdown
      components={{
        code: CodeBlock
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  )
}
