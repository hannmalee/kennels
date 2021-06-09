import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext() // "context" is like a warehouse where data is stored

// This component establishes what data can be used.
export const AnimalProvider = (props) => { // not all machinery in the warehouse is available to use in different areas of the warehouse
    const [animals, setAnimals] = useState([]) // the sole purpose of useState is to establish an application state variable. it gives us a variable (first item in parenthsis) it gives us a function to change the state (second item in parenthesis)

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then(res => res.json())
        .then((data)=> setAnimals(data))
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */

        // now we expose what this component will expose to other components: 
    return (
        <AnimalContext.Provider value={{ // it is THIS object that is available to other components, not the functions
            animals, getAnimals, addAnimal // 
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}


// props on line 7 is naming the return; in line 37 it is saying to pass all properties to the children of the returned object
