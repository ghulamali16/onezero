import './App.css';
import Homepage from './Homepage'
import Latest from './Latest'
import About from './About'
import ProductView from './ProductView'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <>
   <Router>
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/latest' element={<Latest/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product/:id'element={<ProductView/>}/>
      </Routes>
   </Router>
 </>
  );
}

export default App;
