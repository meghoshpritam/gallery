import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Gallery from './pages/Gallery';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default () => {
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(location.pathname);
  }, [location]);
  return (
    <div className="App">
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Tuhin Edits
          </Typography>
        </Toolbar>
      </AppBar>
      <Gallery />
      {/* Footer */}
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>

        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {'Copyright © '}
          <Link color="inherit" href="/">
            All Rights Reserved
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {' '}
          Design and Developed by{' '}
          <Link color="inherit" href="http://www.meghoshpritam.netlify.app">
            meghoshpritam
          </Link>
        </Typography>
      </footer>
      {/* End footer */}
    </div>
  );
};
