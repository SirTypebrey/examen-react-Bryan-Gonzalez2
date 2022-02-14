import React from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

class ListaDesplegable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listaMarcas: [], marcaSeleccionada: '' };

    this.inputMarcaSeleccionada = React.createRef();
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://api-mobilespecs.azharimm.site/v2/brands'
    );
    this.setState({ listaMarcas: res.data.data });
  }

  seleccionarMarca() {
    this.setState({
      marcaSeleccionada: this.inputMarcaSeleccionada.current.innerHTML,
    });
  }

  render() {
    return (
      <div id="ej2">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Seleccionar marca
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {this.state.listaMarcas.map((item) => {
              return (
                <Dropdown.Item
                  ref={this.inputMarcaSeleccionada}
                  onClick={this.seleccionarMarca.bind(this)}
                >
                  {item.brand_name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default ListaDesplegable;
