import React, { useContext } from 'react';
import { CategoriesContext } from '../../context/categoriesContext';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  Divider,
  Typography,
  Hidden,
} from '@material-ui/core';
import ProductCard from './ProductCard/ProductCard';
import AsideProductCategory from './AsideProductCategory/AsideProductCategory';

const useStyles = makeStyles((theme) => ({
  header: {
    marginLeft: 75,
    marginTop: 85,
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
    },
  },
  listContainer: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 115,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  list: {
    marginTop: theme.spacing(1),
    width: '90%',
  },
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
  aside: {
    paddingTop: 68,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 190,
    },
  },
}));

function ProductsCategory(props) {
  const context = useContext(CategoriesContext);
  const classes = useStyles();
  let { cat } = useParams();
  const products = context.categories.filter(
    (category) => category.name === cat
  );

  return (
    <div>
      <Grid container>
        <Grid item xs={2} className={classes.aside}>
          <Hidden xsDown>
            <AsideProductCategory />
          </Hidden>
        </Grid>
        <Grid item xs className={classes.listContainer}>
          <Typography className={classes.header}>
            Results for : {cat}
          </Typography>
          <List className={classes.list}>
            {products[0].products.map((p) => (
              <React.Fragment key={p.id}>
                <ListItem alignItems="flex-start" disableGutters>
                  <ProductCard {...p} />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductsCategory;
