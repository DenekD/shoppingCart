import React, { useContext } from 'react';
import CardCategory from './CardCategory/CardCategory';
import { CategoriesContext } from '../../../context/categoriesContext';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cards: {},
  productsContainer: {
    position: 'absolute',
    width: '90vw',
    height: '100%',
    top: '50%',
  },
  card: {
    textAlign: 'center',
  },
}));

const MainCategoryCards = (props) => {
  const classes = useStyles();
  const categoryContext = useContext(CategoriesContext);

  // console.log(categoryContext);
  return (
    <Grid container justify="center">
      <div className={classes.productsContainer}>
        <Grid container className={classes.root}>
          <Grid
            container
            spacing={3}
            justify="center"
            className={classes.cards}
          >
            {categoryContext.categories.map((cat) => (
              <Grid
                item
                xs={10}
                sm={6}
                md={4}
                lg={3}
                key={cat.name}
                className={classes.card}
              >
                <CardCategory image={cat.image} title={cat.name} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default MainCategoryCards;
