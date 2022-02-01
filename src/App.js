
import './App.css';
import React, {useState} from 'react'
import Title from './components/title'
import Model from './components/model'
import EventList from './components/eventList';

function App() {
  //const [myName,setmyName] = useState('marieo')
  const [showEvents,setShowEvents] = useState(true)
  const [showModel,setShowModel]=useState(false)
  const [events,setEvents] = useState([
    {title:'My name is Mario',id:1},
    {title:'My name is Ruie',id:2},
    {title:'My name is net ninja',id:3}
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
      {showModel && <Model handeClose={handeClose}>
        <h1>10% Discount is Going On!</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, magnam.
        </p>
      </Model>}
      <><br/>
      <button style={{
        fontFamily:'sans-serif',
        fontSize:'1rem'
      }} onClick={ShowModelSec}>Clik to show</button>
      </>
     
    </div>
  );
}

export default App;
