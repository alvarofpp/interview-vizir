/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Dashboard, ViewList, Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#about"
          color="transparent"
          className={classes.navLink}
        >
          <Dashboard className={classes.icons} /> Sobre
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#plans"
          color="transparent"
          className={classes.navLink}
        >
          <ViewList className={classes.icons} /> Planos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#calc"
          color="transparent"
          className={classes.navLink}
        >
          <Apps className={classes.icons} /> Calcule
        </Button>
      </ListItem>
    </List>
  );
}
