import React from 'react';
import styles from './H3.module.scss';

interface IProps {
	title: string
}

const H3: React.FC<IProps> = props => {
	const {title} = props;
	return <h3 className={styles.h3}>{title}</h3>;
};

export default H3;