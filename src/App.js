import './styles/main.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
     <div id='home'>this is a place holder for Home</div>
     <Header />
     <About />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
