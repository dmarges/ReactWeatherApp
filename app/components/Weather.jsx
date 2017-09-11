var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherText = require('WeatherText');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getDefaultProps: function() {
		return {
			city: 'Vancouver',
			temp: 21
		}
	},
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleNewData: function(updates) {
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(updates.city).then(function(temp) {
			updates.temp = temp;
			updates.isLoading = false;
			that.setState(updates);
		}, function(errorMessage) {
			that.setState({isLoading: false});
			alert(errorMessage);
		});
	},
	render: function() {
		var city = this.state.city,
			temp = this.state.temp,
			isLoading = this.state.isLoading;

		function renderMessage() {
			if(isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && city) {
				return <WeatherText city={city} temp={temp}/>
			}
		}
	
		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onNewData={this.handleNewData}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;
