import React from 'react'
import { useParams } from 'react-router-dom'
import Videos from '../components/Videos';

export default function Search() {
  const { query } = useParams();
  return (
      <Videos mode="search" target={query} />
    )
}
