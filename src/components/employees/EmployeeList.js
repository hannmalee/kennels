import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider" // imports the context object from the provider 
// so that useContext hook can access the object
import "./Employees.css"

// useContext hook allows us to use data structures and functions that a 
// parent provider component exposes 
// useEffect allows the component to reach out for anything that can't be handled during render
// in this case, it is the API call for the animals

export const EmployeeList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, []) // empty brackets are the dependency array. 


    return (
        <section className="employees">
            {
                employees.map(
                    employee => { // let's iterate over the animals array and create
                    // html for each
                    return (
                        <div className="employee" key={`employee--${employee.id}`}>
                            <div className="employee__name">
                                Name: {employee.name}
                            </div>
                            {/* <div className="animal__breed">
                                Breed: {animal.breed}
                            </div> */}
                        </div>
                    )
                })
            }
        </section>
    )
};
