var frisby = require('frisby');
frisby.create('Get NASA API with correct URL')
  .get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON({
    date: "2017-01-18",
    hdurl: "http://apod.nasa.gov/apod/image/1701/ISSLightShow_nasa_4928.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Space Station Vista: Planet and Galaxy",
    url: "http://apod.nasa.gov/apod/image/1701/ISSLightShow_nasa_960.jpg"
  })
  .expectJSONTypes({
    date: String,
    explanation: String,
    hdurl: String,
    media_type: String,
    service_version: String,
    title: String,
    url: String
  })
.toss();

frisby.create('Get NASA API with incorrect URL')
  .get('https://api.nasa.gov/planetary2/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
  .expectStatus(404)
.toss();