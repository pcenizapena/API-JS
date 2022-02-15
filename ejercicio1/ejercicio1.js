require(["esri/map", "esri/geometry/Extent", "dojo/domReady!"], function (Map, Extent) {
    var peninsula =  new Extent(
        {
            xmin: -2290762.5378059917,
            ymin: 4043672.7247320134,
            xmax: 1466270.2764659931,
            ymax: 5809673.826232256,
            spatialReference: { 
                wkid: 102100 
            }
        })
    var myMap = new Map('divMap', {
        basemap: 'satellite',
        // center: [-4.68, 40.65],
        // zoom: 12,   
        extent: peninsula
       
    });
});
