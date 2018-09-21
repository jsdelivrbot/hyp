import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import classes from "./MapBasic.scss"
import MapPin from "../MapPin/MapPin"

	export function MapBasic (props) {
		return (
			<div className={classes.mapBasic}>
				<GoogleMapReact
					bootstrapURLKeys={{key: "AIzaSyArsP0UeondXh5Y9Qy9DBPSCsQPu5izHoY"}}
					defaultCenter={{lat: 40.7446790, lng: -73.9485420}}
					defaultZoom={ 11 }>
					{props.children}
					{props.pins.map(({lat, lng, key, emphasis}) =>
						(<MapPin 
							pinId={ key }
							emphasis={ key === props.selected }
							lat={ lat }
							lng={ lng }
							interactionHandler={props.selectionCallback}/>))}
				</GoogleMapReact>
			</div>
		)
	}

export default MapBasic;
