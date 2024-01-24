import React, { useRef } from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Landing from './Landing';

export default function BoardLanding() {

    const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  //LANDING PG ANIMATION
  const opacity = useTransform(scrollYProgress, [0, 0.95], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.95], [1, 0.9]);


  return (
    <motion.div ref={targetRef} className='basicLand landing' style={{opacity, scale}}>
        <h1>JOIN US AS A STRATEGIC PARTNER AND INVESTOR IN <br/> SHAPING THE FUTURE OF OUR INNOVATIVE ENDEAVORS </h1>
        {/* <ul id="side_nav">
            <li><svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.13172L1.48849 7.72897C0.980499 7.98719 0.362788 7.77786 0.108793 7.26143C-0.145202 6.745 0.0607013 6.11702 0.568691 5.8588L11.7327 0.184052C11.9708 0.0631978 12.2339 0 12.5 0C12.7661 0 13.0286 0.0629122 13.2668 0.183766L24.4313 5.8588C24.9393 6.11702 25.1452 6.745 24.8912 7.26143C24.6372 7.77786 24.0195 7.98719 23.5115 7.72897L12.5 2.13172ZM3.32287 9.24705C3.89082 9.24705 4.35124 9.71511 4.35124 10.2925V19.6221C4.35124 19.9635 4.48461 20.2908 4.72202 20.5322C4.95942 20.7735 5.28141 20.9091 5.61715 20.9091H19.3828C19.7186 20.9091 20.0406 20.7735 20.278 20.5322C20.5154 20.2908 20.6488 19.9635 20.6488 19.6221V10.2925C20.6488 9.71511 21.1092 9.24705 21.6771 9.24705C22.2451 9.24705 22.7055 9.71511 22.7055 10.2925V19.6221C22.7055 20.518 22.3554 21.3772 21.7323 22.0106C21.1092 22.6441 20.2641 23 19.3828 23H5.61715C4.73593 23 3.8908 22.6441 3.26769 22.0106C2.64457 21.3772 2.29451 20.518 2.29451 19.6221V10.2925C2.29451 9.71511 2.75492 9.24705 3.32287 9.24705Z" fill="#942D2D"/>
            </svg>
            </li>
                        <li><svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.62418 1.47772C11.2278 1.47629 12.7958 1.93801 14.1299 2.80446C15.464 3.6709 16.5042 4.90315 17.1189 6.34532C17.7336 7.78748 17.8952 9.37477 17.5832 10.9064C17.2713 12.438 16.4998 13.8451 15.3664 14.9497C14.2329 16.0543 12.7885 16.8068 11.2158 17.1119C9.6431 17.417 8.01277 17.2612 6.53106 16.6639C5.04936 16.0667 3.78286 15.0551 2.89178 13.7569C2.00069 12.4587 1.52507 10.9323 1.52507 9.37091C1.53479 7.28167 2.39097 5.28059 3.90754 3.80258C5.4241 2.32458 7.47848 1.48909 9.62418 1.47772ZM9.62418 0C7.7207 0 5.85996 0.549594 4.27727 1.57928C2.69459 2.60897 1.46103 4.07251 0.732601 5.78482C0.00417013 7.49713 -0.186421 9.3813 0.18493 11.1991C0.556281 13.0169 1.47289 14.6866 2.81886 15.9971C4.16482 17.3077 5.87969 18.2002 7.74659 18.5618C9.6135 18.9233 11.5486 18.7378 13.3072 18.0285C15.0658 17.3192 16.5689 16.1181 17.6264 14.5771C18.6839 13.0361 19.2484 11.2243 19.2484 9.37091C19.2484 6.88559 18.2344 4.50206 16.4295 2.74468C14.6246 0.987289 12.1767 0 9.62418 0Z" fill="#942D2D"/>
            <path d="M23.0891 21.5632L17.7446 16.209L16.7148 17.2264L22.0594 22.5807C22.1265 22.648 22.2063 22.7014 22.2942 22.738C22.3821 22.7746 22.4764 22.7936 22.5717 22.7939C22.6669 22.7943 22.7614 22.7759 22.8495 22.74C22.9377 22.704 23.0179 22.6511 23.0855 22.5843C23.1531 22.5175 23.2068 22.4381 23.2436 22.3506C23.2804 22.2631 23.2995 22.1693 23.2998 22.0745C23.3001 21.9797 23.2817 21.8857 23.2456 21.798C23.2094 21.7103 23.1562 21.6305 23.0891 21.5632Z" fill="#942D2D"/>
            </svg>
            </li>
                        <li><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42857 0V9H0V0H9.42857ZM1.65 1.61538V7.38462H7.77857V1.61538H1.65ZM22 0V9H12.5714V0H22ZM14.2214 1.61538V7.38462H20.35V1.61538H14.2214ZM9.42857 12V21H0V12H9.42857ZM1.65 13.6154V19.3846H7.77857V13.6154H1.65ZM22 12V21H12.5714V12H22ZM14.2214 13.6154V19.3846H20.35V13.6154H14.2214Z" fill="#942D2D"/>
            </svg>
            </li>
                        <li><svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.88183 6.6711C1.53198 4.48844 3.15666 2.52787 5.63855 1.80958C6.07898 1.68202 6.55419 1.71833 6.96734 1.91111C7.38049 2.10388 7.70051 2.43862 7.86218 2.84712L8.65895 4.85974C8.78722 5.18351 8.81041 5.53621 8.72555 5.87256C8.6407 6.20892 8.45167 6.51357 8.18272 6.74744L5.81256 8.80343C5.69573 8.90499 5.60868 9.03349 5.55988 9.1764C5.51109 9.31931 5.50222 9.47177 5.53415 9.61889L5.55613 9.70911L5.61291 9.93466C5.90767 11.0306 6.35679 12.0839 6.94819 13.0664C7.5924 14.1103 8.39187 15.061 9.32201 15.8892L9.39528 15.9517C9.5136 16.0512 9.65712 16.1199 9.81184 16.1513C9.96656 16.1826 10.1272 16.1754 10.2781 16.1304L13.3425 15.2161C13.6907 15.1125 14.0637 15.1098 14.4136 15.2085C14.7634 15.3071 15.0742 15.5024 15.306 15.7695L16.7567 17.4369C17.3611 18.1309 17.2879 19.1511 16.5937 19.7635C14.6943 21.4413 12.0823 21.7848 10.2653 20.402C8.03807 18.7002 6.16049 16.6247 4.72639 14.2791C3.28065 11.9354 2.31678 9.35418 1.88183 6.6711ZM7.45555 9.7334L9.41909 8.02614C9.95729 7.55862 10.3357 6.9494 10.5057 6.27668C10.6758 5.60397 10.6297 4.89847 10.3734 4.25075L9.57844 2.23813C9.25304 1.41616 8.60901 0.742644 7.77759 0.354831C6.94617 -0.0329832 5.98992 -0.105914 5.10371 0.150899C2.02104 1.04443 -0.453528 3.66257 0.0703246 6.93308C0.436655 9.21637 1.28105 12.1208 3.14384 15.1536C4.69106 17.6827 6.7164 19.9206 9.1187 21.7553C11.8442 23.8287 15.4819 23.1208 17.8447 21.0353C18.5208 20.439 18.9312 19.6208 18.9921 18.7477C19.053 17.8745 18.7599 17.0123 18.1726 16.3369L16.7219 14.6678C16.2578 14.1342 15.6361 13.7442 14.9364 13.5475C14.2367 13.3509 13.491 13.3568 12.7948 13.5643L10.2507 14.3225C9.59377 13.681 9.01839 12.9688 8.53623 12.2006C8.07048 11.4239 7.70752 10.5959 7.45555 9.73514V9.7334Z" fill="#942D2D"/>
            </svg>
            </li>
        </ul> */}

    </motion.div>
    
  )
}
