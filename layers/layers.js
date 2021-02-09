var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });
var format_LimDistrito_1 = new ol.format.GeoJSON();
var features_LimDistrito_1 = format_LimDistrito_1.readFeatures(json_LimDistrito_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimDistrito_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimDistrito_1.addFeatures(features_LimDistrito_1);
var lyr_LimDistrito_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimDistrito_1, 
                style: style_LimDistrito_1,
                interactive: true,
                title: '<img src="styles/legend/LimDistrito_1.png" /> Lim. Distrito'
            });
var format_LimProvincia_2 = new ol.format.GeoJSON();
var features_LimProvincia_2 = format_LimProvincia_2.readFeatures(json_LimProvincia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimProvincia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimProvincia_2.addFeatures(features_LimProvincia_2);
var lyr_LimProvincia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimProvincia_2, 
                style: style_LimProvincia_2,
                interactive: true,
                title: '<img src="styles/legend/LimProvincia_2.png" /> Lim. Provincia'
            });
var format_LimDepartamento_3 = new ol.format.GeoJSON();
var features_LimDepartamento_3 = format_LimDepartamento_3.readFeatures(json_LimDepartamento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimDepartamento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimDepartamento_3.addFeatures(features_LimDepartamento_3);
var lyr_LimDepartamento_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimDepartamento_3, 
                style: style_LimDepartamento_3,
                interactive: true,
                title: '<img src="styles/legend/LimDepartamento_3.png" /> Lim. Departamento'
            });
var format_IntervencionesFebrero_4 = new ol.format.GeoJSON();
var features_IntervencionesFebrero_4 = format_IntervencionesFebrero_4.readFeatures(json_IntervencionesFebrero_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntervencionesFebrero_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IntervencionesFebrero_4.addFeatures(features_IntervencionesFebrero_4);
var lyr_IntervencionesFebrero_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IntervencionesFebrero_4, 
                style: style_IntervencionesFebrero_4,
                interactive: true,
    title: 'Intervenciones Febrero<br />\
    <img src="styles/legend/IntervencionesFebrero_4_0.png" /> PIC<br />\
    <img src="styles/legend/IntervencionesFebrero_4_1.png" /> TRE<br />'
        });

