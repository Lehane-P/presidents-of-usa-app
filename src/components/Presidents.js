function Presidents({presidents}){

    const listOfPresidents = presidents.map
        ((president) => {
         return (<div key={president.id}>
                <img src={president.image} alt="president"/>
                <h3 >{president.name}</h3>
                <p>Born on {president.dateOfBirth} </p>
                <p>{president.presidentNumber}th president of the United States</p>

            </div>)
        }
    )
    return(
        <>
            {listOfPresidents}
        </>
    )

}

export default Presidents;