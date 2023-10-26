import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ICONS
import {
    faArrowUp
  } from "@fortawesome/free-solid-svg-icons";

// Functional Component
export default function HomeButton(props) {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0 && isAtTop) {
      setIsAtTop(false);
    } else if (window.scrollY === 0 && !isAtTop) {
      setIsAtTop(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This adds a smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAtTop]);

  return (
    <>
      {!isAtTop && (
        <button
          className="w-[4em] h-[4em] flex justify-center items-center bg-[#8C52FF] hover:opacity-70 rounded-full fixed bottom-[2em] right-[2em] sm:bottom-[4em] sm:right-[3em] z-50"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} color="#fff" size="lg" />
        </button>
      )}
    </>
  );
}
