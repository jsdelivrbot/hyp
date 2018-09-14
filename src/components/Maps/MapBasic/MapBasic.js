import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import classes from "./MapBasic.scss"
import MapPin from "../MapPin/MapPin"

	export class MapBasic extends Component {
	  static defaultProps = {
	    center: { lat: 40.7446790, lng: -73.9485420 },
	    zoom: 11
	  }
		render() {
	    	return (
		    	<div className={classes.mapBasic}>
		    		Hi Sam
		        	<GoogleMapReact
			          bootstrapURLKeys={{key: "AIzaSyArsP0UeondXh5Y9Qy9DBPSCsQPu5izHoY"}}
			          defaultCenter={{lat: 40.7446790, lng: -73.9485420}}
			          defaultZoom={ 11 }>
			        	<MapPin
			            	lat={ 40.7473310 }
			            	lng={ -73.8517440 }
			            	text={ 'Where\'s Waldo?' }
			          	/>
		        	</GoogleMapReact>
		      	</div>
	    	)
	 	}
	}

export default MapBasic;
