import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchEvents } from 'services/eventsApi';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom/dist';

export const EventsPage = () => {
  const [events, setEvents] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  console.log(events);
  return (
    <>
      <h1>Users</h1>
      <ul>
        {events?.map(event => {
          return (
            <li key={event.id}>
              <Link to={event.id} state={{from: location}} >{event.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
