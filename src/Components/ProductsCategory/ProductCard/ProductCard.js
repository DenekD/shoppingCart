import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from '../../../context/BasketStateProvider';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flex: 1,
    height: 200,
    border: 'none',
  },
  cover: {
    width: 300,
    margin: 5,
    marginLeft: 25,
  },
  btn: {
    width: 150,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: 0,
      fontSize: 10,
    },
  },
}));

function ProductCard(props) {
  const [state, dispach] = useStateValue();

  console.log(state.basket);
  const classes = useStyles();

  const addToBasket = () => {
    dispach({
      type: 'ADD_TO_BASKET',
      item: {
        ...props,
        quantity: 1,
      },
      isOpen: true,
    });
  };

  return (
    <Card className={classes.card} variant="outlined" gu>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Rating
            name="half-rating-read"
            value={props.rating}
            precision={0.5}
            readOnly
          />
          <Typography variant="body1" color="textSecondary">
            <Typography variant="caption" color="textSecondary">
              $
            </Typography>
            {props.price}
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.btn}
            startIcon={<AttachMoneyIcon />}
          >
            Buy Now
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.btn}
            startIcon={<ShoppingCartIcon />}
            onClick={addToBasket}
          >
            Add to Cart
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}

export default ProductCard;
