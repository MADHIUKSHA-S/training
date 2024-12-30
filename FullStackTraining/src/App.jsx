import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/FunctionalComponents/Home';
import About from './Components/FunctionalComponents/About';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact';
import NavBar from './Components/FunctionalComponents/NavBar';
function App() {
return (
      <div>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About college="Kongu Engineering College" clg1="arts" clg2="naturopathy"/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
         </div>   
  );
}

export default App;
