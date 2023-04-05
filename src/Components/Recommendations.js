import React, { useState } from 'react';
 import './Recommendations.css';
import Anime from './Anime';

function Recommendations() {
  const [animeList, setAnimeList] = useState([
    { id: 1, title: 'Demon Slayer: Kimetsu no Yaiba', watching: false, dropped: false, finished: false },
    { id: 2, title: 'My Hero Academia', watching: false, dropped: false, finished: false },
    { id: 3, title: 'One Piece', watching: false, dropped: false, finished: false },
    { id: 4, title: 'Hunter x Hunter', watching: false, dropped: false, finished: false },
  ]);
  const [myAnimeList, setMyAnimeList] = useState([]);

  function handleAddToList(id) {
    const selectedAnime = animeList.find((anime) => anime.id === id);
    setMyAnimeList([...myAnimeList, selectedAnime]);
    const updatedAnimeList = animeList.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          watching: true,
        };
      }
      return anime;
    });
    setAnimeList(updatedAnimeList);
  }

  function handleMyAnimeListChange(updatedAnimeList) {
    setMyAnimeList(updatedAnimeList);
  }

  return (
    <div className="anime-grid">
      {animeList.map((anime) => (
        <div key={anime.id} className="anime-card">
          <h4>{anime.title}</h4>
          <button onClick={() => handleAddToList(anime.id)}>Add to List</button>
        </div>
      ))}
      <div>
        <Anime animeList={myAnimeList} onChange={handleMyAnimeListChange} />
      </div>
    </div>
  );
}

export default Recommendations;
