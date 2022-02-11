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

export default function Box({ as, mx, my, style, ...restProps }) {
  const boxStyle = {};

  if (mx) {
    boxStyle.marginLeft = mx;
    boxStyle.marginRight = mx;
  }

  if (my) {
    boxStyle.marginTop = my;
    boxStyle.marginBottom = my;
  }

  // JSX → React.createElement API
  return React.createElement(
    /* type */
    as, 
    /* props (with children) */
    {
      style: {
        ...boxStyle,
        ...style,
      },
      ...restProps,
    }
  );

  // JSX
  // return <as style={{ ...boxStyle, ...style }} {...restProps} />;
}

Box.defaultProps = {
  as: 'div',
};
