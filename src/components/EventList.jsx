import Card from 'react-bootstrap/Card'

export default function EventList () {
    return (
        <div className='event-list-outer'>
            <h1>Upcoming Events</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Event Name</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Organization</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
                    <Card.Text>
                    Quick description of the event. Invite the reader to click and learn more
                    </Card.Text>
                    <Card.Link href="#">Read More</Card.Link>
                    <Card.Link href="#">View Organization</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}