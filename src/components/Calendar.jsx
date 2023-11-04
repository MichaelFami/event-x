import { useState } from 'react'
import Calendar from "react-calendar";
import './Calendar.css'

export default function CalendarElement () {
    const [value, setValue] = useState(new Date())

    function handleChange(nextValue) {
        setValue(nextValue)
    }
    return (
        <div className='calendar-outer'>
            <Calendar onChange={handleChange} value={value} />
        </div>
    )
}