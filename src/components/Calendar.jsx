import { useState } from 'react'
import Calendar from "react-calendar";
import './Calendar.css'


// function tileClassName({ date, view }) {
//     if (view === 'month'){
//         if (datesToAddClassTo.find(dDate => isSameDay(dDate, date))) {
//             return 'selectedDate'
//         }
//     }
// }

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