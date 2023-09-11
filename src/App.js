import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Layout from './collections/Layout';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category'


function App() {
  return (
    <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>         
         <Route path='category' element={<Category/>}></Route>         
       </Route>      
    </Routes>
  );
}

export default App;
