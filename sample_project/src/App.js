
import './App.css';


import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Loginform from './Loginform';
import Registrationform from './Registrationform';
import Datafetching from './Datafetching'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>

      <Route exact path='/' element={< Loginform />}></Route>
      <Route exact path='/regform' element={< Registrationform />}></Route>
      <Route exact path='/data' element={< Datafetching />}></Route>

      </Routes>
    
    </div>
    </Router>
  );
}

export default App;