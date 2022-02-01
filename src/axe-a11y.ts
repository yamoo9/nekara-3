if (process.env.NODE_ENV === 'development') {
  Promise.all([
    import('react'),
    import('react-dom'),
    import('axe-core/locales/ko.json'),
    import('@axe-core/react'),
  ]).then(([React, ReactDOM, { default: ko }, { default: axe }]) => {
    axe(React, ReactDOM, 1000, { locale: ko } as unknown);
  });
}
