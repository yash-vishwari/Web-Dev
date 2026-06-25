import React from 'react'
import LoadingVideo from "../assets/Loading.gif";
function Loading() {
  return (
    <>
      <div className='flex  h-[90vh] w-[100vw] flex-col justify-center items-center'>
        <img src={LoadingVideo} alt="" className='h-50'/>

        <p className='font-bold text-3xl'>Loading Please Wait ...</p>
      </div>
    </>
  );
}

export default Loading
