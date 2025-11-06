import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef } from 'react';
gsap.registerPlugin(useGSAP,ScrollTrigger)
const ProgressBar = () => {
  const progressRef=useRef(null);
  useGSAP(()=>{
    const progress=progressRef.current;
    gsap.to(progress,{
      width:"100%",
      scrollTrigger:{
        trigger:document.body,
        start:"top top",
        end:"bottom bottom",
        scrub:true,
        invalidateOnRefresh:true
      }
    })
  },{scope:"progressRef"})
  return (
    <div className='fixed top-0 left-0 h-1 z-40 bg-transparent'>
        <div ref={progressRef} className='bg-linear-to-tr from-sky-500 via-blue-600 to-purple-600 shadow-inner  '>

        </div>
    </div>
  );
};

export default ProgressBar;