import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AddEvent() {
    const stateAbbrev = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

    const initialState = { date: '', name: '', address: '', address2: '', city: '', state: '', zip: '', description: '', capacity: '' };
    const [formState, setFormState] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = e => {
        // console.log(e.target.id, e.target.value)
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState);
        navigate('/event/:id');
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Event name</Form.Label>
                <Form.Control type="event" placeholder="Enter Event Name" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" onChange={handleChange} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        {stateAbbrev.map((abb) => (
                            <option key={abb}>{abb}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="description" placeholder="Enter Event Name" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="capacity">
                <Form.Label>Max Capacity</Form.Label>
                <Form.Control placeholder="#" onChange={handleChange} />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}