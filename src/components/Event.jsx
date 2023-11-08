// import { Button } from "react-bootstrap/Button"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

export default function Event() {
    let { id } = useParams()
    console.log(id)
    const [oneEvent, setOneEvent] = useState('')

    useEffect(()=> {
        const getOneEvent = async () => {
            console.log(id)
            const response = await axios.get(`http://localhost:3001/event/${id}`)
            console.log(response.data)
            setOneEvent(response.data)
        }
        getOneEvent()
    }, [])

    if (!oneEvent) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
          );
    } else {
        return (
            <div className="event-outer">
                <h1>{oneEvent.name}</h1>
                <h5>Oranizaiton</h5>
                <h5>{oneEvent.date}</h5>
                <h5>{oneEvent.location}</h5>
                <p>{oneEvent.description}</p>
                <div className="event-volunteer">
                    <div>Volunteers needed: #</div>
                </div>
                <div className="event-attending">
                    <div>Attending:</div>
                    <ul>
                        <li>List of names</li>
                        <li>List of names</li>
                        <li>List of names</li>
                    </ul>
                </div>
            </div>
        );
    }
}