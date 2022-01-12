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
import gitIcon from './assets/img/skills/git.png';
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
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                technology: ['test','test']
            },
            {
                id: 2,
                icon: {jsIcon},
                iconTagName: 'jsIcon',
                title: 'Java Script',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                technology: []
            },
            {
                id: 3,
                icon: {gitIcon},
                iconTagName: 'gitIcon',
                title: 'GIT',
                description: 'Lorem ipsum dolor sit amet.',
                technology: []
            },
            {
                id: 4,
                icon: {tsIcon},
                iconTagName: 'tsIcon',
                title: 'Type Script',
                description: 'Lorem ipsum dolor sit amet.',
                technology: []
            },
            {
                id: 5,
                icon: {reactIcon},
                iconTagName: 'reactIcon',
                title: 'React',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                technology: []
            },
            {
                id: 6,
                icon: {reduxIcon},
                iconTagName: 'reduxIcon',
                title: 'Redux',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                technology: []
            },
        ],
        projects: [
            {
                id: 1,
                title: 'Social Network',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: {snImg},
                imgTagName: 'snImg',
                link: '#'
            },
            {
                id: 2,
                title: 'To do list',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
                img: {tdlImg},
                imgTagName: 'tdlImg',
                link: '#'
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
