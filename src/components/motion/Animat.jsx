"use client"
import { useEffect,useRef } from "react";
import { motion,useInView,useAnimation } from "framer-motion";



    export const Animat = ({children}) => {
        const ref =useRef(null);
        const isInview =useInView(ref ,{once:true});
        const mainContros = useAnimation();
        const slidContros = useAnimation();

        useEffect(() => {
          
        if (isInview){
            mainContros.start("visible");
            slidContros.start("visible");

        }
        
    
        }, [isInview])
        

    return( 

      
       <div ref={ref} style={{position:"relative" , overflow:"hidden"}}>
        <motion.div
        variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
        }}
        initial ="hidden"
        animate={mainContros}
        transition={{duration:1 ,delay:0.5}}
        >{children}</motion.div>

<motion.div
        variants={{
            hidden:{left:0},
            visible:{left:"100%"}
        }}
        initial ="hidden"
        animate={slidContros}
        transition={{duration:0.5 ,ease:"easeIn"}}
        style={{
    position:"absolute",
    top:4,
    bottom:4,
    left:0,
    right:0,
    background:"varl(--brand)",
    zIndex:20,

        }}
       />
       </div>

    );

}