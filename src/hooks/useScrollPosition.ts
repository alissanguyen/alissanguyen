import { smoothScrollTo } from '@/utils/scrollAnimationUtil';
import { useEffect } from 'react';

const useScrollPosition = (routeName: string) => {
  useEffect(() => {
    const saveScrollPosition = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      localStorage.setItem(`scrollPosition_${routeName}`, scrollPosition.toString());
    };

    const restoreScrollPosition = () => {
      const scrollPosition = localStorage.getItem(`scrollPosition_${routeName}`);
      if (scrollPosition !== null) {
        const scrollToPosition = parseInt(scrollPosition, 10);

        smoothScrollTo(scrollToPosition);
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