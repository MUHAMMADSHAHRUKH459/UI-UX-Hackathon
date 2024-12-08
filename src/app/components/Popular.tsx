
import Image from 'next/image';
import React from 'react';

export default function Newstyle() {
  return (
    <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12 bg-white text-black">
      <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
      <h1 className='w-[64px] h-[42px] font-bold text-[34px] pr-10 mr-40 mb-96'>Explore new and popular styles</h1>
        <div className="w-full h-full relative">
          <Image
            src="/image/yr.png"
            alt="Main Image"
            layout="responsive"
            width={400}
            height={560}
            className="object-cover shadow-lg"
          />
        </div>
      </div>

     
      <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
        {/* 4 Images */}
        <div className="relative">
          <Image
            src="/image/20.png"
            alt="Image 1"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/image/02.png"
            alt="Image 2"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/image/01.png"
            alt="Image 3"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/image/prod8.png"
            alt="Image 4"
            layout="responsive"
            width={200}
            height={280}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}