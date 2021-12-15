import styles from "./Skill.module.scss";
import React from "react";

const Skill = ({icon, title, description}) => {

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

export default Skill