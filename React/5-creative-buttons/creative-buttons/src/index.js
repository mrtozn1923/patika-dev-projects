import React from 'react'
import styles from './styles.module.css'

export const Button = ({ text,type}) => {
  if(type==="primary"){
     return <button className={styles.primary}>{text}</button>
  }else if(type==="dashed"){
     return <button className={styles.dashed}>{text}</button>
  }else if(type==="text"){
    return <button className={styles.text}>{text}</button>
  }else if(type==="link"){
    return <button className={styles.link}>{text}</button>
  }
  return <button className={styles.default}>{text}</button>
}
