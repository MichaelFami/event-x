import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export default function EventFind () {
    const [search, setSearch] = useState({})

    const handleChange = () => {
        // grabs the information from the search bar
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        const dataToSubmit = {
            ...search
        }
        // take you to a page showing results

    }
    return (
        <div className='find-event-outer'>
            <h3>Find an Event</h3>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Find an Event"
                aria-label="Find an Event"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" >
                Search
                </Button>
            </InputGroup>
        </div>
    )
}