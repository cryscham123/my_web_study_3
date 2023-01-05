import React, { useEffect, useState } from 'react'
import Video from './Video'

export default function Videos({ mode, target}) {
      const [videos,setVideos] = useState([]);
      useEffect(() => {
            fetch(`data/${mode}.json`)
            .then((res) => res.json())
            .then((data) => {
                  setVideos(data.items);
            });
      },[mode])
      return (
            <>
                  {videos && videos.map(item => 
                  <Video 
                        key={item.id} 
                        id={item.id}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.default.url}
                        channel={item.snippet.channelTitle}
                  />)}      
            </>
      )
}
