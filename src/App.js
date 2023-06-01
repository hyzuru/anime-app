import React, { useEffect, useState } from 'react';
import './Components/style.scss';
import { AnimeList } from './Components/AnimeList';
import { AnimeInfo } from './Components/AnimeInfo';

function App() {
  const [search, setSearch] = useState('Shingeki no Kyojin');
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
    console.log(resData.data);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <header className="header">
        <h1>MyAnimeList</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search your anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>
      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList animeList={animeData} setAnimeInfo={setAnimeInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
