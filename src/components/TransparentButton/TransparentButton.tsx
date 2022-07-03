import React, {ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './TransparentButton.module.scss';
import {IoChevronBack, IoChevronForward} from 'react-icons/io5';

interface IProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	direction?: string,
	title?: string
}

const TransparentButton: React.FC<IProps> = props => {

	const {direction,title, ...restProps} = props;

	switch (direction) {
		case 'back':
			return <button {...restProps} className={styles.button}><IoChevronBack size={'48px'}/></button>;
		case 'forward':
			return <button {...restProps} className={styles.button}><IoChevronForward size={'48px'}/></button>;
		default:
			return <button {...restProps} className={styles.button}>{title}</button>;
	}
};

export default TransparentButton;