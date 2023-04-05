import React from 'react';
import './Anime.css';

function Anime(props) {
  function handleStatusChange(id, status) {
    const updatedAnimeList = props.animeList.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          status,
        };
      }
      return {
        ...anime,
        status: 'Not Started',
      };
    });
    props.onChange(updatedAnimeList);
  }

  return (
    <div className="anime-container">
      <h5>MY LIST</h5>
      {props.animeList.map((anime) => (
        <div key={anime.id} className="anime-item">
          <h3>{anime.title}</h3>
          <div className="status-container">
            <label>
              <input
                type="checkbox"
                checked={anime.status === 'Watching'}
                onChange={() => handleStatusChange(anime.id, 'Watching')}
              />
              Watching
            </label>
            <label>
              <input
                type="checkbox"
                checked={anime.status === 'Dropped'}
                onChange={() => handleStatusChange(anime.id, 'Dropped')}
              />
              Dropped
            </label>
            <label>
              <input
                type="checkbox"
                checked={anime.status === 'Finished'}
                onChange={() => handleStatusChange(anime.id, 'Finished')}
              />
              Finished
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Anime;
