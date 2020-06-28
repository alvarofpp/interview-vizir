const urlBase = 'http://localhost:3333/';
const consomeApi = (uri = '', method = 'GET', body) => {
  return fetch(`${urlBase}${uri}`, {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body,
  }).then((res) => ApiService.handleErrors(res))
    .then((res) => res.json());
};

const ApiService = {
  planos: {
    index: (group) => consomeApi(`planos?group=${group}`, 'GET')
  },
  tarifas: {
    getDdds: (field, where={}) => consomeApi(`tarifas/ddds?field=${field}&where=${JSON.stringify(where)}`, 'GET')
  },
  simulacao: (inputs) => consomeApi('simulacao', 'POST', JSON.stringify(inputs)),

  handleErrors: (res) => {
    if (!res.ok) {
      throw Error(res.responseText);
    }

    return res;
  }
};

export default ApiService;