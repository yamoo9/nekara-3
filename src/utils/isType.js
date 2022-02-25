export const isArray = (o) => Array.isArray(o);
export const isObject = (o) => o && typeof o === 'object' && !isArray(o);