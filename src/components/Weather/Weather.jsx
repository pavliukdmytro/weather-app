import React, {useEffect, useState} from 'react';
import './Weather.scss';

import WeatherDays from "./WeatherDays/WeatherDays.jsx";
import WeatherDetail from "./WeatherDetail/WeatherDetail.jsx";
import WeatherSelect from "./WeatherSelect/WeatherSelect.jsx";
import WeatherMap from "./WeatherMap/WeatherMap.jsx";

import cloud1 from '../../images/cloud-01.png';
import cloud2 from '../../images/cloud-02.png';
import cloud3 from '../../images/cloud-03.png';
import cloud4 from '../../images/cloud-04.png';

function Weather() {
    const apiKey = 'c8bb1fc955ef4edbeb4311d97206e1ce';
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    
    
    useEffect(() => {
        const getCity = async () => {
            try{
                const response = await fetch('https://geolocation-db.com/json/');
                const data = await response.json();
                setCity(data.city ? data.city.toLowerCase() : 'kiev');
            } catch (err) {
                console.error(err);
            }
        };
        getCity();
    }, []);
    
    useEffect(() => {
        const getWeather = async () => {
            const getWeather = await
                fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ua&appid=${apiKey}`);
            const data = await getWeather.json();
            setWeather(data);
        };
        if(city !== '' && apiKey !== '') {
            getWeather();
        }
    }, [city]);
    
    if(Object.keys(weather).length === 0){
        return <div className="loading">loading...</div>;
    };
    
    const cityHandler = (e) => {
        setCity(e.currentTarget.value)
    }
    
    return(
        <>
            <div className="cloud">
                <img src={cloud1} alt="cloud1" className="cloud1"/>
                <img src={cloud2} alt="cloud1" className="cloud2"/>
                <img src={cloud3} alt="cloud1" className="cloud3"/>
                <img src={cloud4} alt="cloud1" className="cloud4"/>
            </div>
            {
                Object.keys(weather).length !== 0 &&
                <div className="weather">
                    
                    <h1>Weather</h1>
                    <WeatherSelect city={city} cityHandler={cityHandler} />
                    <WeatherDays list={weather.list}/>
                    <WeatherDetail list={weather.list}/>
                    <WeatherMap apiKey={apiKey}/>
                </div>
            }
        </>
    )
}

export default Weather ;