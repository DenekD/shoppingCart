import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    zIndex: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 250,
    margin: theme.spacing(1),
  },
  title: {
    '&:hover': {
      color: '#bbb',
    },
  },
  button: {
    textTransform: 'none',
    '&:hover': {
      color: '#cccccc',
    },
  },
}));

export default function CardCategory(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={'/categories/' + props.title}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {props.title}
            </Typography>
          </CardContent>

          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
        </Link>
      </CardActionArea>

      <CardActions>
        <NavLink to={'/categories/' + props.title}>
          <Button size="small" color="primary" className={classes.button}>
            See More
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
