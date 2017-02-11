var express = require('express')
var logger = require('morgan');
var path = require('path')
var db = require('./db')
// to read forms when sending data
var bodyParser = require('body-parser');

var app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:something', function (req, res) {
  var foo = req.params.something;

  db.logRequest(foo, function( err, result) {
    if (err) return err
    console.log("5 - Result sent back to the client")
    console.log(result)
    // Parse json before injecting (body-parser) to the template via data
    res.render('index', {data: result})
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
