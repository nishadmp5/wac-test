"use client";
import { assets, cookingData, slidesData } from "@/app/assets/assets";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import CookingCard from "@/app/components/CookingCard";

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
                <Image src={assets.bgRing} className="w-[70%] h-[70%]" />
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
        <div className="absolute bottom-0 left-0 w-screen h-screen">
          <div className="w-full h-full relative">
            <div className="z-0 absolute w-full h-full">
              <Image
                src={assets.cookingSecBg}
                alt="Background Image"
                className="w-full h-full"
              />
            </div>
            <div className="z-10 w-full h-full flex justify-center items-center">
              <div className="z-10 flex flex-col items-center gap-12">
                <h2 className="text-white font-semibold text-6xl">
                  HOW TO COOK
                </h2>
                <div className="grid grid-cols-3 gap-x-6">
                  {cookingData.map((data, index) => (
                   <CookingCard key={index} data={data} />
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
