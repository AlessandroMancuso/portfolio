import React from "react";

import { TailSpin } from "react-loader-spinner";

// Functional Component
export default function Loader() {
  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[RGBA(0,0,0,0.90)] z-999">
      <TailSpin
        height="80"
        width="80"
        color="#8C52FF"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
