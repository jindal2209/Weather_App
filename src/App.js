import { useState } from 'react';
import './App.css';
import API_KEY from './configure';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'weather-icons/css/weather-icons.css'

function App() {
	var [city, setCity] = useState("")
	var [showWeather, setWeather] = useState(false)
	var [icon, setIcon] = useState()
	var [data, setData] = useState({})

	function handleIcon() {
		const hours = new Date().getHours()
		const isDayTime = hours > 5 && hours < 19
		
		var name;
		var id = data.weather[0].id
		var day
		if(isDayTime){
			day = 'day';
		}
		else{
			day = 'night'
		}

		switch(id){
			case 200:
				name = `wi wi-${day}-storm-showers`
				break;
			case 230:
				name = `wi wi-${day}-storm-showers`
				break;
			default:
				name = `wi wi-owm-${day}-${id}`
				break;
		}
		setIcon(name)
	}

	function handleSearchLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			var lon = position.coords.longitude;
			var lat = position.coords.latitude;
			var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
					handleIcon();
					setWeather(true);
					console.log('hi');
				})
				.catch(error => console.log(error));
		});
	}

	function handleSearch() {
		var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},110034,IN&appid=${API_KEY}&units=metric`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				handleIcon();
				setWeather(true);
				console.log('hi');
			})
			.catch(error => console.log(error));
	}

	function WeatherData() {
		return (
			<div className='outercard shadow-lg rounded container'>
				<div className='card-body'>
					<div className='row d-flex align-items-center'>
						<div className='col-lg-6'>
							<p>
								<h2><b>{data.name}, {data.sys.country}</b></h2>
								<h1 className='display-1 fw-bold'>{Math.round(data.main.temp)} &#8451;</h1>
								{/* &#8457;  for fahrenheit */}
								<h6>
									{data.weather[0].main}, {data.weather[0].description}	
								</h6>
								<h4>
									Realfeel&reg; {data.main.feels_like} &#8451;
								</h4>
								<h1 className='display-1'><i className={icon}></i></h1>
							</p>
						</div>
						<div className='col-lg-6'>
							<div className='m-1 innercard p-3'>
								<p>Latitude: {data.coord.lat}</p>
								<p>Longitude: {data.coord.lon}</p>
								<p>Min: {data.main.temp_min} &#8451;</p>
								<p>Max: {data.main.temp_max} &#8451;</p>
								<p>Pressure: {data.main.pressure} hPa</p>
								<p>Humidity: {data.main.humidity} %</p>
								<p>Cloud: {data.clouds.all} %</p>
								<p>Wind Speed: {data.wind.speed} m/sec</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="container text-white font-weight-bold p-3">
			<div className='row d-flex justify-content-center'>
				<div className="input-group">
					<div className="input-group-prepend">
						<button className="btn btn-primary" onClick={handleSearch}><i className="fa fa-search"></i></button>
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
			<br />
			<div className="row d-flex justify-content-center mt-5">
				<div className='col-lg-6'>
					{showWeather ? <WeatherData /> : null}
				</div>
			</div>
		</div>
	);
}

export default App;