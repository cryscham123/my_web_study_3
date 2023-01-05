import React from 'react'
import { useParams } from 'react-router-dom'

export default function Search() {
  const { query } = useParams();

  return (
      <p>{query}</p>
    )
}
