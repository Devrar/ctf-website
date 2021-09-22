import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  main: {
    width: '70%',
    margin: "auto"
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Typography variant="h3" align="center" gutterBottom>
          What is this site?
        </Typography>
        <p>
          The main goal of this site is to collect all the attacks I find in crypto challenges and also give a mathematical explanation of the attack. I will try to divide the attacks into different topics and make it searchable.
        </p>
      </div>
    </div>
  )
}

export default Home;