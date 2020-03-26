import React, {useEffect} from 'react';
import './WeatherMap.scss';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-openweathermap/leaflet-openweathermap.css';
import 'leaflet-openweathermap';

function WeatherMap(props) {
    const {apiKey} = props;
    //const apiKey = props.apiKey;
    //console.log(apiKey);
    useEffect(() => {
        const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18, attribution: 'my weather map' });
        
        const clouds = L.OWM.clouds({showLegend: false, opacity: 0.5, appId: apiKey});
        const cloudscls = L.OWM.cloudsClassic({showLegend: false,appId: apiKey});
        const precipitation = L.OWM.precipitation({showLegend: false, appId: apiKey});
        const precipitationcls = L.OWM.precipitationClassic({showLegend: false,appId: apiKey});
        const rain = L.OWM.rain({showLegend: false,appId: apiKey});
        const raincls = L.OWM.rainClassic({showLegend: false,appId: apiKey});
        const snow = L.OWM.snow({showLegend: false,appId: apiKey});
        const pressure = L.OWM.pressure({showLegend: false,appId: apiKey});
        const pressurecntr = L.OWM.pressureContour({showLegend: false,appId: apiKey});
        const temp = L.OWM.temperature({showLegend: false,appId: apiKey});
        const wind = L.OWM.wind({showLegend: false,appId: apiKey});
        //var city = L.OWM.current({intervall: 15, lang: 'de'});
        //
        const map = L.map('map', { center: new L.LatLng(51.5, 10), zoom: 5, layers: [osm] });
        const baseMaps = { "OSM Standard": osm };
        const overlayMaps = {
            "Clouds": clouds,
            //"Cities": city,
            "Cloudscls": cloudscls,
            "Precipitation": precipitation,
            "Precipitationcls": precipitationcls,
            "Rain": rain,
            "Raincls": raincls,
            "snow": snow,
            "Pressure": pressure,
            "Pressurecntr": pressurecntr,
            "Temp": temp,
            "Wind": wind
        };
        const layerControl = L.control.layers(baseMaps, overlayMaps,{collapsed:window.innerWidth < 768}).addTo(map);
    }, []);
    
    return(
        <div id="map" style={{height: window.innerHeight - 100 + 'px'}} className="map-weather"></div>
    )
}

export default WeatherMap ;