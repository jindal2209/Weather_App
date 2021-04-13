import { useState } from 'react';
import './App.css';
import API_KEY from './configure';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'weather-icons/css/weather-icons.css'
import WeatherData from './Weather'
import axios from 'axios';

function App() {
	var [city, setCity] = useState("")
	var [showWeather, setWeather] = useState(false)
	var [data, setData] = useState({})

	function handleSearchLocation(event) {
		event.preventDefault();
		navigator.geolocation.getCurrentPosition((position) => {
			var lon = position.coords.longitude;
			var lat = position.coords.latitude;
			var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
			
			axios.get(url)
				.then(response => {
					setData({'data':response.data})
					setWeather(true)
				})
				.catch((error) => {
					console.log(error);
				})
		});
	}

	function handleSearch(event) {
		event.preventDefault();
		var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
		axios.get(url)
			.then(response => {
				setData({'data':response.data})
				setWeather(true)
			})
			.catch((error) => {
				console.log(error);
			})
	}

	return (
		<div className="container text-white font-weight-bold p-3">
			<form>
			<div className='row d-flex justify-content-center'>
				<div className="input-group">
					<div className="input-group-prepend">
						<button className="btn btn-primary" onClick={handleSearch} ><i className="fa fa-search"></i></button>
					</div>
					<input
						type="text"
						value={city}
						className="form-control"
						onInput={(e) => setCity(e.target.value)}
						placeholder='Enter city name or country name'
					/>
					<div className="input-group-prepend">
						<button className='btn btn-danger' onClick={handleSearchLocation}><i className='fa fa-map-marker'></i></button>
					</div>
				</div>
			</div>
			</form>
			<br />
			<div className="row d-flex justify-content-center mt-5">
				<div className='col-lg-7'>
					{showWeather ? <WeatherData data={data.data} /> : null}
				</div>
			</div>
		</div>
	);
}

export default App;