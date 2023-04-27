import './App.css';
import Navbar from './Components/navbar/Navbar';
import AboutMe from './Components/aboutMe/AboutMe'
import Section from './Components/section/Section';
import ContacUs from './Components/ContacUs/Section';
import Footer from './Components/footer/Footer';

function App() {
  
  return (
    <div className="App">
     <Navbar/>
     <AboutMe/>
     <Section/>
     <ContacUs/>
     <Footer/>

    </div>
  );
}

export default App;
