import Image from 'next/image'
import React from 'react'

const CookingCard = ({data}) => {
  return (
    <div
    style={{ backgroundColor: `${data.bgColor}` }}
    className={`group  hover:-rotate-3 transition-all duration-200 ease-in w-[40vh] h-[50vh] relative flex flex-col rounded-2xl overflow-hidden`}
  >
    <div className=" absolute opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in top-0 left-[1vw] w-full h-full overflow-hidden">
      <Image
        src={data.steamImage}
        className="object-cover  w-[90%]"
        alt='steam'
      />
    </div>
    <div className="flex flex-col w-full p-8 lg:gap-4 xl:gap-6">
      <h3 className="font-medium text-[5vh] leading-[1.1] text-white w-[50%] uppercase">
        {data.heading}
      </h3>
      <p className="font-sans font-medium text-[1.75vh] leading-none text-white ">
        {data.procedure}
      </p>
    </div>
    <div className="w-full h-full  relative">
      <div className="absolute bottom-0  left-[2vw] w-full">
        <Image
          src={data.vesselImage}
          alt='vessel'
          className="object-cover w-[80%] group-hover:w-[85%]  transition-all duration-200 ease-in "
        />
      </div>
    </div>
  </div>
  )
}

export default CookingCard