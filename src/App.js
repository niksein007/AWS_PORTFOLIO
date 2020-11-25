import './styles/main.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProfileContainer from './components/ProfileContainer'




function App() {
  return (
    <div id="App">
      <div id='home'></div>
     <Header />
     <ProfileContainer/>
     <About />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
