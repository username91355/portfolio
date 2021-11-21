import React from 'react';
import styles from './Projects.module.css'
import styleContainer from './../../common/styles/Container.module.css'

const Projects = ({projects}) => {
    return (
        <div className={styles.projects_wrapper}>
            <div className={`${styleContainer.container} ${styles.projects_container}`}>
                <h2 className={styles.projects_title}>My projects</h2>
                <div className={styles.projects_box}>
                    {
                        projects.map(p => {
                            return <Project key={p.id}
                                            title={p.title}
                                            description={p.description}
                                            link={p.link}
                                            img={p.img}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

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

export default Projects;


