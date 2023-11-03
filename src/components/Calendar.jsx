import { useState } from 'react'
import Calendar from "react-calendar";

export default function CalendarElement () {
    const [value, setValue] = useState(new Date())

    function handleChange(nextValue) {
        setValue(nextValue)
    }
    return (
        <Calendar onChange={handleChange} value={value} />
    )
}