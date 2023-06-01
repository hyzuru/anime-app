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
    studios,
  } = props.animeInfo;

  const studiosList = [];
  studios.map((item, index) => {
    studiosList.push(item.name);
  });

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
          <p>Status: {status}</p>
          <p>Rating: {rating}</p>
          <p>Duration: {duration}</p>
          <p>Studio: {studiosList}</p>
        </div>
      </div>
    </>
  );
};
