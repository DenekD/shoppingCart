import React, { useContext } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/BasketStateProvider';
import HeaderDropDownManu from './HeaderDropDownMenu';
import { CategoriesContext } from '../../context/categoriesContext';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: ' #232f3e',
    paddingTop: 2,
    paddingBottom: 2,
  },
  menuButton: {
    flexBasis: 'auto',
  },

  img: {
    flexBasis: 'auto',
    textAlign: 'center',
  },

  inputInput: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: `calc(1em + ${theme.spacing(20)}px)`,
    backgroundColor: '#ffffff',
    color: '#232f3e',
    borderRadius: 5,
    fontSize: 20,
    [theme.breakpoints.down('lg')]: {
      marginTop: 15,
      marginBottom: 15,
    },
  },

  searchIcon: {
    right: 0,
    top: 15,
    bottom: 15,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    color: '#232f3e',
    zIndex: 10,
  },
  dropDown: {
    left: 0,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#232f3e',
    zIndex: 10,
  },
  search: {
    position: 'relative',
  },
  navbarButtons: {
    textAlign: 'center',
    '&:hover': {
      cursor: 'pointer',
      color: '#ccc',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const DrawerContext = useContext(CategoriesContext);
  const { toggleLeftDrawer } = DrawerContext.leftDrawer;

  const [state, dispach] = useStateValue();

  const itemsNumber = state.basket.reduce((res, current) => {
    return res + current.quantity;
  }, 0);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={1} className={classes.menuButton}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleLeftDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>

            <Grid item xs md={2} className={classes.img}>
              <Link to="/">
                <img alt="" className="" src={logo} />
              </Link>
            </Grid>
            <Grid item xs={12} md>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Paper
                    style={{
                      backgroundColor: '#febd69',
                      height: '100%',
                      width: 60,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <SearchIcon style={{ fontSize: 29 }} />
                  </Paper>
                </div>
                <div className={classes.dropDown}>
                  <HeaderDropDownManu className={classes.dropDown} />
                </div>
                <InputBase
                  fullWidth
                  placeholder="Search…"
                  className={classes.inputInput}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={3} container>
              <Grid
                item
                xs
                container
                direction="column"
                justify="center"
                className={classes.navbarButtons}
              >
                <Grid item>
                  <Typography style={{ fontSize: 14 }}>Hello Guest</Typography>
                </Grid>
                <Grid item>
                  <Link to="/signin">
                    <Typography style={{ fontWeight: 'bold' }}>
                      Sign In
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid
                item
                xs
                container
                direction="column"
                justify="center"
                className={classes.navbarButtons}
              >
                <Grid item>
                  <Typography style={{ fontSize: 14 }}>Returns</Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontWeight: 'bold' }}>
                    &#38; Orders
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs container alignItems="center" justify="center">
                <Grid item>
                  <Link to="/checkout">
                    <IconButton aria-label="add to shopping cart">
                      <Badge badgeContent={itemsNumber} color="secondary">
                        <AddShoppingCartIcon
                          fontSize="large"
                          style={{ color: '#FFFFFF' }}
                        />
                      </Badge>
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
