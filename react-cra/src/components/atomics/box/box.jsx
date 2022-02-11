import React from 'react';
import styles from './box.module.scss';

// margin
// marginX
// <mx> margin-{left|right}
// marginY
// <my> margin-{top|bottom}
// marginTop
// mt
// marginRight
// mr
// marginLeft
// ml
// marginBottom
// mb

export default function Box({ as: Component, mx, my, style, ...restProps }) {
  const boxStyle = {};

  if (mx) {
    boxStyle.marginLeft = mx;
    boxStyle.marginRight = mx;
  }

  if (my) {
    boxStyle.marginTop = my;
    boxStyle.marginBottom = my;
  }

  // JSX
  // React Element → type: string | Function | Class
  return <Component style={{ ...boxStyle, ...style }} {...restProps} />;
}

Box.defaultProps = {
  as: 'div',
};
