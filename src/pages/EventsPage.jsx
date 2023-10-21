import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchEvents } from 'services/eventsApi';
import { Link, Outlet } from 'react-router-dom';

export const EventsPage = () => {
  const [events, setEvents] = useState(null);

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
              <Link to={event.id}>{event.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
