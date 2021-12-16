import React from 'react';
import styles from './Nav.module.scss'

const Nav = () => {

    return (
        <div className={styles.nav}>
            {/*<Link title={'Main'} link={'#'} linkIcon={false} />*/}
            {/*<Link title={'My skills'} link={'#'} linkIcon={false} />*/}
            {/*<Link title={'My project'} link={'#'} linkIcon={false} />*/}
            {/*<Link title={'Contacts'} link={'#'} linkIcon={false} />*/}
            <a href="">Main</a>
            <a href="">My skills</a>
            <a href="">My project</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default Nav;