import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';
import Home from './Pages/Home';
import Player from './Pages/PlayerPage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
        </Routes>

      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
