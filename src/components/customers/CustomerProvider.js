import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const CustomerContext = createContext() // "context" is like a warehouse where data is stored

// This component establishes what data can be used.
export const CustomerProvider = (props) => { // not all machinery in the warehouse is available to use in different areas of the warehouse
    const [customers, setCustomer] = useState([]) // the sole purpose of useState is to establish an application state variable. it gives us a variable (first item in parenthsis) it gives us a function to change the state (second item in parenthesis)

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers?_expand")
            .then(res => res.json())
            .then(setCustomer)
           // .then((data) => setAnimals(data))
    }
    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
            .then(getCustomers)
    }
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */

    // now we expose what this component will expose to other components: 
    return (
        <CustomerProvider.Provider value={{ // it is THIS object that is available to other components, not the functions
            customers, getCustomers, addCustomer  // 
        }}>
            {props.children}
        </CustomerProvider.Provider>
    )
}


// props on line 7 is naming the return; in line 37 it is saying to pass all properties to the children of the returned object