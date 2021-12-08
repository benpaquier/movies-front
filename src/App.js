import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Movies from './pages/Movies';
import Theaters from './pages/Theaters';
import Form from './pages/Form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/theaters" element={<Theaters />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;