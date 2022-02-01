import React, { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm({ addEvent, handeClose }) {
    const [form_title, setForm_title] = useState('')
    const [form_date, setForm_date] = useState('')
    const [location, setLocation] = useState('london')

    const restForm = () => {
        setForm_title('')
        setForm_date('')
        setLocation('london')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(form_date===''|| form_date===''|| location===''){
            alert('Please fill all the input')
            return
        }else{
            const event = {
                title: form_title,
                date: form_date,
                id: Math.floor(Math.random() * 10000),
                location: location
            }
            addEvent(event)
            restForm()
            handeClose()
        }
        

    }

    return (
        <>
            <form className='new-event-form' onSubmit={handleSubmit}>
                <label>
                    <span>Title:</span><br />
                    <input type="text" onChange={(e) => {
                        setForm_title(e.target.value)

                    }} value={form_title} />
                </label>
                <label>
                    <span>Date:</span><br />
                    <input type="date" onChange={(e) => {
                        setForm_date(e.target.value)

                    }} value={form_date} />
                </label>
                <label>
                    <select onChange={(e) => setLocation(e.target.value)}>
                        <option value="london">London</option>
                        <option value="usa">USA</option>
                        <option value="chind">China</option>
                    </select>

                </label>
                <button type="submit">Submit</button>

            </form>
            {/*   {
                form_title && form_date &&
                <>
                <p>Title:{form_title} and Date:{form_date}</p>
                <p onClick={restForm}>Reset the form</p>
                </>
                
            } */}

        </>
    )
}
