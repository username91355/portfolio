import React from 'react';
import styles from './Nav.module.scss';
import {FaBars} from 'react-icons/fa';

const Nav: React.FC = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__content}>
				<div className={styles.nav__burger_icon}>
					<FaBars size={'2rem'}/>
				</div>
				<ul className={styles.nav__menu}>
					<li className={styles.nav__menu_item}>Main</li>
					<li className={styles.nav__menu_item}>Experience</li>
					<li className={styles.nav__menu_item}>Skills</li>
					<li className={styles.nav__menu_item}>Projects</li>
					<li className={styles.nav__menu_item}>Contacts</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;