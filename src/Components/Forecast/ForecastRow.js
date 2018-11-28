import React, { Component } from "react";

import "./ForecastRow.css";

class ForecastRow extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          
            <tr className="row">
                <td>
                    <span className="day">{this.props.day}</span>
                </td>
                <td>
                    <span className="temp">{this.props.forecast.day.avgtemp_f}</span>
                </td>
            </tr>
          
        );
    }
}

export default ForecastRow;