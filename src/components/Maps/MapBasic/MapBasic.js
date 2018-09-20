import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import classes from "./MapBasic.scss"
import MapPin from "../MapPin/MapPin"

	export class MapBasic extends Component {
		static defaultProps = {
			center: { lat: 40.7446790, lng: -73.9485420 },
			zoom: 11,
			pins: []
	  	}
	  	constructor(props) {
	  		super(props);
	  		this.state = {
	  			pins: props.pins,
	  			selected: props.selected
	  		};
	  		this.handleMapPinClick = this.handleMapPinClick.bind(this);
	  	}

	  	handleMapPinClick(event, pinId) {
	  		event.preventDefault();
	  		event.stopPropagation();
	  		this.setState({
	  			pins: this.state.pins,
	  			selected: pinId
	  		});
	  	}

		render() {
			return (
				<div className={classes.mapBasic}>
					<GoogleMapReact
						bootstrapURLKeys={{key: "AIzaSyArsP0UeondXh5Y9Qy9DBPSCsQPu5izHoY"}}
						defaultCenter={{lat: 40.7446790, lng: -73.9485420}}
						defaultZoom={ 11 }>
						{this.props.children}
						{this.state.pins.map(({lat, lng, key, emphasis}) =>
							(<MapPin pinId={ key } emphasis={ key === this.state.selected } lat={ lat } lng={ lng } interactionHandler={this.handleMapPinClick}/>))}
					</GoogleMapReact>
				</div>
			)
		}
	}

export default MapBasic;
