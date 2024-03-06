import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="rounded-10 mt-1 flex h-[12vh] w-full flex-col justify-center rounded-lg bg-themeOne-60 pr-4">
      <div className="h-[7vh] text-right text-3xl text-gray-50 md:text-4xl">
        {value !== null ? value : 0}
      </div>
    </div>
  );
};

export default Display;
