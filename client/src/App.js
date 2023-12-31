import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import NewsList from './pages/Articles/NewsList';
import Layout from './collections/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Category from './pages/category/Category';
import Element from './pages/Element/Element';
import NewsFeed from './pages/NewsFeeds/NewsFeed';





function App() {
  return (
    <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path='about' element={<About/>}></Route>
         <Route path='category' element={<Category/>}></Route>
         <Route path='element' element={<Element/>}></Route>
         <Route path='newsupdate' element={<NewsFeed/>}></Route>
       </Route>      
    </Routes>
  );
}

export default App;
