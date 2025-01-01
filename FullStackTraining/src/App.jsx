import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/FunctionalComponents/Home';
import About from './Components/FunctionalComponents/About';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact';
import NavBar from './Components/FunctionalComponents/NavBar';
import Footer from './Components/FunctionalComponents/Footer';
import UseEffect from './Components/FunctionalComponents/useEffect';
import UseEffectTask from './Components/FunctionalComponents/useEffectTask';
import UseRef from './Components/FunctionalComponents/useRef';
import UseContext from './Components/FunctionalComponents/useContext';
import UseMemo from './Components/FunctionalComponents/useMemo';
import UseRefTask from './Components/FunctionalComponents/useRefTask';
function App() {  
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About college="Kongu Engineering College" clg1="arts" clg2="naturopathy" />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/use-effect' element={<UseEffect/>}/>
          <Route path='/use-effecttask' element={<UseEffectTask/>}/>
          <Route path='/use-context' element={<UseContext/>}/>
          <Route path='/use-ref' element={<UseRef/>}/>
          <Route path='/use-reftask' element={<UseRefTask/>}/>
          <Route path='/use-memo' element={<UseMemo/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
