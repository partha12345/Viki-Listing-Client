import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Layout from './collections/Layout';
import Home from './pages/Home/Home';
import Category from './pages/category/Category';
import Element from './pages/Element/Element';


function App() {
  return (
    <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='about' element={<About/>}></Route>
         <Route path='category' element={<Category/>}></Route>
         <Route path='element' element={<Element/>}></Route>
       </Route>      
    </Routes>
  );
}

export default App;
