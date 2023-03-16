import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section variants={staggerContainer()} initial='hidden' whileInView={'show'} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <span className="hash-span" id={idName}>&nbsp;</span>
                <Component />
            </motion.section>
        )
    }


export default SectionWrapper

// viewport={{ once: true, amount: 0.25 }} -->> removed from line 9 before class name as it was not allowing to render the content in mobile devices