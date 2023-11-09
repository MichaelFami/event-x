import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
// import CalendarElement from "./Calendar";
import orgMembersArray from "../assets/data/orgMembers";
import '../style/organization.css';

export default function Organization() {
    const [loggedInOrg, setLoggedInOrg] = useState();
    const [members, setMembers] = useState([]);
    const [futureEvents, setFutureEvents] = useState([]);
    const [showFutureEvents, setShowFutureEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [showPastEvents, setShowPastEvents] = useState([]);
    const todayDate = new Date();

    useEffect(() => {
        const loginOrganizer = async () => {
            const response = await axios.get(`http://localhost:3001/organization/`);
            console.log(response.data);
            setLoggedInOrg(response.data);
        };
        const loadAllEvents = async () => {
            let allEvents = await axios.get(`http://localhost:3001/event`);
            let inFutureEvents = [];
            let inPastEvents = [];
            allEvents.data.forEach((event) => {
                event.date >= todayDate.toISOString() ? inFutureEvents.push(event) : inPastEvents.push(event);
            });
            setFutureEvents([...inFutureEvents]);
            setPastEvents([...inPastEvents]);
        };
        loginOrganizer();
        loadAllEvents();
    }, []);

    useEffect(() => {

        setMembers(orgMembersArray);
    });

    const filterUpcomingDate = (event) => {
        console.log(event.target.value);
        console.log(futureEvents);

        const upcomingDates = new Date();
        upcomingDates.setDate(todayDate.getDate() + Number(event.target.value));
        console.log("Today is :", todayDate.toISOString(), "Upcoming date is: ", upcomingDates.toISOString());

        let futureEventList = [];
        futureEventList = futureEvents.filter((eventFilter) => eventFilter.date <= upcomingDates.toISOString());

        setShowFutureEvents(futureEventList);
    };

    const filterPastDate = (event) => {
        console.log(event.target.value);
        console.log(pastEvents);

        const pastDates = new Date();
        pastDates.setDate(todayDate.getDate() - Number(event.target.value));
        console.log("Today is : ", todayDate.toISOString(), "Past date is: ", pastDates.toISOString());

        let pastEventList = [];
        pastEventList = pastEvents.filter((eventFilter) => eventFilter.date >= pastDates.toISOString());
        setShowPastEvents(pastEventList);
    };

    if (!loggedInOrg) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    } else {
        return (
            <div >
                <div className="org-main-container">
                    <div>
                        <h1 className="title">{loggedInOrg.name}</h1>
                        {/* <CalendarElement /> */}
                        <Container className="create-event-container">
                            <h3 className="quick-links">⇒ Quick Links ⇐</h3>
                            <Link to="/addevent" state={{ orgId: loggedInOrg._id }} className="btn-primary" id="new" >Create New Event</Link>
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
                                            <Form.Select defaultValue={0} onChange={filterUpcomingDate}>
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
                                        {showFutureEvents.map((event, index) => {
                                            return (
                                                <div className="event-row">
                                                    <Link to="/events/:id" key={index} className="event-links">
                                                        <li>
                                                            <Row>
                                                                <Col>{event.name}</Col>
                                                                <Col className="event-date">
                                                                    {new Date(event.date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
                                                                </Col>
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
                                    <Col>
                                        <Form.Group controlId="formGridState">
                                            <Form.Select defaultValue={0} onChange={filterPastDate}>
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
                                        {showPastEvents.map((event, index) => {
                                            return (
                                                <li key={index}>
                                                    <Row className="event-row">
                                                        <Col>
                                                            {event.name}
                                                        </Col>
                                                        <Col>
                                                            {new Date(event.date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
                                                        </Col>
                                                    </Row>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Row>
                            </Container>
                        </div>
                        {/* <div className="org-card">
                            <Container className="org-past-container  mt-3">
                                <Link className="event-list-head"><h3>Members</h3></Link>
                            </Container>
                            <Container>
                                    <div className="org-members mt-3">
                                        {members.map((member, index) => {
                                            return (
                                                <div key={index}>  
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
                                                </div>
                                            );
                                        })}
                                    </div>
                            </Container>
                        </div> */}
                    </div>
                </div>
            </div >
        );
    }
}