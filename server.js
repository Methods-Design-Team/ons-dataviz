const express = require('express');
let path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use('src/assets', express.static(path.join(__dirname + 'src/assets/')));

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
