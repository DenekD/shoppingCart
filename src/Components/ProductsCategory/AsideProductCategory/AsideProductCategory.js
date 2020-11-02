import React, { useContext } from 'react';
import { CategoriesContext } from '../../../context/categoriesContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
  listItemSecondary: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemPrimary: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function AsideProductCategory() {
  const context = useContext(CategoriesContext);
  const classes = useStyles();

  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/">
          <ListItem button className={classes.listItemPrimary}>
            <ListItemText primary="Categories" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="nav" aria-label="categories">
        {context.categories.map((cat) => (
          <Link to={'/categories/' + cat.name} key={cat.name}>
            <ListItem button className={classes.listItemSecondary}>
              <ListItemText secondary={cat.name} />
            </ListItem>
          </Link>
        ))}
        <Divider />
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </>
  );
}

export default AsideProductCategory;
