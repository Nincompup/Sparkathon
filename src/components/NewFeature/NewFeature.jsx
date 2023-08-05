import React from 'react'
import styles from './newFeature.module.css'
import imgg from './front.png'

const NewFeature = () => {
  return (

    <div className="row">

<div className={`${styles.outerDiv} col-sm-12 col-md-12 col-lg-5`}>
    
    <h1 className={styles.attractText}>Unlock a World of Endless Shopping Delights - Explore, Discover, and Indulge!</h1>
    <a className={styles.aa} href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Try Our New Feature
    </a>
  </div>
      <div className={`col-sm-12 col-md-12 col-lg-7 ${styles.rightside}`}>
       <img src={imgg} alt="" />
       {/* hii */}
      </div>
        
   
  </div>
 
  )
}

export default NewFeature