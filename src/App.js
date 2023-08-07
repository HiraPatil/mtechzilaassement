import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import WithOutNav from './componets/layout/withoutnav';
import Withnav from './componets/layout/withnav';
import Home from './componets/home/home';
import Registger from './componets/auth/registger';
import About from './componets/about/about';
import Login from './componets/auth/login';
import Gituser from './componets/gitUser/gituser';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route element={<WithOutNav/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registger/>}></Route>
      </Route>
      <Route element={<Withnav/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/git-user' element={<Gituser/>}/>
      </Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
