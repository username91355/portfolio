import React from 'react';
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="">Main</a>
            <a href="">My skills</a>
            <a href="">My project</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default Nav;