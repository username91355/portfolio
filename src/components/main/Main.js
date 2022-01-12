import React from 'react';
import styles from './Main.module.scss'
import avatar from './../../assets/img/i2png.png'
import {ParticlesBg} from "../../common/particles-bg/ParticlesBG";
import ReactTypingEffect from 'react-typing-effect';

const Main = ({fullname}) => {

    return (
        <div id={'main'} className={styles.main_wrapper}>
            <ParticlesBg />
            <div className={styles.main_container}>
                <div className={styles.main_info}>
                    <span>Hi There</span>
                    <h1>I am {fullname}</h1>
                    <ReactTypingEffect text={['Frontend developer']}/>
                </div>
                <div className={styles.test}>
                    <img className={styles.main_photo} src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
}

export default Main;