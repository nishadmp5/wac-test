"use client";
import { assets, cookingData, slidesData } from "@/app/assets/assets";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import cookingSecBg from "../../assets/SectionTwo/cooking-bg.png";
import bgRing from "../../assets/SectionTwo/ring.png";

const SectionTwo = () => {
  // ---SCROLL REFERENCE---
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  //   --BG AND CARDS ROTATION----
  const rMotion = useTransform(scrollYProgress, [0, 0.8, 1], [0, -96, -96]);

  return (
    <section className="w-screen min-h-screen  flex justify-center items-center relative">
      <div
        ref={containerRef}
        className="w-full h-[550vh] flex flex-col items-center relative"
      >
        <div className="sticky top-20 w-full h-auto">
          <div className="w-screen h-screen overflow-hidden relative ">
            {/* ---BG ROTATIONAL RING-- */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[350vh] h-[350vh] rounded-full   bg-[#FBDE5E]">
              <motion.div
                style={{
                  rotateZ: rMotion,
                }}
                className="w-full h-full flex justify-center items-center relative"
              >
                <Image src={bgRing} className="w-[70%] h-[70%]" />
              </motion.div>
            </div>

            {/* -----BG SACK ---- */}
            <div className="absolute w-screen h-screen bottom-0 left-0 flex items-end justify-center ">
              <motion.div
                initial={{
                  width: "25vw",
                  y: "40vh",
                }}
                whileInView={{
                  width: "30vw",
                  y: "25vh",
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.3,
                  type: "tween",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className="w-[30vw]"
              >
                <Image
                  className="object-cover w-full"
                  alt="rice sack"
                  src={assets.riceSack}
                />
              </motion.div>
            </div>

            <div className="absolute w-screen h-screen top-0 left-0 flex items-start justify-center p-10">
              <h3 className="uppercase text-primary text-[3vw] leading-none font-semibold text-center ">
                Why MattaNaad <br />
                MATTA RICE?
              </h3>
            </div>

            {/* ---ALL QUALITY CARDS---- */}
            <div className="absolute w-screen h-screen top-0 left-0 overflow-hidden">
              <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
                <motion.div
                  style={{
                    rotate: rMotion,
                  }}
                  className="absolute top-20  w-[350vh] h-[350vh] flex justify-center  rounded-full "
                >
                  <div className="w-screen h-screen  relative">
                    {/* ---CARD 1 ---- */}
                    <motion.div
                      style={{}}
                      className="absolute top-[8vh] left-[70vh]  w-[22vw] h-[50vh] bg-white z-10   flex flex-col items-center rounded-3xl"
                    >
                      <div className="bg-[#006126] w-full h-[5rem] rounded-3xl flex items-center justify-center ">
                        <h3 className="font-semibold text-[1.6rem] text-center text-white uppercase">
                          {slidesData[0].heading}
                        </h3>
                      </div>
                      <div className="w-full h-full flex flex-col p-8">
                        <p className="font-normal text-black text-center text-[1rem] ">
                          {slidesData[0].description}
                        </p>
                        <div className="w-full h-full flex justify-center items-center">
                          <Image
                            className="w-[60%] object-cover"
                            src={slidesData[0].icon}
                            alt="slider images"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* ---CARD 2 ---- */}
                    <motion.div
                      style={{
                        transform: "rotate(32deg)",
                      }}
                      className="absolute top-[30vh] left-[145vh]  w-[22vw] h-[50vh] bg-white    flex flex-col items-center rounded-3xl"
                    >
                      <div className="bg-[#006126] w-full h-[5rem] rounded-3xl flex items-center justify-center ">
                        <h3 className="font-semibold text-[1.6rem] text-center text-white uppercase">
                          {slidesData[1].heading}
                        </h3>
                      </div>
                      <div className="w-full h-full flex flex-col p-8">
                        <p className="font-normal text-black text-center text-[1rem] ">
                          {slidesData[1].description}
                        </p>
                        <div className="w-full h-full flex justify-center items-center">
                          <Image
                            className="w-[60%] object-cover"
                            src={slidesData[1].icon}
                            alt="slider images"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* ---CARD 3 ---- */}
                    <motion.div
                      style={{
                        transform: "rotate(64deg)",
                      }}
                      className="absolute top-[90vh] left-[198vh]  w-[22vw] h-[50vh] bg-white    flex flex-col items-center rounded-3xl"
                    >
                      <div className="bg-[#006126] w-full h-[5rem] rounded-3xl flex items-center justify-center ">
                        <h3 className="font-semibold text-[1.6rem] text-center text-white uppercase">
                          {slidesData[2].heading}
                        </h3>
                      </div>
                      <div className="w-full h-full flex flex-col p-8">
                        <p className="font-normal text-black text-center text-[1rem] ">
                          {slidesData[2].description}
                        </p>
                        <div className="w-full h-full flex justify-center items-center">
                          <Image
                            className="w-[60%] object-cover"
                            src={slidesData[2].icon}
                            alt="slider images"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* ---CARD 4 ---- */}
                    <motion.div
                      style={{
                        transform: "rotate(96deg)",
                      }}
                      className="absolute top-[165vh] left-[210vh]  w-[22vw] h-[50vh] bg-white    flex flex-col items-center rounded-3xl"
                    >
                      <div className="bg-[#006126] w-full h-[5rem] rounded-3xl flex items-center justify-center ">
                        <h3 className="font-semibold text-[1.6rem] text-center text-white uppercase">
                          {slidesData[3].heading}
                        </h3>
                      </div>
                      <div className="w-full h-full flex flex-col p-8">
                        <p className="font-normal text-black text-center text-[1rem] ">
                          {slidesData[3].description}
                        </p>
                        <div className="w-full h-full flex justify-center items-center">
                          <Image
                            className="w-[60%] object-cover"
                            src={slidesData[3].icon}
                            alt="slider images"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* ----HOWTOCOOK SECTION---- */}
        <div className="absolute bottom-0 w-screen h-screen bg-[#E56B00]">
          <div className="w-full h-full relative">
            <div className="absolute w-full h-full">
              <Image
                src={cookingSecBg}
                alt="Background Image"
                className="w-full h-full"
              />
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col items-center gap-12">
                <h2 className="text-white font-semibold text-6xl">
                  HOW TO COOK
                </h2>
                <div className="grid grid-cols-3 gap-x-6">
                  {cookingData.map((data, index) => (
                    <div
                      style={{ backgroundColor: `${data.bgColor}` }}
                      key={index}
                      className={`group  hover:-rotate-3 transition-all duration-200 ease-in w-[40vh] h-[50vh] relative flex flex-col rounded-2xl overflow-hidden`}
                    >
                      <div className=" absolute opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in top-0 left-[1vw] w-full h-full overflow-hidden">
                        <Image
                          src={data.steamImage}
                          className="object-cover  w-[90%]"
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
                            className="object-cover w-[80%] group-hover:w-[85%]  transition-all duration-200 ease-in "
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
