import {createContext,useState,useEffect} from "react"
import axios from "axios"


export const DataContext=createContext();

export const DataProvider=({children})=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
        setData(response.data)
        setLoading(false);
    })
    .catch((err)=>{
        console.log("error",err);
        setLoading(false)
        

    });
  },[]);

  return(

<DataContext.Provider value={{data,loading}}>
    {children}
</DataContext.Provider>
  );
};