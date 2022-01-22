import React from 'react';
import DisplayWeather from './function';

class Fetch extends React.Component <{},any>{
    constructor(props: any){
        super(props)
        this.state = {
            // set variables for the data from the fetches
            lat: '',
            long: ''
        }
    }

    // retrieves location
    fetchLocation(){
        console.log('location');
        const baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
        const key: string = '16bfd0882021f8b50da9acac7d8ee70d';
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('Position:', position)
            this.setState({
                lat: position.coords.altitude,
                long: position.coords.longitude,
                weatherUrl: `${baseUrl}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${key}` 
            })
            this.fetchWeather()
        })
        

    }

    fetchWeather=()=>{
        console.log('weather');
        // console.log(this.weatherUrl);
        fetch(this.state.weatherUrl)
        .then(res => res.json())
        .then((openWeatherApiResults) => {
            console.log(openWeatherApiResults);
            
            this.setState({
                temperature: openWeatherApiResults.main.temp,
                feelsLike: openWeatherApiResults.main.feels_like,
                humidity: openWeatherApiResults.main.humidity,
                pressure: openWeatherApiResults.main.pressure,
                windDeg: openWeatherApiResults.wind.deg,
                windSpeed: openWeatherApiResults.wind.speed,
                description: openWeatherApiResults.weather[0].description,
            })
        })

    } 

    componentDidMount=()=>{
        console.log('componentDidMount');
        // call the fetches
        this.fetchLocation()
    }

    render() {
        console.log('render');
        return(
            <div className='body'>
                {/* call the function component and send the data through props */}
                <h1>The current weather in your location</h1>
                <hr/>
                <DisplayWeather temp={this.state.temperature} feels={this.state.feelsLike} humidity={this.state.humidity} pressure={this.state.pressure} deg={this.state.windDeg} speed={this.state.windSpeed} desc={this.state.description}/>
            </div>
        )
    }
}

export default Fetch;