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
      <div className="card info  mt-3">
        <div className="d-flex flex-column">
          <div>
            <h2 className="mt-2 text-center">
              {this.props.city} <span className="fs-6 rounded-pill bg-warning d-inline-block p-1">{this.props.country}</span>
            </h2>
            <img
              className=""
              src={`http://openweathermap.org/img/wn/${this.props.icon}@4x.png`}
              alt="img"
              width={360}
            />
          </div>

          <div className="d-flex align-items-center justify-content-center gap-3">
            <div>
              <h1 className=" text-center bg-warning rounded-pill p-3">{this.props.temp}&#186;</h1>
            </div>

            <div>
              <p className="">Feels like {this.props.feelsLike}&#186;</p>

              <p className="">humidity: {this.props.humidity}</p>
              <p className="">
                maxTemp:{" "}
                <span className="text-danger">{this.props.maxTemp}&#186;</span>
              </p>
              <p className="">
                minTemp:{" "}
                <span className="text-primary">{this.props.minTemp}&#186;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
