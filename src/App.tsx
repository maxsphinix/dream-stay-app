import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Favorites } from './pages/Favorites';
import { Profile } from './pages/Profile';
import { Destinations } from './pages/Destinations';
import { Explore } from './pages/Explore';
import { Bookings } from './pages/Bookings';
import { Messages } from './pages/Messages';
import { Help } from './pages/Help';
import { Settings } from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="explore" element={<Explore />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="messages" element={<Messages />} />
            <Route path="help" element={<Help />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;