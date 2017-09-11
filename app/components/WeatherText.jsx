var React = require('react');

var WeatherText = (props) => {
	var city = props.city,
		temp = props.temp;
		
	return (
		<h3 className="text-center">The weather in {city} is {temp}</h3>
	);
};

module.exports = WeatherText;
