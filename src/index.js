import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import Movie from './pages/Movie/Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="movie/:id" element={<Movie />} />
                <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
