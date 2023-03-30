import { Routes, Route } from 'react-router';
import { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound'
import Details from './pages/Details';

function App() {
   const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route index element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:name" element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
