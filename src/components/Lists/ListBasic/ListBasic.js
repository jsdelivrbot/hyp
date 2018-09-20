import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import classes from "./ListBasic.scss"
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import classNames from 'classnames/bind';

	let cx = classNames.bind(classes);

	export class ListBasic extends Component {
	  	constructor(props) {
	  		super(props);
	  		this.state = {selectedKey: props.key || -1}
	  		this.handleListItemClick = this.handleListItemClick.bind(this);
	  	}

	  	handleListItemClick(event, key) {
	  		this.setState({selectedKey: key});
	  	}

		render() {

			return (<div>
		      <List component="nav">
		      {this.props.items.map(({lat, lng, key, name}) => {
		      		const selected = this.state.selectedKey === key;
		      		let listItemClasses = cx({
					  'selected': selected
				    });
		      		return (
		      			<ListItem button
		      				classes={{root: listItemClasses}}
		      				selected={ selected }
		      				onClick={event => this.handleListItemClick(event, key)}>
					  		<ListItemText primary={key}/>
		        		</ListItem>
		        	)
		  		}
		    	)}
		      </List>
		    </div>)
		}
	}

export default withStyles(classes)(ListBasic);
