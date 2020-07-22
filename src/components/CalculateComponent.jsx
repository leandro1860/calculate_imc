import React from 'react';
import {Button, Form} from 'react-bootstrap';

class CalculateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {height: '', weight: ''};

    this.handleHeight = this.handleHeight.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.clickIMC = this.clickIMC.bind(this);
  }

  handleHeight(event) {
    this.setState({height: event.target.value});
  }

  handleWeight(event) {
    this.setState({weight: event.target.value});
  }

  clickIMC() {
    const {height, weight} = this.state;
    if (
      height.indexOf('.') !== -1 ||
      weight.indexOf('.') !== -1 ||
      height.indexOf('-') !== -1 ||
      weight.indexOf('-') !== -1
    ) {
      /* eslint-disable no-alert */
      alert('Por favor, ingrese solo números');
    } else if (height !== '' && weight !== '') {
      if (height >= 0 && weight >= 0) {
        const result = ((weight / (height * height)) * 10000).toFixed(1);
        const messageResult = `Para un peso de
        ${weight}kg y una altura de
        ${height}cm, tu IMC es de:
        ${result}`;
        this.setState({messageResult});
      } else {
        alert('Por favor, ingrese los datos correctamente');
      }
    }
  }

  render() {
    const {messageResult} = this.state;
    return (
      <div>
        <div className='form'>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Peso en Kg</Form.Label>
              <Form.Control
                type='number'
                id='weight'
                placeholder='Ingresá tu peso en kilogramos'
                onChange={this.handleWeight}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Altura en cm</Form.Label>
              <Form.Control
                type='number'
                placeholder='Ingesá tu altura en centímetros'
                onChange={this.handleHeight}
              />
            </Form.Group>
          </Form>
          <Button variant='primary' onClick={this.clickIMC}>
            Calcular
          </Button>
        </div>
        <div className='message-result'>{messageResult}</div>
      </div>
    );
  }
}

export default CalculateComponent;
