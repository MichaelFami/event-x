import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';
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
    console.log(events)

    // date formatting function, called in the card 
    const formatDate = (eventDate) => {
        // console.log(eventDate)
        let modifiedDate = ''
        if(!eventDate){
            modifiedDate = ''
        }else{
            let inputDate = eventDate
            modifiedDate = moment(inputDate).format("dddd, MMM DD")
        }
        return modifiedDate
    }
    

    if (!events) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
          );
    } else {
        return (
            <div className='event-list-outer mb-2 text-muted'>
                <h1 className='title'>Upcoming Events</h1>
                <button onClick={() => history.back()} className="mb-2 text-muted btn-primary">Return</button>
                <div className='event-list-card-container'>
                {events.map((event, index) => (<Card key={index} style={{ width: '18rem' }} className="mb-2 text-muted">
                    <Card.Body className="mb-2 text-muted">
                        <Card.Title>{event.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Organization GOES HERE!</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Date: {formatDate(event.date)}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Location: {event.location}</Card.Subtitle>

                        <Card.Text>
                            {event.description}
                        </Card.Text>
                        <Link to={`/addevent/events/${event._id}`}>Read More</Link>
                    </Card.Body>
                </Card>)

                )}
                </div>
            </div>
        );
    }
}