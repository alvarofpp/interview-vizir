import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { PermPhoneMsg, LocalAtm } from "@material-ui/icons";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id='about'>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Sobre</h2>
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc purus,
            laoreet lacinia sapien quis, mattis laoreet sem. Cras eu ornare turpis.
            In feugiat semper quam, et euismod tortor dapibus vitae.
            Fusce vestibulum nulla eu nisl egestas, sit amet congue nisl lacinia.
            Sed quis condimentum tortor. Nam mattis mollis vulputate. Vivamus dolor eros,
            varius id felis vitae, vehicula suscipit erat. Etiam sagittis tortor nisi,
            ut fermentum lectus convallis vel.
            Mauris lorem erat, pharetra nec euismod in, rhoncus eu mauris.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="FALE MAIS"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={PermPhoneMsg}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="ECONOMIZE"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={LocalAtm}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
