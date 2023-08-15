import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Haiiii from './pages/Haiiii';
import NewsList from './pages/Articles/NewsList';


function App() {
  return (
    <Routes>
       <Route path='/' element={<NewsList/>}>
      
       </Route>      
    </Routes>
  );
}

export default App;
