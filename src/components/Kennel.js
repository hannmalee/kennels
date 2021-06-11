import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { Animal } from "./animal/Animal"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import "./Kennel.css"

export const Kennel = () => (

    <>

        <NavBar />
        <ApplicationViews />

        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <article className="animals">
            <AnimalProvider>
        
                <AnimalList />
            </AnimalProvider>
        </article>

        <article className="locations">
            <LocationProvider>
            
                <LocationList />
            </LocationProvider>
        </article>
       
        <article className="employees">
            <EmployeeProvider>
           
                <EmployeeList />
            </EmployeeProvider>

        </article>
       
        <article className="customers">
            <CustomerProvider>
           
                <CustomerList />
            </CustomerProvider>

        </article>
    </>
)