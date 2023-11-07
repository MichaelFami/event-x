import axios from 'axios';
import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

export default function EventList() {
    const [events, setEvents] = useState([]);
    useEffect(() => {

        const getAllEvents = async () => {
            const response = await axios.get(`http://localhost:3001/event`);
            setEvents(response.data);
            console.log(events);
        };
        getAllEvents();

    }, []);

    return (
        <div className='event-list-outer mb-2 text-muted'>
            <h1>Upcoming Events</h1>
            <button onClick={() => history.back()} className="mb-2 text-muted">Return</button>
            {events.map((event, index) => (<Card key={index} style={{ width: '18rem' }} className="mb-2 text-muted">
                <Card.Body className="mb-2 text-muted">
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Organization GOES HERE!</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Time: {event.date.slice(0, 10)}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Location: {event.location}</Card.Subtitle>

                    <Card.Text>
                        {event.description}
                    </Card.Text>
                    <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
            </Card>)

            )}

        </div>
    );
}