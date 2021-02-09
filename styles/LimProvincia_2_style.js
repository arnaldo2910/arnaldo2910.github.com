var size = 0;
var placement = 'point';

var style_LimProvincia_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#278391";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NOMBPROV") !== null) {
        labelText = String(feature.get("NOMBPROV"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,169,217,0.807843137254902)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(145,82,45,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
