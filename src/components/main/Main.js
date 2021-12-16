import React from 'react';
import styles from './Main.module.scss'
import styleContainer from './../../common/styles/Container.module.css'

const Main = ({fullname}) => {

    return (
        <div name="main" className={styles.main_wrapper}>
            <div className={`${styleContainer.container} ${styles.main_container}`}>
                <div className={styles.main_info}>
                    <span>Hi There</span>
                    <h1>I am {fullname}</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={styles.main_photo}>
                </div>
            </div>
        </div>
    );
}

export default Main;