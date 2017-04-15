var React = require('react');
var ReactDOM = require('react-dom');

// Presentational Components
//   - does not maintain state
// PROPS:
//  name, message - values to be displayed to the screen
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name
    var msg = this.props.message
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{msg}!!</p>
      </div>
    )
  }
})

// To keep decoupled, this doesn't care what is done with the name
// after form submit, it just passes it up and lets the container
// handle that
// PROPS:
//   onNewName: function to execute after form submit
var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault()
    var newState = {}

    var nameRef = this.refs.name
    var name = nameRef.value
    if (name.length > 0) {
      nameRef.value = ''
      newState.name = name
    }

    var msgRef = this.refs.message
    var msg = msgRef.value
    if (msg.length > 0) {
      msgRef.value = ''
      newState.message = msg
    }

    this.props.onNewState(newState)
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter name" /><br/>
        <textarea ref="message" placeholder="Enter Message" /><br/>
        <button>Submit</button>
      </form>
    )
  }
})

// Container Component
//   - maintains state
//   - render children
var Greeter = React.createClass({
  getDefaultProps: () => {
    return {
      name: 'React',
      message: 'This is a component'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewState: function(state) {
    this.setState(state)
  },
  render: function() {
    var name = this.state.name
    var message = this.state.message

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewState={this.handleNewState} />
      </div>
    );
  }
});

var firstName = 'Michael';
var myComp = 'Cool Component Thing'

ReactDOM.render(
  <Greeter name={firstName} message={myComp} />,
  document.getElementById('app')
);

/*
 * Presentational Components take props and render them to the screen
 *  - GreeterMessage
 *  - GreeterForm
 * STATE can be changed; PROPS cannot
 * Container Components should really only render children
 * */
