import React from 'react';
import './WeatherDetailHour.scss';

function WeatherDetailHour(props) {
    const {hour} = props;
    return(
        <div className="weather-detail__hour">
            <div className="weather-detail__left">
                <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt={hour.weather[0].icon}/>
                <p>{hour.weather[0].description}</p>
                <p>{hour.dt_txt.split(' ')[1].slice(0, 5)}</p>
            </div>
            <div className="weather-detail__right">
                <p>Температура: <b>{Math.round(hour.main.temp)}</b></p>
                <p>Відчувається як: <b>{Math.round(hour.main.feels_like)}</b></p>
                <p>Вітер: <b>{Math.round(hour.wind.speed)}</b> м/с</p>
                <p>Хмарність: <b>{hour.clouds.all}</b>%</p>
            </div>
        </div>
    )
}

export default WeatherDetailHour ;