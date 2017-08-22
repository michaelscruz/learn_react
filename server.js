var express = require('express');

var app = express();
const PORT = process.env.PORT || 4000;
app.use((request, response, next) => {
  if(request.headers["x-forwarded-proto"] === "https") {
    response.redirect("http://" + request.hostname + request.url);
  } else {
    next();
  }
})
app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("Server is working, yo!");
});
