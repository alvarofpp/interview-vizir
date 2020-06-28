import React, {useState, useEffect} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/calcStyle.js";
import ApiService from "../../../utils/ApiService";
import PopUp from "../../../utils/PopUp";
import InfoArea from "../../../components/InfoArea/InfoArea";
import {PermPhoneMsg} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function CalcSection() {
  const classes = useStyles();
  const [minutosInput, setMinutosInput] = useState(null);
  const [options, setOptions] = useState({
    codigo_origem: '',
    codigo_destino: '',
    plano_id: '',
  });

  useEffect(() => {
    if (options.codigo_origem !== '') {
      updateCidadeDestinoSelect();
    }
  }, [options.codigo_origem]);

  const handleChangeOptions = (event) => {
    const name = event.target.name;
    setOptions({
      ...options,
      [name]: event.target.value,
    });
  };
  const handleChangeMinutos = (event) => {
    setMinutosInput(event.target.value);
  };

  const [cidadeOrigemSelect, setCidadeOrigemSelect] = useState([]);
  const [cidadeDestinoSelect, setCidadeDestinoSelect] = useState([]);
  const [planoSelect, setPlanoSelect] = useState([]);

  if (!cidadeOrigemSelect.length) {
    ApiService.tarifas
      .getDdds('ddd_origem')
      .then((res) => {
        setCidadeOrigemSelect(res);
      }).catch((err) => PopUp.exibeMensagem('error', 'Erro na comunicação com a API.'));
  }

  const updateCidadeDestinoSelect = () => {
    ApiService.tarifas
      .getDdds('ddd_destino', {field: 'ddd_origem', value: options.codigo_origem})
      .then((res) => {
        setCidadeDestinoSelect(res);
      }).catch((err) => PopUp.exibeMensagem('error', 'Erro na comunicação com a API.'));
  }

  if (!planoSelect.length) {
    ApiService.planos
      .index('FaleMais')
      .then((res) => {
        //setPlanoSelect(res);
      }).catch((err) => PopUp.exibeMensagem('error', 'Erro na comunicação com a API.'));
  }

  return (
    <div className={classes.section} id='calc'>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Calcule</h2>
          <h4 className={classes.description}>
            Para saber o quanto você irá pagar:
            informe o código (DDD) das cidades de origem e destino,
            a quantidade de minutos falado e qual plano do FaleMais você estará usando.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControlFullWidth}>
                  <InputLabel id="codigo_origem_label">
                    Código da cidade de origem
                  </InputLabel>
                  <Select
                    labelId="codigo_origem_label"
                    id="codigo_origem"
                    name="codigo_origem"
                    value={options.codigo_origem}
                    onChange={handleChangeOptions}
                  >
                    {cidadeOrigemSelect.map((cidadeOrigem) => (
                      <MenuItem key={`cidade_origem-${cidadeOrigem.ddd_origem}`}
                                value={cidadeOrigem.ddd_origem}>
                        {cidadeOrigem.ddd_origem}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControlFullWidth}>
                  <InputLabel id="codigo_destino_label">
                    Código da cidade de destino
                  </InputLabel>
                  <Select
                    labelId="codigo_destino_label"
                    id="codigo_destino"
                    name="codigo_destino"
                    value={options.codigo_destino}
                    onChange={handleChangeOptions}
                  >
                    {cidadeDestinoSelect.map((cidadeDestino) => (
                      <MenuItem key={`cidade_destino-${cidadeDestino.ddd_destino}`}
                                value={cidadeDestino.ddd_destino}>
                        {cidadeDestino.ddd_destino}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Calcular</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
