import React from 'react';

function Arrow({icoWidth="30px", icoHeight="30px"}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={icoWidth} height={icoHeight} viewBox="0 0 15 15">
    <path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"/>
    </svg>
  );
}

export default Arrow;