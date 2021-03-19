import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <List component="nav" >
        <ListItem component="div" >
         
          <ListItemText inset  primary="หน้าหลัก" />
          <ListItemText inset primary="โครงสร้าง" />
          <ListItemText inset primary="วิสัยทัศน์-พันธกิจ" />
          <ListItemText inset primary="ผู้บริหาร" />
          <ListItemText inset primary="download" />
          <ListItemText inset primary="km" />
        </ListItem>
      </List>
      <Divider />
     


        </Toolbar>
      </AppBar>
    </div>
  );
}
