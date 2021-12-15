import styles from "./Project.module.scss";
import React from "react";

const Project = ({title, description, img, link}) => {
    return (
        <div className={styles.project_wrapper}>
            <div className={styles.project_img_container}>
                {/*<img src={img} alt='project'/>*/}
                <a className={styles.project_link} href={link}>Watch</a>
            </div>
            <h3 className={styles.project_title}>{title}</h3>
            <div className={styles.project_description}>{description}</div>
        </div>
    );
};

export default Project