import React from 'react';

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Home from '../src/pages/Home/Home';
import Movies from '../src/pages/Movies/Movies';
import Tv from '../src/pages/Tv/Tv';
import Bookmark from '../src/pages/Bookmark/Bookmark';
import PlayerPage from './pages/Singe/PlayerPage';
import DATA from '../src/assets/local-data/data.json';

console.log(DATA)

function App() {

  const movies = DATA.filter(item => item.category === 'Movie');
  const tvShows = DATA.filter(item => item.category === 'TV Series');

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies MOVIES={movies}/>} />
          <Route path="tv" element={<Tv TVSHOWS={tvShows}/>} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="player" element={<PlayerPage/>} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;

