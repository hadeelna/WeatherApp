import React from 'react'
import styles from "./SearchItem.module.css";
import Card from'../ui/Card'

export const SearchItem = (props) => {
    let search =props.search;
  return (
     
    <Card>
     
  <div className={styles.SearchItem}>
         <div className={styles.NameCol}><h4>{search.name}</h4></div>
        <div className={styles.CountryCol}><h4>{search.country}</h4> </div>
        <div className={styles.stateCol}><h4>{search.state}</h4> </div>  
        <div  className={styles.Addto}>
        <button onClick={()=> props.onclick(search)}>select</button>
       </div>
    
        </div>
      </Card>
      
  )}
  export default SearchItem;  
      