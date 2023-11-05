// import { Button } from "react-bootstrap/Button"

export default function Event () {
    return (
        <div className="event-outer">
            <h1>Event Name</h1>
            <h5>Oranizaiton</h5>
            <h5>Date</h5>
            <h5>Location</h5>
            <p>Discription of the event. Long description with lots of details.</p>
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
    )
}