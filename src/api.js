import axios from 'axios'

axios.defaults.baseURL = 'http://news-at.zhihu.com/api/4'

export default {
    getLatest() {
        const url = '/news/latest'
        axios.get(url)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    },
    getSingleNews(newsId) {
        const url = `/news/${newsId}`
        axios.get(url)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}

function isOrigin(data) {
    if(data.type === 0){
      return true
    }else{
      return false
    }
}
