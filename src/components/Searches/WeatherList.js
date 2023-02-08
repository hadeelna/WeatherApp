import React from 'react'
import WeatherItem from './WeatherItem';
import styles from "./weatherlist.moudle.css";


export const WeatherList = (props) => {
    return (
      <ul className={styles.WeatherList}>
      <WeatherItem weather={props.weather}
      onclick={props.onclick}
      ></WeatherItem>
  </ul>  
  )
}
export default WeatherList