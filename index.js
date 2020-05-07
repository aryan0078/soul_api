const youtube = require('scrape-youtube').default;
 const youtubedl = require('youtube-dl')
youtube.search('Short Change Hero').then(results => {
   // console.log()
    url(results[0].link)
});
function url(x){
const url = x
// Optional arguments passed to youtube-dl.

 
youtubedl.getInfo(url, function(err, info) {
  if (err) throw err
 
  console.log('id:', info.id)
  console.log('title:', info.title)
  console.log('url:', info.url)
  console.log('thumbnail:', info.thumbnail)
  console.log('description:', info.description)
  console.log('filename:', info._filename)
  console.log('format id:', info.format_id)
})
}