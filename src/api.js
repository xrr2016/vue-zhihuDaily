import axios from 'axios'

axios.defaults.baseURL = 'http://news-at.zhihu.com/api/4'

export default {
  getLatest(){
    const url = '/news/latest'
    axios.get(url)
        .then( res =>{
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
  },
  getSingleNews(newsId){
        
  }
}
