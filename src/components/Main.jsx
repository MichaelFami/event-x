import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import LogIn from './LogIn';
// import Header from './Header'
import Event from './Event';
import User from './User';
import Member from './Member';
import CalendarElement from './Calendar';
import EventFind from './EventFind';
import EventList from './EventList';
import Organization from './Organization';
import AddEvent from './AddEvent';
import axios from 'axios';
let org_id = "";
let member_id = "";

export default function Main() {

    const [orgId, setOrgId] = useState("");
    const [memberId, setMemberId] = useState("");
    useEffect(() => {

        async function loadIDs() {
            const org_res = await axios.get('http://localhost:3001/organization');
            org_id = org_res.data[0]._id;
            const member_res = await axios.get('http://localhost:3001/user');
            member_id = member_res.data[0]._id;
        }
        loadIDs().then(() => {
            console.log(org_id);
            console.log(member_id);
            setOrgId(org_id);
            setMemberId(member_id);
            console.log("this is the orgID", orgId);
            console.log("this is the userID", memberId);
        });



    });
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/user' element={<User />} />
                <Route path='/events' element={<EventList />} />
                <Route path='/addevent/events/:id' element={<Event />} />
                <Route path='/nav' element={<Nav />} />
                <Route path='/member' element={<Member memberId />} />
                {/* <Route path='/header' element={<Header />} /> */}
                <Route path='/calendar' element={<CalendarElement />} />
                <Route path='/eventfind' element={<EventFind />} />
                <Route path='/eventlist' element={<EventList />} />
                <Route path='/organization' element={<Organization orgId={orgId} />} />
                <Route path='/addevent' element={<AddEvent />} />
            </Routes>

        </div>
    );
}