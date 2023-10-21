import React from 'react';
import { useFetchEvent } from 'hooks/useFetchEvent';
import { useLocation, useNavigate } from 'react-router-dom/dist';

const EventDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const event = useFetchEvent();
  return (
    <>
      <button onClick={() => navigate(location.state?.from || '/')} type='button'>Go back</button>
      <h2>{event?.name}</h2>
      <p>Ganres: {event?.classifications[0].genre.name}</p>
      <p>Sub ganres: {event?.classifications[0].subGenre.name}</p>

      <img src={event?.images[0].url} alt={event?.name} />
    </>
  );
};

export default EventDetailPage;
