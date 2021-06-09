import { useContext, useEffect } from "react";



function App() {
    const { locations, getLocations } = useContext(LocationContext) 
    
    useEffect(
        () => {
            getLocations()
        }, 
        []
    )

    useEffect(
        () => {
            console.log(locations)
        },
        [locations]
    )

    return (
        <>
        {}
        <h1>Nashville Car Suds</h1>
        {
            locations.map(
                location => {
                    return <div>{location.address}</div>
                }
            )   
        }
        </>
    );
}