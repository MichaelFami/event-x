import { Link } from "react-router-dom"
import Nav from './Nav'
import CalendarElement from "./Calendar"

export default function Organization () {
    return (
        <div >
            <div className="org-outer">
                <h1 className="title">Organization Name</h1>
                <CalendarElement />
                <div className="org-more-info">
                    <Link to="/addevent" className="links"><h3>Create New Event</h3></Link>
                    <Link className="links"><h3>Upcoming Events</h3></Link>
                    <ul>
                        <li>Upcoming event-clickable</li>
                        <li>Upcoming event-clickable</li>
                        <li>Upcoming event-clickable</li>
                    </ul>
                    <Link className="links"><h3>Past Events</h3></Link>
                    <ul>
                        <li>Past event</li>
                        <li>Past event</li>
                        <li>Past event</li>
                    </ul>
                    <Link className="links"><h3>Members</h3></Link>
                    <ul>
                        <li>Member Name</li>
                        <li>Member Name</li>
                        <li>Member Name</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}