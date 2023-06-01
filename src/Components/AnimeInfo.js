import React from 'react';

export const AnimeInfo = (props) => {
  const {
    title,
    images: {
      jpg: { large_image_url },
    },
    source,
    rank,
    score,
    popularity,
    status,
    rating,
    duration,
    members,
    studios,
    genres,
  } = props.animeInfo;

  const studiosList = [];
  studios.map((item, index) => {
    studiosList.push(item.name);
  });
  const genreList = [];
  genres.map((item, index) => {
    genreList.push(item.name);
  });
  console.log(genreList);

  return (
    <>
      <div className="anime-content">
        <h3>{title}</h3>
        <img src={large_image_url} alt="" />

        <div className="info">
          <p>Source: {source}</p>
          <p>Rank: {rank}</p>
          <p>Score: {score}</p>
          <p>Popularity: {popularity}</p>
          <p>Members: {members}</p>
          <p>Status: {status}</p>
          <p>Rating: {rating}</p>
          <p>Duration: {duration}</p>
          <span>Studio: </span>
          {studiosList.map((item, i) => (
            <span key={i}>{item} </span>
          ))}
          <p>Genres: </p>
          <ul>
            {genreList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
