import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider"; // imports the context object from the provider 
// so that useContext hook can access the object
import "./Locations.css"; 

// useContext hook allows us to use data structures and functions that a 
// parent provider component exposes 
// useEffect allows the component to reach out for anything that can't be handled during render
// in this case, it is the API call for the animals

export const LocationList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, []) // empty brackets are the dependency array. 


    return (

        <>
        <h2>Locations</h2>
        <section className="locations">
            {
                locations.map(
                    location => { // let's iterate over the animals array and create
                    // html for each
                    return (
                        <div className="location" key={`location--${location.id}`}>
                            <div className="location__name">
                                Kennel: {location.name}
                            </div>
                            <div className="location__address">
                                Address: {location.address}
                            </div>
                        </div>
                    )
                })
            }
        </section>
        </>
    )
};