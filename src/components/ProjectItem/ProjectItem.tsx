import React from 'react';
import styles from './ProjectItem.module.scss';
import Image from '../ui/Image/Image';
import cn from 'classnames';
import H3 from "../ui/H3/H3";
import Link from "../ui/Link/Link";
import {IProject} from "../../types";

interface IProps {
	id: number
	activeItemId: number
	project: IProject
}

const ProjectItem: React.FC<IProps> = props => {

	const {
		id,
		project,
		activeItemId
	} = props;

	return (
		<div className={cn(styles.projects__slider_item, {
			[styles.active]: id === activeItemId
		})}>
			<div className={styles.projects__slider_imageArea}>
				<Image customClass={styles.projects__slider_image} name={project.imgTagName} alt={project.imgTagName}/>
			</div>
			<div className={styles.projects__slider_descriptionArea}>
				<H3 title={project.title}/>
				<p>{project.description}</p>
				<Link title={'Ссылка на проект'} link={project.link} linkIcon={true}/>
				<Link title={'Ссылка на исходный код проета'} link={project.sourceCodeLink} linkIcon={true}/>
			</div>
		</div>
	);
};

export default ProjectItem;