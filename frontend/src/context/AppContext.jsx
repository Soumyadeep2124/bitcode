import { createContext, useState, useEffect } from "react";
import App from "../App";
import { dummyCourses } from "../assets/assets";

export const AppContext =  createContext()

export const AppContextProvider = (props)=>{

    const currency = import.meta.env.VITE_CURRENCY

    const [AllCourses,setAllCourses] = useState([])

    //Fetch all courses
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses)
    }

    useEffect(()=>{
        fetchAllCourses()
    },[])

    const value = {
        currency, AllCourses
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}