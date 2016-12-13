var Hello = React.creaeClass({
	render: function() {
		return React.createElement('h1', null, "Hello");
	}
});

var elt = React.createElement(Hello, {name: 'IDM'});

ReactDOM.render(elt, document.getElementById('app'));