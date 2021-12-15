import React from 'react';
import styles from './Title.module.scss'

const Tilte = ({title}) => {
    return (
        <div className={styles.title__wrapper}>
            <h2 className={styles.title__content}>{title}</h2>
        </div>
    );
};

export default Tilte;