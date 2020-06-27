var path = require("path")

function htmlRoutes (app) {
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"))
})
app.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

app.get('/stats', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
})
}


module.exports = htmlRoutes 