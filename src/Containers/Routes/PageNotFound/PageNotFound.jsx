import React from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './PageNotFound.module.css';

const PageNotFound = (props) => {
    return (
        <section className={classes.Background}>
            <section
                className={classes.PNFContainer}
            >
                <img
                    className={classes.NotFoundImg}
                    src={'/images/pulp-fiction-john-travolta.gif'}
                />
                <section className={classes.TextBtnContainer}>
                    <h1

                    >
                        You seem a little lost...
                        <br /><br />Click below to head home:
                    </h1>
                    <Button
                        link='/'
                        text='Home'
                        className={classes.Button}
                        width='80%'
                    />
                    <p style={{ fontSize: '2vmin', color: 'black' }}>(ElliottNixon.com)</p>
                </section>
            </section>
        </section>
    )
}

export default PageNotFound;