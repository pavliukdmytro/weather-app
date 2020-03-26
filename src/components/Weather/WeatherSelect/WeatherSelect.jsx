import React from 'react';
import './WeatherSelect.scss';

function WeatherSelect(props) {
    const {cityHandler, city} = props;
    const cities = [
        {
            city: 'lviv', name: 'Львов'
        },
        {
            city: 'kyiv', name: 'Київ'
        },
        {
            city: 'sevastopol', name: 'Севастополь'
        },
        {
            city: 'kharkiv', name: 'Харьків'
        },
        {
            city: 'uzhhorod', name: 'Ужгород'
        },
        {
            city: 'odessa', name: 'Одеса'
        },
        {
            city: 'donetsk', name: 'Донецьк'
        },
        {
            city: 'chernihiv', name: 'Чернігів'
        },
        {
            city: 'zhytomyr', name: 'Житомир'
        },
        {
            city: 'Rivne', name: 'Рівне'
        },
        {
            city: 'Lutsk', name: 'Луцьк'
        },
        {
            city: 'Kovel', name: 'Ковель'
        },
        {
            city: 'Ternopil', name: 'Тернопіль'
        },
        {
            city: 'Mukachevo', name: 'Мукачево'
        },
        {
            city: 'Ivano-Frankivsk', name: 'Івано-Франківськ'
        },
        {
            city: 'Chernivtsi', name: 'Чернівці'
        },
        {
            city: 'Khmelnytskyi', name: 'Хмельницький'
        },
        {
            city: 'Vinnytsia', name: 'Вінниця'
        },
        {
            city: 'Uman', name: 'Умань'
        },
        {
            city: 'Cherkasy', name: 'Черкаси'
        },
        {
            city: 'Mykolaiv', name: 'Миколаїв'
        },
        {
            city: 'Zaporizhia', name: 'Запоріжжя'
        },
        {
            city: 'Dnipro', name: 'Дніпро'
        },
        {
            city: 'Luhansk', name: 'Луганськ'
        },
        {
            city: 'Mariupol', name: 'Маріуполь'
        },
    ];
    return(
        <select name="" id="" value={city} onChange={cityHandler} className="weather-select">
            {
                cities.map((el,i) => {
                    return(
                        <option key={i}
                                value={el.city}
                        >
                            {el.name}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default WeatherSelect ;