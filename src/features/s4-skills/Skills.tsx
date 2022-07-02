import React from 'react';
import styles from './Skills.module.scss';
import SkillItem from "../../components/SkillItem/SkillItem";
import H2 from '../../components/H2/H2';

interface IProps {
	skills: any[]
}

const Skills: React.FC<IProps> = props => {

	const {
		skills
	} = props;

	return (
		<section className={styles.skills}>
			<H2 title={'Навыки'}/>
			<div className={styles.skills__content}>
				{skills.map(i => {
					return <SkillItem
						key={i.id}
						id={i.id}
						icon={i.iconTagName}
						title={i.title}
						description={i.description}
						technology={i.technology}
					/>
				})}
			</div>
		</section>
	);
};

export default Skills;