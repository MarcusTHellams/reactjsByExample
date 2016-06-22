var App = React.createClass({
	render: function(){
		return (React.createElement('div', null, 'Welcome to Adequate, Mike'));
	}
});

ReactDOM.render(React.createElement(App), document.getElementById('app'));