import React, { Component } from "react";

import "./ForecastRow.css";

class ForecastRow extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        const forecast = this.props.forecast;
        
        const weather = {
            lowTempF: forecast.day.mintemp_f,
            hiTempF: forecast.day.maxtemp_f,
            precipInch: forecast.day.totalprecip_in
        };
        
        return (
          
            <tr className="row">
                <td>
                    <span className="day">{this.props.day}</span>
                </td>
                <td className="temp">
                    <span className="rng">
                        <span className="loTemp">{weather.lowTempF}&deg;F</span>
                        <span className="bar"></span>
                        <span className="hiTemp">{weather.hiTempF}&deg;F</span>
                    </span>
                </td>
            </tr>
          
        );
    }
}

export default ForecastRow;