import React from 'react';
import styles from './H2.module.scss';

interface IProps {
	title: string
}

const H2: React.FC<IProps> = ({title}) => {
	return <h2 className={styles.h2}>{title}</h2>;
};

export default H2;