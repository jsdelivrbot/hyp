import React, { Component } from 'react'
import { MapBasic } from '../MapBasic/MapBasic'
import { ListBasic } from '../../Lists/ListBasic/ListBasic'
import classes from "./ListDrivenMap.scss"

	export class ListDrivenMap extends Component {
		render() {
			return (
				<div className={classes.flexRow}>
					<MapBasic pins={ this.props.items }>
					</MapBasic>
					<ListBasic items={ this.props.items}>
					</ListBasic>
				</div>);
		}
	}

export default ListDrivenMap;
