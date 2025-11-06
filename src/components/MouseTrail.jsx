import { useGSAP } from '@gsap/react';
import React from 'react';

const MouseTrail = () => {
  useGSAP(()=>{
    let lastX=0;
    let lastY=0;
    const createTrail=(x,y)=>{
      const trail=document.createElement('div');
      trail.classList.add('trail');
      document.querySelector('.trailContainer').appendChild(trail);
    }
    const handleMouseMove=(e)=>{
      const dx=e.clientX - lastX;
      const dy=e.clientY - lastY;
      createTrail(e.clientX,e.clientY);
    }
    window.addEventListener('mousemove',handleMouseMove);
  })
  return (
    <div className='relative min-h-screen'>
      <div className='trailContainer absolute w-full h-full overflow hidden'>

      </div>
    </div>
  );
};

export default MouseTrail;