"use client";
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionOne = () => {
  //   ---VALUE FOR TRUCK MOVEMENT---
  const [leftValue, setLeftValue] = useState(0);

  //   ----SCROLL REFERENCE -----
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  //   ---ALL SACK CONTAINER MOTION----
  const overallMb = useTransform(
    scrollYProgress,
    [0, 0.5, 0.98, 1],
    ["0vh", "0vh", "0vh", "14vh"]
  );
  const overallTop = useTransform(
    scrollYProgress,
    [0, 0.5, 0.98, 1],
    ["18vh", "25vh", "25vh", "25vh"]
  );

  //   ----SACK1 MOTION----
  const sack1width = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ["17vw", "10vw", "10vw", "10vw"]
  );
  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.48, 0.5, 1],
    [0, 0, 1, 1]
  );

  //   ----SACK2 MOTION----
  const sack2Width = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ["0vw", "9vw", "14vw", "14vw"]
  );
  const sack2Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 0, 1, 1]
  );
  const text2Opacity = useTransform(
    scrollYProgress,
    [0, 0.73, 0.75, 1],
    [0, 0, 1, 1]
  );
  const sack2X = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ["-20vw", "-20vw", "0vw", "0vw"]
  );

  //   ----SACK3 MOTION----
  const sack3Width = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ["0vw", "9vw", "14vw", "16vw"]
  );
  const sack3Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    [0, 0, 0, 1]
  );
  const text3Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.98, 1],
    [0, 0, 0, 1]
  );
  const sack3X = useTransform(
    scrollYProgress,
    [0, 0.5, 0.75, 1],
    ["-20vw", "-20vw", "-20vw", "0vw"]
  );

  //   ---TRUCK MOTION SPEED---
  useEffect(() => {
    const interval = setInterval(() => {
      setLeftValue((prev) => {
        if (prev >= 100) {
          return 0;
        } else {
          return prev + 0.1;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-screen h-[400vh] relative flex justify-center items-center "
    >
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full  h-full">
          <div className="absolute top-0 left-0 w-full h-auto">
            <div className="w-full h-full relative">
              {/* --MAIN BG IMAGE--- */}
              <Image
                className="w-full absolute top-0 object-cover"
                src={assets.sectionOneBg}
              />

              {/* ---TRUCK IMAGE---- */}
              <motion.div
                style={{
                  left: `${leftValue}vw`,
                }}
                className="absolute top-[33rem] w-20"
              >
                <Image
                  className="w-full object-cover"
                  alt="truck"
                  src={assets.truck}
                />
              </motion.div>
            </div>
          </div>

          {/* ----LOGO --- */}
          <div className="absolute top-[2vh] left-[16vw] w-40">
            <Image
              className="object-cover w-full"
              alt="logo"
              src={assets.logo}
            />
          </div>

          {/* ----ALL SACKS CONTAINER ----- */}
          <motion.div
            style={{
              marginBottom: overallMb,
              top: overallTop,
            }}
            className="sticky  z-10 min-h-[35vw]  left-0 px-[15rem] flex items-end justify-between "
          >

            {/* ----RICE SACK 1----- */}
            <div className="w-[33%] h-auto z-30  flex justify-center flex-col items-center ">
              <motion.div
                style={{
                  width: sack1width,
                }}
                className="w-[17vw]"
              >
                <Image className="w-full object-cover" src={assets.riceSack} />
              </motion.div>
              <motion.div
                style={{
                  opacity: text1Opacity,
                }}
                className="flex flex-col gap-4 justify-center items-center"
              >
                <h3 className="text-sm">Matta Vadi Rice</h3>
                <h2 className="text-4xl">2KG</h2>
              </motion.div>
            </div>

            {/* ----RICE SACK 2----- */}
            <motion.div
              style={{
                translateX: sack2X,
                opacity: sack2Opacity,
              }}
              className="w-[33%] h-full z-20  flex justify-center flex-col items-center "
            >
              <motion.div
                style={{
                  width: sack2Width,
                }}
                className="w-[9vw]"
              >
                <Image className="w-full object-cover" src={assets.riceSack} />
              </motion.div>
              <motion.div
                style={{
                  opacity: text2Opacity,
                }}
                className="flex flex-col gap-4 justify-center items-center "
              >
                <h3 className="text-sm">Matta Vadi Rice</h3>
                <h2 className="text-4xl">5KG</h2>
              </motion.div>
            </motion.div>

            {/* ----RICE SACK 3----- */}
            <motion.div
              style={{
                translateX: sack3X,
                opacity: sack3Opacity,
              }}
              className="w-[33%] h-full z-10  flex justify-center flex-col items-center "
            >
              <motion.div
                style={{
                  width: sack3Width,
                }}
                className="w-[16vw]"
              >
                <Image className="w-full object-cover" src={assets.riceSack} />
              </motion.div>{" "}
              <motion.div
                style={{
                  opacity: text3Opacity,
                }}
                className="flex flex-col gap-4 justify-center items-center "
              >
                <h3 className="text-sm">Matta Vadi Rice</h3>
                <h2 className="text-4xl">10KG</h2>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="sticky top-0 mt-[80vh] pb-10 h-screen  w-full flex justify-center items-center ">
            <div className="w-[70vw] h-[70vh] flex items-start justify-start">
              <h2 className="font-semibold text-[4vw] leading-none uppercase text-primary">
                Our <br />
                products
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
