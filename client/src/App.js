import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import NewsList from './pages/Articles/NewsList';
import Layout from './collections/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Category from './pages/category/Category';
import Element from './pages/Element/Element';


function App() {
  return (
    <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='abouts' element={<About/>}></Route>
         <Route path='categorys' element={<Category/>}></Route>
         <Route path='elements' element={<Element/>}></Route>
       </Route>      
    </Routes>
  );
}

export default App;
