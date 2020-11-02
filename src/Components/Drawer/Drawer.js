import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { CategoriesContext } from '../../context/categoriesContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    [theme.breakpoints.down('xs')]: {
      width: 150,
    },
  },
  basketPaper: {
    height: 'calc(100% - 68px)',
    top: 68,
    zIndex: 200,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function LeftDrawer() {
  const classes = useStyles();
  const context = useContext(CategoriesContext);
  const { isOpen, toggleLeftDrawer } = context.leftDrawer;

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleLeftDrawer(false)}
      onKeyDown={toggleLeftDrawer(false)}
    >
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
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          open={isOpen}
          onClose={toggleLeftDrawer(false)}
          classes={{ paper: classes.basketPaper }}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
