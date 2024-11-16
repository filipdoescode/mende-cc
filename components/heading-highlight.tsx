interface HeadingHighlightProps {
  children: string
}

export function HeadingHighlight({ children }: HeadingHighlightProps) {
  return <span className="font-artbrush text-secondary">{children}</span>
}
