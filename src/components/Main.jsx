import { Route, Routes } from 'react-router-dom'
// import Nav from './Nav'
// import Header from './Header'
// import Event from './Event'
// import User from './User'
import CalendarElement from './Calendar'
// import EventList from './EventList'
// import Organization from './Organization'

export default function Main () {
    return (
        <Routes>
            {/* <Route path='/' element={<User />} /> */}
            {/* <Route path='/event' element={<Event />} /> */}
            {/* <Route path='/nav' element={<Nav/>} /> */}
            {/* <Route path='/header' element={<Header />} /> */}
            <Route path='/calendar' element={<CalendarElement />} />
            {/* <Route path='/eventlist' element={<EventList />} /> */}
            {/* <Route path='/Organization' element={<Organization />} /> */}
        </Routes>
    )
}