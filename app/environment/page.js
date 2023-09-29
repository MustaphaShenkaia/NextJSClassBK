"use client"
import React from 'react'
import styles from './page.module.css'

const page = () => {

    console.log(process.env.API_KEY); // SSR ile 
    // use client ile kullanılacaksa next.config.js altında tanımlanır. 
    // client side işlemler genelde next.config.js içinde tanımlanır. 

  return (
    <>
      <div className={styles.container}>Env</div>
      <div className={styles["container-one"]}>Env</div>
      <div className={`${styles["container-one"]} ${styles["container"]}`}>Env</div>
    </>
  )
}

export default page
// Bootstrap, Thailwaid gibi yapılar import edilebilir. 