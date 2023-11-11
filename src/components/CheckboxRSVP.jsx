import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function CheckboxRSVP(props) {
    let id=props.eventId
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);

     axios.put(`http://localhost:3001/event/${id}`, {
       
          
          rsvp: ["654a61a96b44fee8d06b1366" ]
       
      })

  };

 

  return (
    <Form.Check // prettier-ignore
      type="checkbox"
      id={props.eventId}
      checked={isChecked}
      label="RSVP"
      onChange={checkHandler}
    />
  );
}
