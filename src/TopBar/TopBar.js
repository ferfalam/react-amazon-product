import React from 'react'
import classes from './TopBar.module.css'

const TopBar = () => {
    return (
        <header>
            <nav className={classes.topBar}>
                <img src ="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazon Logo"/>
            </nav>
        </header>
    )
}

export default TopBar