import axios from "axios";
import { Key, useEffect, useState } from "react";

const CurrentlyReadingList=()=>{

    const [CurrentlyReading,setCurrentlyReading] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:8000/currentlyreading')
      .then(res=>{
         setCurrentlyReading(res.data);
    });
    },[]);
    
    if(!CurrentlyReading)
      return null;


    return(

        <>
        <ul>
            {
            CurrentlyReading.map((book: { id: Key | number, name: string })=> <li key={book.id}>{book.name}</li>)
            }
        </ul>
        </>
    )

}

export default CurrentlyReadingList