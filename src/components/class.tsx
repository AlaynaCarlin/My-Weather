import React from 'react';

class Fetch extends React.Component {
    constructor(props: any){
        super(props)
        this.state = {
            // set variables for the data from the fetches
            lat: '',
            long: ''

        }
    }

    fetchLocation(){
        navigator.geolocation.getCurrentPosition(this.fetchWeather)

    }

    // ? working on it *************************
    // fetchWeather(position){
    //     this.setState{
    //         lat: position.coords.latitude,
    //         long: position.coords.longitude 
    //     }

    // } 

    componentDidMount(){
        // call the fetches
    }

    render() {
        return(
            <div>
                {/* call the function component and send the data through props */}
            </div>
        )
    }
}

export default Fetch;