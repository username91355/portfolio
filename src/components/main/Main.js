import React from 'react';
import styles from './Main.module.css'
import styleContainer from './../../common/styles/Container.module.css'

function Main({fullname}) {
    return (
        <div className={styles.main}>
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