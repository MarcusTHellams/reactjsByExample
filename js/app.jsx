var RecentChangesTable = React.createClass({

	render: function(){

		return <table className="table table-bordered">{this.props.children}</table>
}});


RecentChangesTable.Heading = React.createClass({
	render: function(){
		return <th>{this.props.heading}</th>;
	}
});

RecentChangesTable.Row = React.createClass({
	render: function(){
		return (<tr>
					<td>{this.props.changeSet.when}</td>
					<td>{this.props.changeSet.who}</td>
					<td>{this.props.changeSet.description}</td>
			</tr>)
	}
});

RecentChangesTable.Headings = React.createClass({

	render: function(){

		var headings = this.props.headings.map(function(heading, index){
			return(<RecentChangesTable.Heading key={index} heading={heading} />)
		});
		return (<thead><tr>{headings}</tr></thead>)
	}
});


RecentChangesTable.Rows = React.createClass({

	render: function(){

		var rows = this.props.changeSets.map(function(changeSet, index){
			return(<RecentChangesTable.Row key={index} changeSet={changeSet} />)
		});
		return <tbody>{rows}</tbody>
	}
});




var App = React.createClass({
	render: function(){
		
		return <RecentChangesTable>
				<RecentChangesTable.Headings headings={this.props.headings} />
				<RecentChangesTable.Rows changeSets={this.props.changeSets} />
		</RecentChangesTable>
		
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