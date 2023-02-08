import React from 'react'
import styles from './homepage.module.css';

const homepage = () => {
  return (
  <div>
    <h1 className={styles.h1}>Wather Dashboard</h1>
    <div className={styles.search}>
    <h2 className={styles.p5}>search and Add Locations</h2>
    <a href="/SearchLocations"><button className={styles.btnStack} >search</button></a>
      </div>
<div className={styles.display}>
       <h2 className={styles.p5}>display Dashborad  Locations</h2>
        <a href="/Savedlocations"><button className={styles.btnStack} >display</button></a>
     </div>

  </div>
  )
}

export default homepage