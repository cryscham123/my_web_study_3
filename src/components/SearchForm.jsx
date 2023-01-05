import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css'

export default function SearchForm() {
      const [text,setText] = useState('');
      const navigate = useNavigate();
      const handleSubmit = (e) => {
            e.preventDefault();
            navigate(`/search/${text}`);
            setText("");
      }
      return (
            <form onSubmit={handleSubmit} className={styles.form}>
                  <input 
                        type="text"
                        placeholder='input your message'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className={styles.search}
                  />
                  <button className={styles.button}>submit</button>
            </form>
      )
}
