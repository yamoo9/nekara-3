export const getPubilc = (path) => `${process.env.PUBLIC_URL}/${path}`;
export const getPublicAsset = (filename) => getPubilc(`assets/${filename}`);
