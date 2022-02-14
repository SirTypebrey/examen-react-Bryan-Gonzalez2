import React from 'react';
import { Table, Card } from 'react-bootstrap';
import axios from 'axios';

import ListaDesplegable from './ListaDesplegable';
import BotonBusqueda from '../data/BotonBusqueda';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaAPI: [],
      imagenPulsado: '',
      MarcaPulsado: '',
      SistemaPulsado: '',
      AlmacenamientoPulsado: '',
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2'
    );
    this.setState({ listaAPI: res.data.data.phones });
  }

  changeStateClicked(item) {
    this.cambiarDetalles(item);
    this.setState({
      imagenPulsado: item.image,
      MarcaPulsado: item.nombre,
      SistemaPulsado: item.simbolo,
      AlmacenamientoPulsado: item.precio,
    });
  }

  render() {
    return (
      <div id="ej2">
        <ListaDesplegable />
        <BotonBusqueda />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listaAPI.map((item) => {
              return (
                <tr onClick={() => this.changeStateClicked(item)}>
                  <td>{item.phone_name}</td>
                  <td>{item.slug}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.imagenPulsado} />
          <Card.Body>
            <Card.Title>
              {this.state.nombrePulsado} {this.state.simboloPulsado}
            </Card.Title>
            <Card.Text>{this.state.precioPulsado}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Formulario;
