import React from "react";

import ForecastRow from "./ForecastRow";

import "./ForecastBlock.css";

const dayOfWeek = new Map([
   [0, "Sun"],
   [1, "Mon"],
   [2, "Tue"],
   [3, "Wed"],
   [4, "Thu"],
   [5, "Fri"],
   [6, "Sat"]
]);

const forecastBlock = props => {
    
    if (props.weather && props.showingForecast) {
        const rows = [];
        rows.push(
          <ForecastRow 
            key="0"
            day="Today" 
            forecast={props.weather.forecast.forecastday[0]} />  
        );
        
        for (var i = 1; i < props.weather.forecast.forecastday.length; i++) {
            let day = new Date (props.weather.forecast.forecastday[i].date);
            let weekday = dayOfWeek.get(day.getUTCDay());
            
            rows.push(
                <ForecastRow 
                    key={i}
                    day={weekday} 
                    forecast={props.weather.forecast.forecastday[i]} />
            );
        }
        
        return (
            <div className="forecastTable">
                <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return "";
    }
};

export default forecastBlock;

// dayOfWeek.get(today.getUTCDay()) => "Wed" (11/28/2018)