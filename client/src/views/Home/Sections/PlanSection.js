import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import {PermPhoneMsg} from "@material-ui/icons";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/planStyle.js";
import classNames from "classnames";

import phoneImg from "../../../assets/img/phone-cut.png";

const useStyles = makeStyles(styles);

export default function PlanSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section} id='plans'>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Planos</h2>
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc purus,
            laoreet lacinia sapien quis, mattis laoreet sem. Cras eu ornare turpis.
            In feugiat semper quam, et euismod tortor dapibus vitae.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={5} md={5} className={classes.image_phone}>
          <img src={phoneImg} alt="..." className={imageClasses} width='40%'/>
        </GridItem>
        <GridItem xs={12} sm={5} md={5}>
          <InfoArea style={{textAlign: 'left'}}
            title="FaleMais 30"
            description="Com o FaleMais 30 você pode conversar por até 30 minutos de graça."
            icon={PermPhoneMsg}
            iconColor="info"
          />
          <InfoArea className={classes.custom_h4}
            title="FaleMais 60"
            description="Com o FaleMais 60 você pode conversar por até 60 minutos de graça."
            icon={PermPhoneMsg}
            iconColor="info"
          />
          <InfoArea
            title="FaleMais 90"
            description="Com o FaleMais 90 você pode conversar por até 90 minutos de graça."
            icon={PermPhoneMsg}
            iconColor="info"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
