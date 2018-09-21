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

	export function ListBasic (props) {
		return (<div>
			<List component="nav">
			{props.items.map(({lat, lng, key, name}) => {
				const selected = props.selectedKey === key;
				let listItemRootClasses = cx({
				  'selectedRoot': selected
				});
				let listItemLabelClasses = cx({
				  'selectedLabel': selected
				});
				return (
					<ListItem 
						button
						classes={{root: listItemRootClasses}}
						selected={ selected }
						onClick={event => props.selectionCallback(event, key)}>
						<ListItemText 
							primary={key}
							classes={{primary: listItemLabelClasses}}/>
					</ListItem>
				)
			}
			)}
		  </List>
		</div>)
	}

export default withStyles(classes)(ListBasic);
