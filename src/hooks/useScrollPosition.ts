import { useEffect, RefObject } from 'react';

/**
 * 
 * @param routeName 
 * @param scrollableElementRef accepts an optional scrollableElementRef parameter of 
 *      type RefObject<HTMLElement>, which represents the ref of the scrollable element.
 */
const useScrollPosition = (routeName: string, scrollableElementRef?: RefObject<HTMLElement>) => {
  useEffect(() => {
    const saveScrollPosition = () => {
      /**
       * When saving the scroll position, it checks if scrollableElementRef is provided. 
       * If it is, it retrieves the scroll position from scrollableElementRef.current.scrollTop. 
       * Otherwise, it falls back to the previous behavior of using window.pageYOffset or 
       *    document.documentElement.scrollTop.
       */
      const scrollPosition = scrollableElementRef?.current?.scrollTop || window.scrollY || document.documentElement.scrollTop;
      localStorage.setItem(`scrollPosition_${routeName}`, scrollPosition.toString());
    };

    const restoreScrollPosition = () => {
      const scrollPosition = localStorage.getItem(`scrollPosition_${routeName}`);
      if (scrollPosition !== null) {
        if (scrollableElementRef?.current) {
          /**
           * When parsing the scroll position from localStorage, parseInt is used with a 
           * radix of 10 to ensure that the value is parsed as a decimal number.
           */
          scrollableElementRef.current.scrollTop = parseInt(scrollPosition, 10);
        } else {
          window.scrollTo(0, parseInt(scrollPosition, 10));
        }
      }
    };

    restoreScrollPosition();

    const scrollableElement = scrollableElementRef?.current || window;
    scrollableElement.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      scrollableElement.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [routeName, scrollableElementRef]);
};

export default useScrollPosition;