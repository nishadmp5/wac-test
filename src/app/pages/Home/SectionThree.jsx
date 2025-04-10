"use client";
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
import { useMeasure } from 'react-use';


// ---3D MODEL--
function Ring3dModel({scrollYValue}) {
    const glb = useGLTF("/RingModel.glb");
    const modelRef = useRef();

    const { mouse } = useThree();

    // ---3D POLISHING---
    useEffect(() => {
      glb.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.roughness = 0.7;
          child.material.metalness = 0.7; 
          child.material.needsUpdate = true;
        }
      });
    }, [glb]);

    // ---SCROLL ROTATION AND HOVER MOVEMENT----
    useFrame(() => {
        if (modelRef.current) {
          modelRef.current.rotation.y = scrollYValue * 0.002 + mouse.x * -0.03 ;
          modelRef.current.rotation.x = mouse.y * 0.03;
        }
      });
  
    return (
      <primitive
      ref={modelRef}
        object={glb.scene}
        scale={[1.8, 1.8, 1.8]}
        position={[0, -1.5, 0]}
      />
    );
  }



const SectionThree = () => {

    // ---SCROLLY REFERENCE--
    const containerRef = useRef(null);
    const [scrollYValue,setScrollYValue] = useState(0)

    // ---SCROLLY DETECTION----
    useEffect(()=>{
        const handleScroll = () => {
          setScrollYValue(-(containerRef.current.getBoundingClientRect().top)) ;
        
        };
  
        window.addEventListener("scroll",handleScroll);
  
        return () => {
          window.removeEventListener("scroll",handleScroll);
        }
      },[])


  return (
    <section ref={containerRef} className='bg-[#eb6224] h-[150vh] w-full flex justify-center items-center relative'>
        <div className='w-full h-full flex flex-col items-center relative'>
            <div className='w-[80%] h-[50%] py-20'>
            <div className='w-full flex justify-between px-5'>
                <h2 className='text-white font-sans font-semibold'>MADE</h2>
                <h2 className='text-white font-sans font-semibold'>WITH</h2>
                <h2 className='text-white font-sans font-semibold'>MADNESS</h2>
            </div>
            <h1 className='text-white text-[10vw] leading-[0.8] text-center font-semibold font-sans'>UNLOCK HUMAN <br /> POTENTIAL</h1>
            </div>

            <div className='absolute h-[80vh] w-[60vw] flex justify-center items-center top-[15rem]'>
                <Canvas
                resize={{ scroll: false, debounce: 0 }}
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ width: "100%", height: "100%" }}
              >

                {/* ----LIGHTING VALUES--- */}
                <ambientLight intensity={4} />
                <directionalLight position={[2, 0, 1]} intensity={1.8} />
                <directionalLight position={[-2, 0, 1]} intensity={1.8} />
                <hemisphereLight
                  intensity={1}
                  groundColor="#111111"
                  color="#EA2424"
                />

                <Ring3dModel scrollYValue={scrollYValue}/>
              </Canvas>
            </div>
        </div>
    </section>
  )
}

export default SectionThree