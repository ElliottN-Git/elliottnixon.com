//Modules
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//CSS
import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {

    useEffect(() => {
        let card = document.querySelector(`#cardId${props.elId}`);
        card.addEventListener("mousemove", (evt) => {
            rotateElement(evt, card);
        });

        card.addEventListener("mouseleave", () => {
            card.style.setProperty("--rotateX", "0deg");
            card.style.setProperty("--rotateY", "0deg");
            card.style.setProperty("--scale", "1");
            card.style.setProperty("transition", "transform 0.1s ease");
        });
    }, [])

    function rotateElement(event, element) {
        const cardRect = element.getBoundingClientRect();
        // Find mouse position deviation from center of tilt element
        const x = (event.clientX - cardRect.left) / cardRect.width - 0.5;
        const y = (event.clientY - cardRect.top) / cardRect.height - 0.5;
        // set CSS properties on element to tilt it
        element.style.setProperty("--scale", "1.1");
        element.style.setProperty("transition", "none");
        element.style.setProperty("--perspective", "1000px");
        element.style.setProperty("--rotateX", `${x * 30}` + "deg");
        element.style.setProperty("--rotateY", `${y * -30}` + "deg");
    }

    // let cardImageElement;
    // try {
    //     // img = require(`../../../assets/images/${props.cardImage}`);
    //     cardImageElement = (<img src={require(`../../../assets/images/${props.cardImage}`)} alt=''></img>);
    // } catch {
    //     cardImageElement = '';
    // }

    //If no stack is passed via props, don't display the element, otherwise output the string as <h4> wrapped in brackets
    let hasStack = false;
    if (props.stack !== '') {
        hasStack = true;
    }

    let layout = '';
    let cardImageElement = '';
    {
        props.cardImage !== '' ? cardImageElement = (
            <img
                // className={classes.Image}
                src={`/images${props.cardImage}`}
            // onError={({ currentTarget }) => {
            //     currentTarget.onerror = null; // prevents looping
            //     currentTarget.src="/images/pulp-fiction-john-travolta.gif";
            //   }}
            >
            </img>
        ) : ''
    };

    layout = (
        <div className={classes.TiltContainer} id={`cardId${props.elId}`}>
            <motion.div
                className={classes.ProjectCard}
                animate={props.controls}
                variants={props.cardVariants}
                initial={props.cardVariants.offscreen}
                // whileInView={{animate: props.cardVariants.onscreen}}
                viewport={{ root: props.scrollRef, once: true }}
            >
                <h3 className={classes.Title}>{props.text}</h3>
                <h3 className={classes.TitleShadow}>{props.text}</h3>

                {cardImageElement}
                {hasStack ? <h4 className={classes.Stack}>({props.stack})</h4> : ''}
                {hasStack ? <h4 className={classes.StackShadow}>({props.stack})</h4> : ''}
            </motion.div>
        </div>
    )

    let link = '';

    if (props.slides.length !== 0) {
        // layout = <Link to={props.link} className={classes.ProjectLink}>{layout}</Link>
        link = <div onClick={props.scrollToSection} className={classes.ProjectLink}></div>
    }

    return (
        <>
        {/* {layout} */}
        <div className={classes.TiltContainer} id={`cardId${props.elId}`}>
            <motion.div
                className={classes.ProjectCard}
                animate={props.controls}
                variants={props.cardVariants}
                initial={props.cardVariants.offscreen}
                // whileInView={{animate: props.cardVariants.onscreen}}
                viewport={{ root: props.scrollRef, once: true }}
            >
                {link}
                <h3 className={classes.Title}>{props.text}</h3>
                <h3 className={classes.TitleShadow}>{props.text}</h3>
                {cardImageElement}
                {hasStack ? <h4 className={classes.Stack}>({props.stack})</h4> : ''}
                {/* {hasStack ? <h4 className={classes.StackShadow}>({props.stack})</h4> : ''} */}
            </motion.div>
        </div>
            {/* <div className={classes.TiltContainer} id={`cardId${props.elId}`}>
                
                <h3 className={classes.Title}>{props.text}</h3>
                <h3 className={classes.TitleShadow}>{props.text}</h3>
                {hasStack ? <h4 className={classes.Stack}>({props.stack})</h4> : ''}
                {hasStack ? <h4 className={classes.StackShadow}>({props.stack})</h4> : ''}

            </div> */}
        </>
    )
}

export default ProjectCard;