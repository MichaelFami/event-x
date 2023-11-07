import eventsArray from '../assets/data/memberEvents';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../style/member.css';
export default function CalendarElement() {
    const [memberEvents, setMemberEvents] = useState([]);

    useEffect(() => {

        console.log(eventsArray);
        setMemberEvents(eventsArray);
    }, []);

    return (
        <div className='member-container'>
            <h2 className='title'>Welcome Test Member</h2>
            <div className='member-body'>
                <div className='events-outer'>
                    <h3>Upcoming Events:</h3>
                    <div className='userEvents'>
                        {memberEvents.map((item, index) => {
                            return (
                                <div key={index} className="member-event">
                                    <div>{item.title}</div>
                                    <div>{item.location}</div>
                                    <div>{item.time}</div>
                                    <div className='check'>
                                        <label>
                                            <input type="checkbox" />

                                        </label>
                                        <div >
                                            {item.addToFavorite}
                                        </div>
                                    </div>
                                </div>
                            );

                        })}
                    </div>
                </div>
                <div className="quick-links">
                    <h3 className="quick-links">⇒ Quick Links ⇐</h3>
                    <Link to="/eventlist" className="btn-primary">Find An Event</Link>
                    <Link to="/eventlist" className="btn-primary">Find An Organization</Link>
                    <Link to="/eventlist" className="btn-primary">Past Events</Link>
                </div>
            </div>
        </div>
    );
}