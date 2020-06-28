// API's data
const urlBase = 'http://localhost:3333/';
const consumesApi = (uri = '', method = 'GET', body) => {
  return fetch(`${urlBase}${uri}`, {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body,
  }).then((res) => ApiService.handleErrors(res))
    .then((res) => res.json());
};

// API's routes
const ApiService = {
  planos: {
    index: (group) => consumesApi(`planos?group=${group}`, 'GET')
  },
  tarifas: {
    getDdds: (field, where = {}) => consumesApi(`tarifas/ddds?field=${field}&where=${JSON.stringify(where)}`, 'GET')
  },
  simulacao: (inputs) => consumesApi('simulacao', 'POST', JSON.stringify(inputs)),

  handleErrors: (res) => {
    if (!res.ok) {
      throw Error(res.responseText);
    }

    return res;
  }
};

export default ApiService;