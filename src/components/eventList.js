import React from 'react'
import '../index.css'

export default function EventList({events,halderClickSec}) {
  return (
      <>
      {events.map((events)=>{return (
        <React.Fragment key={events.id}>
          <div className='card_event_show'>
          <h3>{events.title}</h3>
          <p>Location-{events.location} , Date-{events.date}</p>
          <button onClick={()=>halderClickSec(events.id)}>Delete It</button>
          </div>
         
        </React.Fragment>
      )})}
      </>
    
  )
}
