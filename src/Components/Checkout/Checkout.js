import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { useStateValue } from '../../context/BasketStateProvider';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  div: {
    paddingTop: 100,

    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 200,
      width: '95%',
    },
  },

  productCard: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    border: 'none',
  },
  cover: {
    width: 180,
    height: 'auto',
    margin: theme.spacing(1),
  },
  details: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    alignSelf: 'center',
  },
  btn: {
    alignSelf: 'center',
    marginRight: theme.spacing(1),
  },
  subtotal: {
    border: 'none',
    backgroundColor: '#FEBD69',
    textAlign: 'center',
    marginTop: 40,
    paddingTop: 20,
    paddingBottom: 20,
    color: '#232F3E',
  },
}));

function Checkout() {
  const [state, dispach] = useStateValue();
  const classes = useStyles();

  const itemsNumber = state.basket.reduce((res, current) => {
    return res + current.quantity;
  }, 0);
  const subtotal = state.basket.reduce((res, current) => {
    return res + current.price * current.quantity;
  }, 0);

  const deleteProduct = (id) => {
    dispach({
      type: 'DELETE_ITEM',
      removeID: id,
    });
  };

  const handleQuantityChange = (event, id) => {
    dispach({
      type: 'CHANGE_ITEM_QTY',
      id: id,
      value: event.target.value,
    });
  };

  return (
    <Grid container className={classes.div}>
      <Grid item xs={11}>
        <List>
          {state.basket.map((product) => (
            <React.Fragment key={product.id}>
              <ListItem>
                <Card variant="outlined" className={classes.productCard}>
                  <CardMedia
                    className={classes.cover}
                    image={product.image}
                    title="Live from space album cover"
                  ></CardMedia>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h6" variant="h6">
                        {product.name}
                      </Typography>
                      <Rating
                        name="half-rating-read"
                        value={product.rating}
                        precision={0.5}
                        readOnly
                      />
                      <Typography variant="body1" color="textSecondary">
                        <Typography variant="caption" color="textSecondary">
                          $
                        </Typography>
                        {product.price}
                      </Typography>
                    </CardContent>
                    <FormControl className={classes.select}>
                      <InputLabel>Quantity</InputLabel>
                      <Select
                        labelId="basket-quantity-lable"
                        id="basket-quantity"
                        value={product.quantity}
                        onChange={(event) =>
                          handleQuantityChange(event, product.id)
                        }
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                      </Select>
                    </FormControl>

                    <IconButton
                      color="secondary"
                      className={classes.btn}
                      onClick={() => deleteProduct(product.id)}
                    >
                      <DeleteOutlineIcon fontSize="large" />
                    </IconButton>
                  </div>
                </Card>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Grid>
      <Grid item xs={10} md={4} lg={3}>
        <Card className={classes.subtotal}>
          <Typography variant="h6">
            Subtotal ({itemsNumber} items) : ${subtotal}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Checkout;
