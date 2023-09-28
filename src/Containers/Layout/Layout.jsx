//This is where the EN, menu icon for nav toggle, and Contact floating icons will go.

import React from 'react'

//CSS
import classes from './Layout.module.css';
//

const Layout = (props) => {
    
    return (
        <>
            <main className={`${classes.Content} ${props.mainScrollEnabled ? classes.EnableScroll : classes.DisableScroll}`}>
                {props.children}
            </main>
        </>
    )
}

export default Layout;