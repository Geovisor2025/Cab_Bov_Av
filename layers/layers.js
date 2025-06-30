var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_CantidaddeCabezasdeBobino_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cantidad de Cabezas de Bobino<br />\
    <img src="styles/legend/CantidaddeCabezasdeBobino_1_0.png" /> 2,3476<br />\
    <img src="styles/legend/CantidaddeCabezasdeBobino_1_1.png" /> 117,5804<br />\
    <img src="styles/legend/CantidaddeCabezasdeBobino_1_2.png" /> 194,4023<br />\
    <img src="styles/legend/CantidaddeCabezasdeBobino_1_3.png" /> 348,0460<br />\
    <img src="styles/legend/CantidaddeCabezasdeBobino_1_4.png" /> 9796,9852<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CantidaddeCabezasdeBobino_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7459045.068944, -2117509.271971, -7150507.951970, -1778927.614556]
        })
    });
var lyr_CantidaddeCabezasdeAvesdeCorral_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cantidad de Cabezas de Aves de Corral<br />\
    <img src="styles/legend/CantidaddeCabezasdeAvesdeCorral_2_0.png" /> 7,9812<br />\
    <img src="styles/legend/CantidaddeCabezasdeAvesdeCorral_2_1.png" /> 33766,8990<br />\
    <img src="styles/legend/CantidaddeCabezasdeAvesdeCorral_2_2.png" /> 101284,7346<br />\
    <img src="styles/legend/CantidaddeCabezasdeAvesdeCorral_2_3.png" /> 286958,7824<br />\
    <img src="styles/legend/CantidaddeCabezasdeAvesdeCorral_2_4.png" /> 4304270,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CantidaddeCabezasdeAvesdeCorral_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7459045.068944, -2117509.271971, -7150507.951970, -1778927.614556]
        })
    });
var format_Municipios_3 = new ol.format.GeoJSON();
var features_Municipios_3 = format_Municipios_3.readFeatures(json_Municipios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_3.addFeatures(features_Municipios_3);
var lyr_Municipios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_3, 
                style: style_Municipios_3,
                popuplayertitle: 'Municipios',
                interactive: true,
                title: '<img src="styles/legend/Municipios_3.png" /> Municipios'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CantidaddeCabezasdeBobino_1.setVisible(false);lyr_CantidaddeCabezasdeAvesdeCorral_2.setVisible(false);lyr_Municipios_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CantidaddeCabezasdeBobino_1,lyr_CantidaddeCabezasdeAvesdeCorral_2,lyr_Municipios_3];
lyr_Municipios_3.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MUNICIPIO': 'MUNICIPIO', });
lyr_Municipios_3.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_Municipios_3.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', });
lyr_Municipios_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});