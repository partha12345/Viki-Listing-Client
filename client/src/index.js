

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { extendedNewsApiSlice } from './features/News/newsApiSlice';
import { fetchNewsData } from './pages/NewsFeeds/newsSlice';


const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(extendedNewsApiSlice.endpoints.getArticle.initiate())


store.dispatch(fetchNewsData())



root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
         <Route path='/*' element={<App/>}></Route>         
      </Routes>    
    </BrowserRouter>      
    </Provider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
