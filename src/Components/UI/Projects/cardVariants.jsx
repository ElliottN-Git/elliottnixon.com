const cardVariants = {
    cardVariantsCol1: {
        offscreen: {
            x: -500,
            // perspective: "1000px",
            display: "none",
        },
        onscreen: {
            x: 0,
            // perspective: "1000px",
            // translateZ: "10px",
            display: "flex",
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.7,
                delay: 0.3
            }
        }
    },

    cardVariantsCol2: {
        offscreen: {
            y: +1000,
            display: "none"
        },
        onscreen: {
            y: 0,
            display: "flex",
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.7,
                delay: 0.3
            }
        }
    },

    cardVariantsCol3: {
        offscreen: {
            x: +500,
            display: "none",
        },
        onscreen: {
            x: 0,
            display: "flex",
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.7,
                delay: 0.3
            }
        }
    }
};

export default cardVariants;