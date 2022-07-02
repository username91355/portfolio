import React from 'react';
import socialNetwork from './../../assets/images/socialNetwork.png';
import todoList from './../../assets/images/todoList.png';

interface IProps {
	name: 'socialNetwork' | 'todoList'
	alt: string,
	width?: string
	height?: string
}

const Image: React.FC<IProps> = props => {

	const {
		name,
		alt,
		width = '100%',
		height = 'auto',
	} = props;

	const size = {
		width,
		height
	}

	switch (name) {
		case 'socialNetwork':
			return <img style={size} src={socialNetwork} alt={alt}/>;
		case 'todoList':
			return <img style={size} src={todoList} alt={alt}/>;
		default:
			return <></>;
	}
};

export default Image;