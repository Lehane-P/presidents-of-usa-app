import { useState, useEffect } from 'react';
import './App.css';
import Presidents from './Presidents';
import AddPresident from './AddPresident';


function App() {
  const [presidents, setPresidents] = useState([])

  // Fetching from db.json
  useEffect(()=>{
    fetch(" http://localhost:8080/presidents")
    .then(res => res.json())
    .then(data => setPresidents(data))
    .catch(err => console.error(err))
    }, [])

   // Reload the page
  function handleAddPresident(presidentObj){
    setPresidents([
      ...presidents,
      presidentObj
    ])
  }




 return (
    <div className="App">
     <Presidents  presidents={presidents}/> 
     <AddPresident onAdd={handleAddPresident} />
      
    </div>
  );
}



export default App;
