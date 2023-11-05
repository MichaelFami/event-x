import eventsArray from '../assets/data/memberEvents';
import { useEffect, useState } from 'react';
import '../style/member.css';
export default function CalendarElement() {
    const [memberEvents, setMemberEvents] = useState([]);

    useEffect(() => {

        console.log(eventsArray);
        setMemberEvents(eventsArray);
    }, []);

    return (
        <div>
            <h1>This is where the Header & Nav bar</h1>

            <h2 className='greeting'>Welcome Test Member</h2>
            <h3>My Events:</h3>
            <ul>
                <div className='userEvents'>
                    {memberEvents.map((item, index) => {
                        return (
                            <ul key={index} className="member-event">

                                <li>{item.title}</li>
                                <li >{item.location}</li>
                                <li >{item.time}</li>
                                <li >
                                    <label>
                                        <input type="checkbox" />

                                    </label>

                                </li>
                                <li >

                                    {item.addToFavorite}
                                </li>

                            </ul>
                        );

                    })}


                </div>
            </ul>
        </div>
    );
}