import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AddEvent() {
    const stateAbbrev = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    // getting the id from the organization
    let location = useLocation()
    // console.log(location.state)
    const orgId = location.state.orgId

    // state for gathering data
    const initialState = { date: '', name: '', address: '', address2: '', city: '', state: '', zip: '', description: '', capacity: '' };
    const [formState, setFormState] = useState(initialState);
    const [loggedInOrg, setLoggedInOrg] = useState('')
    const navigate = useNavigate();

    // setting the logged in org
    useEffect(()=> {
        const currentOrg = async() => {
            let response = await axios.get(`http://localhost:3001/organization/${orgId}`)
            console.log(response.data)
            setLoggedInOrg(response.data)
        }
        currentOrg()
    }, [])

    const handleChange = e => {
        console.log(e.target.id, e.target.value)
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        let newAddress = `${formState.address}, ${formState.address2}, ${formState.city}, ${formState.state}, ${formState.zip}`
        console.log(formState, newAddress);
        const onHandleSubmit = async () => {
            let eventId = ''
            try {
                await axios.post(`http://localhost:3001/event`, { name: formState.name, description: formState.description, location: newAddress, capacity: formState.capacity, date: formState.date })
                    .then(res=>{ eventId = res.data.event._id})
                // //second call (not working)
                // try {
                //     await axios.put(`http://localhost:3001/organization/${loggedInOrg._id}`, {events: [{eventId: eventId}]})
                // } catch (error) {
                //     console.log(error.message)
                // }
            } catch (error) {
                console.log(error.message)
            }
        console.log(eventId)
        navigate(`events/${eventId}0`, {id: eventId});
        }
        onHandleSubmit()
    };
    if (!orgId) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
          );
    } else {
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Event name</Form.Label>
                    <Form.Control type="event" placeholder="Enter Event Name" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId='date'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" onChange={handleChange} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose..." onChange={handleChange}>
                            <option>Choose...</option>
                            {stateAbbrev.map((abb) => (
                                <option key={abb}>{abb}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="description" placeholder="Enter Event Name" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="capacity">
                    <Form.Label>Max Capacity</Form.Label>
                    <Form.Control placeholder="#" onChange={handleChange} />
                </Form.Group>


                <button variant="primary" type="submit" className='btn-submit'>
                    Submit
                </button>
            </Form>
        );
    }
}