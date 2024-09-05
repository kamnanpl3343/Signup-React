import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <div className="container">
    <header className="d-flex justify-content-center py-3 header">
      <div className="navbar">
     
<ul className="nav">
  <li className="nav-item"><Link to="/" className="navv-link">Home</Link></li>
  <li className="nav-item"><Link to="/employee/create" className="navv-link">Add Employee</Link></li>
  
  <li className="nav-item"><Link to="/faqs" className="navv-link">FAQs</Link></li>
  <li className="nav-item"><Link to="/about" className="navv-link">About</Link></li>
</ul>
      </div>
    </header>
  </div>

        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          {/* <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route> */}
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>

    </div>
    </BrowserRouter>
  );

}

export default App;
