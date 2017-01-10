import axios from 'axios'

const JsonBird = 'https://bird.ioliu.cn/v1/?url='
axios.defaults.baseURL = `${JsonBird}http://news-at.zhihu.com/api/4`

const config = {
  headers: {
    'Content-Type': 'application/json'
  },
  transformResponse: [function (data) {
    return data
  }]
}

function getLatest(){
    const url = '/news/latest'
    axios.get(url,config)
        .then(res => res.data)
        .catch(err => console.log(err.message))
}

function saveData(data){
  let result
  result = data
  return result
}

function isOrigin(data) {
    data.type === 1 ? true : false
}

export {
  getLatest
}
