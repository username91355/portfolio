import React, {useState} from 'react';
import styles from './Projects.module.scss';
import H2 from '../../components/ui/H2/H2';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import TransparentButton from '../../components/TransparentButton/TransparentButton';
import {IProject} from '../../types';

interface IProps {
	projects: IProject[]
	count: number
}

const Projects: React.FC<IProps> = props => {

	const {projects, count} = props;

	const [activeItemId, setActiveItemId] = useState<number>(1);

	const nextSlide = () => {
		if(activeItemId >= count) {
			setActiveItemId(1);
		} else {
			setActiveItemId(activeItemId + 1);
		}
	}

	const prevSlide = () => {
		if(activeItemId <= 1) {
			setActiveItemId(count);
		} else {
			setActiveItemId(activeItemId - 1);
		}
	}

	return (
		<section className={styles.projects}>
			<H2 title={'Проекты'}/>
			<div className={styles.projects__slider}>
				<TransparentButton direction={'back'} onClick={prevSlide}/>
				{projects.map(i => {
					return <ProjectItem key={i.id} id={i.id} activeItemId={activeItemId} item={i}/>;
				})}
				<TransparentButton direction={'forward'} onClick={nextSlide}/>
			</div>
		</section>
	);
};

export default Projects;