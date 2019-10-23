import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

const EventList = ({ newEvent }) => {
  const [eventInfo, setEventInfo] = useState(null);

  console.log(newEvent);

  useEffect(() => {
    axios.get('http://localhost:9876/api/events').then(res => {
      setEventInfo(res.data.events);
    });
  }, []);

  useEffect(() => {
    if (newEvent) {
      axios
        .post('http://localhost:9876/api/events', {
          name: newEvent.name,
          date: newEvent.date,
          description: newEvent.description
        })
        .then(res => console.log(res));
      axios.get('http://localhost:9876/api/events').then(res => {
        setEventInfo(res.data.events);
      });
    }
  }, [newEvent]);

  const handleDelete = id => {
    console.log('deleted', id);
    axios
      .delete(`http://localhost:9876/api/events/${id}`)
      .then(res => console.log(res));
    setEventInfo(eventInfo.filter(obj => obj.id !== id));
  };
  if (eventInfo) {
    return (
      <div className="flex-container">
        {eventInfo.map((obj, index) => {
          return (
            <EventCard
              name={obj.name}
              key={obj.id}
              date={obj.date}
              description={obj.description}
              id={obj.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    );
  } else return <div>Loading..</div>;
};

export default EventList;
