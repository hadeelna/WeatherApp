import styles from './WeatherItem.module.css'

const WeatherItem = (props) => {

let weather= props.weather;
console.log(weather)
let data=JSON.stringify(weather)
let jdata=JSON.parse(data)

  
//on click=post
  return (
    <div className={styles.c}>
    <div className={styles.LocationCol}><h3>location:{jdata.locationNameByUser}</h3></div>
    
   <div className={styles.DescreptionCol}><h3>Description:{jdata.weather[0].description}</h3></div>
<div>
   <div className={styles.TemperatureCol}>
   <h3>Temperature</h3>
    <div><h3>Min:{jdata.main.temp_min}°C</h3></div>
    <div><h3>Max:{jdata.main.temp_max}°C</h3></div></div>
   </div>
   <div className={styles.windCol}><h3> wind:{jdata.wind.speed} Metr/Sec</h3></div>
   <div className={styles.Addto}>
 
<button className={styles.Addto2}  onClick={()=> props.onclick (weather)}>  

  Add to dashboard</button>
 </div></div>
 

  )
}

export default WeatherItem