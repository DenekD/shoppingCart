import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { useStateValue } from '../../context/BasketStateProvider';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  list: {
    width: 350,
    zIndex: 10,
  },
  basketPaper: {
    height: 'calc(100% - 68px)',
    top: 68,
    zIndex: 200,
  },
  productCard: {
    display: 'flex',
    flex: 1,
    height: 100,
    border: 'none',
  },
  cover: {
    width: 100,
    margin: 2,
    marginLeft: 2,
  },
});

export default function BasketDrawer() {
  const classes = useStyles();

  const [state, dispach] = useStateValue();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    dispach({
      type: 'CLOSE_BASKET',
      isOpen: open,
    });
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {state.basket.map((product, index) => (
          <React.Fragment key={product.id * index}>
            <ListItem button>
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
                </div>
              </Card>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          classes={{ paper: classes.basketPaper }}
          open={state.isOpenDrawer}
          anchor="right"
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
