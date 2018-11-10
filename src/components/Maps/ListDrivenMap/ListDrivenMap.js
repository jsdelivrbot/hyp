import React, { Component } from 'react'
import { MapBasic } from '../MapBasic/MapBasic'
import { ListBasic } from '../../Lists/ListBasic/ListBasic'
import { EventCarousel } from '../../EventCarousel/EventCarousel'
import classes from "./ListDrivenMap.scss"

	export class ListDrivenMap extends Component {
		constructor(props) {
			super(props);
			this.state = {
				items: this.props.items,
				selected: this.props.selected || 0
			};
			this.selectionCallback = this.selectionCallback.bind(this);
		}

		selectionCallback(event, itemId) {
			if (event) {
				event.preventDefault();
	  			event.stopPropagation();
	  		}
			this.setState({
				items: this.state.items,
				selected: itemId
			});
		}

		render() {
			return (
				<div className={classes.ListDrivenMap}>
					{/*<div className={classes.List}>
						<ListBasic 
							items={ this.state.items}
							selectedKey={ this.state.selected }
							selectionCallback= { this.selectionCallback }>
						</ListBasic>
					</div>*/}
					<div className={classes.Map}>
						<MapBasic 
							pins={ this.state.items }
							selected={ this.state.selected }
							selectionCallback= { this.selectionCallback }>
						</MapBasic>
					</div>
					<EventCarousel
						items={this.state.items}
						selectionCallback= { this.selectionCallback }
						selected= { this.state.selected }>
					</EventCarousel>
				</div>);
		}
	}

export default ListDrivenMap;
