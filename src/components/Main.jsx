import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Event from './Event'
import User from './User'

export default function Main () {
    return (
        <Routes>
            <Route path='/' element={<User />} />
            <Route path='/event' element={<Event />} />
        </Routes>
    )
}