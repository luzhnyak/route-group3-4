import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchEvent } from 'hooks/useFetchEvent';

const EventSubPage = () => {
  const event = useFetchEvent();
  return (
    <>
      <h2>{event?.name}</h2>
      <img src={event?.images[0].url} alt={event?.name} />
      <Link to="details">More Details</Link>
    </>
  );
};

export default EventSubPage;
