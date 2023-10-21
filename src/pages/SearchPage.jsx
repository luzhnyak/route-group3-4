import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom/dist';
import { fetchEventsByName } from 'services/eventsApi';

export function SearchPage() {
  const [events, setEvents] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get('eventName');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ eventName: e.target.event.value });
    e.target.reset();
  };

  useEffect(() => {
    if (!eventName) return;

    async function fetchData() {
      try {
        const data = await fetchEventsByName(eventName);
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [eventName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="event" />
        <button>Search</button>
      </form>
      <ul>
        {events?.map(event => {
          return (
            <li key={event.id}>
              <Link to={event.id} state={{from: location}}>{event.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}
