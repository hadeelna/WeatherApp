import React from 'react'
import SearchItem from './SearchItem';
import styles from "./SearchList.module.css";


export const SearchList = (props) => {
    return (
  
      <div className={styles.searchList}>   <div className={styles.title}>
      <div className={styles.name}><h3> name</h3></div>
      <div className={styles.country}><h3> country</h3></div>
      <div className={styles.state}><h3>state</h3></div>
      <div className={styles.state2}><h3>click select to view weather information</h3></div>

    </div>
      {props.searches.map((search)=>
       <li key={search.lon}> 
      <SearchItem search={search}
      onclick={props.onclick}
      ></SearchItem> </li>)}
  </div>  
  )
}
export default SearchList