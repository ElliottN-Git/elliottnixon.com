import React from 'react';
import HtmlReactParser from 'html-react-parser';

import classes from './CarouselSlide.module.css';



const CarouselSlide = (props) => {
    // const slideImage = ;
    // console.log(slideImage);
    return (
        <>
            <section className={classes.Slide} ref={props.innerRef}>
                <section className={classes.ImageContainer}>
                    <img 
                    className={classes.Image} 
                    src={props.image !== '' ? `/images${props.image}` : '/images/pulp-fiction-john-travolta.gif'}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="/images/pulp-fiction-john-travolta.gif";
                      }}
                    >
                    </img>
                </section>
                <section className={classes.TextContainer}>
                    <h1>
                        {props.title}
                    </h1>
                    <p>{HtmlReactParser(props.text)}</p>
                </section>
            </section>
        </>
    )
}

export default CarouselSlide