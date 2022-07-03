import React from 'react';
import socialNetwork from './../../assets/images/socialNetwork.png';
import todoList from './../../assets/images/todoList.png';
import styles from './Image.module.scss';

interface IProps {
	name: 'socialNetwork' | 'todoList'
	alt: string
	customClass?: string
}

const Image: React.FC<IProps> = props => {

	const {
		name,
		alt,
		customClass
	} = props;

	switch (name) {
		case 'socialNetwork':
			return <div className={styles.image}><img className={customClass} src={socialNetwork} alt={alt}/></div>;
		case 'todoList':
			return <div className={styles.image}><img className={customClass} src={todoList} alt={alt}/></div>;
		default:
			return <></>;
	}
};

export default Image;