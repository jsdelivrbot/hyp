import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  img: {
    height: 100,
    overflow: 'hidden',
    width: '100%',
  },
});

export class EventCarousel extends Component {

  constructor(props) {
    super(props);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleStepChange(newIndex) {
    const modIndex = newIndex % this.props.items.length;
    this.props.selectionCallback(null, modIndex);
  }

  render() {
    const maxSteps = this.props.items.length;

    return (
      <div className={styles.root}>
        <SwipeableViews
          axis={'x'}
          index={this.props.selected}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents>
          {this.props.items.map(step => (
            <img key={step.label} className={styles.img} src={step.imgPath} alt={step.label} />
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={ this.props.selected }
          className={ styles.mobileStepper }
          nextButton={
            <Button 
              size="small" 
              onClick={(e) => this.handleStepChange(this.props.selected + 1)}>
              Next
              {<KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button 
              size="small"  
              onClick={(e) => this.handleStepChange(this.props.selected - 1)}>
              {<KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EventCarousel);
