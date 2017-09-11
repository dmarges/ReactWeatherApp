var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var updates = {},
			city = this.refs.city.value;

		if (city.length > 0) {
			updates.city = city;
			this.refs.city.value = '';
		}

		this.props.onNewData(updates);
	
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" placeholder="Enter city name" ref="city" /><br />
				<button>Get Weather</button>
			</form>
		);
	}
});

module.exports = WeatherForm;
