// import { Button } from "react-bootstrap/Button"
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';

export default function Event() {
    const navigate = useNavigate() 

    // states
    const [oneEvent, setOneEvent] = useState('')
    const [makeEdit, setMakeEdit] = useState(false)

    // id for dynamic usage:
    let { id } = useParams()

    // hard coded for testing:
    // let id = `654be0a675a6284385c78940`
    // console.log(id)

    // get events to show up on the page
    useEffect(()=> {
        const getOneEvent = async () => {
            // console.log(id)
            const response = await axios.get(`http://localhost:3001/event/${id}`)
            console.log(response.data)
            setOneEvent(response.data)
        }
        getOneEvent()
    }, [])

    // date formatting
    let modifiedDate = ''
    if(!oneEvent.date){
        modifiedDate = ''
    }else{
        let inputDate = oneEvent.date
        modifiedDate = moment(inputDate).format("dddd, MMM DD")
    }

    // make form editable
    // console.log(makeEdit)
    const editContent = () => {
        setMakeEdit(true)
        console.log(makeEdit)
    }

    const handleChange = (e) => {
        console.log(e.target.id, e.target.value)
        setOneEvent({...oneEvent, [e.target.id]: e.target.value})
    }

    const finishEdits = () => {
        console.log(oneEvent)
        const onHandleSubmit = async () => {
            try {
                await axios.put(`http://localhost:3001/event/${id}`, { name: oneEvent.name, description: oneEvent.description, location: oneEvent.location })
                    .then(res => {console.log(res)})
            } catch (error) {
                console.log(error.message)
            }
        }
        onHandleSubmit()
        setMakeEdit(false)
    }

    const deleteEvent = () => {
        const onHandleClick = async () => {
            await axios.delete(`http://localhost:3001/event/${id}`)
        }
        onHandleClick()
        navigate(`/organization`, console.log('event deleted'))
    }

    // show spinner or show page text
    if (!oneEvent) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
          );
    } else {
        return (
            <div className="event-outer">

                { makeEdit ? (<input type="text" defaultValue={oneEvent.name} id="name" onChange={handleChange} /> ) : (<h1>{oneEvent.name}</h1>)}
                
                <h5>Date: {modifiedDate}</h5>

                { makeEdit ? (<textarea type="text" defaultValue={oneEvent.location} id="location" onChange={handleChange} />) : (<h5>Location: {oneEvent.location}</h5>) }

                { makeEdit ? (<textarea type='text' defaultValue={oneEvent.description} id="description" onChange={handleChange} />) : (<p>Description: {oneEvent.description}</p>)}
                <div className="event-volunteer">
                    <div>Volunteers needed: #</div>
                </div>
                <div className="event-attending">
                    <div>Attending:</div>
                    <ul>
                        <li>List of names</li>
                        <li>List of names</li>
                        <li>List of names</li>
                    </ul>
                </div>
                <div>
                    { makeEdit ? (<button className='btn-primary' onClick={finishEdits}>Done Editing</button>) : (<div></div>)}
                </div>
                <div className="event-btns">
                    <button className='btn-events' onClick={()=> {editContent()}}>Edit</button>
                    <button className="btn-events" onClick={()=>{deleteEvent()}}>Delete</button>
                </div>
            </div>
        );
    }
}