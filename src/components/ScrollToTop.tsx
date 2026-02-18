import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top when route changes
    const scrollToTop = () => {
      try {
        // Method 1: Use window.scrollTo with options
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
        
        // Method 2: Force scroll position (backup)
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Method 3: Use scrollIntoView as backup
        const firstElement = document.querySelector('main') || document.body;
        if (firstElement && typeof firstElement.scrollIntoView === 'function') {
          firstElement.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      } catch (error) {
        console.warn('Scroll to top failed:', error);
      }
    };

    // Use a small delay to ensure DOM has updated
    const timeoutId = setTimeout(scrollToTop, 0);
    
    // Also try immediately
    scrollToTop();

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;