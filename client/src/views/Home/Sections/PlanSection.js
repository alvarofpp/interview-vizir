import React, {useState} from "react";
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
import ApiService from "../../../utils/ApiService";
import PopUp from "../../../utils/PopUp";

const useStyles = makeStyles(styles);

export default function PlanSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [planos, setPlanos] = useState([]);
  if (!planos.length) {
    ApiService.planos
      .index('FaleMais')
      .then((res) => {
        setPlanos(res);
      }).catch((err) => PopUp.exibeMensagem('error', 'Erro na comunicação com a API.'));
  }

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
          {planos.map((plano) => (
            <InfoArea key={`plano-`+plano.id}
                      title={plano.nome}
                      description={`Com o ${plano.nome} você pode conversar até ${plano.minutos} minutos de graça.`}
                      icon={PermPhoneMsg}
                      iconColor="info"
            />
          ))}
        </GridItem>
      </GridContainer>
    </div>
  );
}
