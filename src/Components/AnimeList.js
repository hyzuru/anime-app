import React from 'react';

export const AnimeList = ({
  animeList,
  setAnimeInfo,
  animeComponent,
  handleList,
}) => {
  const AddToList = animeComponent;
  return (
    <>
      {animeList
        ? animeList.map((anime, index) => {
            return (
              <div
                className="card"
                href={anime.url}
                key={index}
                onClick={() => setAnimeInfo(anime)}
              >
                <div className="img-container">
                  <img
                    src={anime.images.jpg.large_image_url}
                    alt="animeImage"
                  />
                </div>
                <div className="anime-info">
                  <h4 className="anime-info-ttl">{anime.title}</h4>

                  <div className="anime-info-description">
                    <p>Hover for Details</p>
                  </div>
                  <div className="overlay" onClick={() => handleList(anime)}>
                    <h4 className="ja_title">{anime.title_japanese}</h4>
                    <p className="synopsis">{anime.synopsis}</p>
                    <AddToList />
                  </div>
                </div>
              </div>
            );
          })
        : 'Not Found'}
    </>
  );
};
