import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Haiiii from './pages/Haiiii';
import NewsList from './pages/Articles/NewsList';
import Layout from './collections/Layout';


function App() {
  return (
    <Routes>
       <Route path='/' element={<Layout/>}>
                           
       </Route>      
    </Routes>
  );
}

export default App;
