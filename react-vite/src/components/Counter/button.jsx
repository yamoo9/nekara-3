export function Button({ children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}
