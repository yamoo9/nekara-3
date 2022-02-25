export const isArray = (o) => Array.isArray(o);

export const isObject = (o) => o && typeof o === 'object' && !isArray(o);

export const getPublicPath = (path) => `${process.env.PUBLIC_URL}/${path}`;

export const classNames = (baseClassNames) => (customClassNames = '') => `${baseClassNames} ${customClassNames}`.trim();

const {REACT_APP_TITLE: BASE_DOC_TITLE} = process.env;

export const setDocumentTitle = (documentTitle) =>
  documentTitle ? `${documentTitle} ← ${BASE_DOC_TITLE}` : BASE_DOC_TITLE;

export * from './lazyComponent';