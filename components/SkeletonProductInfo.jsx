import React from "react";

const SkeletonProductInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="h-[3vh]
		w-[70vw] bg-slate-200
		animate-pulse sm:w-[40vw] sm:h-[3vh]"
      ></div>
      <div
        className="h-[3vh]
		w-[40vw] bg-slate-200
		animate-pulse sm:w-[15vw] sm:h-[3vh]"
      ></div>
      <div
        className="h-[3vh]
		w-[70vw] bg-slate-200
		animate-pulse  sm:w-[40vw] sm:h-[3vh]"
      ></div>
      <div
        className="h-[3vh]
        w-[70vw] bg-slate-200
        animate-pulse sm:w-[24vw] sm:h-[3vh]"
      ></div>
      <div
        className="h-[3vh]
        w-[65vw] bg-slate-200
        animate-pulse  sm:w-[40vw] sm:h-[3vh] "
      ></div>
      <div
        className="h-[3vh]
        w-[55vw] bg-slate-200
        animate-pulse sm:w-[15vw] sm:h-[3vh]"
      ></div>
    </div>
  );
};

export default SkeletonProductInfo;
