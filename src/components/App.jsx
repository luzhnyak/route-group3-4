import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import { EventsPage } from 'pages/EventsPage';
import EventSubPage from 'pages/EventSubPage';
import EventDetailPage from 'pages/EventDetailPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":idEvent" element={<EventSubPage />} />
        </Route>
        <Route path="events/:idEvent/details" element={<EventDetailPage />} />
      </Route>
    </Routes>
  );
};
