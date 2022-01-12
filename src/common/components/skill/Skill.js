import styles from "./Skill.module.scss";
import React from "react";

const Skill = ({icon, iconTagName, title, description, technology}) => {

    return (
        <div className={styles.skill_wrapper}>
            <img className={styles.skill_icon} src={icon[iconTagName]} alt='skill'/>
            <h3 className={styles.skill_title}>{title}</h3>
            <span className={styles.skill_description}>{description}</span>
            <ul className={styles.skill_technology}>
                {
                    technology.map( (t,i) => <li key={i}>{t}</li>)
                }
            </ul>
        </div>
    )
}

export default Skill