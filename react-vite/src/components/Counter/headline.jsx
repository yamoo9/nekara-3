export function CountHeadline({ as: Component = 'h2', children }) {
  return <Component>{children}</Component>;
}
