require([
  "esri/WebMap",
  "esri/views/MapView",
  'esri/layers/FeatureLayer', 'esri/widgets/Legend', 'esri/widgets/Expand', "esri/widgets/Feature"
], function (Map, MapView, FeatureLayer, Legend, Expand, Feature) {

  const map = new Map({
    basemap: 'dark-gray'
  })

  // create map view
  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 2,
    popup: {
      dockEnabled: true,
      dockOptions: {
        position: "bottom",
        breakpoint: false
      }
    },
  });

  var template = {
    // autocasts as new PopupTemplate()
    title: "Cases",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Province_State",
            label: "Province/State"
          },
          {
            fieldName: "Country_Region",
            label: "Country/Region	",
          },
          {
            //date type config
            fieldName: "Last_Update",
            label: "Last Update",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            //esriFieldTypeDouble
            fieldName: "Confirmed",
            label: "Confirmed",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            //esriFieldTypeDouble
            fieldName: "Deaths",
            label: "Deaths",
            format: {
              digitSeparator: true,
              places: 0
            }
          },
          {
            //esriFieldTypeDouble
            fieldName: "Recovered",
            label: "Recovered",
            format: {
              digitSeparator: true,
              places: 0
            }
          }
        ]
      }
    ]
  };

  // Reference the popupTemplate instance in the
  // popupTemplate property of FeatureLayer
  var featureLayer = new FeatureLayer({
    portalItem: {
        id: "041a05908ebd4a36af3dd8be10d770be"
      },
    title: "Confirmed COVID-19 Cases",
    opacity: 0.3,
    outFields: ["Province_State", "Country_Region", "Last_Update", "Confirmed", "Recovered", "Deaths"],
    // popupTemplate: template,
  });

  map.add(featureLayer);

  // create legend
  const legend = new Expand({
    content: new Legend({
      view: view,
      container: "legendDiv",
      style: "classic"
    }),
    view: view,
    expanded: false
  });

  view.ui.add(legend, "top-left");
});



