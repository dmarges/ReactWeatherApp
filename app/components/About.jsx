var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>
				This is a simple Weather Application that I built using React and ES6.
			</p>
			<p>
				Here are the tools that I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This was the JavaScript
					Framework that I used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - This is the Weather
					API that I used to search for weather data by city name.
				</li>
			</ul>
		</div>
	);
};

module.exports = About;
