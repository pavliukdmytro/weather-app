import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import './WeatherDays.scss';

function WeatherDays(props) {
    const {list} = props;
    const [days, setDays] = useState({});
    const [minMaxTemp, setMinMaxTemp] = useState({});
    
    useEffect(() => {
        let obg = {};
        let minMax = {};
        //console.log(list);
        list.forEach((day) => {
            //console.log(Math.round(day.main.temp));
            //if()
            if(!minMax[day.dt_txt.split(' ')[0]]) {
                minMax[day.dt_txt.split(' ')[0]] = {};
            }
            if(minMax[day.dt_txt.split(' ')[0]].min === undefined ||
                minMax[day.dt_txt.split(' ')[0]].min > Math.round(day.main.temp)) {
                minMax[day.dt_txt.split(' ')[0]].min = Math.round(day.main.temp)
            }
            if(minMax[day.dt_txt.split(' ')[0]].max === undefined ||
                minMax[day.dt_txt.split(' ')[0]].max < Math.round(day.main.temp)) {
                minMax[day.dt_txt.split(' ')[0]].max = Math.round(day.main.temp);
            }
            if(!obg[day.dt_txt.split(' ')[1]] && Object.keys(obg).length < 5) {
                obg[day.dt_txt.split(' ')[0]] = {
                    weather: day.weather,
                    main: day.main,
                };
            }
        });
        //console.log(minMax);
        //console.log(obg);
        setMinMaxTemp(minMax);
        setDays(obg);
    } , [list]);
    
    const formatDay = (day, dayData) => {
        const dayWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        const month = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
            'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
        const date = new Date(day);
        let newFormatDate = {};
        
        newFormatDate.day = dayWeek[date.getDay()];
        newFormatDate.month = month[date.getMonth()];
        newFormatDate.date = date.getDate();
        newFormatDate.icon = dayData.weather[0].icon;
        
        return newFormatDate;
    };
    
    
    return(
        <div className="weather-days">
            {
                Object.keys(days).map((keyName, i) => {
                    const newDay = formatDay(keyName, days[keyName]);
                    return (
                        <NavLink key={i}
                             className='weather-days__day'
                             to={i === 0 ? window.routsPath: window.routsPath + keyName}
                             activeClassName="weather-days__day-active"
                                 exact
                        >
                            <span><b>{newDay.day}</b></span>
                            <span>{newDay.date}</span>
                            <span className="weather-days_month">{newDay.month}</span>
                            <img src={`http://openweathermap.org/img/wn/${newDay.icon}@2x.png`} alt={newDay.icon}/>
                            <div className="weather-days__min-max">
                                <span>мин: <b>{minMaxTemp[keyName].min}</b>&nbsp;</span>
                                <span>max: <b>{minMaxTemp[keyName].max}</b></span>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default WeatherDays;