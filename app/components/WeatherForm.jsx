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
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="search" placeholder="Search Weather By City" ref="city" /><br />
					<button className="button expanded hollow">Get Weather</button>
				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;
