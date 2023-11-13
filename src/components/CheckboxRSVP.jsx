import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const CheckboxRSVP = ({ eventId, userId, initialChecked }) => {
    const [isChecked, setChecked] = useState(initialChecked);
    const [rsvpArray, setRsvpArray] = useState([]); // State to keep track of RSVP array on the client
  
    const handleCheckboxChange = () => {
      // Update the local state without waiting for the server response
      setChecked(!isChecked);
  
      // Update the local RSVP array
      setRsvpArray((prevRsvpArray) => {
        if (isChecked) {
          // Remove userId if already in the array
          return prevRsvpArray.filter((id) => id !== userId);
        } else {
          // Add userId to the array
          return [...prevRsvpArray, userId];
        }
      });
    };
  
    const sendRsvpToServer = async () => {
      try {
        // Assuming your API endpoint is '/api/events/:eventId'
        await axios.put(`http://localhost:3001/event/${eventId}`, { rsvp: rsvpArray });
  
        // Optionally, you can handle success or error here
      } catch (error) {
        console.error('Error updating RSVP on the server:', error);
      }
    };
  
    useEffect(() => {
      // Use an effect to send the RSVP to the server when the local RSVP array changes
      sendRsvpToServer();
    }, [rsvpArray]);
  
  return (
    <Form.Check // prettier-ignore
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
      label="RSVP"
    />
  );
}

export default CheckboxRSVP