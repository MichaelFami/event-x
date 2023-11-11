import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CheckboxRSVP from "./CheckboxRSVP";
import { Container, Form, Col, Row, FormCheck } from "react-bootstrap";
import "../style/organization.css";

export default function Member() {
  const [futureEvents, setFutureEvents] = useState([]);
  const [showFutureEvents, setShowFutureEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [showPastEvents, setShowPastEvents] = useState([]);
  const todayDate = new Date();

  useEffect(() => {
    const loadAllEvents = async () => {
      let allEvents = await axios.get(`http://localhost:3001/event`);
      let inFutureEvents = [];
      let inPastEvents = [];
      allEvents.data.forEach((event) => {
        event.date >= todayDate.toISOString()
          ? inFutureEvents.push(event)
          : inPastEvents.push(event);
      });
      setFutureEvents([...inFutureEvents]);
      setPastEvents([...inPastEvents]);
    };
    loadAllEvents();
  }, []);

  const filterUpcomingDate = (event) => {
    console.log(event.target.value);
    console.log(futureEvents);

    const upcomingDates = new Date();
    upcomingDates.setDate(todayDate.getDate() + Number(event.target.value));
    console.log(
      "Today is :",
      todayDate.toISOString(),
      "Upcoming date is: ",
      upcomingDates.toISOString()
    );

    let futureEventList = [];
    futureEventList = futureEvents.filter(
      (eventFilter) => eventFilter.date <= upcomingDates.toISOString()
    );

    setShowFutureEvents(futureEventList);
  };

  const filterPastDate = (event) => {
    console.log(event.target.value);
    console.log(pastEvents);

    const pastDates = new Date();
    pastDates.setDate(todayDate.getDate() - Number(event.target.value));
    console.log(
      "Today is : ",
      todayDate.toISOString(),
      "Past date is: ",
      pastDates.toISOString()
    );

    let pastEventList = [];
    pastEventList = pastEvents.filter(
      (eventFilter) => eventFilter.date >= pastDates.toISOString()
    );
    setShowPastEvents(pastEventList);
  };
  
   
   

  return (
    <div>
      <div className="org-main-container">
        <div></div>
        <div className="container-2">
          <div className="org-card">
            <div className="mb-1">
              <h1>Welcome</h1>
            </div>
            <Container className="org-upcoming-container mt-3">
              <Link className="event-list-head">
                <h3>Upcoming Events</h3>
              </Link>
              <Row>
                <Col className="event-upcoming-date">
                  <Form.Group controlId="formGridState">
                    <Form.Select defaultValue={0} onChange={filterUpcomingDate}>
                      <option value="0">Show Events for ...</option>
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
                      <div className="event-row" key={index}>
                        <Link
                          to="/events/:id"
                          key={index}
                          className="event-links"
                        >
                          <li>
                            <Row>
                              <Col>{event.name}</Col>
                              <Col className="event-date">
                                {new Date(event.date).toLocaleDateString(
                                  "en-us",
                                  {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </Col>
                              
                            </Row>
                          </li>
                        </Link>
                        <Col>
                               <CheckboxRSVP eventId={event._id}/>
                              </Col>
                      </div>
                    );
                  })}
                </ul>
              </Row>
            </Container>
          </div>
          <div className="org-card">
            <Container className="org-past-container  mt-3">
              <Link className="event-list-head">
                <h3>Past Events</h3>
              </Link>
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
                          <Col>{event.name}</Col>
                          <Col>
                            {new Date(event.date).toLocaleDateString("en-us", {
                              weekday: "long",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </Col>
                        </Row>
                      </li>
                    );
                  })}
                </ul>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
