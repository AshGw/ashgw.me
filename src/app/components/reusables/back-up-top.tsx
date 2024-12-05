'use client';

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackUpTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <button
      className={`fixed max-w-3 max-h-3 average-transition animate-bounce bottom-1 right-1 mx-12 md:px-18 lg:mx-24 xl:mx-[200px] my-12 
        ${isVisible ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-300'}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <ChevronUp
        id="back-up-top"
        className="average-transition hover:opacity-100 hover:scale-150"
      />
    </button>
  );
}
