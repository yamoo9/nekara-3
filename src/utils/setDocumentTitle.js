const {REACT_APP_TITLE: BASE_DOC_TITLE} = process.env;

export const setDocumentTitle = (documentTitle) =>
  documentTitle ? `${documentTitle} ← ${BASE_DOC_TITLE}` : BASE_DOC_TITLE;