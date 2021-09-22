import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem } from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const SwipeableTemporaryDrawer = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Button onClick={() => {history.push("/rsa")}} color="inherit">RSA</Button>
            <Button color="inherit">Elliptic Curves</Button>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div
            className={classes.list}
          >
            <List>
              <ListItem button key="rsa">
                RSA
              </ListItem>
              <ListItem button key="rsa">
                Elliptic Curves
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default withRouter(SwipeableTemporaryDrawer);