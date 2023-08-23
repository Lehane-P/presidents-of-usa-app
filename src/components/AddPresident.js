import { useState } from "react";


function AddPresident({onAdd}){
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [number, setNumber] = useState();

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleImageChange(event){
    setImage(event.target.value);
  }

  function handleDateOfBirthChange(event){
    setdateOfBirth(event.target.value);
  }

  function handleNumberChange(event){
    setNumber(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    // store data in an object
    // Fetch data and post
    let newPresident = {
        name: name,
        image: image,
        dateOfBirth: dateOfBirth,
        presidentNumber: number,
    }

    // FETCH AND POST
      fetch('http://localhost:8080/presidents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPresident)
      })
      .then(response => response.json())
      .then(data => onAdd(data))
      .catch(e=>console.log(e))
    

  }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a President</h2>
            <input type="text" placeholder="Enter
             President Name" onChange={handleNameChange}/>
            <input type="url" placeholder="Enter
             President Image" onChange={handleImageChange} />
            <input type="text" placeholder="Date of
             Birth DD-MM-YYYY" onChange={handleDateOfBirthChange}/>
            <input type="number" placeholder="Was
             president number...?" onChange={handleNumberChange}/>
            <button type="submit">Add President</button>
        </form>
    )

}

export default AddPresident;