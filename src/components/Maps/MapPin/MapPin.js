import React, { Component } from 'react'
import classes from "./MapPin.scss"
import classNames from 'classnames/bind';

let cx = classNames.bind(classes);
export default function MapPin (props) {

	let mapPinBody = cx({
	  'emphasis': props.emphasis,
      'mapPinBody': true
      
    });

    let mapPinPoint = cx({
      'emphasis': props.emphasis,
      'mapPinPoint': true
    });

	return (<div className={ classes.mapPinContainer }>
		<div className={ mapPinBody }
			onClick={ (e) => props.interactionHandler(e, props.pinId) }></div>
		<div className={ mapPinPoint }
			onClick={ (e) => props.interactionHandler(e, props.pinId) }></div>
	</div>)
}
