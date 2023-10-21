import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchEvent } from 'hooks/useFetchEvent';
import { useLocation } from 'react-router-dom/dist';

const EventSubPage = () => {
  const location = useLocation();
  
  const event = useFetchEvent();
  return (
    <>
      <h2>{event?.name}</h2>
      <img src={event?.images[0].url} alt={event?.name} />
      <Link to="details" state={location.state}>More Details</Link>
    </>
  );
};

export default EventSubPage;
