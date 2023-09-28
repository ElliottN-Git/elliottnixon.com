//This is the component that holds the console with typed out animation on page load

import React from 'react';
import Typed from 'typed.js';

//CSS
import classes from './Console.module.css';
//

//TRY: Put both typed lines into their own functions (second line set as paused intially).
//Start first line in useEffect.
//onComplete of first line set second line to start.
const Console = () => {
    const name = React.useRef(null);
    const nameCursor = React.useRef(null);
    const roles = React.useRef(null);
    const rolesCursor = React.useRef(null);
    const scrollForMore = React.useRef(null);
    const scrollForMoreCursor = React.useRef(null);

    React.useEffect(() => {
        const typedScrollForMore = initaliseTypedScrollForMore();
        const typedRoles = initaliseTypedRoles(typedScrollForMore);
        const typedName = startTypedName(typedRoles);

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            // console.log("typedName: ", typedName);
            typedName.destroy();
            typedRoles.destroy();
            typedScrollForMore.destroy();
        };
    }, []);

    const startTypedName = (typedRoles) => {
        nameCursor.current.hidden = false;
        const typedName = new Typed(name.current, {
            strings: ['ELLIOTT NIXON'],
            typeSpeed: 75,
            backSpeed: 25,
            smartBackspace: true,
            startDelay: 1000,
            showCursor: false,
            onComplete: (typedName) => {
                const startDelay = setTimeout(() => {
                    typedRoles.toggle();
                }, 1500);
                nameCursor.current.hidden = true;
                rolesCursor.current.hidden = false;
            },
        });
        return typedName;
    }

    const initaliseTypedRoles = (typedScrollForMore) => {
        rolesCursor.current.hidden = true;
        const typedRoles = new Typed(roles.current, {
            strings: [
                'Technology enthusiast.',
                'Scientist.',
                'Developer.'
            ],
            showCursor: false,
            typeSpeed: 50,
            backSpeed: 25,
            smartBackspace: true,
            onComplete: (typedName) => {
                const startDelay = setTimeout(() => {
                    typedScrollForMore.toggle();
                }, 1000);
                rolesCursor.current.hidden = true;
                scrollForMoreCursor.current.hidden = false;
            },
        });
        typedRoles.toggle();
        return typedRoles;
    }

    const initaliseTypedScrollForMore = () => {
        scrollForMoreCursor.current.hidden = true;
        const typedScrollForMore = new Typed(scrollForMore.current, {
            strings: [
                '<br>',
                '<br><br>',
                '<br><br>Scroll to find out more about me...'
            ],
            showCursor: false,
            typeSpeed: 50,
            backSpeed: 1,
            smartBackspace: true,
            
        });
        typedScrollForMore.toggle();
        return typedScrollForMore;
    }

    return (
        <section className={classes.Terminal}>
            {/* <h3>Hi, I'm</h3> */}
            <section className={classes.NameContainer}>
                <span className={classes.Name} ref={name}></span>
                <span
                    className={`${classes.TypedCursorBlink} ${classes.TypedCursor}`}
                    aria-hidden="true"
                    ref={nameCursor}
                >
                    |
                </span>
            </section>
            <section className={classes.RolesContainer}>
                <span className={classes.Roles} ref={roles}></span>
                <span
                    className={`${classes.TypedCursorBlink} ${classes.TypedCursor}`}
                    aria-hidden="true"
                    ref={rolesCursor}
                >
                    |
                </span>
            </section>
            <section className={classes.SfmContainer}>
                <span className={classes.Sfm} ref={scrollForMore}></span>
                <span
                    className={`${classes.TypedCursorBlink} ${classes.TypedCursor}`}
                    aria-hidden="true"
                    ref={scrollForMoreCursor}
                >
                    |
                </span>
            </section>

        </section>
    );
}

export default Console;