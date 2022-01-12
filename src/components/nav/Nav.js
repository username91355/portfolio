import React from 'react';
import styles from './Nav.module.scss'
import { Link } from 'react-scroll'
const Nav = () => {

    return (
        <div className={styles.nav}>
            <Link activeClass={styles.activeLink}
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Main</Link>
            <Link activeClass={styles.activeLink}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>My skills</Link>
            <Link activeClass={styles.activeLink}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>My project</Link>
            <Link activeClass={styles.activeLink}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Contacts</Link>
            {/*<a href="#main">Main</a>*/}
            {/*<a href="#skills">My skills</a>*/}
            {/*<a href="#projects">My project</a>*/}
            {/*<a href="#contacts">Contacts</a>*/}
        </div>
    );
}

export default Nav;