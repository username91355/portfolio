import React from 'react';
import styles from './Projects.module.scss';
import Image from "../../components/Image/Image";

const Projects: React.FC = () => {
	return (
		<section className={styles.projects}>
			<h2>Заголовок</h2>
			<div className={styles.projects__content}>
				<div className={styles.projects__content_item}>
					<Image name={'socialNetwork'} alt={'socialNetworkPrew'}/>
				</div>
				<div className={styles.projects__content_item}>
					<Image name={'todoList'} alt={'todoListPrew'}/>
				</div>
				<div className={styles.projects__content_item}></div>
			</div>
		</section>
	);
};

export default Projects;