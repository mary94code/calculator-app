import React from 'react'
import styles from "./Wrapper.module.css"
export default function Wrapper(props) {
    
  return (
    <div className={styles.wrapper}>
        <div>{props.children}</div>
    </div>
  )
}
