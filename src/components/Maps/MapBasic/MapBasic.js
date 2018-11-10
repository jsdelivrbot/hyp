import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import classes from "./MapBasic.scss"
import MapPin from "../MapPin/MapPin"
import { maps } from "../../../config"

	export function MapBasic (props) {
		let centerLat = 0;
		let centerLng = 0;
		if (props.selected && props.pins && props.pins[props.selected]) {
			centerLat = props.pins[props.selected].lat;
			centerLng = props.pins[props.selected].lng
		} else if (props.pins && props.pins[0]) {
			centerLat = props.pins[0].lat;
			centerLng = props.pins[0].lng
		}
		return (
			<div className={classes.mapBasic}>
				<GoogleMapReact
					bootstrapURLKeys={{key: maps.apiKey}}
					defaultZoom={ 13 }
					center={{lat: centerLat, lng: centerLng}}>
					{props.children}
					{props.pins.map(({lat, lng, key, emphasis}, index) =>
						(<MapPin 
							pinId={ index }
							emphasis={ index === props.selected }
							lat={ lat }
							lng={ lng }
							interactionHandler={props.selectionCallback}/>))}
				</GoogleMapReact>
			</div>
		)
	}

export default MapBasic;
