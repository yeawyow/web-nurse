import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Activity from '../fragments/Activity';
import News from '../fragments/News';

const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <h1>HOME</h1>
            <div>
      <Grid container>
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={12} sm={8}>
        <Activity/>
        <News/>
        </Grid>
        <Grid item xs={12} sm={4}>
         right
        </Grid>
     
      </Grid>
    </div>
        </div>
    )
}
