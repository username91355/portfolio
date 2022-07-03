import React from 'react';
import styles from './Link.module.scss';
import {HiLink} from "react-icons/hi";

interface IProps {
	title: string
	link: string
	linkIcon: boolean
}

const Link: React.FC<IProps> = props => {

	const {title, link, linkIcon} = props;
	return (
		<div className={styles.link_wrapper}>
			<a className={styles.link_element} href={link}>{title}</a>
			{linkIcon && <HiLink/>}
		</div>
	);
};

export default Link;