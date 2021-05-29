import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';

import '../css/scroll.css';

const Scroll = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 380) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return false;
  }

  return (
    <>
      <div className="scrollToTop" onClick={scrollToTop}>
        <FaAngleDoubleUp className="goTopIcon" />
      </div>
    </>
  );
};

export default Scroll;
