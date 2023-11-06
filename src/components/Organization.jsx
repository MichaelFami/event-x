import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CalendarElement from "./Calendar";
import Nav from './Nav';
import newEventsArray from '../assets/data/events';
import pastEventsArray from '../assets/data/memberEvents';
import orgMembersArray from "../assets/data/orgMembers";



export default function Organization() {
    const [newEvents, setNewEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        setNewEvents(newEventsArray);
        setPastEvents(pastEventsArray);
        setMembers(orgMembersArray);
    });

    return (
        <div >
            <div className="org-outer">
                <h1 className="title">Organization Name</h1>
                <CalendarElement />
                <div className="org-more-info">
                    <Link to="/addevent" className="links"><h3>Create New Event</h3></Link>
                    <Link className="links"><h3>Upcoming Events</h3></Link>
                    <ul className="org-upcoming-event">
                        {newEvents.map((event, index) => {
                            return (
                                <Link to="/events/:id" key={index}> <li>{event.title}...{event.time}</li> </Link>
                            );
                        })}

                    </ul >
                    <Link className="links"><h3>Past Events</h3></Link>
                    <ul className="org-past-events">
                        {pastEvents.map((event, index) => {
                            return (
                                <li key={index}>{event.title}...{event.time}</li>
                            );
                        })}

                    </ul>
                    <Link className="links"><h3>Members</h3></Link>
                    <ul className="org-members">
                        {members.map((member, index) => {
                            return (
                                <li key={index}>{member.first_name} {member.last_name}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>

        </div>
    );
}