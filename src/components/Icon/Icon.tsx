import React from 'react';
import { SiReact, SiRedux, SiTypescript,SiNodedotjs } from 'react-icons/si';
import { IoPlanetSharp } from 'react-icons/io5';
import { MdSettings } from 'react-icons/md';

interface IProps {
	type: string
}

const Icon: React.FC<IProps> = props => {

	const {
		type,
	} = props;

	switch (type) {
		case 'web':
			return <IoPlanetSharp size={'2rem'}/>;
		case 'react':
			return <SiReact size={'2rem'}/>
		case 'redux':
			return <SiRedux size={'2rem'}/>;
		case 'ts':
			return <SiTypescript size={'2rem'}/>;
		case 'node':
			return <SiNodedotjs size={'2rem'}/>;
		case 'tech':
			return <MdSettings size={'2rem'}/>;
		default:
			return <></>;
	}
};

export default Icon;