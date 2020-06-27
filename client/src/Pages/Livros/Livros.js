import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import ApiService from "../../utils/ApiService";
import PopUp from "../../utils/PopUp";


class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [],
        };
    }

    componentDidMount() {
        ApiService.listaLivros()
            .then((res) => {
                if (res.message === 'success') {
                    this.setState({livros: [...this.state.livros, ...res.data]});
                }
            }).catch((err) => PopUp.exibeMensagem('error', 'Erro na comunicação com a API.'));
    }

    render() {
        const campos = [{
            titulo: 'Livros',
            dado: 'livro'
        }]

        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Livros</h1>
                    <Tabela
                        dados={this.state.livros}
                        campos={campos}/>
                </div>
            </Fragment>
        );
    }
}

export default Livros;