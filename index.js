const express = require('express')
const app = express()
const articles = require('./articles.json')
console.log(articles)

app.listen(3000, () => {
    console.log('Server started')
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {title: 'Homepage'})
})
app.get('/articles', (req, res) => {
    res.render('articles', {title: 'Articles', articles: articles})
})