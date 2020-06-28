import React, {useState, useEffect} from "react";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";

// template components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";

// styles
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/calcStyle.js";

// others
import ApiService from "../../../utils/ApiService";
import Toast from "../../../components/Toast/Toast";


const useStyles = makeStyles(styles);

export default function CalcSection() {
  const classes = useStyles();

  // Inputs
  const [inputs, setInputs] = useState({
    codigo_origem: '',
    codigo_destino: '',
    plano_id: '',
    minutos: 0,
  });

  useEffect(() => {
    if (inputs.codigo_origem !== '') {
      ApiService.tarifas
        .getDdds('ddd_destino', {field: 'ddd_origem', value: inputs.codigo_origem})
        .then((res) => {
          setCidadeDestinoSelect(res);
          setInputs({
            ...inputs,
            codigo_destino: '',
          });
        }).catch((err) => console.log('error', 'Erro na comunicação com a API.'));
    }
  }, [inputs.codigo_origem]);

  const handleChangeOptions = (event) => {
    const name = event.target.name;
    setInputs({
      ...inputs,
      [name]: event.target.value,
    });
  };

  // Seleções
  const [cidadeOrigemSelect, setCidadeOrigemSelect] = useState([]);
  const [cidadeDestinoSelect, setCidadeDestinoSelect] = useState([]);
  const [planoSelect, setPlanoSelect] = useState([]);

  if (!cidadeOrigemSelect.length) {
    ApiService.tarifas
      .getDdds('ddd_origem')
      .then((res) => {
        setCidadeOrigemSelect(res);
      }).catch((err) => console.log('error', 'Erro na comunicação com a API.'));
  }

  if (!planoSelect.length) {
    ApiService.planos
      .index('FaleMais')
      .then((res) => {
        setPlanoSelect(res);
      }).catch((err) => console.log('error', 'Erro na comunicação com a API.'));
  }

  // Simulação
  const [simulacao, setSimulacao] = useState({
    sem_plano: "0.00",
    com_plano: "0.00",
  });

  const onSubmit = (event) => {
    if (inputs.codigo_origem === ''
      || inputs.codigo_destino === ''
      || inputs.minutos < 1
      || inputs.plano_id === '') {
      setToast({
        open: true,
      })
      return null;
    }

    ApiService.simulacao(inputs)
      .then((res) => {
        setSimulacao(res);
      }).catch((err) => console.log('error', 'Erro na comunicação com a API.'));
  };

  const [toast, setToast] = useState({
    open: false,
  });

  return (
    <div className={classes.section} id='calc'>
      <Toast open={toast.open}
             handleClose={() =>
               setToast({
                 open: false,
               })
             } severity='error'>
        Por favor, preencha de forma correta todo o formulário!
      </Toast>
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
                <GridItem xs={12} sm={12} md={12} className={classes.formPaddingTopDefault}>
                  <FormControl className={classes.formControlFullWidth}>
                    <InputLabel id="codigo_origem_label">
                      Código da cidade de origem
                    </InputLabel>
                    <Select
                      labelId="codigo_origem_label"
                      id="codigo_origem"
                      name="codigo_origem"
                      value={inputs.codigo_origem}
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
                <GridItem xs={12} sm={12} md={12} className={classes.formPaddingTopDefault}>
                  <FormControl className={classes.formControlFullWidth}>
                    <InputLabel id="codigo_destino_label">
                      Código da cidade de destino
                    </InputLabel>
                    <Select
                      labelId="codigo_destino_label"
                      id="codigo_destino"
                      name="codigo_destino"
                      value={inputs.codigo_destino}
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
                <GridItem xs={12} sm={12} md={12} className={classes.formPaddingTopDefault}>
                  <TextField
                    label="Minutos"
                    id="minutos"
                    name="minutos"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      min: 0,
                      step: 1,
                    }}
                    style={{
                      width: '100%'
                    }}
                    onChange={handleChangeOptions}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} className={classes.formPaddingTopDefault}>
                  <FormControl className={classes.formControlFullWidth}>
                    <InputLabel id="plano_label">
                      Plano FaleMais
                    </InputLabel>
                    <Select
                      labelId="plano_label"
                      id="plano_id"
                      name="plano_id"
                      value={inputs.plano_id}
                      onChange={handleChangeOptions}
                    >
                      {planoSelect.map((plano) => (
                        <MenuItem key={`plano_id-${plano.id}`}
                                  value={plano.id}>
                          {plano.nome}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} className={classes.formPaddingTopDefault}>
                  <Button onClick={onSubmit}
                          color="primary">
                    Calcular
                  </Button>
                </GridItem>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <div style={{margin: '25px 0'}}>
                  <h2 className={classes.valorPlanos}>R$ {simulacao.com_plano}</h2>
                  <h4 style={{marginTop: '0px'}} className={classes.description}>
                    Com FaleMais.
                  </h4>
                </div>
                <hr/>
                <div style={{margin: '25px 0'}}>
                  <h2 className={classes.valorPlanos}>R$ {simulacao.sem_plano}</h2>
                  <h4 style={{marginTop: '0px'}} className={classes.description}>
                    Sem FaleMais.
                  </h4>
                </div>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
