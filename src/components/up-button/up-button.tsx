import { useState, useEffect, useCallback } from 'react';
import useScrollToTop from '../../hooks/use-scroll-to-top';


export default function UpButton(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = useScrollToTop();
  const handleWheelScroll = useCallback(() => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleWheelScroll);

    return () => window.removeEventListener('scroll', handleWheelScroll);
  }, [handleWheelScroll]);

  if (!isVisible) {
    return null;
  }

  return (
    <button className="up-btn" onClick={scrollToTop}>
      <svg width={12} height={18} aria-hidden="true">
        <use xlinkHref="#icon-arrow2" />
      </svg>
    </button>
  );
}
