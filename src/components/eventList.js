import React from 'react'

export default function EventList({events,halderClickSec}) {
  return (
      <>
      {events.map((events)=>{return (
        <React.Fragment key={events.id}>
          <h3>{events.title}</h3>
          <button onClick={()=>halderClickSec(events.id)}>Delete It</button>
        </React.Fragment>
      )})}
      </>
    
  )
}
