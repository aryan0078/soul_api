const youtube = require('scrape-youtube').default;
 const youtubedl = require('youtube-dl')



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
 youtube.search('lean on').then(results => {
	
res.send(results[0].id)
});
})

app.listen(port, () => console.log(`Soul Api on:${port}`))