const express = require('express');
const router = express.Router();
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')
const photos = [
  {
    name: 'node logo',
    path: 'http://nodejs.org/images/logos/nodejs-green.png'
  }, {
    name: 'speaking',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
  }
]

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('photos', {
    title: 'photos',
    photos: photos
  })
})

router.get('/upload', (req, res, next) => {
  res.render('photos/upload', {
    title: 'upload img'
  })
})

router.post('/upload', (req, res, next) => {
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    if(err) {
      res.redirect('/')
    } else {
      console.log(router.get('photos'))
      // console.log(fields)
      // console.log(files)
      const { image } = files
      const { name } = fields
      // const path = path.join()
      console.log(image, name)
    }
  })
})

module.exports = router
