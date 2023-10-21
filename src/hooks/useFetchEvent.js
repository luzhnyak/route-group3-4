import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'services/eventsApi';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);

  const { idEvent } = useParams();

  useEffect(() => {
    fetchEventById(idEvent).then(setEvent);
  }, [idEvent]);

  return event;
};
