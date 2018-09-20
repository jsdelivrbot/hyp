import React, { Component } from 'react'
import { MapBasic } from '../MapBasic/MapBasic'
import { ListBasic } from '../../Lists/ListBasic/ListBasic'
import classes from "./ListDrivenMap.scss"

	export class ListDrivenMap extends Component {
		render() {
			return (
				<div className={classes.ListDrivenMap}>
					<div className={classes.List}>
						<ListBasic items={ this.props.items}>
						</ListBasic>
					</div>
					<div className={classes.Map}>
						<MapBasic pins={ this.props.items }>
						</MapBasic>
					</div>
				</div>);
		}
	}

export default ListDrivenMap;
