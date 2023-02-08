import React from 'react'
import styles from "./savedList.module.css";
import SavedItem from './SavedItem';

export const SavedList = (props) => {
  return (
    <div>
    <div className={styles.title}>
    <div className={styles.location}> location</div>
    <div className={styles.Descreption}> Descreption</div>
    <div className={styles.Temp}> Temp</div>
    <div className={styles.wind}> wind</div>
  </div>
    <ul className={styles.savedList}>
      {props.saves.map((save)=>
       <li key={save.locationNameByUser}> 

      <SavedItem save={save}
      ></SavedItem> </li>)}
  </ul> 
  </div> 
  )}
export default SavedList;