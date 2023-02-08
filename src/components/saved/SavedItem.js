import React from 'react'
import Card from '../ui/Card'
import styles from './SavedItem.module.css'
const SavedItem = (props) => {
let weather= props.save;
console.log(weather)
let data=JSON.stringify(weather)
let jdata=JSON.parse(data)
//on click=post
  return ( 
    <div>


    <div className={styles.savedItem}>
    <div className={styles.main}><h5>{jdata.main.temp}°C</h5></div>

    <div className={styles.LocationCol}>{jdata.locationNameByUser}</div>
   <div className={styles.DescreptionCol}>{jdata.weather[0].description}</div>
<div>
   <div className={styles.TemperatureCol}>

    <div>Min:{jdata.main.temp_min}°C</div>
    <div>Max:{jdata.main.temp_max}°C</div></div>
   </div>
   <div className={styles.windCol}> {jdata.wind.speed} Metr/Sec</div>
   
 </div> 
 </div>

  )
}

export default SavedItem