import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider" // imports the context object from the provider 
// so that useContext hook can access the object
import "./Animal.css"

// useContext hook allows us to use data structures and functions that a 
// parent provider component exposes 
// useEffect allows the component to reach out for anything that can't be handled during render
// in this case, it is the API call for the animals

export const AnimalList = () => {       
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
  }, []) // empty brackets are the dependency array. 


  return (
    <section className="animals">
      {
        animals.map(animal => { // let's iterate over the animals array and create
            // html for each
          return (
            <div className="animal" id={`animal--${animal.id}`}>
              <div className="animal__name">
                Name: { animal.name }
              </div>
              <div className="animal__breed">
                Breed: { animal.breed }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
