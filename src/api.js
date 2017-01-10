import axios from 'axios'

const JsonBird = 'https://bird.ioliu.cn/v1/?url='
axios.defaults.baseURL = `${JsonBird}http://news-at.zhihu.com/api/4`

export default {
    getLatest() {
        const url = '/news/latest'
        let latest;
        axios.get(url)
             .then(res => {res.data})
             .then(data => {
               latest = data
             })
             .catch(err => console.log(err.message))
      return latest       
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
    data.type === 1 ? true : false
}
