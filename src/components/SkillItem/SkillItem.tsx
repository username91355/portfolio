import React from 'react';
import styles from './SkillItem.module.scss';
import Icon from "../ui/Icon/Icon";

interface IProps {
	id: number
	icon: string
	title: string
	description: string
	technology: string[]
}

const SkillItem: React.FC<IProps> = props => {

	const {
		icon,
		title,
		description,
		technology
	} = props;

	return (
		<div className={styles.skillItem}>
			<div className={styles.skillItem__icon}>
				<Icon type={icon}/>
			</div>
			<div className={styles.skillItem__content}>
				<div className={styles.skillItem__icon_inside}>
					<Icon type={icon}/>
				</div>
				<h3 className={styles.skillItem__title}>{title}</h3>
			</div>
			<p className={styles.skillItem__description}>{description}</p>
			<ul className={styles.skillItem__technology}>
				{technology.map(i => {
					return <li>
						{i}
					</li>
				})}
			</ul>
		</div>
	);
};

export default SkillItem;