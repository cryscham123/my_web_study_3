import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'
import styles from './Header.module.css'
import HeaderBtn from './HeaderBtn'

export default function Header() {
      return (
            <header className={styles.header}>
                  <Link to='/' className={styles.title}>TestTube</Link>
                  <HeaderBtn />
                  <SearchForm />
            </header>
      )
}
