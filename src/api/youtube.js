import axios from 'axios';

export default class Youtube {
      constructor(){
            this.httpClient = axios.create({
                  baseURL: 'https://youtube.googleapis.com/youtube/v3',
                  params: {
                        key: process.env.REACT_APP_YOUTUBE_API_KEY
                  }
            });
      }
      async getItems(mode,keyword) {
            switch(mode){
                  case 'search' :
                        return this.#getSearch(keyword);
                  case 'relate' :
                        return this.#getRelate(keyword);
                  default :
                        return this.#getDefault();
                  } 
      }
      async #getSearch(keyword) {
            return this.httpClient
            .get('search', {
                  params:{
                        part: 'snippet',
                        maxResults: '25',
                        q: keyword,
                  }
            })
            .then((res) => res.data.items)
            .then((items) => items.map(item => ({...item, id:item.id.videoId})));
      }
      async #getRelate(keyword) {
            return this.httpClient
            .get('search', {
                  params:{
                        part: 'snippet',
                        relatedToVideoId: keyword,
                        type: 'video'
                  }
            })
            .then((res) => res.data.items)
            .then((items) => items.map(item => ({...item, id:item.id.videoId})));
      }
      async #getDefault() {
            return this.httpClient
            .get('videos', {
                  params:{
                        part: 'snippet',
                        maxResults: '25',
                        chart: 'mostPopular',
                  }
            })
            .then((res) => res.data.items);
      }
}