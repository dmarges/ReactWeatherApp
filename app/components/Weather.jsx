var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherText = require('WeatherText');
var ErrorModal = require('ErrorModal');
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

		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openWeatherMap.getTemp(updates.city).then(function(temp) {
			updates.temp = temp;
			updates.isLoading = false;
			that.setState(updates);
		}, function(errorMessage) {
			that.setState({
				isLoading: false,
				errorMessage: errorMessage.message
			});
		});
	},
	render: function() {
		var city = this.state.city,
			temp = this.state.temp,
			isLoading = this.state.isLoading,
			errorMessage = this.state.errorMessage;

		function renderMessage() {
			if(isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && city) {
				return <WeatherText city={city} temp={temp}/>
			}
		}

		function renderError() {
			if(typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				);
			}
		}
	
		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onNewData={this.handleNewData}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;
