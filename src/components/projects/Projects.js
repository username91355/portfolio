import React from 'react';
import styles from './Projects.module.scss'
import Tilte from "../../common/components/title/Tilte";
import Project from './../../common/components/project/Project'

const Projects = ({projects}) => {
    return (
        <div className={styles.projects_wrapper}>
            <div className={styles.projects_container}>
                <Tilte title={'My projects'}/>
                <div className={styles.projects_box}>
                    {
                        projects.map(p => {
                            return <Project key={p.id}
                                            title={p.title}
                                            description={p.description}
                                            link={p.link}
                                            img={p.img}
                                            imgTagName={p.imgTagName}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;


