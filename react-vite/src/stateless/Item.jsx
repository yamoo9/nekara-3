import { node, elementType, oneOfType, string } from 'prop-types'

export const Item = ({ as: ComponentName, children } /* as => 사용자가 원하는 형태로 태그를 설정 */) => {
  return (
    <>
      <ComponentName className="stateless">{children}</ComponentName>
    </>
  )
}

Item.defaultProps = {
  as: 'div'
}

// HTML Standards Component Name (string) | React Component Types (class|function)
Item.propTypes = {
  as: oneOfType([elementType, string]), 
  children: node
}