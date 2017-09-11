var React = require('react');

var WeatherText = (props) => {
	var city = props.city,
		temp = props.temp;
		
	return (
		<p>The weather in {city} is {temp}</p>
	);
};

module.exports = WeatherText;
