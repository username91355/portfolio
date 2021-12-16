import styles from "./Project.module.scss";
import React from "react";
import Link from "../link/Link";

const Project = ({title, description, img, imgTagName, link}) => {

    return (
        <div className={styles.project_wrapper}>
            <img className={styles.project_img} src={img[imgTagName]} alt='project'/>
            <h3 className={styles.project_title}>{title}</h3>
            <div className={styles.project_description}>{description}</div>
            <Link title={`View ${title}`} link={link} linkIcon={true}/>
        </div>
    );
};

export default Project