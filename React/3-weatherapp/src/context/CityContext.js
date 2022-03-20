import { createContext, useContext, useEffect, useState } from "react";

const CityContext=createContext();

export const CityProvider=({children})=>{
    const [selectedCity,setSelectedCity]=useState(JSON.parse(localStorage.getItem("selectedCity")) || {
        "id": 34,
        "name": "İstanbul",
        "latitude": "41.0053",
        "longitude": "28.9770",
        "population": 14657434,
        "region": "Marmara"
      }); 

    useEffect(()=>{
        localStorage.setItem("selectedCity",JSON.stringify(selectedCity));
    },[selectedCity]);

    const values={
        selectedCity,
        setSelectedCity,
    }
    return (
        <CityContext.Provider value={values}>{children}</CityContext.Provider>
    );
}   

export const useCity=()=>useContext(CityContext);