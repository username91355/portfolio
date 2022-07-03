import React from 'react';
import styles from './ProjectItem.module.scss';
import Image from '../Image/Image';
import cn from 'classnames';
import H3 from "../H3/H3";
import Link from "../Link/Link";

interface IProps {
	id: number
	activeItemId: number
	item: any
}

const ProjectItem: React.FC<IProps> = props => {

	const {
		id,
		item,
		activeItemId
	} = props;

	return (
		<div className={cn(styles.projects__slider_item, {
			[styles.active]: id === activeItemId
		})}>
			<div className={styles.projects__slider_imageArea}>
				<Image customClass={styles.projects__slider_image} name={item.imgTagName} alt={item.imgTagName}/>
			</div>
			<div className={styles.projects__slider_descriptionArea}>
				<H3 title={item.title}/>
				<p>{item.description}</p>
				<Link title={'Ссылка на проект'} link={item.link} linkIcon={true}/>
				<Link title={'Ссылка на исходный код проета'} link={item.sourceCodeLink} linkIcon={true}/>
			</div>
		</div>
	);
};

export default ProjectItem;