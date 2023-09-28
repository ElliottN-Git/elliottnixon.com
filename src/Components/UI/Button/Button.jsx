import React from 'react';
import classes from './Button.module.css';
import HTMLReactParser from 'html-react-parser';

const Button = (props) => {
    return (
        <section className={classes.Button}>
            <a href={props.link} className={classes.Link} style={{width: props.width}}>
                <p>{HTMLReactParser(props.text)}</p>
            </a>
        </section>
    )
}

export default Button