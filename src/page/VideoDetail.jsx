import React from 'react'
import { useParams } from 'react-router-dom'
import Videos from '../components/Videos';

export default function VideoDetail() {
      const {videoId} = useParams();
      return (
            <Videos mode="relate" target={videoId} />
      )
}
