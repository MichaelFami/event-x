import { Link } from "react-router-dom"
import CalendarElement from "./Calendar"

export default function User () {
    return (
        <div>
            <h1 className="title">User Name</h1>
            <CalendarElement />
            <div className="user-more-info">
            <Link to="/eventfind" className="links"><h3>Find Event</h3></Link>
                <Link to="/eventlist" className="links"><h3>UpComing Events</h3></Link>
                <ul>
                    <li>Upcoming event-clickable</li>
                    <li>Upcoming event-clickable</li>
                    <li>Upcoming event-clickable</li>
                </ul>
                <Link className="links"><h3>Groups</h3></Link>
                <ul>
                    <li>Group Name-clickable</li>
                    <li>Group Name-clickable</li>
                    <li>Group Name-clickable</li>
                </ul>
            </div>
        </div>
    )
}