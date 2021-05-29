import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';

import '../css/scroll.css';

const Scroll = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <>
      <div className="scrollToTop">
        <FaAngleDoubleUp className="goTopIcon" />
      </div>
    </>
  );
};

export default Scroll;
