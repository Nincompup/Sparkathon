import React from 'react'
import Header from '../Header/Header'
import NewFeature from '../NewFeature/NewFeature'
import styles from './homepage.module.css'
import vedio from './backvideo.mp4'
const Homepage = () => {
  return (
    <div className={styles.mainHomeDiv}>
        <video src={vedio} className={styles.video} autoPlay loop muted/>
        <div className={styles.content}>
        <Header/>
        <NewFeature/>
        </div>
    </div>
  )
}

export default Homepage