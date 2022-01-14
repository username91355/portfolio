import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import htmlCssIcon from './assets/img/skills/htmlcss.png';
import jsIcon from './assets/img/skills/js.png';
import tsIcon from './assets/img/skills/typescript.png';
import reactIcon from './assets/img/skills/react.png';
import reduxIcon from './assets/img/skills/redux.png';
import techIcon from './assets/img/skills/tech.png';
import snImg from './assets/img/projects/sn.png';
import tdlImg from './assets/img/projects/tdl.png';


function App() {

    const user = {
        fullName: 'Balyaev Dmitriy',
        skills: [
            {
                id: 1,
                icon: {htmlCssIcon},
                iconTagName: 'htmlCssIcon',
                title: 'HTML/CSS',
                description: 'In my projects I used',
                technology: ['SASS/SCSS (syntax, variables, mixin)','Adaptive layout', 'Working with UI Libraries (Ant Design, Material UI']
            },
            {
                id: 2,
                icon: {jsIcon},
                iconTagName: 'jsIcon',
                title: 'Java Script',
                description: 'The basics of a programming language are usually JavaScript',
                technology: ['ES6','Working with classes','Arrow function','Template strings','Promises','Modules']
            },
            {
                id: 3,
                icon: {tsIcon},
                iconTagName: 'tsIcon',
                title: 'Type Script',
                description: 'I implement in my projects',
                technology: ['Types and interface','Generics','Enums']
            },
            {
                id: 4,
                icon: {reactIcon},
                iconTagName: 'reactIcon',
                title: 'React',
                description: 'As the main library for writing UI in my projects, I used react with the following packages',
                technology: ['Class and function components','React-router-dom (v6)','React-hook-form']
            },
            {
                id: 5,
                icon: {reduxIcon},
                iconTagName: 'reduxIcon',
                title: 'Redux',
                description: 'I used redux as state management with the following packages',
                technology: ['Redux-thunk','React-redux']
            },
            {
                id: 6,
                icon: {techIcon},
                iconTagName: 'techIcon',
                title: 'Other tools',
                description: 'Also used in my projects',
                technology: ['Git','Axios','Storybook','Jest','Testing-library','Formik']
            },
        ],
        projects: [
            {
                id: 1,
                title: 'Social Network',
                description: 'A simple social network template written on Type Script. ' +
                    'In this project I used: React, React-router-dom, Redux, TypeScript,' +
                    ' Axios, Jest, Testing-library, React-hook-form, Ant Design.',
                img: {snImg},
                imgTagName: 'snImg',
                link: 'https://username91355.github.io/SocialNetwork/',
                sourceCodeLink: 'https://github.com/username91355/SocialNetwork'
            },
            {
                id: 2,
                title: 'To do list',
                description: 'Easy to handle to-do list written in TypeScript. In this project I used: React, ' +
                    'React-router-dom, Redux, TypeScript, Axios, Jest, Testing-library, React-hook-form, Material UI.',
                img: {tdlImg},
                imgTagName: 'tdlImg',
                link: 'https://username91355.github.io/todolist/',
                sourceCodeLink: 'https://github.com/username91355/todolist'
            },
        ]
    }

    return (
        <div className="App">
            <Header/>
            <Main fullname={user.fullName}/>
            <Skills skills={user.skills}/>
            <Projects projects={user.projects}/>
            <Contacts />
            <Footer fullName={user.fullName}/>
        </div>
    );
}

export default App;
