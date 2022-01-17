"use strict"

var express = require('express')
var app = express()

app.listen(3000)
console.log('Node.js Express server is running on port 3000')

app.get('/data/2.5/weather',get_weather)

function get_weather(request,response){
    response.json({"coord":{"lon":-123.262,"lat":44.5646},
	"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],
	"base":"stations","main":{"temp":281.2,"feels_like":280.39,"temp_min":280.06,"temp_max":286.67,"pressure":1020,"humidity":72,"sea_level":1020,"grnd_level":1012},
	"visibility":10000,"wind":{"speed":1.67,"deg":24,"gust":2.65},
	"clouds":{"all":44},"dt":1642373641,"sys":{"type":1,"id":5858,"country":"US","sunrise":1642347934,
	"sunset":1642381185},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})

    }