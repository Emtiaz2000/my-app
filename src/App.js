
import './App.css';
import React, {useState} from 'react'
import Title from './components/title'
import Model from './components/model'
import EventList from './components/eventList';
import NewEventForm from './components/NewEventForm';

function App() {
  //const [myName,setmyName] = useState('marieo')
  const [showEvents,setShowEvents] = useState(true)
  const [showModel,setShowModel]=useState(false)
  const [events,setEvents] = useState([
  ])
  const title = 'This is dynamic Title'
  const subTitle = 'This is dynamic Sub-Title'
  // console.log(useState('mario'))//will return ['mario',function()]
  /* const handleClick = ()=>{
    if(myName ==='marieo'){
      setmyName('ruei')
    }else{
      setmyName('marieo')
    } 
    
   // console.log(myName)
  }*/
  
  const halderClickSec = (id)=>{
    setEvents((preEvents)=>{
      return preEvents.filter(event=>{
        return event.id!==id
      })
    })
    //console.log(id)
  }
  const ShowModelSec =()=>{
    setShowModel(true)
  }

  const handeClose = ()=>{
    setShowModel(false)
  }

  const addEvent = (event)=>{
    setEvents((preEvents)=>{
      console.log(preEvents)
      return [...preEvents,event]
    
    })
  }

  return (
    <div className="App">
      <Title title={title} subtitle={subTitle}/>
      {showEvents && (<div>
        <button onClick={()=> setShowEvents(false)}>Hidea section</button>
      </div>)}
      {(!showEvents &&  <div>
      <button onClick={()=> setShowEvents(true)}>Show section</button>
      </div>)}
       
      
      {showEvents && <EventList events={events} halderClickSec ={halderClickSec}/>
      }
      {showModel && <Model handeClose={handeClose} >
        <NewEventForm addEvent={addEvent} handeClose={handeClose}/>
      </Model>}
      <><br/>
      <button style={{
        fontFamily:'sans-serif',
        fontSize:'1rem'
      }} onClick={ShowModelSec}>Add New Event</button>
      </>
     
    </div>
  );
}

export default App;
