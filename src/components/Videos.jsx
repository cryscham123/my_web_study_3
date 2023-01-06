import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Youtube from '../api/youtube';
import Video from './Video'

export default function Videos({ mode, target}) {
      const {isLoading,error,data:videos} = useQuery(['videos', target || ''], () => {
            const youtube = new Youtube();
            return youtube.getItems(mode,target);
      },{
            staleTime: 5000,
            refetchOnWindowFocus: false
      })
      return (
            <>
                  {isLoading 
                  ? 'loading...' 
                  : error
                  ? 'error'
                  : videos.map(item => 
                  <Video 
                        key={item.id} 
                        id={item.id}
                        title={item.snippet.title}
                        thumbnail={item.snippet.thumbnails.high}
                        channel={item.snippet.channelTitle}
                  />)}      
            </>
      )
}
