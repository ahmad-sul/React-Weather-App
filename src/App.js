import React, { Component } from 'react'
import WeatherDataComponent from './WeatherDataComponent'
import './app.css'
// b3499bd5b6f74cd4cce4808c6b12531f


export default class App extends Component {

    state={
      cityName: '',
      weatherData:null
    }

  getUserCity=(e)=>{
this.setState({
  cityName: e.target.value
})

  }

  formSubmission=(e)=>{
    e.preventDefault() // don't forget (we use it to stop refresh the bage).
    console.log(this.state.cityName)
    if(this.state.cityName.trim() !== ''){
        this.fetchWeatherData(this.state.cityName)
    }
  }


  fetchWeatherData=(city)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)

    .then(Response=>Response.json())
    .then(data=>this.setState({weatherData:data}))
    .catch(err=>console.log(err)) // we store the data into weatherData , so we can display it after .
  }

  componentDidMount(){
    // onload : 
    this.fetchWeatherData('berlin') // وضعنا هنا برلين اي عندما يفتح المتصفح تظهر لنا المعلومات عن برلين

  }

  render() {
    console.log(process.env.REACT_APP_API_KEY)
    console.log(this.state.weatherData)
    let data=this.state.weatherData
    return (
      <div className='w-100  vh-100 d-flex flex-column align-items-center banner' >
      <h1 className='my-5'>Weather APP</h1>
      <form className='d-flex w-25' onSubmit={this.formSubmission}>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your City Name" onChange={this.getUserCity}/>
      <button type="submit" class="btn btn-success w-100">Get Weather Data</button>
      
      </form>

      {data && <WeatherDataComponent 
      city={this.state.cityName}
      temp={this.state.weatherData.main.temp}
      maxTemp={this.state.weatherData.main.temp_max}
      minTemp={this.state.weatherData.main.temp_min}
      feelsLike={data.main.feels_like}// data=this.state.weatherData
      humidity={data.main.humidity}
      icon={data.weather[0].icon}


   />}
      
      </div>
    )
  }
}




