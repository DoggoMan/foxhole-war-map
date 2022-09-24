import { mapLayers, allLabels } from './MapLayers.js';
import { mapLegend } from './MapLegend.js';

import { generateRegions } from './MapRegions.js';
import { generateMapItems } from './MapItems.js';

// Map
const map = L.map("map", {
    // Map State Options
    crs: L.CRS.Simple,
    center: [-128, 128],
    zoom: 1.5,
    minZoom: 1,
    maxZoom: 5,
    zoomSnap: 0.5,
    zoomDelta: 0.5,
    maxBounds: [[-256,-50],[0,306]],
    maxBoundsViscosity: 1.0,

    // Layer Groups
    layers: [
        mapLayers.OriginalMapTiles,

        mapLayers.RegionNames,
        mapLayers.RegionBorders,
        mapLayers.TownNames,
        mapLayers.LocationNames,

        mapLayers.TownBases,
        mapLayers.RelicBases,
        mapLayers.Keeps,
        mapLayers.Safehouses,

        mapLayers.ObservationTowers,
        mapLayers.RocketSites,
        mapLayers.CoastalGuns,
        
        mapLayers.Hospitals,
        mapLayers.Factories,
        mapLayers.VehicleFactories,
        mapLayers.StorageDepot,
        mapLayers.Refineries,
        mapLayers.Shipyards,
        mapLayers.ConstructionYards,
        mapLayers.MassProductionFactories,
        mapLayers.Seaports,
        mapLayers.EngineeringCenters,
        
        mapLayers.SalvageFields,
        mapLayers.ComponentFields,
        mapLayers.SulfurFields,
        mapLayers.CoalFields,
        mapLayers.OilFields,
        
        mapLayers.SalvageMines,
        mapLayers.ComponentMines,
        mapLayers.SulfurMines,
    ]
});

// Panes
map.createPane('basesPane').style.zIndex = 609;
map.createPane('structuresPane').style.zIndex = 608;
map.createPane('resourcesPane').style.zIndex = 607;
map.createPane('locationLabelsPane').style.zIndex = 600;
map.createPane('regionLabelsPane').style.zIndex = 620;
map.createPane('regionBordersPane').style.zIndex = 400;
map.createPane('backgroundPane').style.zIndex = 100;

// Regions
generateRegions();

// Map Items
generateMapItems();

// Map Legend
mapLegend().addTo(map);

// Map Search
function localData(query, callResponse) {
  callResponse(allLabels);
  return {	//called to stop previous requests on map move
			abort: function() {
				console.log('aborted request:'+ query);
			}
	};
}

var controlSearch = new L.Control.Search({
  position: "topright",
  //layer: allLabels,
  sourceData: localData,
  initial: false,
  zoom: 12,
  marker: false,
})
map.addControl(controlSearch);
