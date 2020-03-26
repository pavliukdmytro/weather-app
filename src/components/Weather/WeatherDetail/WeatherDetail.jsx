import React from 'react';
import {useParams} from 'react-router-dom';
import './WeatherDetail.scss';

import WeatherDetailHour from "./WeatherDetailHour/WeatherDetailHour.jsx";

function WeatherDetail(props) {
    const {list} = props;
    let {day} = useParams();
    
    if(!day) {
        day = list[0].dt_txt.split(' ')[0];
    }
    
    const showDayWeather = () => {
        return list.filter((el) => el.dt_txt.startsWith(day))
    };
    
    return(
        <div className="weather-detail">
            {
                showDayWeather().map((hour, i) => {
                    return(
                        <WeatherDetailHour key={hour.dt_txt} number={i} hour={hour} />
                    )
                })
            }
        </div>
    )
}

export default WeatherDetail;