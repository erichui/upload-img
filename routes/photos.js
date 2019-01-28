const photos = [
  {
    name: 'node logo',
    path: 'http://nodejs.org/images/logos/nodejs-green.png'
  }, {
    name: 'speaking',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
  }
]

module.exports = (req, res) => {
  res.render('photos', {
    title: 'photos',
    photos: photos
  })
}
,
