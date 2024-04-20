import { useEffect } from 'react';

const useScrollPosition = (routeName: string) => {
  useEffect(() => {
    const saveScrollPosition = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      localStorage.setItem(`scrollPosition_${routeName}`, scrollPosition.toString());
    };

    const restoreScrollPosition = () => {
      const scrollPosition = localStorage.getItem(`scrollPosition_${routeName}`);
      if (scrollPosition !== null) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
      }
    };

    restoreScrollPosition();

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [routeName]);
};

export default useScrollPosition;