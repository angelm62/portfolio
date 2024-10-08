import { motion } from "framer-motion";
// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100", "0%"],
    },
};

const reverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
};
{/**check the init of the animation */}
const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs, each representinf a step of the stairs */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-white/60 relative"
                    />
                );
            })}
        </>
    );
};

export default Stairs