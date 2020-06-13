const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first')
  next()
})

app.use((req, res, next) => {
  console.log('second')
  next()
})

app.use('/users', (req, res, next) => {
  res.send('<h1>users page</h1>')
})

app.use('/', (req, res, next) => {
  res.send('<h1>root page</h1>')
})

app.listen(3000);