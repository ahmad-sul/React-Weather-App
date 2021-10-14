import React, { Component } from "react";

export default class WeatherDataComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // controling
    if (
      nextProps.city === this.props.city &&
      nextProps.temp === this.props.temp
    ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className='info w-25 mt-3'>
        <div className='d-flex align-items-center'>
        <img
        className='w-75'
          src={`http://openweathermap.org/img/wn/${this.props.icon}@4x.png`}
          alt="img"
        />
         <div className='d-flex flex-column '>
         <h1 className='my-4 text-center'>{this.props.temp}&#186;</h1>
          <p className='m-auto'>Feels like {this.props.feelsLike}&#186;</p>
        </div>
        
        </div>
       

       
        <div className=''>
          <p className='fs-3 ms-3'>humidity: {this.props.humidity}</p>
          <p className='fs-3 ms-3'>maxTemp: <span className='text-danger'>{this.props.maxTemp}&#186;</span></p>
          <p className='fs-3 ms-3'>minTemp: <span className='text-primary'>{this.props.minTemp}&#186;</span></p>
        </div>
      </div>
    );
  }
}
