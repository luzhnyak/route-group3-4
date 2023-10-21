import React from 'react';
import { useFetchEvent } from 'hooks/useFetchEvent';

const EventDetailPage = () => {
  const event = useFetchEvent();
  return (
    <>
      <h2>{event?.name}</h2>
      <p>Ganres: {event?.classifications[0].genre.name}</p>
      <p>Sub ganres: {event?.classifications[0].subGenre.name}</p>

      <img src={event?.images[0].url} alt={event?.name} />
    </>
  );
};

export default EventDetailPage;
