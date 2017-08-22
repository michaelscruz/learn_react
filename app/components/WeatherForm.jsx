var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';

      // onSearch is defined in the parent: Weather.jsx from which WeatherForm is called.
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter city name" />
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    )
  }
});

module.exports = WeatherForm;
