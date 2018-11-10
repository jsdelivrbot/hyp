import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => ({
  card: {
    display: 'flex',
    backgroundColor: "green"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

export function EventCard(props) {

  return (
    <Card className={styles.card}>
      <div className={styles.details}>
        <CardContent className={styles.content}>
          <Typography variant="headline">Live From Space</Typography>
          <Typography variant="subheading" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={styles.controls}>
          <IconButton aria-label="Previous">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="Play/pause">
            <PlayArrowIcon className={styles.playIcon} />
          </IconButton>
          <IconButton aria-label="Next">
            <SkipNextIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={styles.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}

export default withStyles(styles, { withTheme: true })(EventCard);
