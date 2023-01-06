import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Video.module.css'

export default function Video({id,title,thumbnail,channel}) {
  return (
    <Link to={`video/${id}`} className={styles.video}>
      <img src={thumbnail.url} alt="tumbnail" className={styles.img}/>
      <span className={styles.title}>{title}</span>
      <p>{channel}</p>
    </Link>
  )
}
