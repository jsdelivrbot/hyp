import React, { Component } from 'react'
import classes from "./MapPin.scss"

export default function MapPin (props) {
	return (<div className={classes.mapPinContainer}>
		<div className={classes.mapPinBody}></div>
		<div className={classes.mapPinPoint}></div>
	</div>)
}
