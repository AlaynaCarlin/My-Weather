import React from "react";

const DisplayWeather = (props: any) => {
    return(
        <div>
            <h3>Description: {props.desc}</h3>
            <hr/>
            {/* ° = hold alt and type 0176 */}
            <h3>Temperature: {props.temp}°F</h3>
            <hr/>
            <h3>Feels Like: {props.feels}°F</h3>
            <hr/>
            <h3>Humidity: {props.humidity}%</h3>
            <hr/>
            <h3>Pressure: {props.pressure}PSI</h3>
            <hr/>
            <h3>Wind Degrees: {props.deg}</h3>
            <hr/>
            <h3>Wind Speed: {props.speed}MPH</h3>
        </div>
    )
}

export default DisplayWeather;