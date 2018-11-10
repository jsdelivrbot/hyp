import React from 'react'
import { Link } from 'react-router'
import { paths } from 'constants'
import classes from './HomePage.scss'
import { ListDrivenMap } from '../../../../components/Maps/ListDrivenMap/ListDrivenMap'
import { EventCard } from '../../../../components/EventCard/EventCard'

const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper'
const reactRouterUrl = 'https://github.com/ReactTraining/react-router'

export default function Home () {

	let pins = [];
	pins.push({
		lat: 40.715623, 
		lng: -73.992116,
		label: 'Cool Party.',
	    imgPath: 'https://picsum.photos/100?noCache=1'
	});
	pins.push({
		lat: 40.727072,
		lng: -74.047710,
		label: 'Eighties Night.',
    	imgPath: 'https://picsum.photos/100?noCache=2'
	});
	pins.push({
		lat: 40.751524,
		lng: -73.982164,
		label: 'Chill Tunes',
    	imgPath: 'https://picsum.photos/100?noCache=3'
	});
	pins.push({
		lat: 40.754125,
		lng: -74.041190,
		label: 'Electric Psychadelic dico func town soul train mayhem with a long title',
    	imgPath: 'https://picsum.photos/100?noCache=4'
	});
	pins.push({
		lat: 40.712760,
		lng: -74.003098,
		label: 'Chill Jazz Night',
    	imgPath: 'https://picsum.photos/100?noCache=5'
	});
	pins.push({
		lat: 40.713281,
		lng: -73.965005,
		label: 'Battle of the Bands',
    	imgPath: 'https://picsum.photos/100?noCache=6'
	});

	return (<div className={classes.testSam}>
		<EventCard classes={{paper:"paper"}} theme={{dir:"ltr"}}></EventCard> 

		
	</div>);
}