lyr_BingMap_0.setVisible(true);lyr_LimDistrito_1.setVisible(true);lyr_LimProvincia_2.setVisible(true);lyr_LimDepartamento_3.setVisible(true);lyr_IntervencionesFebrero_4.setVisible(true);
var layersList = [lyr_BingMap_0,lyr_LimDistrito_1,lyr_LimProvincia_2,lyr_LimDepartamento_3,lyr_IntervencionesFebrero_4];
lyr_LimDistrito_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'IDDIST': 'IDDIST', 'IDPROV': 'IDPROV', 'IDDPTO': 'IDDPTO', 'NOMBDIST': 'NOMBDIST', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'DCTO': 'DCTO', 'LEY': 'LEY', 'FECHA': 'FECHA', 'NOM_CAP': 'NOM_CAP', 'AREA_KM²': 'AREA_KM²', 'FEC_ACT': 'FEC_ACT', 'FUENTE': 'FUENTE', 'conca': 'conca', 'tot_inst': 'tot_inst', 'u_normal': 'u_normal', 'u_priori': 'u_priori', 'obs_pic': 'obs_pic', 'CONTRATIST': 'CONTRATIST', 'MACRO': 'MACRO', 'prio_prov': 'prio_prov', 'prio_dist': 'prio_dist', 'prio_macro': 'prio_macro', 'prio_dep': 'prio_dep', 'asig_pic': 'asig_pic', 'no_asig': 'no_asig', });
lyr_LimProvincia_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBPROV': 'NOMBPROV', 'NOMBDEP': 'NOMBDEP', 'FEC_ACT': 'FEC_ACT', 'FUENTE': 'FUENTE', 'REVISADO': 'REVISADO', 'total_inst': 'total_inst', 'macro': 'macro', 'prio_prov': 'prio_prov', 'sumi_criti': 'sumi_criti', 'sumi_obs': 'sumi_obs', 'prio_dep': 'prio_dep', 'conca': 'conca', });
lyr_LimDepartamento_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBDEP': 'NOMBDEP', 'AREA_KM²': 'AREA_KM²', 'FEC_ACT': 'FEC_ACT', 'FUENTE': 'FUENTE', 'REVISADO': 'REVISADO', 'total_inst': 'total_inst', 'rer_1': 'rer_1', 'rer_2': 'rer_2', 'rer_3': 'rer_3', 'prio_dep': 'prio_dep', 'escala': 'escala', 'zona': 'zona', });
lyr_IntervencionesFebrero_4.set('fieldAliases', {'C_Codigo': 'C_Codigo', 'Contratist': 'Contratist', 'Contrati_1': 'Contrati_1', 'Evento': 'Evento', 'N_ID_Event': 'N_ID_Event', 'Paquete': 'Paquete', 'C_longitud': 'C_longitud', 'C_latitud': 'C_latitud', 'D_Fecha': 'D_Fecha', 'FechaTrans': 'FechaTrans', 'DPTO': 'DPTO', 'PROV': 'PROV', 'DIST': 'DIST', 'CCPP': 'CCPP', 'TITULAR': 'TITULAR', 'PERIODO': 'PERIODO', 'MES': 'MES', 'RER': 'RER', 'SERIEDCEB': 'SERIEDCEB', 'SERIEPANEL': 'SERIEPANEL', 'ExisteDCEB': 'ExisteDCEB', 'VersionDCE': 'VersionDCE', 'FirmwareDC': 'FirmwareDC', 'HardwareDC': 'HardwareDC', 'EquipoSini': 'EquipoSini', 'FallaUSB': 'FallaUSB', 'MedUsbData': 'MedUsbData', 'MedPanel': 'MedPanel', 'SeCambioDC': 'SeCambioDC', 'SeCambioSo': 'SeCambioSo', 'MedDCEB': 'MedDCEB', 'AdaptadorU': 'AdaptadorU', 'ExistePane': 'ExistePane', 'PanelQuema': 'PanelQuema', 'PanelRoto': 'PanelRoto', 'VocPanel': 'VocPanel', 'SeCambioDi': 'SeCambioDi', 'SeEntregoA': 'SeEntregoA', 'SEACTUAL_F': 'SEACTUAL_F', 'SECAMBIO_B': 'SECAMBIO_B', 'SECAMBIO_C': 'SECAMBIO_C', 'SECAMBIO_P': 'SECAMBIO_P', 'REQ_BATERI': 'REQ_BATERI', 'REQ_CONTRO': 'REQ_CONTRO', 'REQ_CIRCUI': 'REQ_CIRCUI', 'REQ_PANEL': 'REQ_PANEL', 'QUEDA_OPER': 'QUEDA_OPER', 'FOTOS': 'FOTOS', 'Distancia': 'Distancia', 'COMENTARIO': 'COMENTARIO', });
lyr_LimDistrito_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'IDDIST': 'TextEdit', 'IDPROV': 'TextEdit', 'IDDPTO': 'TextEdit', 'NOMBDIST': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'DCTO': 'TextEdit', 'LEY': 'TextEdit', 'FECHA': 'TextEdit', 'NOM_CAP': 'TextEdit', 'AREA_KM²': 'TextEdit', 'FEC_ACT': 'DateTime', 'FUENTE': 'TextEdit', 'conca': 'TextEdit', 'tot_inst': 'TextEdit', 'u_normal': 'TextEdit', 'u_priori': 'TextEdit', 'obs_pic': 'TextEdit', 'CONTRATIST': 'TextEdit', 'MACRO': 'TextEdit', 'prio_prov': 'TextEdit', 'prio_dist': 'TextEdit', 'prio_macro': 'TextEdit', 'prio_dep': 'TextEdit', 'asig_pic': 'TextEdit', 'no_asig': 'TextEdit', });
lyr_LimProvincia_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBPROV': 'TextEdit', 'NOMBDEP': 'TextEdit', 'FEC_ACT': 'DateTime', 'FUENTE': 'TextEdit', 'REVISADO': 'TextEdit', 'total_inst': 'TextEdit', 'macro': 'TextEdit', 'prio_prov': 'TextEdit', 'sumi_criti': 'TextEdit', 'sumi_obs': 'TextEdit', 'prio_dep': 'TextEdit', 'conca': 'TextEdit', });
lyr_LimDepartamento_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBDEP': 'TextEdit', 'AREA_KM²': 'TextEdit', 'FEC_ACT': 'DateTime', 'FUENTE': 'TextEdit', 'REVISADO': 'TextEdit', 'total_inst': 'TextEdit', 'rer_1': 'TextEdit', 'rer_2': 'TextEdit', 'rer_3': 'TextEdit', 'prio_dep': 'TextEdit', 'escala': 'TextEdit', 'zona': 'TextEdit', });
lyr_IntervencionesFebrero_4.set('fieldImages', {'C_Codigo': 'TextEdit', 'Contratist': 'TextEdit', 'Contrati_1': 'TextEdit', 'Evento': 'TextEdit', 'N_ID_Event': 'TextEdit', 'Paquete': 'TextEdit', 'C_longitud': 'TextEdit', 'C_latitud': 'TextEdit', 'D_Fecha': 'TextEdit', 'FechaTrans': 'TextEdit', 'DPTO': 'TextEdit', 'PROV': 'TextEdit', 'DIST': 'TextEdit', 'CCPP': 'TextEdit', 'TITULAR': 'TextEdit', 'PERIODO': 'TextEdit', 'MES': 'TextEdit', 'RER': 'TextEdit', 'SERIEDCEB': 'TextEdit', 'SERIEPANEL': 'TextEdit', 'ExisteDCEB': 'TextEdit', 'VersionDCE': 'TextEdit', 'FirmwareDC': 'TextEdit', 'HardwareDC': 'TextEdit', 'EquipoSini': 'TextEdit', 'FallaUSB': 'TextEdit', 'MedUsbData': 'TextEdit', 'MedPanel': 'TextEdit', 'SeCambioDC': 'TextEdit', 'SeCambioSo': 'TextEdit', 'MedDCEB': 'TextEdit', 'AdaptadorU': 'TextEdit', 'ExistePane': 'TextEdit', 'PanelQuema': 'TextEdit', 'PanelRoto': 'TextEdit', 'VocPanel': 'TextEdit', 'SeCambioDi': 'TextEdit', 'SeEntregoA': 'TextEdit', 'SEACTUAL_F': 'TextEdit', 'SECAMBIO_B': 'TextEdit', 'SECAMBIO_C': 'TextEdit', 'SECAMBIO_P': 'TextEdit', 'REQ_BATERI': 'TextEdit', 'REQ_CONTRO': 'TextEdit', 'REQ_CIRCUI': 'TextEdit', 'REQ_PANEL': 'TextEdit', 'QUEDA_OPER': 'TextEdit', 'FOTOS': 'TextEdit', 'Distancia': 'TextEdit', 'COMENTARIO': 'TextEdit', });
lyr_LimDistrito_1.set('fieldLabels', {'OBJECTID': 'no label', 'IDDIST': 'no label', 'IDPROV': 'no label', 'IDDPTO': 'no label', 'NOMBDIST': 'no label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'DCTO': 'no label', 'LEY': 'no label', 'FECHA': 'no label', 'NOM_CAP': 'no label', 'AREA_KM²': 'no label', 'FEC_ACT': 'no label', 'FUENTE': 'no label', 'conca': 'no label', 'tot_inst': 'no label', 'u_normal': 'no label', 'u_priori': 'no label', 'obs_pic': 'no label', 'CONTRATIST': 'no label', 'MACRO': 'no label', 'prio_prov': 'no label', 'prio_dist': 'no label', 'prio_macro': 'no label', 'prio_dep': 'no label', 'asig_pic': 'no label', 'no_asig': 'no label', });
lyr_LimProvincia_2.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBPROV': 'no label', 'NOMBDEP': 'no label', 'FEC_ACT': 'no label', 'FUENTE': 'no label', 'REVISADO': 'no label', 'total_inst': 'no label', 'macro': 'no label', 'prio_prov': 'no label', 'sumi_criti': 'no label', 'sumi_obs': 'no label', 'prio_dep': 'no label', 'conca': 'no label', });
lyr_LimDepartamento_3.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBDEP': 'no label', 'AREA_KM²': 'no label', 'FEC_ACT': 'no label', 'FUENTE': 'no label', 'REVISADO': 'no label', 'total_inst': 'no label', 'rer_1': 'no label', 'rer_2': 'no label', 'rer_3': 'no label', 'prio_dep': 'no label', 'escala': 'no label', 'zona': 'no label', });
lyr_IntervencionesFebrero_4.set('fieldLabels', {'C_Codigo': 'inline label', 'Contratist': 'no label', 'Contrati_1': 'no label', 'Evento': 'no label', 'N_ID_Event': 'no label', 'Paquete': 'no label', 'C_longitud': 'no label', 'C_latitud': 'no label', 'D_Fecha': 'no label', 'FechaTrans': 'no label', 'DPTO': 'no label', 'PROV': 'no label', 'DIST': 'no label', 'CCPP': 'no label', 'TITULAR': 'no label', 'PERIODO': 'no label', 'MES': 'no label', 'RER': 'no label', 'SERIEDCEB': 'no label', 'SERIEPANEL': 'no label', 'ExisteDCEB': 'no label', 'VersionDCE': 'no label', 'FirmwareDC': 'no label', 'HardwareDC': 'no label', 'EquipoSini': 'no label', 'FallaUSB': 'no label', 'MedUsbData': 'no label', 'MedPanel': 'no label', 'SeCambioDC': 'no label', 'SeCambioSo': 'no label', 'MedDCEB': 'no label', 'AdaptadorU': 'no label', 'ExistePane': 'no label', 'PanelQuema': 'no label', 'PanelRoto': 'no label', 'VocPanel': 'no label', 'SeCambioDi': 'no label', 'SeEntregoA': 'no label', 'SEACTUAL_F': 'no label', 'SECAMBIO_B': 'no label', 'SECAMBIO_C': 'no label', 'SECAMBIO_P': 'header label', 'REQ_BATERI': 'no label', 'REQ_CONTRO': 'no label', 'REQ_CIRCUI': 'no label', 'REQ_PANEL': 'no label', 'QUEDA_OPER': 'no label', 'FOTOS': 'no label', 'Distancia': 'no label', 'COMENTARIO': 'no label', });
lyr_IntervencionesFebrero_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});