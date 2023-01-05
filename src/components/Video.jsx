import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Video.module.css'

export default function Video({id,title,thumbnail,channel}) {
  return (
    <Link to={`video/${id}`} className={styles.video}>
      <img src={thumbnail} alt="tumbnail" className={styles.img}/>
      <p className={styles.title}>{title}</p>
      <p>{channel}</p>
    </Link>
  )
}
