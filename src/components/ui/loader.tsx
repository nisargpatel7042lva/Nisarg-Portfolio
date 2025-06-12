
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-wrap w-[168px] h-[168px]">
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-0" />
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-1" />
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-2" />
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-1" />
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-2" />
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-2" />
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-3" />
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-3" />
      <div className="flex-none w-[52px] h-[52px] m-[1px] bg-transparent rounded animate-ripple-4" />
    </div>
  );
};

export default Loader;
