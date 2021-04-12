import { useState } from 'react';
import './App.css';
import API_KEY from './configure';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
	var [city,setCity] = useState("")
	var [showWeather,setWeather] = useState(false)
	// var [country,setCountry] = useState("")
	var [data,setData] = useState({})
	
	function handleSearchLocation(){
		navigator.geolocation.getCurrentPosition((position) => {
			var lon = position.coords.longitude ;
			var lat = position.coords.latitude ;
			var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
					setWeather(true);
					console.log('hi');
				})
				.catch(error => console.log(error));
		});
	}

	function handleSearch(){
		var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},110034,IN&appid=${API_KEY}&units=metric`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setWeather(true);
				console.log('hi');
			})
			.catch(error => console.log(error));
	}
	
	function WeatherData () {
		return (
			<div className='outercard shadow-lg rounded container'>
				<div className='card-body'>
					<div className='row d-flex align-items-center'>
						<div className='col-lg-6'>
						<p>
							<h2><b>{data.name}, {data.sys.country}</b></h2>
							<h1 className='display-1 fw-bold'>{data.main.temp} &#8451;</h1>
							{/* &#8457;  for fahrenheit */}
							<h4>
								Realfeel&reg; {data.main.feels_like} &#8451;
							</h4>
							<h1 className='display-1'><i className="fas fa-sun"></i></h1>
						</p>
						</div>
						<div className='col-lg-6'>
							<div className='m-1 innercard p-3 fw-bold'>
								Latitude: {data.coord.lat}
								<br />
								Longitude: {data.coord.lon}
								<br />
								Weather: {data.weather[0].main},{data.weather[0].description}
								<br />
								Min: {data.main.temp_min} &#8451;
								<br />
								Max: {data.main.temp_max} &#8451;
								<br />
								Pressure: {data.main.pressure} hPa
								<br />
								Humidity: {data.main.humidity} %
								<br />
								Cloud: {data.clouds.all} %
								<br />
								Wind Speed: {data.wind.speed} m/sec
							</div>
						</div>
					</div>
				</div>
			</div>
			// <div className="col-lg-8">
			// 	<div className="cardbox shadow-lg mt-4">
			// 		<div class="card-body">

			// 			<div class='container'>
			// 				<div className='row d-dlex justify-content-center'>
			// 					<div className='col-lg-6 d-flex justify-content-center' >
			// 						<p>
			// 							<h1 className='display-1'><b>{data.main.temp} &#8451;</b> <i className="fas fa-sun"></i></h1>
			// 							{/* &#8457;  for fahrenheit */}
			// 							<h4>
			// 								Realfeel &reg;: {data.main.feels_like}
			// 							</h4>
			// 							<h2>{data.name}, {data.sys.country}</h2>
			// 						</p>
			// 					</div>
			// 					<div class='col-lg-3 d-flex justify-content-center'>
			// 						Latitude: {data.coord.lat}
			// 						<br />
			// 						Longitude: {data.coord.lon}
			// 						<br />
			// 						weather: {data.weather[0].main},{data.weather[0].description}
			// 						<br />
			// 						Min: {data.main.temp_min} &#8451;
			// 						<br />
			// 						Max: {data.main.temp_max} &#8451;
			// 					</div>
			// 					<div class='col-lg-3 d-flex justify-content-center'>
			// 						{/* <br /> */}
									// Pressure: {data.main.pressure} hPa
									// <br />
									// Humidity: {data.main.humidity} %
									// <br />
									// cloud: {data.clouds.all} %
									// <br />
									// wind_speed: {data.wind.speed} m/sec

			// 					</div>
			// 				</div>
			// 			</div>
						
			// 		</div>
			// 	</div>
			// </div>
		)
	}

	return (
		<div className="container text-white font-weight-bold p-3">
			<div className='row d-flex justify-content-center'>
				<div class="input-group">
					<div class="input-group-prepend">
						<button className="btn btn-primary" onClick={handleSearch}><i className="fa fa-search"></i></button>
					</div>
					<input 
						type="text" 
						value={city} 
						className="form-control"
						onInput={(e) => setCity(e.target.value)} 
						placeholder='Enter city or country name'
					/>
					<div class="input-group-prepend">
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