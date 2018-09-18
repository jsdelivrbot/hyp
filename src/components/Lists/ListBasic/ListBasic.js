import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import classes from "./ListBasic.scss"
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

	export class ListBasic extends Component {
	  	constructor(props) {
	  		super(props);
	  	}
		render() {
			return (<div>
		      <List component="nav">
		      {this.props.items.map(({lat, lng, key, name}) => (
		      	<ListItem button>
		          <ListItemText primary={key}/>
		        </ListItem>)
		    	)}
		      </List>
		    </div>)
		}
	}

export default ListBasic;
