import { useLayoutEffect } from 'react';

const rootNode = document.documentElement;
let scrollbarWidth = window.innerWidth - rootNode.clientWidth;

export function useScrollPrevent(condition) {
  useLayoutEffect(() => {
    rootNode.style.cssText = `
      overflow: hidden;
      padding-right: ${scrollbarWidth}px;
    `;

    return () => {
      rootNode.removeAttribute('style');
    };
  }, [condition]);
}
