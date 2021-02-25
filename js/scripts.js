mapboxgl.accessToken = 'pk.eyJ1Ijoid3MxNDIxIiwiYSI6ImNrbGtjYmdybDBldzAyb2tiaWM4bjVwMXYifQ.W4CPaaK8V1gjMpAK-8WVpA';

// create the basemap settings
var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/dark-v10', // style URL
  center: [-73.89, 40.756], // starting position [lng, lat]
  zoom: 10 // starting zoom
});

// add navigation control
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


// set up dummy data

/* const dummyData = [
  {
    name: 'Yankee Stadium',
    point: [-73.926954, 40.829491]
  },
  {
    name: 'Citi Field',
    point: [-73.846037, 40.756567]
  }
]

dummyData.forEach(function(arena) {
  console.log(arena.name, arena.point)

new mapboxgl.Marker()
  .setLngLat(arena.point)
  .setPopup(new mapboxgl.Popup().setHTML(`<h5>${arena.name}</h5>`))
  .addTo(map);
})
*/


// add arena data to the map

$.getJSON('./data/arenas.json', function(arenas) {
  console.log(arenas)

  arenas.forEach(function(arena) {
    console.log(arena.Arena, arena.Capacity)

    var html = `
      <h3>${arena.Arena}</h3>
      <div>Sports played: ${arena.Sport}</div>
      <div>Capacity: ${arena.Capacity}</div>
    `

    var color = 'ALiceBlue'

    if (arena.Sport === 'MLB') {
      color = 'Blue'
    }

    if (arena.Sport === 'NFL') {
      color = 'Green'
    }

    if (arena.Sport === 'NBA, NHL') {
      color = 'Red'
    }

    if (arena.Sport === 'NHL') {
      color = 'Yellow'
    }

    if (arena.Sport === 'MLS') {
      color = 'HotPink'
    }

    new mapboxgl.Marker({
      color: color
    })
    .setLngLat([arena.longitude, arena.latitude])
    .setPopup(new mapboxgl.Popup().setHTML(html))
    .addTo(map);

  })
})
