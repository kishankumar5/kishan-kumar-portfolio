import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { Component } from "react";

const SectionWrapper = (Component, idName) => 
    function HOC(){
        return(
            <motion.section 
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            // `amount: "some"` (any pixel visible) rather than a fraction:
            // a fractional threshold can never be met once a section grows
            // taller than viewport/amount, which silently left tall sections
            // stuck at opacity 0 on mobile.
            viewport={{once:true, amount:"some"}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
            <Component />
            </motion.section>
        )
    }

export default SectionWrapper