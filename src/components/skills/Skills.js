import React from 'react';
import styles from './Skills.module.scss'
import styleContainer from './../../common/styles/Container.module.css'
import Tilte from "../../common/components/title/Tilte";
import Skill from "../../common/components/skill/Skill";

function Skills({skills}) {

    return (
        <div className={styles.skills_wrapper}>
            <div className={`${styleContainer.container} ${styles.skills_container}`}>
                <Tilte title={'My skills'}/>
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

export default Skills;