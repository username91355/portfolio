import React from 'react';
import styles from './ExperienceItem.module.scss';

interface IProps {
	id: number
	logo: string
	title: string
	period: string[]
	description: string
}

const ExperienceItem: React.FC<IProps> = props => {

	const {
		logo,
		title,
		period,
		description,
	} = props;

	return (
		<div className={styles.ExperienceItem}>
			<img
				className={styles.ExperienceItem__logo}
				src={logo}
				alt='welbex'
			/>
			<div className={styles.ExperienceItem__info}>
				<div className={styles.ExperienceItem__info_name}>
					<img
						className={styles.ExperienceItem__logo_inside}
						src={logo}
						alt='welbex'
					/>
					<h3 className={styles.ExperienceItem__info_title}>{title}</h3>
				</div>
				<p>{period[0]} - {period[1]}</p>
				<p className={styles.ExperienceItem__info_description}>{description}</p>
			</div>
		</div>
	);
};

export default ExperienceItem;