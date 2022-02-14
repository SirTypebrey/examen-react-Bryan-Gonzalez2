import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import { ListaDesplegable } from './ListaDesplegable';

class BotonBusqueda extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ListaModelo: [] };
    this.inputMarcaSeleccionada = React.createRef();
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2'
    );
    this.setState({ listaModelo: res.data.data.phones });
  }

  buscarPorMarca() {
    console.log(this.a);
  }

  render() {
    return (
      <div id="ej2">
        <Button
          variant="outline-success"
          onClick={this.buscarPorMarca.bind(this)}
        >
          Search
        </Button>
      </div>
    );
  }
}

export default BotonBusqueda;
