import React from 'react';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
	return (
		<section className={styles.skills}>
			<h2>Заголовок</h2>
			<div className={styles.skills__content}>
				<div className={styles.skills__content_item}></div>
				<div className={styles.skills__content_item}></div>
				<div className={styles.skills__content_item}></div>
				<div className={styles.skills__content_item}></div>
				<div className={styles.skills__content_item}></div>
				<div className={styles.skills__content_item}></div>
			</div>
		</section>
	);
};

export default Skills;