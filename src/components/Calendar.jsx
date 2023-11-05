import { useState } from 'react'
import Calendar from "react-calendar";
import './Calendar.css'

export default function CalendarElement () {
    const [value, setValue] = useState(new Date())
    // const datesToAddClassTo = [tomorrow, in3Days, in5Days]

    function handleChange(nextValue) {
        setValue(nextValue)
    }

    // function titleClassName({ date, view }) {
    //     if (view === 'month'){
    //         if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
    //             return 'selectedDate'
    //         }
    //     }
    // }
    return (
        <div className='calendar-outer'>
            <Calendar onChange={handleChange} value={value} />
        </div>
    )
}