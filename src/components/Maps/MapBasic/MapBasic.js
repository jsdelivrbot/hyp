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
	  	}
		render() {
			
			return (
				<div className={classes.mapBasic}>
					<GoogleMapReact
						bootstrapURLKeys={{key: "AIzaSyArsP0UeondXh5Y9Qy9DBPSCsQPu5izHoY"}}
						defaultCenter={{lat: 40.7446790, lng: -73.9485420}}
						defaultZoom={ 11 }>
						{this.props.children}
						{this.props.pins.map(({lat, lng, key}) => (<MapPin lat={ lat } lng={ lng }/>))}
					</GoogleMapReact>
				</div>
			)
		}
	}

export default MapBasic;
