import React from 'react';
import styles from './Main.module.scss'
import avatar from './../../assets/img/i2png.png'

const Main = ({fullname}) => {

    return (
        <div name="main" className={styles.main_wrapper}>
            <div className={styles.main_container}>
                <div className={styles.main_info}>
                    <span>Hi There</span>
                    <h1>I am {fullname}</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={styles.test}>
                    <img className={styles.main_photo} src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
}

export default Main;