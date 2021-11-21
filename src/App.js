import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {

    const user = {
        fullName: 'Jeffry Arron',
        skills: [
            {
                id: 1,
                icon: 'str',
                title: 'HTML',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                id: 2,
                icon: 'str',
                title: 'CSS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 3,
                icon: 'str',
                title: 'Java Script',
                description: 'Lorem ipsum dolor sit amet.'
            }
        ],
        projects: [
            {
                id: 1,
                title: 'Counter',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                img: 'img',
                link: 'link'
            },
            {
                id: 2,
                title: 'To do list',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
                img: 'img',
                link: 'link'
            }
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
