import React from 'react';
import { Button, Form } from 'react-bootstrap';

class CalculateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: '', weight: '' };

    this.handleHeight = this.handleHeight.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.clickIMC = this.clickIMC.bind(this);
  }

  handleHeight(event) {
    this.setState({ height: event.target.value });
  }

  handleWeight(event) {
    this.setState({ weight: event.target.value });
  }

  clickIMC() {
    const { height, weight } = this.state;
    if (height.indexOf('.') !== -1 || weight.indexOf('.') !== -1 || height.indexOf('-') !== -1 || weight.indexOf('-') !== -1
    ) {
      /* eslint-disable no-alert */
      alert('Ingrese solo números');
    } else if (height !== '' && weight !== '') {
      if (height >= 0 && weight >= 0) {
        const result = ((weight / (height * height)) * 10000).toFixed(1);
        const resultMessage = `Para un peso de
        ${weight}kg y una altura de
        ${height}cm, tu IMC es de:
        ${result}`;
        this.setState({ resultMessage });
      } else {
        alert('Por favor, Ingrese los datos correctamente');
      }
    }
  }

  render() {
    const { resultMessage } = this.state;
    return (
      <div>
        <div className="form">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Peso en Kg</Form.Label>
              <Form.Control
                type="number"
                id="weight"
                min="0"
                max="0"
                placeholder="Ingresá tu peso en kilogramos"
                onChange={this.handleWeight}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Altura en cm</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingesá tu altura en centímetros"
                onChange={this.handleHeight}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="buttonCalculate">
          <Button variant="primary" onClick={this.clickIMC}>
            Calcular
          </Button>
        </div>
        <div className="result">{resultMessage}</div>
      </div>
    );
  }
}

export default CalculateComponent;