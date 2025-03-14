import { useCallback } from 'react';


export default function useScrollToTop () {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return scrollToTop;
}
