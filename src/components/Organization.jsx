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

    useEffect(() => {
        setNewEvents(newEventsArray);
        setPastEvents(pastEventsArray);
        setMembers(orgMembersArray);
    });

    return (
        <div >
            <div className="org-main-container">
                <h1 className="title">Organization Name</h1>
                {/* <CalendarElement /> */}
                <Container className="create-event-container">
                    <Row><Link to="/addevent" className="btn-primary">Create New Event</Link></Row>
                </Container>
                <Container className="org-upcoming-container">
                    <Row>
                        <Col>
                            <Link><h3>Upcoming Events</h3></Link>
                        </Col>
                        <Col className="event-upcoming-date">
                            <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="">
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
                        <ul className="upcoming-events-ul">
                            {newEvents.map((event, index) => {
                                return (
                                    <div>
                                        <Link to="/events/:id" key={index}>
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
                <Container className="org-past-container">
                    <Row>
                        <Col>
                            <Link><h3>Past Events</h3></Link>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="">
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
                        <ul className="past-event-ul">
                            {pastEvents.map((event, index) => {
                                return (
                                    <li key={index}>
                                        <Row>
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
                <Container>
                    <Link className="links"><h3>Members</h3></Link>
                    <ul className="org-members">
                        {members.map((member, index) => {
                            return (
                                <div>
                                    <li key={index}>
                                        <Row>
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


        </div >
    );
}