const urlBase = 'http://localhost:3333/';
const consomeApi = (parametro = '/', method = 'GET', body) => {
  return fetch(`${urlBase}${parametro}`, {
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
  listaAutores: () => consomeApi('/autor'),
  criaAutor: (autor) => consomeApi('/autor', 'POST', autor),
  listaNomes: () => consomeApi('/autor/nome'),
  listaLivros: () => consomeApi('/autor/livro'),
  removeAutor: (id) => consomeApi(`/autor/${id}`, 'DELETE'),

  handleErrors: (res) => {
    if (!res.ok) {
      throw Error(res.responseText);
    }

    return res;
  }
};

export default ApiService;