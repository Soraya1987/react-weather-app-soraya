import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tabriz",
    day: "Sunday 09:00",
    date: "2022-05-12",
    description: "Broken clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temprature: 11,
    humidity: 80,
    wind: 10
  };
  return (
    <div className="weather  border">
      <div className="overview border p-2">
        <div className="row">
          <div className="col-8">
            <div className="row ">
              <div className="col-6">
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>
                    Last updated: <span>{weatherData.day}</span>
                  </li>
                  <li>{weatherData.date}</li>
                  <li>{weatherData.description}</li>
                </ul>
              </div>
              <div className="col-6 ">
                <form>
                  <div className="row p-3">
                    <div className="col-8 ">
                      <input
                        type="search"
                        placeholder="Type a city..."
                        className="form-control w-100 border"
                      />
                    </div>

                    <div className="col-4 ">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary w-100"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="row ">
              <div className="col-6 ">
                <div className="clearfix weather-temprature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="cloudy"
                    className="float-left "
                    width="100"
                  />
                  <strong>{weatherData.temprature}</strong>
                  <span className="units">
                    <a href="/">°C</a>|<a href="/">°F</a>
                  </span>
                </div>
              </div>
              <div className="col-6 p-4">
                <ul>
                  <li>Humidity: {weatherData.humidity} %</li>
                  <li>Wind:{weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img src="./img/allWeather.jpg" alt="" className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
