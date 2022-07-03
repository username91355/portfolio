import React from 'react';
import styles from './Experience.module.scss';
import H2 from '../../components/ui/H2/H2';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import {IExperienceItem} from '../../types';

interface IProps {
	experience: IExperienceItem[]
}

const Experience: React.FC<IProps> = props => {

	const {
		experience
	} = props;

	return (
		<section className={styles.experience}>
			<H2 title={'Опыт работы'}/>
			<div className={styles.experience__content}>
				<div className={styles.experience__content_item}>
					{experience.map( i => {
						return <ExperienceItem
							id={i.id}
							logo={i.logo}
							title={i.title}
							period={i.period}
							description={i.description}
						/>
					})}
				</div>
			</div>
		</section>
	);
};

export default Experience;