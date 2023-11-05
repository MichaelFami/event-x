import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
// import Header from './Header'
import Event from './Event'
import User from './User'
import CalendarElement from './Calendar'
import EventFind from './EventFind'
import EventList from './EventList'
import Organization from './Organization'
import AddEvent from './AddEvent'

export default function Main () {
    return (
        <Routes>
            <Route path='/user' element={<User />} />
            <Route path='/event' element={<Event />} />
            <Route path='/nav' element={<Nav/>} />
            {/* <Route path='/header' element={<Header />} /> */}
            <Route path='/calendar' element={<CalendarElement />} />
            <Route path='/eventfind' element={<EventFind />} />
            <Route path='/eventlist' element={<EventList />} />
            <Route path='/organization' element={<Organization />} />
            <Route path='/addevent' element={<AddEvent />} />
        </Routes>
    )
}