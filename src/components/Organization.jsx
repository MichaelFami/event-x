import { Link } from "react-router-dom"
import CalendarElement from "./Calendar"

export default function Organization () {
    return (
        <div>
            <h1>Organization Name</h1>
            <CalendarElement />
            <Link to="/addevent"><h3>Create New Event</h3></Link>
            <Link><h3>Upcoming Events</h3></Link>
            <Link><h3>Past Events</h3></Link>
            <Link><h3>Members</h3></Link>
        </div>
    )
}