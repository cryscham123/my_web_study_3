import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'
import styles from './Header.module.css'

export default function Header() {
      return (
            <header className={styles.header}>
                  <Link to='/' className={styles.title}>TestTube</Link>
                  <SearchForm />
            </header>
      )
}
