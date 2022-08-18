import React, { useRef } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface RotatingArrowProps {
  onOpen: () => void;
}

const RotatingArrow = (props: RotatingArrowProps) => {
  const { onOpen } = props;
  const arrow = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handleClick = () => {
    arrow.current.classList.toggle('rotated');
    onOpen();
  };
  const handleKeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      arrow.current.classList.toggle('rotated');
      onOpen();
    }
  };
  return (
    <div
      className="arrow"
      onClick={handleClick}
      onKeyDown={handleKeydown}
      ref={arrow}
      role="button"
      tabIndex={0}
    >
      <ArrowForwardIcon
        fontSize="large"
        htmlColor="#000"
        className="icon"
      />
    </div>
  );
};

export default RotatingArrow;
