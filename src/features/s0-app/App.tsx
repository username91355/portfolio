import React from 'react';
import styles from './App.module.scss';
import Header from '../s1-header/Header';
import Main from '../s2-main/Main';
import Experience from '../s3-experience/Experience';
import Skills from '../s4-skills/Skills';
import Projects from '../s5-projects/Projects';
import Contacts from '../s6-contacts/Contacts';
import Footer from '../s7-footer/Footer';
import welbex from './../../assets/images/welbex.png';

const App: React.FC = () => {
	const user = {
		fullName: 'Balyaev Dmitriy',
		skills: [
			{
				id: 1,
				iconTagName: 'web',
				title: 'HTML/CSS/JS',
				description: 'Верстаю HTML/CSS по шаблонам. Изпользую язык программирования JavaScript(ES6+)',
				technology: [
					'Css модули',
					'SASS/SCSS (вложенности, переменные, миксины)',
					'Адаптивная/кроссплатформенная вёрстка',
					'Работал с UI библиотеками (Ant Design, Material UI',
					'Js синтаксис ES6+',
					'Web-components',
					'Web-sockets'
				]
			},
			{
				id: 2,
				iconTagName: 'react',
				title: 'React',
				description: 'В качестве основной библиотеки для написания UI в своих проектах я использую react, чаще всего со следующими пакетами',
				technology: [
					'React (v17)',
					'React-router-dom (v6)',
					'React-hook-form'
				]
			},
			{
				id: 3,
				iconTagName: 'redux',
				title: 'Redux',
				description: 'I used redux as state management with the following packages',
				technology: ['Redux-thunk', 'React-redux', 'Redux-toolkit']
			},
			{
				id: 4,
				iconTagName: 'ts',
				title: 'Type Script',
				description: 'Применяю в своих проектах для типизации',
				technology: ['Типы и интерфейсы', 'Generics', 'Enums', 'Встроенные типы (React, Redux и т п)']
			},
			{
				id: 5,
				iconTagName: 'node',
				title: 'Node.js',
				description: 'Владею базовыми навыками Node.js. В работе сталкивался с SSR приложениями, построенными на использовании Express и шаблонизаторов.',
				technology: [
					'NPM',
					'Express',
					'REST API',
					'SSR',
					'Работа с шаблонизаторами (Handlebars, ect)',
					'Немного взаимодействовал с Postgresql (Sequelize ORM)'
				]
			},
			{
				id: 6,
				iconTagName: 'tech',
				title: 'Other tools',
				description: 'Also used in my projects',
				technology: ['Git', 'Axios', 'Storybook', 'Jest', 'Testing-library', 'Formik']
			},
		],
		projects: [
			{
				id: 1,
				title: 'Social Network',
				description: 'A simple social network template written on Type Script. ' +
					'In this project I used: React, React-router-dom, Redux, TypeScript,' +
					' Axios, Jest, Testing-library, React-hook-form, Ant Design.',

				imgTagName: 'socialNetwork',
				link: 'https://github.com/username91355/social-network',
				sourceCodeLink: 'https://username91355.github.io/social-network/'
			},
			{
				id: 2,
				title: 'To do list',
				description: 'Easy to handle to-do list written in TypeScript. In this project I used: React, ' +
					'React-router-dom, Redux, TypeScript, Axios, Jest, Testing-library, React-hook-form, Material UI.',

				imgTagName: 'todoList',
				link: 'https://username91355.github.io/todolist/',
				sourceCodeLink: 'https://github.com/username91355/todolist'
			},
		],
		experience: [
			{
				id: 1,
				logo: welbex,
				title: 'Welbex',
				period: ['Февраль 2022', 'По наст время'],
				description: 'Занимаюсь разработкой на стеке React v17/Redux. Разрабатываю виджеты для AmoCRM, занимаюсь исправлением багов в текущих проектах, принимаю участие в разработке и расширении функционала работающих систем. Работаю в команде с ПМ, 2-мя "бэкэнд" разработчиками, тестировщиком и дизайнером. Задачи получаю в Asana, дизайн в Figma, общаемся в Slack, проекты храним на GitLab.'
			}
		]
	}

	return (
		<div className={styles.app}>
			<Header/>
			<div className={styles.container}>
				<Main/>
				<Experience experience={user.experience}/>
				<Skills skills={user.skills}/>
				<Projects projects={user.projects} count={user.projects.length}/>
				<Contacts/>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
