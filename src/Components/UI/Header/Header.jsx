// This is the component that holds the landing page with header image and console animation

import React, { Component } from 'react';

//CSS
import classes from './Header.module.css';
//

//Assets
// import heroImg from '../../../assets/images/heroImgBeach.png';
// import heroImg from '/images/heroImgBeach.png';
// const heroImg = '/images/heroImgBeach.png';
//

//Components
import Console from './Console';

class Header extends Component {

    render() {
        return (
            <>
                <header className={classes.Header} style={{ backgroundImage: `url('/images/heroImgBeach.png')` }}>
                    <Console></Console>
                </header>
            </>
        )
    }
}
export default Header;