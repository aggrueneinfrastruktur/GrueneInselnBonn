var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([7.098207, 50.737431]), // Coordinates of Bonn
      zoom: 12, //Initial Zoom Level
      minZoom: 12,
      extent: [776371, 6554949, 804680, 6581724]
    })
  });
var Friedrichstrasse = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.103460,50.736930])
    ),  // Cordinates of Friedrichstrasse
});

var Kreuzkirche = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.101797,50.732170])
    ),  // Cordinates of Kreuzkirche
});

var BMUB = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.138825,50.706069])
    ),  // Cordinates of BMUB
});

var Altevhs = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.098309,50.738174])
    ),  // Cordinates of Alte VHS
});

var Kettlerschule = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.048695,50.737017])
    ),  // Cordinates of Kettlerschule
});

var Liebfrauen = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.101874,50.727874])
    ),  // Cordinates of Liebfrauenschule
});

var Waldorf = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.055783,50.746469])
    ),  // Cordinates of Waldorfschule Tannenbusch
});

var Stadtteil = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.043317,50.739371])
    ),  // Cordinates of Stadtteilverein Dransdorf
});

var aiz = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.072093,50.677179])
    ),  // Cordinates of AIZ
});

var kgsholzlar = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.179867,50.741953])
    ),  // Cordinates of Katholische Grundschule Holzlar
});

var Makerspace = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.144985,50.698124])
    ),  // Cordinates of Makerspace
});

var Koelnstrasse = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.091164,50.743192])
    ),  // Cordinates of Kölnstraße
});

var Mariekahle= new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.095793,50.745945])
    ),  // Cordinates of Marie Kahle Schule
});

var Klufterplatz = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.126768,50.697971])
    ),  // Cordinates of Klufterplatz
});

var Vielinbusch = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.044783,50.750191])
    ),  // Cordinates of Vielinbusch
});

var Jugendzentrum = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.073960,50.758411])
    ),  // Cordinates of Jugendzentrum Auerberg
});

var Frankenbad = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.089238,50.739091])
    ),  // Cordinates of Frankenbad
});

var Elisabeth = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.148322,50.695355])
    ),  // Cordinates of Elisabeth Selbert Schule
});

var Mehrgen = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.152026,50.693969])
    ),  // Cordinates of Mehrgenerationen Projekt GAZ
});

var Berufsk = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([7.058757,50.720485])
    ),  // Cordinates of Berufskolleg Duisdorf
});

var vectorSource = new ol.source.Vector({
    features: [Friedrichstrasse, Kreuzkirche, BMUB, Altevhs, Kettlerschule, Liebfrauen, Klufterplatz, Waldorf, Stadtteil, aiz, kgsholzlar, Makerspace, Koelnstrasse, Mariekahle, Vielinbusch, Jugendzentrum, Frankenbad, Elisabeth, Mehrgen, Berufsk], 
});

var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});

markerVectorLayer.setStyle(new ol.style.Style({
    image: new ol.style.Icon(({
        color: '#3ADF00',
        crossOrigin: 'anonymous',
        src: "dot.png" 
    }))
}));

map.addLayer(markerVectorLayer);
