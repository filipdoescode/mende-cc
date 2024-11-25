interface HeadingHighlightProps {
  children: string
}

export function HeadingHighlight({ children }: HeadingHighlightProps) {
  return (
    <span className="font-artbrush font-normal text-secondary">{children}</span>
  )
}
