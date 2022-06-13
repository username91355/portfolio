import React from 'react';
import styles from './Header.module.scss';
import Nav from "./nav/Nav";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Nav/>
		</header>
	);
}

export default Header;