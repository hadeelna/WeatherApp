import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import {GetAllWeather} from '../js/weather'
import SavedList from '../components/saved/SavedList';
const Savedlocations = () => {

  const [fetchResultsTitle, setFetchResultsTitle] = useState("")

const[locations,setLocations]=useState([])
  function setdashboardList(res_selects) {
    if (res_selects.message === undefined) {
      setFetchResultsTitle("location(s):")
      setLocations(res_selects);
    } else {
      setFetchResultsTitle("Error: " + res_selects.message);
      setLocations([]);
    }
}
  useEffect(()=>{
    async function populateIntialList()
    {
    let res;
    try
    {
    res= await GetAllWeather();
    if(!res.ok){
      console.log(res);
    }else{
      let data = await res.json();
      setdashboardList(data)
    }
    }catch(err){
      console.log(err);
    }
    
    }
    populateIntialList();
      },[])
  
  

  return (
    <div>
   
   <div><h4 >{fetchResultsTitle}</h4>
    <div>{(locations)&&<SavedList saves={locations}/>}</div>
    </div>
    </div>
  )
}

export default Savedlocations