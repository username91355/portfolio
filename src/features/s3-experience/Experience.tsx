import React from 'react';
import styles from './Experience.module.scss';
import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";
import H2 from '../../components/H2/H2';

interface IProps {
	experience: any[]
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