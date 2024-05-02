var wms_layers = [];

var format_Bharathapuzha_0 = new ol.format.GeoJSON();
var features_Bharathapuzha_0 = format_Bharathapuzha_0.readFeatures(json_Bharathapuzha_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_0.addFeatures(features_Bharathapuzha_0);
var lyr_Bharathapuzha_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_0, 
                style: style_Bharathapuzha_0,
                popuplayertitle: "Bharathapuzha",
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_0.png" /> Bharathapuzha'
            });
var format_CheckDam_1 = new ol.format.GeoJSON();
var features_CheckDam_1 = format_CheckDam_1.readFeatures(json_CheckDam_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckDam_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckDam_1.addFeatures(features_CheckDam_1);
var lyr_CheckDam_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CheckDam_1, 
                style: style_CheckDam_1,
                popuplayertitle: "CheckDam",
                interactive: true,
                title: '<img src="styles/legend/CheckDam_1.png" /> CheckDam'
            });
var format_Geology_2 = new ol.format.GeoJSON();
var features_Geology_2 = format_Geology_2.readFeatures(json_Geology_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_2.addFeatures(features_Geology_2);
var lyr_Geology_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_2, 
                style: style_Geology_2,
                popuplayertitle: "Geology",
                interactive: false,
                title: '<img src="styles/legend/Geology_2.png" /> Geology'
            });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                popuplayertitle: "Road",
                interactive: false,
                title: '<img src="styles/legend/Road_3.png" /> Road'
            });
var format_StreamBPA_4 = new ol.format.GeoJSON();
var features_StreamBPA_4 = format_StreamBPA_4.readFeatures(json_StreamBPA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StreamBPA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StreamBPA_4.addFeatures(features_StreamBPA_4);
var lyr_StreamBPA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StreamBPA_4, 
                style: style_StreamBPA_4,
                popuplayertitle: "StreamBPA",
                interactive: false,
                title: '<img src="styles/legend/StreamBPA_4.png" /> StreamBPA'
            });
var format_Waterbody_5 = new ol.format.GeoJSON();
var features_Waterbody_5 = format_Waterbody_5.readFeatures(json_Waterbody_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbody_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbody_5.addFeatures(features_Waterbody_5);
var lyr_Waterbody_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbody_5, 
                style: style_Waterbody_5,
                popuplayertitle: "Waterbody",
                interactive: false,
                title: '<img src="styles/legend/Waterbody_5.png" /> Waterbody'
            });

lyr_Bharathapuzha_0.setVisible(true);lyr_CheckDam_1.setVisible(true);lyr_Geology_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_StreamBPA_4.setVisible(true);lyr_Waterbody_5.setVisible(true);
var layersList = [lyr_Bharathapuzha_0,lyr_CheckDam_1,lyr_Geology_2,lyr_Road_3,lyr_StreamBPA_4,lyr_Waterbody_5];
lyr_Bharathapuzha_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_CheckDam_1.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', });
lyr_Geology_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_Road_3.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_StreamBPA_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_Waterbody_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Bharathapuzha_0.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_CheckDam_1.set('fieldImages', {'Name': '', 'name1': '', });
lyr_Geology_2.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_Road_3.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_StreamBPA_4.set('fieldImages', {'OBJECTID': '', 'ORDER1': '', 'Shape_Leng': '', 'LENGTH': '', });
lyr_Waterbody_5.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Bharathapuzha_0.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_CheckDam_1.set('fieldLabels', {'Name': 'no label', 'name1': 'no label', });
lyr_Geology_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_Road_3.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_StreamBPA_4.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_Waterbody_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Waterbody_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});