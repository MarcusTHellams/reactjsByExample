
var Heading = React.createClass({
	render: function(){
		return (<th>{this.props.heading}</th>)
	}
});

var Row = React.createClass({
	render: function(){
		return (<tr>
					<td>{this.props.changeSet.when}</td>
					<td>{this.props.changeSet.who}</td>
					<td>{this.props.changeSet.description}</td>
			</tr>)
	}
});

var Headings = React.createClass({

	render: function(){

		var headings = this.props.headings.map(function(heading){
			return(<Heading heading={heading} />)
		});
		return (<thead><tr>{headings}</tr></thead>)
	}
});


var Rows = React.createClass({

	render: function(){

		var rows = this.props.changeSets.map(function(changeSet){
			return(<Row changeSet={changeSet} />)
		});
		return <tbody>{rows}</tbody>
	}
});

var App = React.createClass({
	render: function(){
		
		return  <div>
		<h1>{this.props.title}</h1>
		
		<table className="table table-bordered">
					<Headings headings={this.props.headings} />
					<Rows changeSets={this.props.changeSets} />
			</table>
			</div>
	}
});

var head = ['Last change at', 'By Author', 'Summary'];
var dat = [{ "when": "2 minutes ago",
				"who": "Jill Dupre",
				"description": "Created new account"
				},
				{
				"when": "1 hour ago",
				"who": "Lose White",
				"description": "Added fist chapter"
				},
				{
				"when": "2 hours ago",
				"who": "Jordan Whash",
				"description": "Created new account"
				}];

var title = 'Recent Changes';

ReactDOM.render(<App changeSets={dat} headings={head} title={title} />, document.getElementById('app'));