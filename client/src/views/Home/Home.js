import React from "react";
import classNames from "classnames";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// template components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

// style
import styles from "../../assets/jss/material-kit-react/views/homePage.js";

// sections for this page
import AboutSection from "./Sections/AboutSection.js";
import CalcSection from "./Sections/CalcSection.js";
import PlanSection from "./Sections/PlanSection";


const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const {...rest} = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Fale Mais!"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'info'
        }}
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/person-talking-on-cellphone.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Fale Mais!</h1>
              <h4>
                Um plano pensado e feito para você!
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <AboutSection/>
          <PlanSection/>
          <CalcSection/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
