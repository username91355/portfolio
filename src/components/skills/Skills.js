import React from 'react';
import styles from './Skills.module.css'
import styleContainer from './../../common/styles/Container.module.css'

function Skills({skills}) {

    return (
        <div className={styles.skills_wrapper}>
            <div className={`${styleContainer.container} ${styles.skills_container}`}>
                <h2 className={styles.skills_title}>My skills</h2>
                <div className={styles.skills_box}>
                    {
                        skills.map(s => {
                            return <Skill key={s.id}
                                          icon={s.icon}
                                          title={s.title}
                                          description={s.description}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

function Skill({icon, title, description}) {
    return (
        <div className={styles.skill_wrapper}>
            <div className={styles.skill_icon}>
                <img src={icon} alt='skill'/>
            </div>
            <h3 className={styles.skill_title}>{title}</h3>
            <span className={styles.skill_description}>{description}</span>
        </div>
    )
}

export default Skills;