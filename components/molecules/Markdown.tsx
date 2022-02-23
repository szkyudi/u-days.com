import ReactMarkdown from "react-markdown"
import { CodeBlock } from "./CodeBlock"

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        code: CodeBlock
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
