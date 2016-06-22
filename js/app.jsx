
var App = React.createClass({
	render: function(){

		console.log(this.props);

		
		var headings = this.props.headings.map(function(heading){
			return <th>{heading}</th>
		});

		var rows = this.props.data.map(function(row){
			return <tr>
				<td>{row.when}</td>
				<td>{row.who}</td>
				<td>{row.description}</td>
			</tr>
		});
		return  <div>
		<h1>{this.props.title}</h1>
		
				<table className="table table-bordered">
							<thead>
								<tr>
									{headings}
								</tr>
							</thead>
							<tbody>
								{rows}
							</tbody>
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

ReactDOM.render(<App data={dat} headings={head} title={title} />, document.getElementById('app'));