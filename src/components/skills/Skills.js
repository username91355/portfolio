import React from 'react';
import styles from "./Skills.module.scss";
import Tilte from "../../common/components/title/Tilte";
import Skill from "../../common/components/skill/Skill";

function Skills({skills}) {


    return (
        <div className={styles.skills_wrapper}>
            <div className={styles.skills_container}>
                <Tilte title={'My skills'}/>
                <div className={styles.skills_box}>
                    {
                        skills.map(s => {
                            return <Skill key={s.id}
                                          icon={s.icon}
                                          iconTagName={s.iconTagName}
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