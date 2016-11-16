'use strict';

const express = require('express'),
app = express(),
port = process.env.PORT || 8080;


app.get('/', function(req, res) {
  res.send({"unix": null, "natural": null});
});

app.get('/:date', function (req, res) {
  
  var date = isNaN(Number(req.params.date)) ? 
    new Date(req.params.date) : 
    new Date(Number(req.params.date)*1000);

  res.send({ "unix" : date.getTime()/1000, "natural" : formatDateString(date)});
});

app.listen(port, function () {
  console.log('Timestamp app listening on port ' + port + '.');
});

function formatDateString(date) {
  var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
  ];
  
  return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

