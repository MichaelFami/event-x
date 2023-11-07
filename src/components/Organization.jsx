import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Col, Row } from 'react-bootstrap';
// import CalendarElement from "./Calendar";
import newEventsArray from '../assets/data/events';
import pastEventsArray from '../assets/data/memberEvents';
import orgMembersArray from "../assets/data/orgMembers";
import '../style/organization.css';

export default function Organization() {
    const [newEvents, setNewEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [members, setMembers] = useState([]);
    const [upcomingDate, setUpcomingDate] = useState("");
    const [pastDate, setPastDate] = useState("");

    useEffect(() => {
        setNewEvents(newEventsArray);
        setPastEvents(pastEventsArray);
        setMembers(orgMembersArray);
    });

    const filterUpcomingDate = (event) => {
        setUpcomingDate(event.target.value);
    };

    const filterPastDate = (event) => {
        setPastDate(event.target.value);
    };

    console.log(upcomingDate);
    console.log(pastDate);

    return (
        <div >
            <div className="org-main-container">
                <div>
                    <h1 className="title">Organization Name</h1>
                    {/* <CalendarElement /> */}
                    <Container className="create-event-container">
                        <h3 className="quick-links">⇒ Quick Links ⇐</h3>
                        <Link to="/addevent" className="btn-primary" id="new">Create New Event</Link>
                        <Link to="/eventlist" className="btn-primary">Upcoming Events</Link>
                        <Link to="/eventlist" className="btn-primary">Past Events</Link>
                    </Container>

                </div>
                <div className="container-2">
                    <div className="org-card">
                        <Container className="org-upcoming-container mt-3">
                            <Link className="event-list-head"><h3>Upcoming Events</h3></Link>
                            <Row>
                                {/* <Col>
                                    <Link><h3>Upcoming Events</h3></Link>
                                </Col> */}
                                <Col className="event-upcoming-date">
                                    <Form.Group controlId="formGridState">
                                        <Form.Select defaultValue={upcomingDate} onChange={filterUpcomingDate}>
                                            <option value="">Show Events for ...</option>
                                            <option value="7">Next Week</option>
                                            <option value="30">Next Month</option>
                                            <option value="365">Next Year</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="org-upcoming-events">
                                <ul className="upcoming-events-ul mt-3">
                                    {newEvents.map((event, index) => {
                                        return (
                                            <div className="event-row">
                                                <Link to="/events/:id" key={index} className="event-links">
                                                    <li>
                                                        <Row>
                                                            <Col>{event.title}</Col>
                                                            <Col className="event-date">{event.time}</Col>
                                                        </Row>
                                                    </li>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </ul >
                            </Row>
                        </Container>
                    </div>
                    <div className="org-card">
                        <Container className="org-past-container  mt-3">
                            <Link className="event-list-head"><h3>Past Events</h3></Link>
                            <Row>
                                {/* <Col>
                                    <Link><h3>Past Events</h3></Link>
                                </Col> */}
                                <Col>
                                    <Form.Group controlId="formGridState">
                                        <Form.Select defaultValue={pastDate} onChange={filterPastDate}>
                                            <option value="">Show Events for ...</option>
                                            <option value="7">Last Week</option>
                                            <option value="30">Last Month</option>
                                            <option value="90">Last 90 Days</option>
                                            <option value="365">Last Year</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <ul className="past-event-ul mt-3">
                                    {pastEvents.map((event, index) => {
                                        return (
                                            <li key={index}>
                                                <Row className="event-row">
                                                    <Col>
                                                        {event.title}
                                                    </Col>
                                                    <Col>
                                                        {event.time}
                                                    </Col>
                                                </Row>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Row>
                        </Container>
                    </div>
                    <div className="org-card">
                        <Container className="org-past-container  mt-3">
                            <Link className="event-list-head"><h3>Members</h3></Link>
                        </Container>
                        <Container>
                                <ul className="org-members mt-3">
                                    {members.map((member, index) => {
                                        return (
                                            <div>
                                                <li key={index}>
                                                    <Row className="member-row">
                                                        <Col>
                                                            {member.first_name}
                                                        </Col>
                                                        <Col>
                                                            {member.last_name}
                                                        </Col>
                                                        <Col>
                                                            { }
                                                        </Col>
                                                    </Row>
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                        </Container>
                    </div>
                </div>
            </div>
        </div >
    );
}