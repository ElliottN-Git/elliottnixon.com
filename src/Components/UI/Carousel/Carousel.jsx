import React, { useState, useRef, createRef } from 'react';
import classes from './Carousel.module.css'

import CarouselSlide from './CarouselSlide';

const Carousel = (props) => {
  const slideRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = currentIndex + 1 === props.slides.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    slideRefs.current[newIndex].current.scrollIntoView({ behavior: 'smooth' });
    
  };

  const handlePrevious = () => {
    const newIndex = currentIndex - 1 < 0 ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    slideRefs.current[newIndex].current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


  return (
    <>
      <section className={classes.CarouselContainer}>
        <button onClick={handlePrevious} className={classes.FwdBackBtn}>{"<"}</button>
        <section className={classes.SlideContainer}>
          {props.slides.map((slide, index) => {
            return (
              <CarouselSlide
                key={index}
                innerRef={slideRefs.current[index] = createRef(null)}
                image={props.slides[index].image}
                title={props.slides[index].title}
                text={props.slides[index].text}
              />
            )
          })}
        </section>
        <button onClick={handleNext} className={classes.FwdBackBtn}>{">"}</button>
      </section>

    </>
  )
}

export default Carousel;