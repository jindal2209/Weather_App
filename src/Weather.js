import { useEffect, useState } from "react";

function WeatherData({data}) {
	var [icon,setIcon] = useState('');
	useEffect(() => {
		const hours = new Date().getHours();
		const isDayTime = hours > 5 && hours < 19 ;
		var name;
		var id = data.weather[0].id ;
		var day = isDayTime ? 'day' : 'night';
	
		switch(id){
			case 200:
				name = `wi wi-${day}-storm-showers`;
				break;
			case 230:
				name = `wi wi-${day}-storm-showers`;
				break;
			default:
				name = `wi wi-owm-${day}-${id}`;
				break;
		}
		setIcon(name);
		// console.log('hi');
	},[data.weather])
	return (
		<div className='outercard shadow-lg rounded container'>
			<div className='card-body'>
				<div className='row d-flex align-items-center'>
					<div className='col-lg-6'>
						<div>
							<h2 className='text-decoration-underline'><b>{data.name}, {data.sys.country}</b></h2>
							<h1 className='display-1 fw-bold'>{data.main.temp} &#8451;</h1>
							{/* &#8457;  for fahrenheit */}
							<h6>
								{data.weather[0].main}, {data.weather[0].description}	
							</h6>
							<h4>
								Realfeel&reg; {data.main.feels_like} &#8451;
							</h4>
							<h1 className='display-1'><i className={icon}></i></h1>
						</div>
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

export default WeatherData;