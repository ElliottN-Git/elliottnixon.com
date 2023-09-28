import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { useInView } from "react-intersection-observer";

//CSS
import classes from './AboutMe.module.css';
//

import transcript from './Transcript';

//Framer-motion setup

const AboutMe = (props) => {
    // const controls = useAnimation();
    // const [scrollRef, inView] = useInView();

    const variants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: (customDelay) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: customDelay
            }
        }),
        buttonOffscreen: {
            opacity: 0,
        },
        buttonOnscreen: (customDelay) => ({
            opacity: 1,
            transition: {
                duration: 1,
                delay: customDelay
            }
        })
    };
    //
    // const scrollRef = useRef(null);

    // const scope = useSpanAnimation(inView);

    //state and handlers for video and transcript section toggle
    const [showVideo, setShowVideo] = useState(false);
    const [showTranscript, setShowTranscript] = useState(false);

    const watchVideoClickedHandler = () => {
        setShowTranscript(false);
        setShowVideo(true);
        props.setMainScroll(false);
    }

    const readTranscriptClickedHandler = () => {
        setShowVideo(false);
        setShowTranscript(true);
        props.setMainScroll(false);
    }
    //

    return (
        <>
            <section className={classes.AboutMe}>
                <div className={`${classes.VideoContainer} ${showVideo ? classes.ShowVideoIntro : classes.HideVideoIntro}`}></div>
                <section className={`${classes.VideoContainer} ${showVideo ? classes.ShowVideoIntro : classes.HideVideoIntro}`}>
                    <iframe
                        className={classes.VideoIntro}
                        src="https://www.youtube-nocookie.com/embed/94QB72USlEM?si=t1z1vmhLsbBiY61o&rel=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                        hidden={false}>
                    </iframe>
                    <button onClick={() => { setShowVideo(false); props.setMainScroll(true); }}
                        className={classes.CloseBtn}
                    >X</button>
                </section>
                <section
                    className={classes.OptionContainer}
                >
                    <motion.span
                        className={classes.MainText}
                        variants={variants}
                        initial={variants.offscreen}
                        whileInView={variants.onscreen}
                        viewport={{ once: true, amount: "all" }}
                        custom={0.5}

                    >
                        Great, you scrolled down!
                    </motion.span>
                    <motion.span
                        className={classes.MainText}
                        style={{ marginTop: '3vmin' }}
                        variants={variants}
                        initial={variants.offscreen}
                        whileInView={variants.onscreen}
                        viewport={{ once: true, amount: "all" }}
                        custom={1.5}
                    >
                        {/* Here's a short video of me introducing myself... */}
                        Here's a little bit more about me...
                    </motion.span>

                    <section className={classes.ButtonContainer}>

                        {/* <motion.section
                            onClick={watchVideoClickedHandler}
                            variants={variants}
                            initial={variants.buttonOffscreen}
                            whileInView={variants.buttonOnscreen}
                            viewport={{ once: true }}
                            custom={2.5}
                        >
                            <p>Watch Video</p>
                        </motion.section> */}
                        <motion.section
                            onClick={readTranscriptClickedHandler}
                            variants={variants}
                            initial={variants.buttonOffscreen}
                            whileInView={variants.buttonOnscreen}
                            viewport={{ once: true }}
                            custom={2.5}
                        >
                            {/* <p>Read Transcript</p> */}
                            <p>Read Intro</p>
                        </motion.section>
                    </section>

                    <motion.span
                        className={classes.BottomText}
                        // style={{ fontSize: '3vmin', position: 'absolute', bottom: '9vh' }}
                        variants={variants}
                        initial={variants.offscreen}
                        whileInView={variants.onscreen}
                        viewport={{ once: true }}
                        custom={4}
                    >
                        Keep scrolling to take a look at my projects!
                    </motion.span>
                    <motion.span
                        style={{ fontSize: '5vmin', position: 'absolute', bottom: '1vh', color: 'black' }}
                        variants={variants}
                        initial={variants.offscreen}
                        whileInView={variants.onscreen}
                        viewport={{ once: true }}
                        custom={4.5}
                    >
                        ↓
                    </motion.span>

                    {/* <section className={classes.VideoOption}>
                        <span></span>
                    </section>
                    <section className={classes.TranscriptOption}></section> */}
                </section>

                <section className={`${classes.TranscriptContainer} ${showTranscript ? classes.ShowTranscript : classes.HideTranscript}`}>
                    <section>{transcript}</section>
                    <button onClick={() => { setShowTranscript(false); props.setMainScroll(true); }}
                        className={classes.CloseBtn}
                    >X</button>
                </section>

            </section>
        </>
    )
}

export default AboutMe;