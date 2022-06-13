import React from 'react';
import styles from './App.module.scss';
import Header from '../s1-header/Header';
import Main from '../s2-main/Main';
import Experience from '../s3-experience/Experience';
import Skills from '../s4-skills/Skills';
import Projects from '../s5-projects/Projects';
import Contacts from '../s6-contacts/Contacts';
import Footer from '../s7-footer/Footer';

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<Header/>
			<div className={styles.container}>
				<Main/>
				<Experience/>
				<Skills/>
				<Projects/>
				<Contacts/>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
