import React from 'react';
import {fetchWeather} from '../js/weather'
import {postNewWeather} from '../js/weather'
import { useRef } from 'react'
import { useState } from 'react';
import styles from './Searchlocations.module.css';
import { fetchAllSearches } from "../../src/js/Search";
import SearchList from '../components/Searches/SearchList';
import WeatherList from '../components/Searches/WeatherList';

const SearchLocations = () => {

  const locationFormRef = useRef();  

  function clickSelectHandler(search)
  {
  setsearchlistIsOpen(false);
  setWeatherListIsOpen(true);
    fetchData2(search);
  }
  const [showModal, setShowModal] = useState(false);
  function clickAddtoDashHandler(weather)
  {
    fetchData3(weather);
    setShowModal(true);
    console.log("h")
    
  }

 const [searchlistIsOpen,setsearchlistIsOpen]=useState(false);
  const [WeatherListIsOpen,setWeatherListIsOpen]=useState(false);


  function searchHandler(){
  setselects(undefined);
  setsearchlistIsOpen(true);
  setWeatherListIsOpen(false)}

  function closeSearchlist(){setsearchlistIsOpen(false);}
  
  const [fetchResultsTitle, setFetchResultsTitle] = useState("")
  const [searches, setSearches] = useState([])
  const [weatheres, setselects] = useState(undefined)
  //const [selectIsC, setselectIsC] = useState([])

  function submitHandler(event) {
    event.preventDefault();
    let search;
    search = {location:locationFormRef.current.value }
    console.log(search);
    async function fetchData() {
      let res;
      try {

        res = await fetchAllSearches(search)
        console.log(res);
        const data = await res.json();
        setSearchList(data);
        if(data<1){return "no rus"}
      } catch (err) {
        console.log(err)
      }
      
    }

    fetchData()
  }

  async function fetchData2(select) {
  
  select={lat:select.lat,lon:select.lon,locationNameByUser:select.locationNameByUser}
     let res;
     console.log(select)
     try {
       res = await fetchWeather(select)
       console.log(res);
       const data = await res.json();

       setWeatherList(data);


   } catch (err) {
       console.log(err)
     }
   }
async function fetchData3(weather)
{
  weather={
    lat:weather.coord.lat,
    lon:weather.coord.lon,
    locationNameByUser:weather.locationNameByUser,
    country:weather.sys.country,
    state:weather.state
  }
  

    let res;
        console.log(weather);

  try{
    res=await postNewWeather(weather)
    console.log(res);

  }catch (err){
    console.log(err)
  }

}
    <div>
    {searchlistIsOpen && <SearchList closeSearchlistFunc={closeSearchlist} 
    setWeatherListFunc={setWeatherList}
     fetchFunc={fetchWeather} />}
      {WeatherListIsOpen && <WeatherList closeSearchlistFunc={closeSearchlist}
      
       />}</div>
      
  

   function setWeatherList(res_selects) {
     if (res_selects.message === undefined) {
       setFetchResultsTitle("weather:")
       setselects(res_selects);
     } else {
       setFetchResultsTitle("Error: " + res_selects.message);
       setselects([]);
     }
 }
  function setSearchList(res_searches) {
    if (res_searches.message === undefined) {
      setFetchResultsTitle(res_searches.length + "Result(s):")
      setSearches(res_searches);
    } else {
      setFetchResultsTitle("Error: " + res_searches.message);
      setSearches([]);
    }
}
  
  return (
    <div >
     
      <h2 className={styles.h2}>Enter city name</h2>
      <form onSubmit={submitHandler}>
        <div className={styles.formRow}>
          <input id="location" name="location" placeholder="(city)" ref={locationFormRef} required />
        </div>
        <button className={styles.button}onClick={searchHandler}>Search</button>
      </form>
      <div>
    </div>
      <div><h4 className={styles.resultsTitle}>{fetchResultsTitle}</h4>
        <div> {searchlistIsOpen&&<SearchList searches={searches}
        onclick={clickSelectHandler}></SearchList>}
            <div>{(weatheres)&&<WeatherList weather={weatheres}
         onclick={clickAddtoDashHandler}></ WeatherList> }
             {showModal && (
         <div style={{ position: "fixed", top: "50%", left: "50%" }}>
            <div
              style={{
                background: "white",
                padding: "20px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              <p>location saved successfully</p>
              <button onClick={() => setShowModal(false)}>OK</button>
            </div>
            </div>        
      )}
         
        </div>
        </div>
      </div>
      </div>
  )
}
export default SearchLocations