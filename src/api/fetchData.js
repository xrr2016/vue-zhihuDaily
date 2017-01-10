const JsonBird = 'https://bird.ioliu.cn/v1/?url='
const baseURL = `http://news-at.zhihu.com/api/4`
const latest = `${JsonBird}${baseURL}/news/latest`

const headers = new Headers({
    "Content-Type": "application/json"
})

const init = {
    method: 'get',
    mode: 'cors',
    headers,
    cache: 'default'
}

const request = new Request(latest, init)

function getStories() {
  let stories = {}
    fetch(request)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                console.log('Network error')
            }
        })
        .then(json => {
          Object.assign(stories,json)
        })
        .catch(err => console.log(err.message))
   console.log(stories)
   return stories
}

export  {
    getStories
}