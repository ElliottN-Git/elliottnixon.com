import React from 'react';

//CSS
import classes from './ContentBlock.module.css';
//


const ContentBlock = (props) => {
    return (
        <>
            <section className={classes.ContentBlock} style={{overflow: `${props.overflow}`}}>
                {props.children}
            </section>
        </>
    )
}

export default ContentBlock;