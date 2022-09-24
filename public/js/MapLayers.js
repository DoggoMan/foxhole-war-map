const opts = { attribution: '<a href="https://github.com/pogobanane/foxhole-war-map">warmap github</a>' };

export const mapLayers = {
  OriginalMapTiles: new L.tileLayer("https://raw.githubusercontent.com/Kastow/Foxhole-Map-Tiles/master/Tiles/{z}/{z}_{x}_{y}.png", opts),
    SatelliteMapTiles: new L.tileLayer("https://raw.githubusercontent.com/Kastow/Foxhole-Map-Tiles/master/Sat%20Tiles/{z}/{z}_{x}_{y}.png", opts),

    RegionNames: new L.LayerGroup(),
    RegionBorders: new L.LayerGroup(),
 
    TownBases: new L.LayerGroup(),
    RelicBases: new L.LayerGroup(),
    Keeps: new L.LayerGroup(),
    Safehouses: new L.LayerGroup(),
    
    ObservationTowers: new L.LayerGroup(),
    RocketSites: new L.LayerGroup(),
    CoastalGuns: new L.LayerGroup(),
    
    Hospitals: new L.LayerGroup(),
    Factories: new L.LayerGroup(),
    VehicleFactories: new L.LayerGroup(),
    StorageDepot: new L.LayerGroup(),
    Refineries: new L.LayerGroup(),
    Shipyards: new L.LayerGroup(),
    ConstructionYards: new L.LayerGroup(),
    MassProductionFactories: new L.LayerGroup(),
    Seaports: new L.LayerGroup(),
    EngineeringCenters: new L.LayerGroup(),
    
    SalvageFields: new L.LayerGroup(),
    ComponentFields: new L.LayerGroup(),
    SulfurFields: new L.LayerGroup(),
    CoalFields: new L.LayerGroup(),
    OilFields: new L.LayerGroup(),
    
    SalvageMines: new L.LayerGroup(),
    ComponentMines: new L.LayerGroup(),
    SulfurMines: new L.LayerGroup(),
};
